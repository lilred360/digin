export default function DigInSportsHomepage() {
  const programs = [
    {
      title: "Daycare Sports Enrichment",
      description:
        "On-site sports sessions for daycares and preschools that are fun, organized, and easy to add to the weekly routine.",
    },
    {
      title: "Multi-Sport Classes",
      description:
        "Children explore a different sport over time while building coordination, confidence, and foundational movement skills.",
    },
    {
      title: "School & Community Programs",
      description:
        "Flexible youth sports programming for schools, recreation groups, and community partners looking for an engaging activity option.",
    },
  ];

  const highlights = [
    "Built for children ages 2–8",
    "Structured sessions that keep kids moving and engaged",
    "Encouraging coaching style that builds confidence",
    "Simple, polished programs for parents and partners to trust",
  ];

  const steps = [
    {
      step: "01",
      title: "Choose your format",
      text: "Start with a daycare partnership, a small class, or a community-based program.",
    },
    {
      step: "02",
      title: "We run the program",
      text: "DigIn Sports brings the energy, structure, and age-appropriate coaching to each session.",
    },
    {
      step: "03",
      title: "Kids learn through play",
      text: "Every class is designed to improve movement, listening, teamwork, and enjoyment of sports.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-2xl font-black tracking-tight">DigIn Sports</div>
            <div className="text-xs text-slate-500">Youth sports programs that get kids moving</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#programs" className="transition hover:text-slate-600">Programs</a>
            <a href="#how-it-works" className="transition hover:text-slate-600">How It Works</a>
            <a href="#about" className="transition hover:text-slate-600">About</a>
            <a href="#contact" className="transition hover:text-slate-600">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                Active kids. Confident kids. Happy families.
              </div>
              <h1 className="max-w-xl text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
                Youth sports programs that help kids dig in and grow.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                DigIn Sports creates fun, structured sports experiences for children ages 2–8 through daycare enrichment, multi-sport classes, and community-based programs.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Request Information
                </a>
                <a
                  href="#programs"
                  className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  View Programs
                </a>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold">2–8</div>
                  <div className="mt-1 text-slate-500">Ages served</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold">Multi</div>
                  <div className="mt-1 text-slate-500">Sport focus</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold">On-site</div>
                  <div className="mt-1 text-slate-500">Easy setup</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-emerald-200 p-8 shadow-lg shadow-emerald-100">
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-700">Movement</div>
                  <div className="mt-10 text-3xl font-black">Move</div>
                  <div className="mt-2 text-slate-700">Running, balance, agility, and body control</div>
                </div>
                <div className="mt-8 rounded-[2rem] bg-amber-200 p-8 shadow-lg shadow-amber-100 sm:mt-16">
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-700">Confidence</div>
                  <div className="mt-10 text-3xl font-black">Grow</div>
                  <div className="mt-2 text-slate-700">Encouraging coaching and early success</div>
                </div>
                <div className="rounded-[2rem] bg-sky-200 p-8 shadow-lg shadow-sky-100">
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-700">Teamwork</div>
                  <div className="mt-10 text-3xl font-black">Connect</div>
                  <div className="mt-2 text-slate-700">Listening, cooperation, and social development</div>
                </div>
                <div className="mt-8 rounded-[2rem] bg-orange-200 p-8 shadow-lg shadow-orange-100 sm:mt-16">
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-700">Discovery</div>
                  <div className="mt-10 text-3xl font-black">Explore</div>
                  <div className="mt-2 text-slate-700">New sports and fresh challenges</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Programs</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Flexible youth sports options for growing communities.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Whether you are a parent, daycare director, or school partner, DigIn Sports offers a polished program that keeps kids active and engaged.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <div key={program.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold">{program.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{program.description}</p>
                <a href="#contact" className="mt-6 inline-block text-sm font-semibold text-emerald-700">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Why DigIn Sports</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                A brand that feels energetic for kids and professional for adults.
              </h2>
            </div>
            <div className="grid gap-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">How it works</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Simple to start. Easy to grow.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="rounded-3xl border border-slate-200 p-8">
                <div className="text-sm font-bold text-emerald-700">{item.step}</div>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-slate-900 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">About</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Positive first sports experiences start here.
              </h2>
            </div>
            <div className="text-slate-300">
              <p className="leading-8">
                DigIn Sports was created to give young children a strong start through fun, movement-based sports programming. We believe kids develop best when classes are energetic, well-structured, and centered on encouragement.
              </p>
              <p className="mt-5 leading-8">
                Our goal is to make youth sports feel accessible, exciting, and professionally run from the very first session.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-600 to-orange-500 px-8 py-12 text-white shadow-xl sm:px-12">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Ready to build a program with DigIn Sports?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Reach out to ask about partnerships, enrollment, program options, or upcoming launch plans.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="admin@diginsports.com"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:opacity-90"
              >
                Email Us
              </a>
              <a
                href="tel:+12345678"
                className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call Today
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 DigIn Sports. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
