// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare(),
	vite: {
		build: {
			minify: false
		},
		css: {
			transformer: 'lightningcss'
		}
	},

	integrations: [robotsTxt(), sitemap(), icon()],
	site: 'https://lonnies-mobile-mechanic.pages.dev'
})
