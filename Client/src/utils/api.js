const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5000"
  : "https://collabnest-dev.onrender.com";

export const API = {
  CONTACT: `${BASE_URL}/api/contact`,
  DASHBOARD: `${BASE_URL}/api/auth/cr_dash`,
  LOGIN: `${BASE_URL}/api/auth/login`,
  REGISTER: `${BASE_URL}/api/auth/register`,
  GEMINI: `${BASE_URL}/api/gemini`,
  AI_ENHANCE: `${BASE_URL}/api/aiEnhance`,
  SCRIPTS: `${BASE_URL}/api/scripts`,
  SCRIPT_BY_ID: (id) => `${BASE_URL}/api/scripts/${id}`,
  FORGOT_PASSWORD: `${BASE_URL}/api/auth/forgot-password`,
  RESET_PASSWORD: `${BASE_URL}/api/auth/reset-password`,
  GOOGLE_LOGIN: `${BASE_URL}/api/auth/google-login`,

};

