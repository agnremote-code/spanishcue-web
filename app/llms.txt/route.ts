import { llmsTxt } from "../llms";

export const dynamic = "force-static";

/** Plain-Markdown site map for AI search assistants (see app/llms.ts). */
export function GET() {
  return new Response(llmsTxt(), {
    headers: { "content-type": "text/markdown; charset=utf-8", "cache-control": "public, max-age=0, must-revalidate" },
  });
}
