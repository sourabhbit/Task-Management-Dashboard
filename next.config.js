const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["assets.stablemoney.in", "lh3.googleusercontent.com"],
  },
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Cache-Control",
            value: "must-revalidate, public, max-age=2592000",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src *; style-src 'self' 'unsafe-inline' https://rsms.me/inter/inter.css https://css.zohocdn.com https://css.zohostatic.in; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.stablemoney.in *.amazonaws.com https://wurfl.io https://www.clarity.ms *.googleapis.com *.gstatic.com https://unpkg.com https://www.googletagmanager.com https://connect.facebook.net https://googleads.g.doubleclick.net https://www.googleadservices.com https://salesiq.zohopublic.in/widget https://js.zohocdn.com https://js.zohostatic.in https://cdnjs.cloudflare.com; img-src 'self' data: assets.stablemoney.in res.cloudinary.com https://www.facebook.com https://www.google.com https://www.google.co.in https://googleads.g.doubleclick.net https://media.licdn.com https://pbs.twimg.com https://i.ytimg.com;",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

module.exports = { ...nextConfig };
