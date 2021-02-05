const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

//SUM CALCULATOR

//Data was requested from the server. Server sends file back.
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

//Data was sent to the server. Server sends data back.
app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    result = num1 + num2;

    res.send("The sum of the numbers is " + result);
})

//BMI CALCULATOR

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    result = (weight / (height * height)).toFixed(2);

    res.send("Your BMI is " + result);
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})