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
const products = require("./data/products.json");
const categories = require("./data/Categories");
app.get("/course_categories", (req, res) => {
	res.send(categories);
});

app.get("/course", (req, res) => {
	res.send(products);
});
app.get("/course/:id", (req, res) => {
	const id = req.params.id;
	const selectCourse = products.find(c => c.id === id);
	res.send(selectCourse);
});

app.get("/category/:id", (req, res) => {
	const id = req.params.id;

	const selectCourse = products.find(c => c.id == id);
	res.send(selectCourse);
});
