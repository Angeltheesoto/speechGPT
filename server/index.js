const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});