// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    adapter: cloudflare({
        platformProxy: {
            enabled: true
        }
    }),

    vite: {
        css: {
            transformer: 'lightningcss'
        }
    },

    integrations: [robotsTxt(), sitemap()],
})
