import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import AddTenant from "./AddTenant.jsx";
import TenantTable from "./TenantTable.jsx";

const Tenant = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          PERPETUUM RICA VENTURES (AMS)
        </a>
      </nav>
      <AddTenant />
      <div>
        <h1>List of Tenants</h1>
        <ul style={{ listStyleType: "none" }}></ul>
      </div>

      <TenantTable />
    </div>
  );
};

export default Tenant;
