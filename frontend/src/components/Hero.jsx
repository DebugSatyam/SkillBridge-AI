import { Sparkles } from "lucide-react";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 to-blue-100 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
             <Sparkles size={18}/>
             <span>AI Powered Learning Platform</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Build Your Tech Career
          <br />
          with AI
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Generate personalized learning roadmaps based on your career goals,
          current skill level, and available study time.
        </p>

        <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg flex items-center gap-2 mx-auto">
            Generate My Roadmap
            <ArrowRight size={20}/>
        </button>

      </div>
    </section>
  );
}

export default Hero;