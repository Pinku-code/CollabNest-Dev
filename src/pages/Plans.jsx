import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Plans = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 py-8 md:flex-row md:gap-6">
                {/* Plan Card 1 */}
                <div className="card w-full max-w-sm bg-base-100 shadow-md mb-6 md:mb-0">
                    <h1 className="text-2xl font-bold text-center pt-4">Basic</h1>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">Basic</h2>
                            <span className="text-lg">$9/mo</span>
                        </div>
                        <ul className="mt-4 flex flex-col gap-2 text-sm">
                            <li>✔️ Low-res image generation</li>
                            <li>✔️ Basic templates</li>
                            <li>❌ No batch processing</li>
                        </ul>
                        <button className="btn btn-outline btn-primary mt-6">Subscribe</button>
                    </div>
                </div>

                {/* Plan Card 2 */}
                <div className="card w-full max-w-sm bg-base-100 shadow-md mb-6 md:mb-0">
                    <h1 className="text-2xl font-bold text-center pt-4">Standard</h1>
                    <div className="card-body">
                        <span className="badge badge-warning self-start">Most Popular</span>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">Standard</h2>
                            <span className="text-lg">$19/mo</span>
                        </div>
                        <ul className="mt-4 flex flex-col gap-2 text-sm">
                            <li>✔️ High-res image generation</li>
                            <li>✔️ Custom templates</li>
                            <li>✔️ Batch processing</li>
                        </ul>
                        <button className="btn btn-outline btn-warning mt-6">Subscribe</button>
                    </div>
                </div>

                {/* Plan Card 3 */}
                <div className="card w-full max-w-sm bg-base-100 shadow-md">
                    <h1 className="text-2xl font-bold text-center pt-4">Premium</h1>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">Premium</h2>
                            <span className="text-lg">$29/mo</span>
                        </div>
                        <ul className="mt-4 flex flex-col gap-2 text-sm">
                            <li>✔️ AI-driven image enhancements</li>
                            <li>✔️ Unlimited batch processing</li>
                            <li>✔️ Collaboration tools</li>
                        </ul>
                        <button className="btn btn-outline btn-accent mt-6">Subscribe</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Plans