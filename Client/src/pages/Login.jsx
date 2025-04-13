// import React from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const Login = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen flex items-center justify-center bg-base-200">
//         <div className="card w-full max-w-sm shadow-2xl bg-base-100">
//           <div className="card-body">
//             <h2 className="text-2xl font-bold text-center">Welcome Back 👋</h2>

//             <form>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input type="email" placeholder="your@email.com" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500" />
//               </div>

//               <div className="form-control mt-4">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input type="password" placeholder="••••••••" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500" />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                 </label>
//               </div>

//               <div className="form-control mt-2">
//                 <label className="cursor-pointer label">
//                   <span className="label-text">Remember me</span>
//                   <input type="checkbox" className="checkbox checkbox-primary" />
//                 </label>
//               </div>

//               <div className="form-control mt-4">
//                 <button className="btn btn-primary w-full">Login</button>
//               </div>

//               <div className="divider">OR</div>

//               <div className="form-control">
//                 <button className="btn btn-outline btn-primary w-full">Continue with Google</button>
//               </div>
//             </form>

//             <p className="mt-4 text-center text-sm">
//               Don't have an account? <Link to="/register" className="link link-primary">Sign up</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />

//     </div>
//   )
// }

// export default Login
























import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { toast } from 'react-hot-toast';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password
      });

      // Save token (optional: use cookies or context for security)
      localStorage.setItem("token", res.data.token);

      toast.success("Login successful!");
      navigate('/cr_dash'); // Redirect to dashboard
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Welcome 👋</h2>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="input input-bordered" required />
              </div>

              <div className="form-control mt-4">
                <label className="label"><span className="label-text">Password</span></label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control mt-2">
                <label className="cursor-pointer label">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} className="checkbox checkbox-primary" />
                </label>
              </div>

              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary w-full">Login</button>
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
  );
};

export default Login;
