const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const router = require("./routes/blogRoutes");

const app = express();

app.use(cors());
app.use(express.json()); //middleware
app.use("/blogList", router);

app.listen(
  process.env.PORT,
  console.log(`App started at port ${process.env.PORT}`)
);
