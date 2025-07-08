module.exports = {
	name: "SSG-Coda-2025-B1", // optional, falls back to object key
	description: "Sites statiques Coda 2025 B1",
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
		"https://baldir-fr.github.io/ma-page/"
	]
};