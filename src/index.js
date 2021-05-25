const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
