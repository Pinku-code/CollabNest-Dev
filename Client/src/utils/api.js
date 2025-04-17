const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://collabnest-dev.onrender.com";           // 🔁 local dev




export const API = {
  CONTACT: `${BASE_URL}/api/contact`,
  DASHBOARD: `${BASE_URL}/api/auth/cr_dash`,
  LOGIN: `${BASE_URL}/api/login`,
  REGISTER: `${BASE_URL}/api/register`,
  GEMINI:`${BASE_URL}/api/gemini`,
  // add more endpoints as needed
};
