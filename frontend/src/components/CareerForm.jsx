import Roadmap from "./Roadmap";
import { generateRoadmap } from "../api/api";
import { useState } from "react";

function CareerForm() {
  const [career, setCareer] = useState("Frontend Developer");
  const [level, setLevel] = useState("Beginner");
  const [hours, setHours] = useState(3);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      const data = await generateRoadmap({
        career,
        level,
        hours,
      });

      console.log("ROADMAP DATA:", data);

      setResult(data);

    } catch (error) {
      console.error("API Error:", error);

      setError(
        "We couldn't generate your roadmap right now. Please try again."
      );

    } finally {
      setLoading(false);
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
        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`w-full mt-8 py-4 rounded-xl font-semibold text-white transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Building Your Roadmap..." : "Generate My Roadmap 🚀"}
        </button>
        {loading && (
          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Building your personalized roadmap...
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Analyzing your goals and creating your learning path.
            </p>
          </div>
        )}

        {error && (
          <div className="mt-8 p-5 rounded-2xl bg-red-50 border border-red-200 text-center">

            <div className="text-2xl mb-2">⚠️</div>

            <h3 className="font-semibold text-red-700">Something went wrong</h3>

            <p className="text-sm text-red-600 mt-2">{error}</p>

          </div>
        )}
        {result && <Roadmap roadmap={result.roadmap} />}

      </div>
    </section>
  );
}

export default CareerForm;