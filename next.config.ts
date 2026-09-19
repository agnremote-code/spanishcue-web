import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sites serves the public assets directly. The Vinext image endpoint rejects
  // several otherwise-valid responsive widths, which left acquisition pages
  // with broken images in production.
  images: { unoptimized: true },
};

export default nextConfig;
