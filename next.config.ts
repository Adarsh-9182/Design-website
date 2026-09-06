import path from "node:path";
import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/Design-website" : "",
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
