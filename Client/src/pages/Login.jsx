import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Welcome Back 👋</h2>

            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="your@email.com" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="••••••••" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control mt-2">
                <label className="cursor-pointer label">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
              </div>

              <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
              </div>

              <div className="divider">OR</div>

              <div className="form-control">
                <button className="btn btn-outline btn-primary">Continue with Google</button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm">
              Don't have an account? <Link to="/register" className="link link-primary">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Login