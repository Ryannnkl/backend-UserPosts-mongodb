const express = require("express");
const mongoose = require("mongoose");

const routes = require("./src/routes");

mongoose.connect(
  "mongodb+srv://ryann-bd:19735@clusterryann-rhyba.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
