const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
	console.log(`server on http://localhost:${port}`);
});

app.get("/test", (req, res) => {
	res.send("get Method");
});

app.post("/test", (req, res) => {
	res.send("post Method");
});

app.all("/test", (req, res) => {
	res.send("all Method");
});
