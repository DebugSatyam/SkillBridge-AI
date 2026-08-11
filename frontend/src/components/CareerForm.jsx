import Roadmap from "./Roadmap";
import { generateRoadmap } from "../api/api";
import { useState } from "react";

function CareerForm() {
  const [career, setCareer] = useState("Frontend Developer");
  const [level, setLevel] = useState("Beginner");
  const [hours, setHours] = useState(3);
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    try {
      const data = await generateRoadmap({
        career,
        level,
        hours,
      });

      console.log(data);
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h2 className="text-3xl font-bold text-center mb-8">
          Generate Your Personalized Roadmap
        </h2>

        {/* Career Goal */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Career Goal
          </label>

          <select
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>Data Analyst</option>
            <option>AI Engineer</option>
            <option>Machine Learning Engineer</option>
          </select>
        </div>

        {/* Skill Level */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Skill Level
          </label>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Study Hours */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Study Hours Per Day
          </label>

          <input
            type="range"
            min="1"
            max="8"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full"
          />

          <p className="text-center mt-3 text-blue-600 font-semibold">
            {hours} Hours / Day
          </p>
        </div>

        {/* Button */}
        <button onClick={handleGenerate}
          className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
        >
          Generate My Roadmap 🚀
        </button> 

        {result && <Roadmap roadmap={result.roadmap} />}

      </div>
    </section>
  );
}

export default CareerForm;