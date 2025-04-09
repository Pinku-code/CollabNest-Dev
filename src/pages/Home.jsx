import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../assets/Hero.jpg'

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
                        <p className="text-lg leading-relaxed text-neutral-content">
                            CollabNest is your all-in-one content management workspace —
                            plan videos, track collaborations, manage brand deals, and
                            spark fresh ideas with AI. Built for YouTubers, Streamers,
                            and Creators who mean business.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="btn btn-primary">🚀 Get Started for Free</button>
                            <button className="btn btn-outline">🎬 Watch Demo</button>
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
        </>
    )
}

export default Home
