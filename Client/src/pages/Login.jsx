import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-hot-toast";
import { API } from "../utils/api";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loader
    try {
      const res = await axios.post(API.LOGIN, {
        email: formData.email,
        password: formData.password,
      });

      // Save token (optional: use cookies or context for security)
      localStorage.setItem("token", res.data.token);

      toast.success("Login successful!");
      navigate("/cr_dash"); // Redirect to dashboard
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Welcome 👋</h2>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <label className="label">
                  <Link to="/forgot-password" className="link link-primary">
                    ForgotPassword
                  </Link>
                </label>
              </div>

              <div className="form-control mt-2">
                <label className="cursor-pointer label">
                  <span className="label-text">Remember me</span>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>

              <div className="form-control mt-4">
                {loading ? (
                  <button
                    type="button"
                    disabled
                    className="btn btn-primary w-full flex justify-center items-center gap-2"
                  >
                    Logging in
                    <span className="flex gap-1">
                      <span className="dot">.</span>
                      <span className="dot">.</span>
                      <span className="dot">.</span>
                    </span>
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary w-full">
                    Login
                  </button>
                )}
              </div>
            </form>

            <div className="flex justify-center items-center gap-2 mt-1 w-full max-w-sm">
              <div className="w-full ">
            <p className="mt-1  text-sm text-center">
              Don't have an account?{" "}
              <Link to="/register" className="link link-primary">
                Register here
              </Link>
            </p>
            </div>
            {loading ? (
              <div className="mt-4 flex justify-center">
              <span className="loading loading-spinner text-primary"></span> {/* Tailwind spinner */}
            </div>
            
            ) : (
            <div className="mt-1 text-center w-50 ">
            <GoogleLogin
  onSuccess={async (credentialResponse) => {
    setLoading(true); // start loader
    try {
      const { credential } = credentialResponse;

      // Decode and show locally
      const decoded = jwtDecode(credential);
      //console.log("Google user", decoded);

      // Send credential (token) to backend
      const res = await axios.post(API.GOOGLE_LOGIN, {
        token: credential,
      });

      // Save backend token in localStorage or context
      localStorage.setItem("token", res.data.token);
      
    } catch (error) {
      toast.error("Google login failed");
      console.error(error);
    }finally {
      setTimeout(() => {
        setLoading(false);
        toast.success("Logged in successfully!");
      navigate("/cr_dash");
        // navigate("/cr_dash");
      }, 1000);
    }
  }}
  onError={() => {
    toast.error("Google Login Failed");
  }}
/>
</div>
)}
</div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
