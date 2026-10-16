import type { NextConfig } from "next";
// For GitHub Pages project sites set NEXT_PUBLIC_BASE_PATH=/repo-name at build time.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
};
export default nextConfig;
