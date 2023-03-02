// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

//module.exports = withBundleAnalyzer({})
module.exports = {
  images: {
    domains: [
      'images.ctfassets.net',
      's3-us-west-2.amazonaws.com',
      'res.cloudinary.com',
      'cdn.insiflow.com',
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
         config.resolve.fallback.fs = false
         config.resolve.fallback.dns = false
         config.resolve.fallback.net = false
         config.resolve.fallback.tls = false
    }

    return config;
  }
}