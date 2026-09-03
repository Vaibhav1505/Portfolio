import type { NextConfig } from "next";
import dotenv from 'dotenv';
dotenv.config();
const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
