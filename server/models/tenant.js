const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  nationalId: String,
  telephone: Number,
  email: String,
  entryDate: Date,
  exitDate: Date,
  Status: String,
  house: String,
  apartNumber: Number,
  agreementDocument: String,
  rentDueDays: Number,
  amountPaid: Number,
  amountOwing: Number,
  roomFeatures: String,
  numberOfKey: Number,
  meterNumber: Number,
});

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;
