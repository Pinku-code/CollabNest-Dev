import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'; // ✅ Import motion
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Plans = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // ⬆️ scroll to top on load
      }, []);
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 py-8 md:flex-row md:gap-6">
                {/* Plan Card 1 */}
                <motion.div
                    className="card w-full max-w-sm bg-base-100 shadow-md shadow-indigo-500 mb-6 md:mb-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} // Match timing here
                >
                    <h1 className="text-2xl font-bold text-center pt-4">Basic</h1>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">Basic</h2>
                            <span className="text-lg">₹299/mo</span>
                        </div>
                        <ul className="mt-4 flex flex-col gap-2 text-sm">
                            <li>✔️ Low-res image generation</li>
                            <li>✔️ Basic templates</li>
                            <li>❌ No batch processing</li>
                        </ul>
                        <button className="btn btn-outline btn-primary mt-6">Subscribe</button>
                    </div>
                </motion.div>

                {/* Plan Card 2 */}
                <motion.div
                    className="card w-full max-w-sm bg-base-100 shadow-md shadow-yellow-600 mb-6 md:mb-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} // Match timing here
                >
                    <h1 className="text-2xl font-bold text-center pt-4">Standard</h1>
                    <div className="card-body">
                        <span className="badge badge-warning self-start">Most Popular</span>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">Standard</h2>
                            <span className="text-lg">₹399/mo</span>
                        </div>
                        <ul className="mt-4 flex flex-col gap-2 text-sm">
                            <li>✔️ High-res image generation</li>
                            <li>✔️ Custom templates</li>
                            <li>✔️ Batch processing</li>
                        </ul>
                        <button className="btn btn-outline btn-warning mt-6">Subscribe</button>
                    </div>
                </motion.div>

                {/* Plan Card 3 */}
                <motion.div
                    className="card w-full max-w-sm bg-base-100 shadow-md shadow-green-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Match timing here
                >
                    <h1 className="text-2xl font-bold text-center pt-4">Premium</h1>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">Premium</h2>
                            <span className="text-lg">₹499/mo</span>
                        </div>
                        <ul className="mt-4 flex flex-col gap-2 text-sm">
                            <li>✔️ AI-driven image enhancements</li>
                            <li>✔️ Unlimited batch processing</li>
                            <li>✔️ Collaboration tools</li>
                        </ul>
                        <button className="btn btn-outline btn-accent mt-6">Subscribe</button>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default Plans;
