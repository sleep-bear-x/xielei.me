const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withMarkdoc = require('@markdoc/next.js');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withVanillaExtract(
  withMarkdoc()({
    pageExtensions: ['md', 'mdoc'],
  })
);
