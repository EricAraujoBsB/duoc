import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
    images: {
    domains: ['cxzbxxutbmmgmbjdmpit.supabase.co'], // adiciona o host do Supabase
  },
};

export default nextConfig;
