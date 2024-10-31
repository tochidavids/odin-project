const http = require("http");
const fs = require("fs");
const path = require('path')

const indexHtmlFile = fs.readFileSync("index.html", (err, html) => {
	if (err) throw err;
	return html;
});
const aboutHtmlFile = fs.readFileSync("about.html", (err, html) => {
	if (err) throw err;
	return html;
});
const contactMeHtmlFile = fs.readFileSync("contact-me.html", (err, html) => {
	if (err) throw err;
	return html;
});
const _404HtmlFile = fs.readFileSync("404.html", (err, html) => {
	if (err) throw err;
	return html;
});

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
	res.end(indexHtmlFile);
});

server.listen(8080);