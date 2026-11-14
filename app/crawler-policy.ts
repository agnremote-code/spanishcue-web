/**
 * Who may read SpanishCue automatically.
 *
 * Search engines (Google, Bing, Apple, DuckDuckGo…) and link previews are
 * always welcome: organic search is the main acquisition channel. Everything
 * else that reads the site in bulk is refused: AI training crawlers, AI
 * assistants fetching pages on a user's behalf, SEO-tool crawlers and generic
 * scraping libraries. robots.txt asks politely (app/robots.ts); the Worker
 * enforces it for the ones that ignore robots.txt (worker/anti-scrape.ts).
 *
 * This raises the cost of copying; it cannot make public pages uncopyable. A
 * person with a browser can always read what a visitor can read.
 */

/** SEO-tool crawlers: thousands of page renders, no visitors (incident 2026-11-02). */
export const SEO_TOOL_CRAWLERS = ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "PetalBot", "DataForSeoBot", "BLEXBot", "serpstatbot", "Barkrowler"] as const;

/**
 * AI crawlers and AI assistant fetchers, by the token they publish. Each is
 * both a robots.txt user-agent and a substring of the real User-Agent header.
 * `OAI-AdsBot` (OpenAI's ad landing-page check) is deliberately absent, and
 * so are the live AI search agents below.
 */
export const AI_CRAWLERS = [
  "GPTBot",
  "ClaudeBot", "Claude-Web", "anthropic-ai",
  "CCBot", "Bytespider", "TikTokSpider", "Amazonbot",
  "Meta-ExternalAgent", "Meta-ExternalFetcher", "FacebookBot",
  "cohere-ai", "cohere-training-data-crawler",
  "Diffbot", "ImagesiftBot", "Omgilibot", "Omgili", "Webzio-Extended",
  "Timpibot", "YouBot", "AI2Bot", "DuckAssistBot", "MistralAI-User", "DeepSeekBot",
  "PanguBot", "ICC-Crawler", "iaskspider", "Kangaroo Bot", "img2dataset",
  "FirecrawlAgent", "Crawl4AI", "Google-CloudVertexBot", "Google-NotebookLM",
] as const;

/**
 * AI search agents that answer a person's question live and can recommend
 * SpanishCue with a link (owner decision 2026-11-14). They are allowed, never
 * listed in robots.txt, and counted by the per-IP page limiter like any
 * visitor. Training crawlers of the same companies stay blocked above.
 */
export const AI_SEARCH_AGENTS = ["OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User", "Claude-SearchBot", "Claude-User"] as const;

/**
 * robots.txt-only opt-outs: these never appear in a User-Agent header. They
 * tell Google and Apple not to use the pages for AI training while Googlebot
 * and Applebot keep indexing them for search.
 */
export const AI_TRAINING_OPT_OUTS = ["Google-Extended", "Applebot-Extended"] as const;

/** Everything robots.txt disallows outright. Google and Bing are never listed here. */
export const BLOCKED_CRAWLERS = [...SEO_TOOL_CRAWLERS, ...AI_CRAWLERS, ...AI_TRAINING_OPT_OUTS] as const;

/** Scraping libraries and site copiers, by their default User-Agent. */
export const SCRAPING_TOOLS = [
  "python-requests", "python-urllib", "python-httpx", "aiohttp", "Scrapy", "curl/", "Wget", "HTTrack",
  "Go-http-client", "Java/", "libwww-perl", "okhttp", "node-fetch", "axios/", "got (", "colly",
  "PhantomJS", "WebCopier", "SiteSucker", "Offline Explorer", "WebZIP", "Teleport",
] as const;

/** Search engines and link previews that must never be refused or slowed down. */
const SEARCH_ENGINES = /Googlebot|Google-InspectionTool|Google-Site-Verification|Storebot-Google|AdsBot-Google|Mediapartners-Google|APIs-Google|FeedFetcher-Google|bingbot|BingPreview|adidxbot|msnbot|MicrosoftPreview|DuckDuckBot|Applebot|YandexBot|Baiduspider|Slurp|SeznamBot|Qwantbot|facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Slackbot|Discordbot|Pinterest|OAI-AdsBot|IndexNow/i;

const lower = (list: readonly string[]) => list.map((item) => item.toLowerCase());
const BLOCKED_AGENTS = lower([...SEO_TOOL_CRAWLERS, ...AI_CRAWLERS]);
const BLOCKED_TOOLS = lower(SCRAPING_TOOLS);

export function isSearchEngineAgent(userAgent: string | null | undefined): boolean {
  return Boolean(userAgent && SEARCH_ENGINES.test(userAgent));
}

/** An AI or SEO-tool crawler that identifies itself honestly. */
export function isBlockedCrawlerAgent(userAgent: string | null | undefined): boolean {
  if (!userAgent || isSearchEngineAgent(userAgent)) return false;
  const agent = userAgent.toLowerCase();
  return BLOCKED_AGENTS.some((token) => agent.includes(token));
}

/** A scraping library that did not bother to change its default User-Agent. */
export function isScrapingToolAgent(userAgent: string | null | undefined): boolean {
  if (!userAgent || isSearchEngineAgent(userAgent)) return false;
  const agent = userAgent.toLowerCase();
  return BLOCKED_TOOLS.some((token) => agent.includes(token));
}
