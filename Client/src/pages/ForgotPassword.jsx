import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { API } from "../utils/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API.FORGOT_PASSWORD}`, { email });
      toast.success(res.data.message || "Reset link sent to your email.");
    } catch (err) {
        console.log(err || err.response || err.message || err.data);
      toast.error(err.response?.data?.message || "Failed to send reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-200 min-h-screen flex flex-col transition-all duration-300">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md p-6 bg-base-100 shadow-xl rounded-2xl border border-base-300">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">
            Forgot Your Password?
          </h2>
          <p className="text-center text-sm text-base-content mb-6">
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full transition-all duration-300 ${
                loading ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  Sending
                  <span className="loading loading-dots loading-xs ml-2">
                      <span className="dot">.</span>
                      <span className="dot">.</span>
                      <span className="dot">.</span>
                    </span>
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-base-content">
            Remembered your password?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Go back to login
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
