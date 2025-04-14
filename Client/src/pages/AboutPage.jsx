import { Library } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // import motion
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h1 className="text-5xl font-extrabold mb-8 text-center">
          About <span className="text-indigo-500">CollabNest</span>
        </h1>

        <p className="text-xl text-gray-500 mb-16 text-center max-w-3xl mx-auto">
          CollabNest is the smart hub built for today’s digital creators—whether you're a
          YouTuber, TikToker, livestreamer, or podcaster. Designed to streamline your content journey,
          CollabNest brings your entire creative workflow into one powerful, AI-enhanced workspace.
        </p>

        <div className="grid gap-12 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="bg-base-200 p-6 md:p-8 rounded-3xl shadow-2xl transition-colors"
          >
            <h2 className="text-2xl font-semibold text-indigo-500">Why We Built CollabNest</h2>
            <p className="text-gray-500 mb-4">
              Content creators often find themselves juggling multiple tools—Notion for notes,
              Excel for tracking deals, Google Docs for scripts, and sticky notes for ideas.
              This patchwork system wastes time, creates confusion, and leads to missed opportunities.
            </p>
            <p className="text-gray-500">
              CollabNest solves this by unifying everything in one intuitive platform:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-500 space-y-2">
              <li>Plan content with an intelligent calendar</li>
              <li>Track brand deals with built-in CRM</li>
              <li>Organize scripts with version control</li>
              <li>Generate ideas with AI-powered suggestions</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="bg-base-200 p-6 md:p-8 rounded-3xl shadow-2xl transition-colors"
          >
            <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-500">
              <li><strong>Script Bank:</strong> Organize scripts by status with versioning and search</li>
              <li><strong>AI-Powered Content Ideas:</strong> Get trending video topics via OpenAI & Gemini</li>
              <li><strong>Collab & Brand Deal CRM:</strong> Manage proposals, status, and contact history</li>
              <li><strong>Content Calendar:</strong> Plan shoots, publishing, and collabs with reminders</li>
              <li><strong>Role-Based Access (Coming Soon):</strong> Collaborate securely with your team</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600">
            Have questions or want to partner with us? Reach out at <span className="text-indigo-500"><Link to={"/contact"}>CollabNest</Link></span>.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default AboutPage;
