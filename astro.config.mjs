import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

const base = process.env.PUBLIC_BASE_PATH && process.env.PUBLIC_BASE_PATH !== ''
  ? process.env.PUBLIC_BASE_PATH
  : '/';

const site = process.env.PUBLIC_SITE && process.env.PUBLIC_SITE !== ''
  ? process.env.PUBLIC_SITE
  : undefined;

export default defineConfig({
  output: 'static',
  base,
  site,
  integrations: [tailwind()]
});
