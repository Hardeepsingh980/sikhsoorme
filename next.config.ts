/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS || false
const repo = "sikhsoorme" // replace with your repo name
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
