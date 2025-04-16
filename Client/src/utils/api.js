import Navbar_dashboard from "../components/Navbar_dashboard";

const BASE_URL = import.meta.env.VITE_API_URL;

export const API = {
  CONTACT: `${BASE_URL}/api/contact`,
  DASHBOARD: `${BASE_URL}/api/auth/cr_dash`,
  LOGIN: `${BASE_URL}/api/login`,
  REGISTER: `${BASE_URL}/api/register`,
  GEMINI:`${BASE_URL}/api/gemini`,
  // add more endpoints as needed
};
