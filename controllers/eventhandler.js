const asyncHandler = require("../middlware/async");
const axios = require("axios");

const events = [];
exports.postingEvent = asyncHandler(async (req, res, next) => {
  var event = req.body;
  try {
    if (event.type === "orderCancel") {
      await axios.post("http://localhost:3000/api/v1/payment/cancel", event);
    } //else {
    events.push(event);
    //next();
    //}

    await axios.post("http://localhost:4002/api/v1/order/postEvents", event);
    await axios.post("http://localhost:3000/api/v1/payment/postEvents", event);

    res.send({ status: "OK" });
    console.log("post event");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

exports.getEvent = asyncHandler((req, res) => {
  console.log("get", events);
  res.send(events);
});
