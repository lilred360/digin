export default function DigInSportsHomepage() {
  const sports = [
    "Soccer",
    "T-Ball",
    "Floor Hockey",
    "Golf",
    "Volleyball",
    "Football",
    "Track & Field",
    "Yoga",
  ];

  const benefits = [
    {
      title: "A new sport each week",
      text: "Children stay excited because every week brings a fresh sport, new equipment, and a new challenge.",
    },
    {
      title: "Built for ages 2–8",
      text: "Every activity is scaled for young children with simple instruction, encouragement, and lots of movement.",
    },
    {
      title: "Confidence through play",
      text: "Kids practice listening, teamwork, coordination, and self-confidence while having fun.",
    },
    {
      title: "Easy for daycares and schools",
      text: "We bring a polished, organized enrichment experience that is easy to plug into your schedule.",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Pick a day and time",
      text: "Choose a weekly time slot that works for your daycare, school, or community group.",
    },
    {
      step: "2",
      title: "We bring the Sports Sampler",
      text: "DigIn Sports brings the energy, age-appropriate equipment, and structured lesson plan.",
    },
    {
      step: "3",
      title: "Kids explore and grow",
      text: "Children rotate through exciting sports while building movement skills and confidence.",
    },
  ];

  const seoTopics = [
    "youth sports programs",
    "kids sports classes",
    "multi-sport classes for kids",
    "daycare sports enrichment program",
    "sports classes for ages 2–8",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-sky-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b-4 border-sky-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-2xl font-black tracking-tight text-sky-700">DigIn Sports</div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Sports Sampler for ages 2–8
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
            <a href="#sports-sampler" className="rounded-full px-3 py-2 transition hover:bg-yellow-100">Sports Sampler</a>
            <a href="#sports" className="rounded-full px-3 py-2 transition hover:bg-pink-100">Sports</a>
            <a href="#benefits" className="rounded-full px-3 py-2 transition hover:bg-sky-100">Benefits</a>
            <a href="#contact" className="rounded-full px-3 py-2 transition hover:bg-emerald-100">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border-4 border-slate-900 bg-yellow-300 px-5 py-2.5 text-sm font-black text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-yellow-300 blur-sm" />
          <div className="absolute left-6 top-14 h-24 w-24 rounded-full bg-yellow-200" />
          <div className="absolute right-10 top-16 h-16 w-28 rounded-full bg-white shadow-sm" />
          <div className="absolute right-20 top-10 h-14 w-20 rounded-full bg-white shadow-sm" />
          <div className="absolute right-32 top-18 h-16 w-24 rounded-full bg-white shadow-sm" />
          <div className="absolute left-8 bottom-12 h-20 w-32 rounded-full bg-white/90 shadow-sm" />
          <div className="absolute left-24 bottom-8 h-16 w-24 rounded-full bg-white/90 shadow-sm" />
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_rgba(224,242,254,0.25)_40%,_rgba(224,242,254,0)_75%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit rounded-full border-4 border-slate-900 bg-pink-300 px-5 py-2 text-sm font-black uppercase tracking-[0.14em] text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                Fun youth sports classes for kids
              </div>
              <h1 className="max-w-2xl text-5xl font-black tracking-tight text-sky-700 sm:text-6xl lg:text-7xl">
                Dig into a new sport every week.
              </h1>
              <p className="mt-6 max-w-2xl rounded-[2rem] border-4 border-slate-900 bg-white px-6 py-5 text-lg leading-8 text-slate-700 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                <span className="font-bold text-slate-900">DigIn Sports Sports Sampler</span> is a playful multi-sport program for children ages 2–8. Each week spotlights a different sport so kids can build confidence, stay active, and discover what they love.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full border-4 border-slate-900 bg-orange-400 px-7 py-3 text-center text-sm font-black text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                >
                  Request Program Info
                </a>
                <a
                  href="#sports"
                  className="rounded-full border-4 border-slate-900 bg-white px-7 py-3 text-center text-sm font-black text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                >
                  View Weekly Sports
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-700">
                {seoTopics.map((topic) => (
                  <div key={topic} className="rounded-full border-2 border-sky-300 bg-white px-4 py-2">
                    {topic}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid w-full max-w-xl grid-cols-2 gap-4">
                <div className="rounded-[2rem] border-4 border-slate-900 bg-emerald-300 p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                  <div className="text-sm font-black uppercase tracking-[0.14em]">Move</div>
                  <div className="mt-6 text-3xl font-black">Run, jump, throw, balance</div>
                </div>
                <div className="mt-10 rounded-[2rem] border-4 border-slate-900 bg-yellow-300 p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                  <div className="text-sm font-black uppercase tracking-[0.14em]">Play</div>
                  <div className="mt-6 text-3xl font-black">Fun games and exciting weekly themes</div>
                </div>
                <div className="rounded-[2rem] border-4 border-slate-900 bg-pink-300 p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                  <div className="text-sm font-black uppercase tracking-[0.14em]">Learn</div>
                  <div className="mt-6 text-3xl font-black">Simple skills for every beginner</div>
                </div>
                <div className="mt-10 rounded-[2rem] border-4 border-slate-900 bg-sky-300 p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                  <div className="text-sm font-black uppercase tracking-[0.14em]">Grow</div>
                  <div className="mt-6 text-3xl font-black">Confidence, teamwork, and smiles</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sports-sampler" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2.5rem] border-4 border-slate-900 bg-white px-8 py-10 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">Sports Sampler Program</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                A rotating multi-sport class designed to keep kids excited.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our Sports Sampler program introduces children to a different sport each week so they can explore new skills, stay engaged, and build a positive connection to movement. It is a great fit for families, daycares, preschools, and schools looking for a fun youth sports program for kids ages 2–8.
              </p>
            </div>
          </div>
        </section>

        <section id="sports" className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-700">Weekly Sports Rotation</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Sports kids can explore in the DigIn Sports Sampler.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map((sport, index) => {
              const colors = [
                "bg-emerald-300",
                "bg-yellow-300",
                "bg-pink-300",
                "bg-sky-300",
                "bg-orange-300",
                "bg-lime-300",
                "bg-cyan-300",
                "bg-fuchsia-300",
              ];
              return (
                <div
                  key={sport}
                  className={`rounded-[2rem] border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] ${colors[index % colors.length]}`}
                >
                  <div className="text-sm font-black uppercase tracking-[0.14em] text-slate-700">Week {index + 1}</div>
                  <div className="mt-4 text-2xl font-black text-slate-900">{sport}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="benefits" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">Why families and partners love it</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Built for fun, movement, and strong first sports experiences.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[2rem] border-4 border-slate-900 bg-white p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"
              >
                <h3 className="text-2xl font-black text-slate-900">{benefit.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-b from-sky-100 to-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">How it works</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Easy to launch for daycares, schools, and community groups.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((item, index) => {
                const colors = ["bg-yellow-200", "bg-emerald-200", "bg-pink-200"];
                return (
                  <div
                    key={item.step}
                    className={`rounded-[2rem] border-4 border-slate-900 p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] ${colors[index % colors.length]}`}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-900 bg-white text-xl font-black">
                      {item.step}
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-slate-900">{item.title}</h3>
                    <p className="mt-4 text-lg leading-8 text-slate-700">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2.5rem] border-4 border-slate-900 bg-slate-900 px-8 py-10 text-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-300">About DigIn Sports</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Youth sports programs that feel playful for kids and professional for adults.
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">
              DigIn Sports creates fun, structured youth sports programs and multi-sport classes for children ages 2–8. Our Sports Sampler format helps kids explore soccer, T-ball, floor hockey, golf, volleyball, football, track & field, and yoga in a way that is active, encouraging, and easy to understand.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-slate-900 bg-orange-400 px-8 py-12 text-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] sm:px-12">
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-yellow-300" />
            <div className="absolute right-20 top-16 h-14 w-20 rounded-full bg-white/95" />
            <div className="absolute right-8 top-20 h-12 w-16 rounded-full bg-white/95" />
            <div className="relative">
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Ready to bring Sports Sampler to your kids?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/95">
                Reach out to learn more about our youth sports classes, daycare enrichment options, and multi-sport programs for kids ages 2–8.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:info@diginsports.com"
                  className="rounded-full border-4 border-slate-900 bg-white px-6 py-3 text-center text-sm font-black text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                >
                  Email Us
                </a>
                <a
                  href="tel:+18015551234"
                  className="rounded-full border-4 border-slate-900 bg-yellow-300 px-6 py-3 text-center text-sm font-black text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                >
                  Call Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-sky-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm font-semibold text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 DigIn Sports. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="#sports-sampler" className="hover:text-sky-700">Sports Sampler</a>
            <a href="#sports" className="hover:text-sky-700">Sports</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

