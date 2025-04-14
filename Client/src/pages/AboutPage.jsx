import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div>
      <Navbar/>
        <div className="bg-base-100 max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center ">About CollabNest</h1>
      <p className="text-lgmb-10 text-center max-w-3xl mx-auto">
        CollabNest is the smart hub built for today’s digital creators—whether you're a
        YouTuber, TikToker, livestreamer, or podcaster. Designed to streamline your content journey,
        CollabNest brings your entire creative workflow into one powerful, AI-enhanced workspace.
      </p>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold  mb-4">Why We Built CollabNest</h2>
          <p className=" mb-4">
            Content creators often find themselves juggling multiple tools—Notion for notes,
            Excel for tracking deals, Google Docs for scripts, and sticky notes for ideas.
            This patchwork system wastes time, creates confusion, and leads to missed opportunities.
          </p>
          <p className="">
            CollabNest solves this by unifying everything in one intuitive platform:
          </p>
          <ul className="list-disc list-inside mt-4  space-y-2">
            <li>Plan content with an intelligent calendar</li>
            <li>Track brand deals with built-in CRM</li>
            <li>Organize scripts with version control</li>
            <li>Generate ideas with AI-powered suggestions</li>
          </ul>
        </div>

        <div className="bg-base-200 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold  mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 ">
            <li><strong>Script Bank:</strong> Organize scripts by status with versioning and search</li>
            <li><strong>AI-Powered Content Ideas:</strong> Get trending video topics via OpenAI & Gemini</li>
            <li><strong>Collab & Brand Deal CRM:</strong> Manage proposals, status, and contact history</li>
            <li><strong>Content Calendar:</strong> Plan shoots, publishing, and collabs with reminders</li>
            <li><strong>Role-Based Access (Coming Soon):</strong> Collaborate securely with your team</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="">Have questions or want to partner with us? Reach out at <span className="text-blue-600"><Link to={"/contact"}>CollabNest</Link></span>.</p>
      </div>
    </div>
    <Footer/>
    </div>
  
  );
};

export default AboutPage;