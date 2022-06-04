const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
	response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
	let sum = Number(request.body.num1) + Number(request.body.num2);
	response.send("The result of your calculation is " + sum + ".");
});

app.listen(3000, function () {
	console.log("Server is running");
});
