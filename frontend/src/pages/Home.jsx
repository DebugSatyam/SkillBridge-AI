import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CareerForm from '../components/CareerForm';

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <Hero />

        <section id="about" className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
              Why SkillBridge
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              Build momentum with practical, guided support.
            </h3>
            <p className="mt-4 text-slate-600">
              From beginner-friendly paths to advanced transitions, SkillBridge helps
              you learn faster and move with more confidence.
            </p>
          </div>

          <CareerForm />
        </section>
      </main>
    </div>
  );
}

export default Home;
