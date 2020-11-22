const express = require("express");
const router = express.Router();

const { getEvent, postingEvent } = require("../controllers/eventhandler");

router.post("/postEvent", postingEvent);

router.get("/getEvent", getEvent);

module.exports = router;
