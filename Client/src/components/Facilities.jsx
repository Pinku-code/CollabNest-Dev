// Facilities.jsx
import React from 'react';
import {
  Users,
  Handshake,
  Brain,
  Calendar,
  BookText,
  MessageCircle,
  BarChart,
  ShieldCheck
} from 'lucide-react';

const facilities = [
  {
    icon: <Users size={28} className="text-primary" />,
    title: "Creator Collaboration",
    description: "Creators can connect for video collabs, reels, podcasts, and more."
  },
  {
    icon: <Handshake size={28} className="text-primary" />,
    title: "Sponsor Deals",
    description: "Brands and sponsors can explore creators and send offers directly."
  },
  {
    icon: <Brain size={28} className="text-primary" />,
    title: "AI Tools",
    description: "Smart tools for content ideas, script writing, planning, and more."
  },
  {
    icon: <Calendar size={28} className="text-primary" />,
    title: "Content Calendar",
    description: "Manage deadlines, uploads, collaborations, and event schedules."
  },
  {
    icon: <BookText size={28} className="text-primary" />,
    title: "Collaboration Records",
    description: "Track history of collabs, sponsors, shared notes, and files."
  },
  {
    icon: <MessageCircle size={28} className="text-primary" />,
    title: "Messaging System",
    description: "Chat with creators or sponsors inside the platform easily."
  },
  {
    icon: <BarChart size={28} className="text-primary" />,
    title: "Analytics Dashboard",
    description: "Performance insights for your content, reach, and sponsorships."
  },
  {
    icon: <ShieldCheck size={28} className="text-primary" />,
    title: "Secure Payments",
    description: "Track your earnings and transactions with full safety and logs."
  }
];

const Facilities = () => {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Platform Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="card w-full max-w-sm bg-base-100 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105 mx-auto p-6 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-3">
              {facility.icon}
              <h3 className="text-lg font-semibold text-primary">{facility.title}</h3>
            </div>
            <p className="text-base-content text-sm">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
