const express = require("express");
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

app.get("/", (req, res) => {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.post("/new", (req, res) => {});

app.listen(3000);
