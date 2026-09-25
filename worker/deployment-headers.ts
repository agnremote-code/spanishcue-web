// Non-production deployments (the owner-controlled staging Worker) must never
// be indexed. Production never sets SPANISHCUE_DEPLOYMENT, so its responses
// are returned unchanged.
export const STAGING_DEPLOYMENT = "staging";

export function withDeploymentHeaders(response: Response, deployment: string | undefined): Response {
  if (deployment !== STAGING_DEPLOYMENT) return response;
  const tagged = new Response(response.body, response);
  tagged.headers.set("X-Robots-Tag", "noindex, nofollow");
  return tagged;
}
