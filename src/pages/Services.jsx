import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
        <Navbar />
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Our Services</h1>
                <p className="py-6">We offer a range of services to help you achieve your goals.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Services