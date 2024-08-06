/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'w7.pngwing.com',
      'i.pravatar.cc',
      's2.coinmarketcap.com',
      'assets.coingecko.com',
      'etherscan.io',
      'pbs.twimg.com',
      'basescan.org',
      'raw.githubusercontent.com',
      'ethereum-optimism.github.io',
      'cdn.pixabay.com',
      '',
      'ipfs',
    ],
  },
  headers: [
    {
      key: 'Content-Security-Policy',
      value: "frame-ancestors 'self' https://superbridge.app/base",
    },
    {
      key: 'Content-Security-Policy',
      value: "frame-ancestors 'self' https://verify.walletconnect.com",
    },
    {
      key: 'Content-Security-Policy',
      value: "frame-ancestors 'self' https://verify.walletconnect.org",
    },
  ],
};

//   module.exports = nextConfig;
export default nextConfig;
