import React, { useEffect } from "react";
import {
  FileText,
  Sparkles,
  Briefcase,
  Calendar,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    icon: <FileText className="w-10 h-10 text-indigo-600" />,
    title: "Script Bank",
    description:
      "Organize scripts with status (Draft, Scheduled, Published), versioning, and search.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
    title: "AI-Powered Content Ideas",
    description:
      "Suggests trending video topics using OpenAI/Gemini + social trends.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-500" />,
    title: "Collab & Brand Deal CRM",
    description:
      "Track brand partnerships, contact history, proposals, and current status.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-green-500" />,
    title: "Content Calendar",
    description:
      "Schedule and plan your shoots, publish dates, and collabs with reminders.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
    title: "Role-Based Access (Coming Soon)",
    description: "Manage content with collaborators or a team of editors.",
  },
];


const ServicePage = () => {
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2"
          >
            <Rocket className="w-7 h-7 text-indigo-600" />
            Our Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card w-full max-w-sm bg-base-200 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105 mx-auto p-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-2">🎯 Problem We Solve</h3>
            <p>
              Creators often juggle multiple apps—Notion, Google Docs, Excel—for
              scripts, ideas, and deals, leading to inefficiencies and
              disorganization.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>Brings your entire content workflow into one place.</li>
              <li>Saves hours of brainstorming with smart AI suggestions.</li>
              <li>Ensures brand deal and collab tracking is never missed.</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
