import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
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