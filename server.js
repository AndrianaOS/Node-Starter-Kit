const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// HANDLER FUNCTION FOR INITIAL PAGE
app.get("/", function (request, response) {
  //   const searchQuery = request.query.search;
  response.send(
    `<h1>Hello Andriana, you are using node to send requests to Postman</h1>`
  );
});

// HANDLER FUNCTION FOR SEARCH WORDS
app.get("/search", function (request, response) {
  const searchQuery = request.query.search;
  response.send(
    `Hello Andriana, you are using node to send requests to ${searchQuery}`
  );
});

// HANDLER FUNCTION FOR MULTIPLYING VALUES
app.get("/multiply", function (req, res) {
  let value1 = req.query.value1;
  let value2 = req.query.value2;
  res.send(`We are using node.js and multiplying these: ${value1 * value2}`);
});

// HANDLER FUNCTION TO CONSOLE LOG STRING AS RESPONSE TO REQUEST
app.get("/codeyourfuture", function (req, res) {
  res.send("I'm a CYF trainee learning full stack web development");
});

// HANDLER FUNCTION TO GET AMOUNT BASED ON REQUEST
app.get("/chocolate", function (req, res) {
  const amount = req.query.amount;
  res.send(`Send me ${amount} chocolates`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests.`);
});
