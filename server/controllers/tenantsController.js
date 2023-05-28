const Tenant = require("../models/tenant");

const fetchTenants = async (req, res) => {
  // Find the tenants
  const tenants = await Tenant.find();
  console.log(tenants);

  // Respond with them
  res.json({ tenants });
};

const fetchTenant = async (req, res) => {
  // Get id off the url
  const tenantId = req.params.id;

  // Find the note using that id
  const tenant = await Tenant.findById(tenantId);

  // Respond with the note
  res.json({ tenant });
};

const createTenant = async (req, res) => {
  // Get the sent in data off request body
  const {
    firstName,
    lastName,
    gender,
    nationalId,
    telephone,
    email,
    entryDate,
    exitDate,
    Status,
    house,
    apartNumber,
    agreementDocument,
    rentDueDays,
    amountPaid,
    amountOwing,
    roomFeatures,
    numberOfKey,
    meterNumber,
  } = req.body;

  // Create a note with it
  const tenant = await Tenant.create({
    firstName,
    lastName,
    gender,
    nationalId,
    telephone,
    email,
    entryDate,
    exitDate,
    Status,
    house,
    apartNumber,
    agreementDocument,
    rentDueDays,
    amountPaid,
    amountOwing,
    roomFeatures,
    numberOfKey,
    meterNumber,
  });

  // respond with the new note
  res.json({ tenant });
};

const updateTenant = async (req, res) => {
  // Get the id off the url
  const tenantId = req.params.id;

  // Get the data off the req body
  const {
    firstName,
    lastName,
    gender,
    nationalId,
    telephone,
    email,
    entryDate,
    exitDate,
    Status,
    house,
    apartNumber,
    agreementDocument,
    rentDueDays,
    amountPaid,
    amountOwing,
    roomFeatures,
    numberOfKey,
    meterNumber,
  } = req.body;

  // Find and update the record
  await Note.findByIdAndUpdate(noteId, {
    firstName,
    lastName,
    gender,
    nationalId,
    telephone,
    email,
    entryDate,
    exitDate,
    Status,
    house,
    apartNumber,
    agreementDocument,
    rentDueDays,
    amountPaid,
    amountOwing,
    roomFeatures,
    numberOfKey,
    meterNumber,
  });

  // Find updated note
  const tenant = await Tenant.findById(tenantId);

  // Respond with it
  res.json({ tenant });
};

const deleteTenant = async (req, res) => {
  // get id off url
  const tenantId = req.params.id;

  // Delete the record
  await Tenant.deleteOne({ id: tenantId });

  // Respond
  res.json({ success: "Record deleted" });
};

module.exports = {
  fetchTenants,
  fetchTenant,
  createTenant,
  updateTenant,
  deleteTenant,
};
