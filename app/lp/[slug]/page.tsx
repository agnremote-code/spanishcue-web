import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingLanding from "../../marketing-landing/MarketingLanding";
import PaidLanding from "../../marketing-landing/PaidLanding";
import { isPaidLandingSlug } from "../../marketing-landing/paid-copy";
import { landingConfigs, type LandingSlug } from "../../marketing-landing/config";
import { generateLandingMetadata } from "../../marketing-landing/metadata";

/**
 * Campaign-only landing variants for Meta, Zeely and Google Ads. They reuse
 * the conversion-first MarketingLanding template under /lp/<slug>, carry
 * `noindex, follow` and a self-referencing canonical (UTM parameters never
 * create new URLs), and leave the clean /<slug> URLs to the indexable hubs.
 */
type CampaignPageProps = { params: Promise<{ slug: string }> };

function isLandingSlug(slug: string): slug is LandingSlug {
  return Object.prototype.hasOwnProperty.call(landingConfigs, slug);
}

export async function generateMetadata({ params }: CampaignPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isLandingSlug(slug)) return {};
  return generateLandingMetadata(landingConfigs[slug], { pathname: `/lp/${slug}`, index: false });
}

export default async function CampaignLandingPage({ params }: CampaignPageProps) {
  const { slug } = await params;
  if (!isLandingSlug(slug)) notFound();
  // Meta/Zeely traffic lands on the redesigned paid template; other variants keep MarketingLanding.
  if (isPaidLandingSlug(slug)) return <PaidLanding config={landingConfigs[slug]} slug={slug} pathname={`/lp/${slug}`} />;
  return <MarketingLanding config={landingConfigs[slug]} pathname={`/lp/${slug}`} />;
}
