import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Analytics from "./pages/Analytics.jsx";
import Tenant from "./pages/Tenant.jsx";
import Apartment from "./pages/Apartment.jsx";
import About from "./pages/About.jsx";
import Complaint from "./pages/Complaint.jsx";

const App = (props) => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/tenant/*" element={<Tenant />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
