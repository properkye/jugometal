/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hbimjllhujrqysckvtkw.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
