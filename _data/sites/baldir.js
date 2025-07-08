module.exports = {
	name: "baldir.fr", // optional, falls back to object key
	description: "Site de baldir.fr",
	options: {
		runs: 1,
		frequency: 1, // 1 minute
		// frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://baldir.fr",
		"https://baldir.fr/a-propos/",
		"https://baldir.fr/tags/",
		"https://baldir.fr/tags/11ty/",
		"https://baldir.fr/blog/",
		"https://baldir.fr/blog/lire-du-code-sous-l-influence-de-ses-emotions/",
		"https://baldir.fr/blog/tentative-de-contribution-a-fossify-sms/",
		"https://baldir.fr/glossaire/",
		"https://baldir.fr/notes/",
		"https://baldir.fr/cheat-sheets/ffmpeg/",
		"https://baldir.fr/citations/",
		"https://baldir.fr/citation/ron-jeffries-you-cant-learn-in-a-week/",
		"https://baldir.fr/making-of/",
		"https://baldir.fr/making-of/019-utiliser-obsidian-pour-ecrire-le-contenu/",

	]
};