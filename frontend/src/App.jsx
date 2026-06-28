import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Authentication */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Unknown Routes */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;