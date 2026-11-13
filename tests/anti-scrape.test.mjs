import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { build } from "esbuild";

const load = async (entry) => {
  const compiled = await build({ entryPoints: [entry], bundle: true, write: false, format: "esm", platform: "node" });
  return import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);
};
const policy = await load("app/crawler-policy.ts");
const { refusedAgent, refusedAgentResponse, pageReadKey, pageReadLimitResponse } = await load("worker/anti-scrape.ts");

const UA = {
  chrome: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  safari: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
  googlebot: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  bingbot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36",
  applebot: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)",
  gptbot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)",
  chatgptUser: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot",
  claudebot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)",
  perplexity: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)",
  bytespider: "Mozilla/5.0 (Linux; Android 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; Bytespider; spider-feedback@bytedance.com)",
  ahrefs: "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)",
  facebookPreview: "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
  whatsapp: "WhatsApp/2.23.20.0 A",
  oaiAds: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; OAI-AdsBot/1.0; +https://openai.com/adsbot)",
  python: "python-requests/2.32.3",
  curl: "curl/8.5.0",
  scrapy: "Scrapy/2.11.2 (+https://scrapy.org)",
  node: "node",
};

const get = (path, ua, extra = {}) => new Request(`https://spanishcue.com${path}`, { headers: { ...(ua ? { "user-agent": ua } : {}), "cf-connecting-ip": "203.0.113.7", ...extra } });
const refused = (path, ua, init) => refusedAgent(init ? new Request(`https://spanishcue.com${path}`, { ...init, headers: { "user-agent": ua } }) : get(path, ua), path);

test("search engines, link previews and real browsers are never refused", () => {
  for (const name of ["chrome", "safari", "googlebot", "bingbot", "applebot", "facebookPreview", "whatsapp", "oaiAds", "node"]) {
    for (const path of ["/", "/material-ele", "/material-ele/fichas", "/material-ele/guia/como-ensenar-gustar", "/clase-gratis", "/demo/noche-abierta", "/sitemap.xml", "/robots.txt"]) {
      assert.equal(refused(path, UA[name]), false, `${name} ${path}`);
    }
  }
  assert.equal(refused("/material-ele", null), false, "a missing User-Agent is not refused");
  assert.equal(policy.isSearchEngineAgent(UA.googlebot), true);
  assert.equal(policy.isBlockedCrawlerAgent(UA.googlebot), false);
  assert.equal(policy.isBlockedCrawlerAgent(UA.applebot), false);
});

test("Google and Bing are never in the blocked lists", () => {
  for (const token of [...policy.BLOCKED_CRAWLERS, ...policy.SCRAPING_TOOLS]) {
    assert.doesNotMatch(token, /^(googlebot|bingbot|applebot|duckduckbot|adsbot-google|facebookexternalhit)$/i, token);
  }
  assert.ok(policy.BLOCKED_CRAWLERS.includes("Google-Extended"), "AI-training opt-out that leaves Googlebot alone");
  assert.ok(!policy.AI_CRAWLERS.includes("OAI-AdsBot"), "the ad landing-page check stays allowed");
});

test("AI and SEO-tool crawlers are refused everywhere except robots.txt", () => {
  for (const name of ["gptbot", "chatgptUser", "claudebot", "perplexity", "bytespider", "ahrefs"]) {
    for (const path of ["/", "/material-ele", "/material-ele/fichas", "/clase-gratis", "/demo/noche-abierta", "/noche-abierta/demo-calle.json", "/sitemap.xml", "/assets/app.js"]) {
      assert.equal(refused(path, UA[name]), true, `${name} ${path}`);
    }
    assert.equal(refused("/robots.txt", UA[name]), false, `${name} may read robots.txt`);
  }
});

test("scraping libraries are refused on content, never on smokes, APIs, webhooks or student links", () => {
  for (const name of ["python", "curl", "scrapy"]) {
    assert.equal(refused("/material-ele/fichas", UA[name]), true, name);
    assert.equal(refused("/indefinido-e-imperfecto", UA[name]), true, name);
    for (const path of ["/", "/sitemap.xml", "/robots.txt", "/feed.xml", "/644c3f7ecabe04d2135933a3118a3bb3.txt", "/api/billing/founder-status", "/s/abc"]) {
      assert.equal(refused(path, UA[name]), false, `${name} ${path}`);
    }
    assert.equal(refused("/api/billing/paddle/webhook", UA[name], { method: "POST", body: "{}" }), false, "webhooks are POSTs and never refused");
  }
  const response = refusedAgentResponse();
  assert.equal(response.status, 403);
  assert.equal(response.headers.get("cache-control"), "private, no-store");
});

