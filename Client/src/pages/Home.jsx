import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../assets/hero.png";
import Footer from "../components/Footer";
import Facilities from "../components/Facilities";
import { Link } from "react-router-dom";
import SocialImage from "../assets/social.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="bg-base-100 text-base-content py-20 px-6 mt-10 lg:px-20 mb-2">
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.left_hero
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="left-hero"
        >
            <div className="left-hero space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Organize Your{" "}
                <span className="text-primary">Creative Empire</span>
                <br />
                in One Place
              </h1>
              <p className="text-lg leading-relaxed">
                CollabNest is your all-in-one content management workspace —
                plan videos, track collaborations, manage brand deals, and spark
                fresh ideas with AI. Built for YouTubers, Streamers, and
                Creators who mean business.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <button className="btn btn-primary">🚀 Get Started for Free</button> */}
                <div className="drawer drawer-end">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button btn btn-primary"
                    >
                      🚀 Get Started for Free
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                      <li>
                        <a>As a Creator</a>
                      </li>
                      <li>
                        <a>As a Sponsor</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <button className="btn btn-outline">🎬 Watch Demo</button> */}
              </div>
            </div>
            </motion.left_hero>
            {/* Hero Image */}
            <motion.hero
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="hero"
            >
              <div className="hero flex justify-center">
                <img
                  src={HeroImg}
                  alt="CollabNest Hero"
                  className="max-w-full w-[500px] rounded-3xl"
                />
              </div>
            </motion.hero>
          </div>
        
      </section>

      <Facilities />

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-base-200 gap-8 p-4">
        {/* Left - Image */}
        <div className="w-full max-w-md">
          <img
            src={SocialImage}
            alt="FAQ Illustration"
            className="h-auto object-cover"
          />
        </div>

        {/* Right - FAQ */}
        <div className="join join-vertical bg-base-100 shadow-lg p-6 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">FAQs</h2>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "
              <Link
                to={"/register"}
                className="text-violet-300 hover:text-violet-500"
              >
                Sign Up
              </Link>
              " button in the top right corner and follow the registration
              process.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">
              Customer Care? How do I contact?
            </div>
            <div className="collapse-content text-sm">
              Go to "Menu" and select "Help" to contact us.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
