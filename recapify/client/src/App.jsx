import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Summary from "./pages/Summary";
import Tasks from "./pages/Tasks";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
}
