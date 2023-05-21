const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tenant = new Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    rating: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tenant", Tenant);
