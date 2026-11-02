import { materialEleAtom } from "../indice";

export const dynamic = "force-static";

/** Atom feed of every Material ELE page: registered in Search Console as a feed sitemap, it is fetched more often than sitemap.xml. */
export function GET() {
  return new Response(materialEleAtom(), {
    headers: { "content-type": "application/atom+xml; charset=utf-8", "cache-control": "public, max-age=0, must-revalidate" },
  });
}
