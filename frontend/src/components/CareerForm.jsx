import { useState } from 'react';

function CareerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    experience: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="career-form" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Tell us about your career goal</h2>
      <p className="mt-2 text-sm text-slate-600">
        Share a few details and we’ll help you find the right next step.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-indigo-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-indigo-500"
          required
        />
        <input
          type="text"
          name="goal"
          placeholder="Career goal"
          value={formData.goal}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-indigo-500"
          required
        />
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
          required
        >
          <option value="">Select experience level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <button
          type="submit"
          className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-sm font-medium text-emerald-600">
          Thanks! We’ll reach out with tailored recommendations shortly.
        </p>
      )}
    </section>
  );
}

export default CareerForm;
