const highlights = [
  {
    title: 'Designed for ages 2-8',
    text: 'Every activity is adjusted for early learners with clear instructions, movement-focused play, and age-appropriate pacing.',
  },
  {
    title: 'A new sport each week',
    text: 'Children stay engaged by exploring a rotating lineup of sports, equipment, and foundational movement skills.',
  },
  {
    title: 'Easy for partner organizations',
    text: 'DigIn fits neatly into daycare, preschool, and school schedules with a structured format that is simple to host.',
  },
];

const programDetails = [
  {
    label: 'Format',
    value: 'Weekly multi-sport enrichment',
  },
  {
    label: 'Focus',
    value: 'Confidence, coordination, teamwork',
  },
  {
    label: 'Audience',
    value: 'Families, daycares, preschools, schools',
  },
];

const partnerBenefits = [
  {
    title: 'Structured and dependable',
    text: 'Programs are organized around repeatable routines that help children settle in quickly and help partners plan with confidence.',
  },
  {
    title: 'Professional communication',
    text: 'Families and administrators need clarity. The site now speaks directly to both groups with cleaner, more credible messaging.',
  },
  {
    title: 'Built around first experiences',
    text: 'The emphasis stays on positive early exposure to sports so children can participate, learn, and enjoy being active.',
  },
];

const sports = [
  'Soccer',
  'Football',
  'T-Ball',
  'Golf',
  'Volleyball',
  'Field Hockey',
  'Yoga',
  'Track & Field',
];

const process = [
  {
    step: '01',
    title: 'Choose your schedule',
    text: 'Pick a weekly time that works for your group, program calendar, and available space.',
  },
  {
    step: '02',
    title: 'Launch the program',
    text: 'DigIn brings a clear lesson flow, age-appropriate equipment, and a consistent multi-sport experience.',
  },
  {
    step: '03',
    title: 'Keep kids engaged',
    text: 'Children explore a fresh sport each week while building comfort, confidence, and movement skills.',
  },
];

export default function DigInSportsHomepage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f4ed_0%,#ffffff_38%,#f5f8fb_100%)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="font-[family:var(--font-display)] text-3xl leading-none text-slate-950">
              DigIn Sports
            </div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Youth Sports Enrichment
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#program" className="transition hover:text-slate-950">
              Program
            </a>
            <a href="#sports" className="transition hover:text-slate-950">
              Sports
            </a>
            <a href="#partners" className="transition hover:text-slate-950">
              Partners
            </a>
            <a href="#contact" className="transition hover:text-slate-950">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Request Information
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_left,rgba(193,224,204,0.7),transparent_48%),radial-gradient(circle_at_top_right,rgba(226,199,119,0.35),transparent_34%)]" />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-800">
                Multi-sport classes for young children
              </p>
              <h1 className="mt-5 max-w-3xl font-[family:var(--font-display)] text-5xl leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
                A more polished way to introduce kids to sports.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                DigIn Sports helps children ages 2-8 explore a different sport each week through structured, engaging classes that feel fun for kids and dependable for families, schools, and care programs.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-emerald-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Start a Conversation
                </a>
                <a
                  href="tel:+15714666319"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Call (571) 466-6319
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {programDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)]"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {detail.label}
                    </div>
                    <div className="mt-2 text-base font-semibold text-slate-950">{detail.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-4">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_32px_80px_-40px_rgba(15,23,42,0.45)]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Program Snapshot
                    </div>
                    <div className="mt-2 font-[family:var(--font-display)] text-3xl text-slate-950">
                      Sports Sampler
                    </div>
                  </div>
                  <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-900">
                    Ages 2-8
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {highlights.map((item) => (
                    <div key={item.title} className="rounded-2xl bg-slate-50 p-5">
                      <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="mx-auto max-w-6xl px-6 py-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_28px_70px_-38px_rgba(15,23,42,0.6)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Why It Works
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl leading-tight">
                Professional enough for partners, welcoming enough for kids.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Early sports experiences matter. DigIn Sports is built to create a positive first impression of movement, teamwork, and learning while keeping the program simple to host and easy to explain to families.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {partnerBenefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.45)]"
                >
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sports" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
              Weekly Rotation
            </p>
            <h2 className="font-[family:var(--font-display)] text-4xl text-slate-950 sm:text-5xl">
              Sports children can explore throughout the program.
            </h2>
            <p className="text-base leading-8 text-slate-600">
              The rotating format keeps classes fresh while exposing children to a broad mix of movement patterns, equipment, and sports vocabulary.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map((sport) => (
              <div
                key={sport}
                className="rounded-[1.75rem] border border-slate-200 bg-white px-5 py-6 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.45)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Featured Sport</div>
                <div className="mt-3 text-2xl font-semibold text-slate-950">{sport}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#fffdf8_0%,#f4f8f5_100%)] p-8 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.45)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
                  For Schools And Care Programs
                </p>
                <h2 className="mt-4 font-[family:var(--font-display)] text-4xl text-slate-950 sm:text-5xl">
                  A simple program structure that feels organized from day one.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  The site now explains DigIn as a credible enrichment partner, not just a playful activity idea. That makes the offering easier for administrators to evaluate and easier for families to trust.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {process.map((item) => (
                  <div key={item.step} className="rounded-[1.75rem] bg-white p-6">
                    <div className="text-sm font-semibold tracking-[0.18em] text-emerald-700">{item.step}</div>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_32px_80px_-42px_rgba(15,23,42,0.65)] lg:grid-cols-[1fr_0.85fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Contact DigIn Sports
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl sm:text-5xl">
                Ready to bring a stronger sports program to your community?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Reach out to discuss schedules, age groups, and how DigIn Sports can fit into your school, daycare, preschool, or family program.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 text-slate-950">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Start Here
              </div>
              <div className="mt-5 space-y-4">
                <a
                  href="mailto:admin@diginsports.com"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </span>
                    <span className="mt-1 block text-base font-semibold text-slate-950">
                      admin@diginsports.com
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-emerald-700">Write</span>
                </a>

                <a
                  href="tel:+15714666319"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Phone
                    </span>
                    <span className="mt-1 block text-base font-semibold text-slate-950">
                      (571) 466-6319
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-emerald-700">Call</span>
                </a>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Best for administrators, program directors, and families who want a simple next step to learn more.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>(c) 2026 DigIn Sports. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="#program" className="transition hover:text-slate-950">
              Program
            </a>
            <a href="#sports" className="transition hover:text-slate-950">
              Sports
            </a>
            <a href="#contact" className="transition hover:text-slate-950">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
