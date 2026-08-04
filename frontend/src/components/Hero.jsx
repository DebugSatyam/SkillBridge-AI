function Hero() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
          AI-powered career growth
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Bridge the gap between ambition and opportunity.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">
          Discover tailored programs, sharpen your skills, and connect with real-world
          pathways that match your goals.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#career-form"
            className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Explore Career Paths
          </a>
          <a
            href="#about"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
          >
            Learn More
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
          <div>
            <p className="text-2xl font-semibold text-slate-900">500+</p>
            <p>guided learners</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-slate-900">92%</p>
            <p>career transition success</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-indigo-600">What you get</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
          A clear roadmap for your next move
        </h2>
        <ul className="mt-6 space-y-3 text-sm text-slate-600">
          <li>• Personalized skill recommendations</li>
          <li>• Live project-based learning paths</li>
          <li>• Mentorship and interview prep</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
