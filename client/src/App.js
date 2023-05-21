import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Analytics from "./pages/Analytics.jsx";
import Product from "./pages/Tenant.jsx";
import ProductList from "./pages/Apartment.jsx";
import About from "./pages/About.jsx";
import Comment from "./pages/Complaint.jsx";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {message}
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
