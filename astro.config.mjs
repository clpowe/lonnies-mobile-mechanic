// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: cloudflare({
        imageService: 'cloudflare',
        platformProxy: {
            enabled: true
        }
    }),

    vite: {
        build: {
            minify: false
        },
        css: {
            transformer: 'lightningcss'
        }
    },

    integrations: [robotsTxt(), sitemap()],
    site: "https://lonnies-mobile-mechanic.pages.dev"
})
