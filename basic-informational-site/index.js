const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
	const q = url.parse(req.url, true);
	fs.readFile(`.${q.pathname}.html`, (err, html) => {
		if (err) {
			res.setHeader("Content-Type", "text/html");
			return res.end(
				fs.readFile("404.html", (err, _404page) => {
					return _404page;
				}),
			);
		}
		res.setHeader("Content-Type", "text/html");
		res.end(html);
	});
});

server.listen(8080);
