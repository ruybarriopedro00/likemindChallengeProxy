const axios = require("axios").default;
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

// TODO add base url
const BASE_URL = "";

app.use(cors());

app.get("/quotes", async (req, res) => {
  const response = await axios.get(BASE_URL + "/quotes");
  res.send(response.data);
});

app.get("/quotes/:_id", async (req, res) => {
  const quoteId = req.params._id;
  const response = await axios.get(BASE_URL + "/quotes/" + quoteId);
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
