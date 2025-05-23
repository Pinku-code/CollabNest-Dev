import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { API } from "../utils/api";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loader

    try {
      const res = await fetch(API.CONTACT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message: " + data.message);
      }
    } catch (error) {
      toast.error("Error sending message: " + error.message);
    } finally {
      setLoading(false); // stop loader
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // ⬆️ scroll to top on load
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 py-4 bg-base-200 rounded-2xl relative">
        {/* Title */}

        {/* Grid layout: 2 columns on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Form Box */}
          <motion.left_card
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="left_card"
          >
            <div className="min-h-screen flex items-center justify-center ">
              <div className="card w-full max-w-sm shadow-2xl bg-base-100 ">
                <div className="card-body">
                  {submitted && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40 rounded-2xl">
                      <div className="bg-indigo-500 text-white px-6 py-3 rounded-xl shadow-md">
                        Thank you for contacting us!
                      </div>
                    </div>
                  )}

                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Contact Us 📬
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4 z-0">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-3 h-32 border border-gray-300 dark:border-gray-700 rounded-lg resize-none placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                    {loading ? (
                      <button
                        type="button"
                        disabled
                        className="btn btn-primary w-full flex justify-center items-center gap-2"
                      >
                        Sending
                        <span className="flex gap-1">
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                        </span>
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-primary w-full">
                        Send Message
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </motion.left_card>

          {/* Map Box */}
          <div className="min-h-screen flex items-center justify-center ">
            <motion.card
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="card"
            >
              <div className="card w-full max-w-lg shadow-2xl bg-base-100 ">
                <div className="card-body">
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    style={{ minHeight: "400px", border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.0034494878!2d77.763!3d30.009625000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec88dd0387f97%3A0xa29478415b6113e7!2sJaysingha%2C%20Uttarakhand!5e1!3m2!1sen!2sin!4v1744272589972!5m2!1sen!2sin"
                    className="rounded-lg w-full min-h-full"
                  ></iframe>
                  <div className="text-center text-sm ">
                    <p className="font-semibold">
                      {" "}
                      Roorkee - Dehradun Highway,
                    </p>
                    <p> Mandawar, Roorkee,</p>
                    <p> Uttarakhand 247167</p>
                  </div>
                </div>
              </div>
            </motion.card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
