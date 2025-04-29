// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import node from "@astrojs/node";
import { paraglideVitePlugin } from '@inlang/paraglide-js';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
  ],
  i18n: {
    defaultLocale: "ko",
    locales: ["en", "ko"],
    routing: {
      prefixDefaultLocale: true
  }
  },
  vite: {
    plugins: [
      paraglideVitePlugin({
        // recommended settings
        project: "./project.inlang",
        outdir: "./src/paraglide", //where your files should be
        strategy: ["url", "cookie", "baseLocale"]
      })
    ]
  },
  output: "static",
  adapter: node({ mode: "standalone"}),
});