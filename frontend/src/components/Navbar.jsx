function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-semibold text-slate-900">
          SkillBridge AI
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#programs" className="transition hover:text-slate-900">
            Programs
          </a>
          <a href="#about" className="transition hover:text-slate-900">
            About
          </a>
          <a href="#contact" className="transition hover:text-slate-900">
            Contact
          </a>
        </nav>

        <a
          href="#career-form"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Navbar;
