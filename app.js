const express = require("express");
const app = express();
const dotenv = require("dotenv");
const movieRoutes = require("./api/movies.Routes");
const connectDB = require("./mongoDB/database");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middleWare/errorHandler");
const notFoundHandler = require("./middleWare/notFound");
const path = require("path");

connectDB();

dotenv.config();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/media/", express.static(path.join(__dirname, "media")));
app.use("/movies", movieRoutes);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(process.env.PORT, () => {
  console.log(`The application is running on ${process.env.PORT}`);
});
