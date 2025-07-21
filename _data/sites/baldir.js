module.exports = {
	name: "Baldir", // optional, falls back to object key
	description: "Sites d'exemple Baldir",
	options: {
		runs: 1,
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://baldir-fr.github.io/ma-page/",
		"https://bc.baldir.fr/",
		"https://u.baldir.fr/",
		"https://baldir-fr.github.io/coda-speedlify/ssg-coda-2025-b1/"
	]
};
