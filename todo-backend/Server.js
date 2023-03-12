const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5006;
const routers = require("./routers/TodoRouter");

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDB ...`))
  .catch(err => console.group(err));

app.use(routers);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
