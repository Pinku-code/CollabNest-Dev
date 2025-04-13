import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Plans from "./pages/Plans";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactForm from "./pages/ContactForm";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/CreatorsDashboard/Dashboard";
import Scripts from "./pages/CreatorsDashboard/Scripts";
import Collabs from "./pages/CreatorsDashboard/Collabs";
import Video_manager from "./pages/CreatorsDashboard/Video_manger";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cr_dash" element={<Dashboard />} />
          <Route path="/cr_dash/Scripts" element={<Scripts />} />
          <Route path="/cr_dash/Collabs" element={<Collabs />} />
          <Route path="/cr_dash/Video_manager" element={<Video_manager />} />
          {/* <Route path="*" element={<Home />} /> */}

        </Routes>
      </Router>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          className: `
            bg-white text-black shadow-md
            dark:bg-gray-900 dark:text-white
            border border-gray-200 dark:border-gray-700
            rounded-md px-4 py-2 text-sm
            transition-all duration-300 ease-in-out
          `,
        }}
      />
    </div>
  );
}

export default App;
