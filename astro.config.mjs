import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
//import { targetBlank } from './src/plugins/target-blank';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ordination-weissenwolffstrasse.at',
  markdown: {
    rehypePlugins: [
      //[targetBlank, { domain: 'www.ordination-weissenwolffstrasse.at' }],
    ],
  },
  integrations: [mdx(), sitemap()],
  buildOptions: {
    site: 'https://www.ordination-weissenwolffstrasse.at',
  },
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
      },
    },
  },
});
