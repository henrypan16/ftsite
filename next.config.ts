import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	allowedDevOrigins: ["172.16.0.75", "172.16.0.75:3000"],
};

export default nextConfig;
