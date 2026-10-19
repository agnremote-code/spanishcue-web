import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingLanding from "../../marketing-landing/MarketingLanding";
import PaidLanding from "../../marketing-landing/PaidLanding";
import { isPaidLandingSlug } from "../../marketing-landing/paid-copy";
import { landingConfigs, type LandingSlug } from "../../marketing-landing/config";
import { generateLandingMetadata } from "../../marketing-landing/metadata";

/**
 * Two conversion-first purchase landings are indexable with self canonicals;
 * other campaign-only /lp variants remain noindex, follow. UTM parameters
 * never create a second indexable URL. The clean /<slug> SEO hubs are retained.
 */
type CampaignPageProps = { params: Promise<{ slug: string }> };

function isLandingSlug(slug: string): slug is LandingSlug {
  return Object.prototype.hasOwnProperty.call(landingConfigs, slug);
}

export async function generateMetadata({ params }: CampaignPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isLandingSlug(slug)) return {};
  return generateLandingMetadata(landingConfigs[slug], { pathname: `/lp/${slug}`, index: isPaidLandingSlug(slug) });
}

export default async function CampaignLandingPage({ params }: CampaignPageProps) {
  const { slug } = await params;
  if (!isLandingSlug(slug)) notFound();
  // Meta/Zeely traffic lands on the redesigned paid template; other variants keep MarketingLanding.
  if (isPaidLandingSlug(slug)) return <PaidLanding config={landingConfigs[slug]} slug={slug} pathname={`/lp/${slug}`} />;
  return <MarketingLanding config={landingConfigs[slug]} pathname={`/lp/${slug}`} />;
}
