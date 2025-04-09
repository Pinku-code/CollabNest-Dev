import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <p className="py-6">Welcome to your dashboard.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard