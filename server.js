var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];

app.get("/api/projects", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.get("/addTwoNumbers/:firstNumber/:secondNumber", function (req, res, next) {
  var firstNumber = parseInt(req.params.firstNumber);
  var secondNumber = parseInt(req.params.secondNumber);
  var result = firstNumber + secondNumber || null;
  if (result == null) {
    res.json({ result: result, statusCode: 400 }).status(400);
  } else {
    res.json({ result: result, statusCode: 200 }).status(200);
  }
});

app.use(express.static(__dirname + "/public"));
var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port);
});
