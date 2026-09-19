import MarketingLanding from "../marketing-landing/MarketingLanding";
import { landingConfigs } from "../marketing-landing/config";
import { generateLandingMetadata } from "../marketing-landing/metadata";

export const generateMetadata = () => generateLandingMetadata(landingConfigs["spanish-teacher-resources"]);

export default function Page() {
  return <MarketingLanding config={landingConfigs["spanish-teacher-resources"]} />;
}
