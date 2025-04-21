import React from "react";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
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
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ChatPage from "./pages/ChatAi/ChatPage";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
// import ChatAi from "./pages/ChatAi";
// index.js or App.jsx




function App() {
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
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
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/aichat" element={<ChatPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* <Route path="/aichat2" element={<ChatAi/>}/> */}
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
