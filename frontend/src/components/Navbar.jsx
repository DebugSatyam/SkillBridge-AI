import { GraduationCap } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-blue-600" size={32} />
          <h1 className="text-2xl font-bold text-blue-600">SkillBridge AI</h1>
        </div>

        <ul className="flex items-center gap-8">
          <li className="cursor-pointer hover:text-blue-600 transition">Home</li>
          <li className="cursor-pointer hover:text-blue-600 transition">About</li>
          <li className="cursor-pointer hover:text-blue-600 transition">GitHub</li>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition">
            Get Started
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;