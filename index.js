import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import CompanyRoutes from "./src/routes/CompanyRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import OverViewRoutes from "./src/routes/OverViewRoutes.js";
import introRoutes from "./src/routes/introRoutes.js";
import LoginRoutes from "./src/routes/LoginRoutes.js";
import CategoryRoutes from "./src/routes/CategoryRoutes.js";
import AddressRoutes from "./src/routes/AddressRoutes.js";
import NewsRoutes from "./src/routes/NewsRoutes.js";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const path = require("path");

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "100mb" }));

app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

// app.use(logger('hawaco'))

// set up mongoose
const port = process.env.PORT || 8080;

const url_mongo =
  "mongodb+srv://admin2:fMvwnJPplA60AK8X@cluster0.xi2wh.mongodb.net/hawaco?retryWrites=true&w=majority";
mongoose
  .connect(url_mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database");
  });

app.use("/api/user", userRoutes);
app.use("/api/company", CompanyRoutes);
app.use("/api/overview", OverViewRoutes);
app.use("/api/intro", introRoutes);
app.use("/api/login", LoginRoutes);
app.use("/api/category", CategoryRoutes);
app.use("/api/address", AddressRoutes);
app.use("/api/news", NewsRoutes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});
