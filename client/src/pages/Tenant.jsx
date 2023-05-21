import React from "react";
import Analytics from "./Analytics.jsx";
import Apartment from "./Apartment.jsx";
import Complaint from "./Complaint.jsx";
import About from "./About.jsx";
import { Routes, Route, NavLink } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

const Tenant = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          PERPETUUM RICA VENTURES (AMS)
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to={"/tenant"} className="nav-link">
              Tenant
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/add"} className="nav-link">
              Add
            </NavLink>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about/:id" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default Tenant;
