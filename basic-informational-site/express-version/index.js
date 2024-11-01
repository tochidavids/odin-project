const express = require("express");
const app = express();

// app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.sendFile("index.html", { root: ".." });
});

app.listen(3000);
