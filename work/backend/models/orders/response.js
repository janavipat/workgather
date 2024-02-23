const mongoose = require("mongoose");
require("dotenv").config();

const conn = mongoose.createConnection(process.env.ATLAS_URI + "orders");

const response = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
   name:{
    type: String,
    required: true,
    },
    response: {
      type: String,
      required: true,
    },
    image:{
      type: String,
      required: true,
    }
  },
  {
    collection: "response",
  }
);

const Reviews = conn.model.response || conn.model("response", response);

module.exports = Reviews;
