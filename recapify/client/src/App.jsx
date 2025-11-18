import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Meetings from "./pages/Meetings";
import Interviews from "./pages/Interviews";
import Learning from "./pages/Learning";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </Layout>
  );
}
