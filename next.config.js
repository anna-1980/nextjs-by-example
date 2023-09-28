/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      toRemotePattern(process.env.NEXT_PUBLIC_STRAPI_IMG_PATTERN),
    ],
  },
};

function toRemotePattern(urlString) {
  const url = new URL(urlString);
  return {
    protocol: url.protocol.replace(":", ""),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
  };
}
