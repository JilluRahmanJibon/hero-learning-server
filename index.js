const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.get("/", (req, res) => {
	res.send("Now ready for use");
});
app.listen(port, () => {
	console.log("Port is running now: ", port);
});

const categories = require("./data/Categories");

app.get("/course_categories", (req, res) => {
	res.send(categories);
});
