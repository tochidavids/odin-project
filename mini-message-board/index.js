const express = require("express");
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

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

app.route("/new")
	.get((req, res) => {
		res.render("form");
	})
	.post((req, res) => {
		messages.push({
			text: req.body.text,
			user: req.body.user,
			added: new Date(),
		});
		res.redirect("/");
	});

app.get("/message/:id", (req, res) => {
	console.log("message:", messages[Number(req.params.id)]);
	res.render("message", { message: messages[Number(req.params.id)] });
});

app.listen(3000);
