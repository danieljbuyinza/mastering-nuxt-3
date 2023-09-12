// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	googleFonts: {
		families: {
			"DM+Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
		},
	},
	modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
});
