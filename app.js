const express = require("express");
const dotenv = require("dotenv");
const PORT = 8000;
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`The application is running on ${process.env.PORT}`);
});
