/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hbimjllhujrqysckvtkw.supabase.co",
      },
      {
        protocol: "https",
        hostname: "fyxbkkxntodbrhkzutxk.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
