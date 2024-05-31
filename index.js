// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    console.log(JSON.stringify(result.data));
    res.render("index.ejs", {
      secret: JSON.stringify(result.data.secret),
      user: JSON.stringify(result.data.username),
    });
  } catch (error) {
    res.render("index.ejs", { secret: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
