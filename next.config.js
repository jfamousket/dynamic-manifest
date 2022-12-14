/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  publicExcludes: ["manifest.json"],
});

module.exports = withPWA({
  experimental: {
    allowMiddlewareResponseBody: true,
  },
});
