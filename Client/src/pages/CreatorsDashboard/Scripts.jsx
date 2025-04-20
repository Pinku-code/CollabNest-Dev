import React, { useState, useEffect } from "react";
import DashNavbar from "../../components/Navbar_dashboard";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import axios from "axios";
import {API} from "../../utils/api";
const Scripts = () => {
  const [scripts, setScripts] = useState([]);
  const [form, setForm] = useState({ title: "", category: "", content: "" });
  const [editingId, setEditingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  

 



  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast.error("Please login first.");
      navigate("/login");
      return;
    }else {
      console.log("Token found, fetching scripts...");
    fetchScripts();
    }
  }, [token, navigate]);
  

  const fetchScripts = async () => {
    try {
      const res = await axios.get(API.SCRIPTS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.data || res.data.length === 0) {
        console.log("No scripts found");
        setScripts([]);
      } else {
        setScripts(res.data);
      }
    } catch (error) {
      console.log("❌ Failed to fetch:", error || error.response?.data || error.message);

      toast.error("Failed to fetch scripts");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (editingId) {
        setIsUpdating(true);
        await axios.put(API.SCRIPT_BY_ID(editingId), form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Script updated!");
        setIsUpdating(false);
      } else {
        setIsSaving(true);
        await axios.post(API.SCRIPTS, form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Script saved!");
        setIsSaving(false);
      }

      setForm({ title: "", category: "", content: "" });
      setEditingId(null);
      fetchScripts();
    } catch (error) {
      toast.error("Error saving script");
      setIsSaving(false);
      setIsUpdating(false);
    }
  };

  const handleEdit = (script) => {
    setForm({
      title: script.title,
      category: script.category,
      content: script.content,
    });
    setEditingId(script._id);
  };

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      await axios.delete(API.SCRIPT_BY_ID(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Script deleted!");
      fetchScripts();
    } catch (error) {
      toast.error("Error deleting script");
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAIEnhance = async () => {
    setIsEnhancing(true);
    try {
      const res = await axios.post(
        API.AI_ENHANCE,
        { content: form.content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const cleanedResponse = res.data.enhanced
        .replace(/^#+\s?/gm, "")
        .replace(/^\*\s+/gm, "")
        .replace(/\*/g, "")
        .trim();

      setForm({ ...form, content: cleanedResponse });
      toast.success("Script enhanced with AI!");
    } catch (error) {
      console.error("AI enhancement error:", error || error.response?.data || error.message);
      toast.error("AI enhancement failed");
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <>
      <DashNavbar />
      <div className="p-6 max-w-4xl mx-auto mt-30">
        <h1 className="text-3xl font-bold mb-4">Script Manager</h1>

        <div className="mb-4 grid gap-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Script Title"
            className="border p-2 rounded w-full"
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category (e.g., Tech, Lifestyle)"
            className="border p-2 rounded w-full"
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your script here..."
            className="border p-2 rounded w-full h-40"
          />
          <div className="flex gap-4">
            <button
              onClick={handleAIEnhance}
              disabled={isEnhancing}
              className={`bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center ${
                isEnhancing ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isEnhancing ? (
                <>
                  <Spinner /> <span className="ml-2">Enhancing...</span>
                </>
              ) : (
                "Enhance with AI"
              )}
            </button>

            <button
              onClick={handleSave}
              disabled={isSaving || isUpdating}
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center gap-2"
            >
              {(isSaving || isUpdating) ? (
                <>
                  <Spinner />
                  <span>{editingId ? "Updating..." : "Saving..."}</span>
                </>
              ) : editingId ? (
                "Update Script"
              ) : (
                "Save Script"
              )}
            </button>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your Scripts</h2>
        <div className="grid gap-4">
          {Array.isArray(scripts) &&
          scripts.length === 0 ? (<div className="text-gray-500 text-center mt-4 text-lg">
            <p>No scripts found 📭     Start by adding one above! ✍️</p>
          </div>) : (
            scripts.map((script) => (
              <div key={script._id} className="border p-4 rounded shadow">
                <h3 className="text-lg font-bold">{script.title}</h3>
                <p className="text-sm italic text-gray-500">
                  Category: {script.category}
                </p>
                <AnimatePresence initial={false}>
                  {expandedId === script._id ? (
                    <motion.p
                      key="expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-2 whitespace-pre-wrap overflow-hidden"
                    >
                      {script.content}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="collapsed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-2 whitespace-pre-wrap overflow-hidden"
                    >
                      {script.content && script.content.length > 100
                        ? `${script.content.slice(0, 100)}...`
                        : script.content}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  onClick={() => handleToggle(script._id)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 text-blue-600 text-sm mt-2 cursor-pointer transition duration-300"
                >
                  {expandedId === script._id ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      View More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(script)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(script._id)}
                    disabled={deletingId === script._id}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    {deletingId === script._id ? (
                      <>
                        <Spinner /> <span className="ml-2">Deleting...</span>
                      </>
                    ) : (
                      "Delete"
                    )}
                  </button>
                </div>
              </div>
            )))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Scripts;
