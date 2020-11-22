const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Router Files
const eventhandler = require("./routes/eventhandler");

app.use("/eventbus/events", eventhandler);

// for cloud ex:aws deployment
app.get("/healthcheck", (req, res) => {
  console.log(`Health Check Request`);
  res.status(200).send("healthcheck test");
});

app.listen(8005, () => {
  console.log("listening to port 8005");
});
