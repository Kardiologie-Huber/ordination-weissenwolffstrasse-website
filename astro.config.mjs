import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ordination-weissenwolffstrasse.at',
  integrations: [mdx()],
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
