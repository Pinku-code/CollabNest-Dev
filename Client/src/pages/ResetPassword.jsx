import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X, CheckCircle } from "lucide-react";
import { API } from "../utils/api";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [matchIndicator, setMatchIndicator] = useState(false);

  // Password strength logic
  useEffect(() => {
    const evaluateStrength = (password) => {
      if (!password) return "";
      if (password.length < 6) return "Weak";
      if (
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password)
      ) {
        return "Strong";
      }
      return "Medium";
    };
    setPasswordStrength(evaluateStrength(newPassword));
  }, [newPassword]);

  // Match indicator
  useEffect(() => {
    if (confirmPassword && newPassword === confirmPassword) {
      setMatchIndicator(true);
      setError("");
    } else {
      setMatchIndicator(false);
      if (confirmPassword) setError("Passwords do not match");
    }
  }, [newPassword, confirmPassword]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    setLoading(true);
    try {
      console.log(token);
      const res = await axios.post(`${API.RESET_PASSWORD}/${token}`, {
        password: newPassword,
      });
      toast.success(res.data.message || "Password reset successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px4 mt-4">
        <div className="w-full max-w-md p-6 bg-base-100 shadow-xl rounded-2xl border border-base-300">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">
            Reset Your Password 🔐
          </h2>
          <p className="text-center text-sm text-base-content mb-6">
            Enter your new password to regain access to your account.
          </p>

          {error && (
            <p className="text-red-500 text-sm text-center animate-fade-in">
              {}
            </p>
          )}

          <form onSubmit={handleReset} className="space-y-5">
            {/* New Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">New Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="input input-bordered w-full"
                required
              />

              {/* Password Strength Meter */}
              <div className="mt-2 w-full">
                <div className="h-2 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700">
                  <div
                    className={`h-full transition-all duration-300 ${
                      passwordStrength === "Weak"
                        ? "w-1/4 bg-red-500"
                        : passwordStrength === "Medium"
                        ? "w-1/2 bg-yellow-500"
                        : passwordStrength === "Strong"
                        ? "w-full bg-green-500"
                        : "w-0"
                    }`}
                  ></div>
                </div>
                {newPassword && (
                  <p
                    className={`text-sm mt-1 transition-opacity duration-300 ${
                      passwordStrength === "Weak"
                        ? "text-red-500"
                        : passwordStrength === "Medium"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    Strength: {passwordStrength}
                  </p>
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-base">Confirm Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className={`input input-bordered w-full pr-10 transition-all duration-300 ${
                  confirmPassword.length > 0
                    ? confirmPassword === newPassword
                      ? "border-green-500"
                      : "border-red-500"
                    : ""
                }`}
                required
              />
              {/* Match Icon */}
              {confirmPassword.length > 0 && (
                <div className="absolute right-3 top-9 animate-fade-in">
                  {confirmPassword === newPassword ? (
                    <CheckCircle className="text-green-500" size={20} />
                  ) : (
                    <X className="text-red-500" size={20} />
                  )}
                </div>
              )}
              {/* Match Feedback */}
              {confirmPassword.length > 0 && confirmPassword !== newPassword && (
                <p className="text-sm text-red-500 mt-1 animate-fade-in">
                  Passwords do not match
                </p>
              )}
              {confirmPassword.length > 0 && confirmPassword === newPassword && (
                <p className="text-sm text-green-500 mt-1 animate-fade-in">
                  Passwords matched
                </p>
              )}
            </div>

            {/* Show Password Toggle */}
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="checkbox checkbox-sm"
              />
              Show Password
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full transition-all duration-300 ${
                loading ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  Resetting
                  <span className="loading loading-dots loading-xs ml-2" />
                </>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-base-content">
            Back to{" "}
            <a href="/login" className="text-primary hover:underline font-medium">
              Login
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResetPassword;
