import axios from "axios";

const API = axios.create({
  baseURL: "https://skillbridge-ai-backend-ulvc.onrender.com"
});

export const generateRoadmap = async (formData) => {
  try {
    const response = await API.post("/generate-roadmap", formData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};