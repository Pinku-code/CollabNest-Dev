import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">
              Create an Account 📝
            </h2>

            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="form-control mt-4">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text ml-2">
                    I agree to the Terms and Conditions
                  </span>
                </label>
              </div>

              <div className="form-control mt-4">
                <button className="btn btn-primary w-full">Register</button>
              </div>

              <div className="divider">OR</div>

              <div className="form-control">
                <button className="btn btn-outline btn-primary w-full">
                  Continue with Google
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />  
    </div>
  );
};

export default Register;
