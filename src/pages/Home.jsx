import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../assets/Hero.jpg'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            {/* <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${HeroImg})`,
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

            <section className="bg-base-100 text-base-content py-20 px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Organize Your <span className="text-primary">Creative Empire</span><br />
                            in One Place
                        </h1>
                        <p className="text-lg leading-relaxed text-gray-800 dark:text-white">
                            CollabNest is your all-in-one content management workspace —
                            plan videos, track collaborations, manage brand deals, and
                            spark fresh ideas with AI. Built for YouTubers, Streamers,
                            and Creators who mean business.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/* <button className="btn btn-primary">🚀 Get Started for Free</button> */}
                            <div className="drawer drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">🚀 Get Started for Free</label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                        {/* Sidebar content here */}
                                        <li><a>Sidebar Item 1</a></li>
                                        <li><a>Sidebar Item 2</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <button className="btn btn-outline">🎬 Watch Demo</button> */}
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex justify-center">
                        <img
                            src={HeroImg}
                            alt="CollabNest Hero"
                            className="max-w-full w-[500px] rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>


            {/* <div className="flex items-center justify-center min-h-screen bg-base-200">
                <div className="join join-vertical bg-base-100 shadow-lg p-4 rounded-lg w-full max-w-md">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">
                            How do I create an account?
                        </div>
                        <div className="collapse-content text-sm">
                            Click the "Sign Up" button in the top right corner and follow the registration process.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">
                            I forgot my password. What should I do?
                        </div>
                        <div className="collapse-content text-sm">
                            Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">
                            How do I update my profile information?
                        </div>
                        <div className="collapse-content text-sm">
                            Go to "My Account" settings and select "Edit Profile" to make changes.
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="flex items-center justify-center min-h-screen bg-base-200">
                <div className="join join-vertical bg-base-100 shadow-lg p-4 rounded-lg w-full max-w-md">

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold">
                            How do I create an account?
                        </div>
                        <div className="collapse-content text-sm">
                            Click the "Sign Up" button in the top right corner and follow the registration process.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold">
                            I forgot my password. What should I do?
                        </div>
                        <div className="collapse-content text-sm">
                            Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold">
                            How do I update my profile information?
                        </div>
                        <div className="collapse-content text-sm">
                            Go to "My Account" settings and select "Edit Profile" to make changes.
                        </div>
                    </div>

                </div>
            </div>



            <Footer />
        </>
    )
}

export default Home
