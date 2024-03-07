import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		css: {
			transformer: "lightningcss",
		},
	},
	output: "server",
	adapter: netlify(),
});
