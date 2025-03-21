import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    distDir: "out",
    images: { unoptimized: true },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
