import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Project Pages are served from /test_template. Leave this unset for local dev.
const pagesBase = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_PAGES === "true" ? "/test_template" : "");
process.env.NEXT_PUBLIC_BASE_PATH = pagesBase;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: pagesBase,
  assetPrefix: pagesBase,
  // Keep Next.js from treating a lockfile in a parent folder as the project root.
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
};

export default nextConfig;
