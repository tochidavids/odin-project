const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.sendFile("index.html", { root: ".." });
});

app.get("/:path", (req, res) => {
	res.sendFile(`${req.params.path}.html`, { root: ".." }, err =>
		res.sendFile("404.html", { root: ".." }),
	);
});

app.listen(3000);
