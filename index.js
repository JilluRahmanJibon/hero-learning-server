const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 1853239027;

app.use(cors());

app.listen(port, () => {
	console.log("Port is running now: ", port);
});
