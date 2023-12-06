/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  },
  env: {
    GOOGLE_CLIENT_ID:
      "958024680858-abjngib37oem01akh2o23slndqpnsj6u.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_CLIENT_ID: "a7a181e731a5b8502da0",
    GITHUB_CLIENT_SECRET: "f1c50d40de696c0d490ba213bc0b9e7cad142db6",
    FACEBOOK_CLIENT_ID: "1028987308387277",
    FACEBOOK_CLIENT_SECRET: "de57c9f31dfa23bb56d89757218f7d96"
  },
};

module.exports = nextConfig;
