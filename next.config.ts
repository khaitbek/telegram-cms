import type { NextConfig } from "next";
import "@/shared/config/env/server";
import "@/shared/config/env/client";

const nextConfig: NextConfig = {
	/* config options here */
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
			},
		];
	},
	experimental: {
		// typedRoutes: true,
	},
};

export default nextConfig;
