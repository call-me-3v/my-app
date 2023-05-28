// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
const tenantsController = require("./controllers/tenantsController");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cors());

// Connect to database
connectToDb();

// Routing
app.get("/tenants", tenantsController.fetchTenants);
app.get("/tenants/:id", tenantsController.fetchTenant);
app.post("/tenants", tenantsController.createTenant);
app.put("/tenants/:id", tenantsController.updateTenant);
app.delete("/tenants/:id", tenantsController.deleteTenant);

// Start our server
app.listen(process.env.PORT);
