const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = PORT;
const indexRouter = require("./routes/index");

const app = express();
app.use(cors());

app.use("/api", indexRouter);
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(8080, () => console.log("server on at 8080"));