test("page reads are counted per IP; static files, APIs, student links and search engines are not", () => {
  assert.equal(pageReadKey(get("/material-ele", UA.chrome), "/material-ele", undefined), "production:pages:203.0.113.7");
  assert.equal(pageReadKey(get("/material-ele", UA.chrome), "/material-ele", "staging"), "staging:pages:203.0.113.7");
  assert.equal(pageReadKey(get("/material-ele.rsc", UA.chrome), "/material-ele", undefined, true), "production:payloads:203.0.113.7");
  assert.equal(pageReadKey(get("/material-ele", UA.chrome, { "cf-connecting-ip": "127.0.0.1" }), "/material-ele", undefined), null, "local preview and worker tests");
  for (const path of ["/assets/app.js", "/audio/free/a.mp3", "/noche-abierta/demo-calle.json", "/brand/spanishcue-logo.png", "/sitemap.xml", "/robots.txt", "/api/progress", "/s/abc", "/_vinext/image"]) {
    assert.equal(pageReadKey(get(path, UA.chrome), path, undefined), null, path);
  }
  assert.equal(pageReadKey(get("/material-ele", UA.googlebot), "/material-ele", undefined), null, "Googlebot is never slowed down");
  assert.equal(pageReadKey(get("/material-ele", UA.bingbot), "/material-ele", undefined), null);
  assert.equal(pageReadKey(new Request("https://spanishcue.com/material-ele", { headers: { "user-agent": UA.chrome } }), "/material-ele", undefined), null, "no IP, no counter");
  assert.equal(pageReadKey(new Request("https://spanishcue.com/api/x", { method: "POST" }), "/material-ele", undefined), null, "only GET");
});

test("a fake Googlebot from a foreign network is counted, a real or unknown one is not", () => {
  const from = (asn) => Object.assign(get("/material-ele", UA.googlebot), { cf: { asn } });
  assert.equal(pageReadKey(from(15169), "/material-ele", undefined), null);
  assert.equal(pageReadKey(from(undefined), "/material-ele", undefined), null);
  assert.equal(pageReadKey(from(14061), "/material-ele", undefined), "production:pages:203.0.113.7");
  const slowed = pageReadLimitResponse();
  assert.equal(slowed.status, 429);
  assert.equal(slowed.headers.get("retry-after"), "60");
});

test("robots.txt, the Worker and the build agree", async () => {
  const robots = await readFile("app/robots.ts", "utf8");
  assert.match(robots, /from "\.\/crawler-policy"/);
  assert.match(robots, /userAgent: "\*", allow: "\/"/, "everyone else, Google included, may crawl");
  const worker = await readFile("worker/index.ts", "utf8");
  assert.ok(worker.indexOf("refusedAgent(request, pathname)") > 0);
  assert.ok(worker.indexOf("refusedAgent(request, pathname)") < worker.indexOf("getFirebaseUserFromHeaders(routedHeaders)"), "refusals run before identity work");
  assert.ok(worker.indexOf("env.SCRAPE_LIMITER, pageReadKey(") > 0);
  assert.ok(worker.indexOf("env.SCRAPE_LIMITER, pageReadKey(") < worker.indexOf("store.match(edgeKey)"), "the page limiter runs before the edge cache");
  const config = await readFile("vite.config.ts", "utf8");
  assert.match(config, /name: "SCRAPE_LIMITER"/);
  assert.match(config, /name: "PAYLOAD_LIMITER"/);
});

test("the client build ships no source maps", async () => {
  const config = `${await readFile("vite.config.ts", "utf8")}\n${await readFile("next.config.ts", "utf8")}`;
  assert.doesNotMatch(config, /sourcemap:\s*(true|"inline"|'inline')/);
  assert.doesNotMatch(config, /productionBrowserSourceMaps:\s*true/);
});
