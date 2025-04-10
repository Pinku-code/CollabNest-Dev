import { useEffect, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Auto-hide message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="relative max-w-xl mx-auto mt-10 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      {submitted && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 rounded-2xl">
          <div className="bg-violet-600 text-white px-6 py-4 rounded-xl shadow-lg">
            Thank you for contacting us!
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Inputs as before */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 h-32 border border-gray-300 dark:border-gray-700 rounded-lg resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary w-full  text-white py-3 rounded-lg font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
