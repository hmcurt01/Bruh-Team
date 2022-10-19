const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/gesture2.html");
});

app.listen(80, function () {
  console.log("Server is running on localhost80");
});