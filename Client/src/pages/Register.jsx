import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-hot-toast";
import { API } from "../utils/api";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
// import { Loader } from "../components/Loader";
import Loader from "../components/Loader";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [loading, setLoading] = useState(false);

  const { fullName, email, password, confirmPassword, terms } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    if (!terms) {
      return toast.error("You must agree to the terms.");
    }

    try {
      const res = await axios.post(API.REGISTER, {
        // URL of render = https://collabnest-dev.onrender.com/api/auth/register
        // URL of localhost = http://localhost:5000/api/auth/register

        fullName,
        email,
        password,
      });

      toast.success(res.data.message || "Registration successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.");
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
            <h2 className="text-2xl font-bold text-center">
              Create an Account 📝
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
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
                  value={password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={terms}
                    onChange={handleChange}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text ml-2">
                    I agree to the Terms and Conditions
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                {loading ? (
                  <button
                    type="button"
                    disabled
                    className="btn btn-primary w-full flex justify-center items-center gap-2"
                  >
                    Registering
                    <span className="flex gap-1">
                      <span className="dot">.</span>
                      <span className="dot">.</span>
                      <span className="dot">.</span>
                    </span>
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary w-full">
                    Register
                  </button>
                )}
              </div>
              
            </form>

            {loading ? (
              <div className="mt-4 flex justify-center">
                <span className="loading loading-spinner text-primary"></span>{" "}
                {/* Tailwind spinner */}
              </div>
            ) : (
              <div
                className="mt-1 text-center"
                style={{
                  width:"340px",
                  height: "50px",
                  overflow: "hidden",
                  position: "relative",
                  borderRadius: "8px",
                }}
              >
                <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    try {
                      setLoading(true); // Start loading
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
                    } finally {
                      setTimeout(() => {
                        setLoading(false);
                        toast.success("Logged in successfully!");
                        navigate("/cr_dash");
                      }, 1000);
                    }
                  }}
                  onError={() => {
                    toast.error("Google Login Failed");
                  }}
                />
              </div>
            )}

            <div className="w-full">
              <p className=" text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="link link-primary">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
