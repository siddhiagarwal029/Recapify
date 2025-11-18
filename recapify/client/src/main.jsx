import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Meetings from "./pages/Meetings";
import Interviews from "./pages/Interviews";
import Learning from "./pages/Learning";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
