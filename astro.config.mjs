// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
  // trailingSlash: "always", example.com/about vs example.com/about/
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'urbanist',
			cssVariable: '--font-urbanist',
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/Urbanist-Black.woff'],
						weight: 900,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'opensans',
			cssVariable: '--font-opensans',
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/OpenSans-Regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/OpenSans-SemiBold.woff'],
						weight: 600,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/OpenSans-Bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
