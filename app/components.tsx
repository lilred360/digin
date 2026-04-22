import Link from 'next/link';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/program', label: 'Program' },
  { href: '/sports', label: 'Sports' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#87d8ff_0%,#b8f0ff_18%,#fff5ae_42%,#ffd5ee_68%,#fff4f7_100%)] text-slate-950">
      <PlayfulBackdrop />
      <div className="relative z-10">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-slate-900 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 py-4 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="shrink-0">
              <div className="font-[family:var(--font-display)] text-3xl leading-none text-sky-700">
                DigIn Sports
              </div>
              <div className="mt-1 text-[11px] font-black uppercase tracking-[0.28em] text-orange-500">
                'Dig In' to The World of Sports!
              </div>
            </Link>

            <Link
              href="/contact"
              className="w-fit rounded-full border-4 border-slate-900 bg-pink-300 px-5 py-2 text-sm font-black text-slate-900 shadow-[4px_4px_0_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0_rgba(15,23,42,1)]"
            >
              Join The Fun
            </Link>
          </div>

          <nav className="flex flex-wrap items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border-2 border-transparent bg-white px-4 py-2 text-sm font-black text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-900 hover:bg-yellow-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t-4 border-slate-900 bg-white/85">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm font-bold text-slate-700 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>(c) 2026 DigIn Sports. Built for kids and trusted by grown-ups.</div>
        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-sky-700">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  accent: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-8 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-12 lg:pt-20">
        <div className="max-w-3xl">
          <p className={`inline-flex rounded-full border-4 border-slate-900 px-5 py-2 text-sm font-black uppercase tracking-[0.18em] shadow-[5px_5px_0_rgba(15,23,42,1)] ${accent}`}>
            {eyebrow}
          </p>
          <h1 className="mt-6 font-[family:var(--font-display)] text-5xl leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl rounded-[2rem] border-4 border-slate-900 bg-white/90 px-6 py-5 text-lg leading-8 text-slate-700 shadow-[8px_8px_0_rgba(15,23,42,1)]">
            {text}
          </p>
        </div>

        <div className="flex items-end">{children}</div>
      </div>
    </section>
  );
}

export function InfoCard({
  title,
  text,
  color,
}: {
  title: string;
  text: string;
  color: string;
}) {
  return (
    <div className={`rounded-[2rem] border-4 border-slate-900 p-6 shadow-[7px_7px_0_rgba(15,23,42,1)] transition hover:-translate-y-1 ${color}`}>
      <h3 className="text-2xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-8 text-slate-800">{text}</p>
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-700">{eyebrow}</p>
      <h2 className="mt-3 font-[family:var(--font-display)] text-4xl text-slate-950 sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-700">{text}</p> : null}
    </div>
  );
}

function PlayfulBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.85),transparent_24%)]" />
      <div className="absolute -left-20 top-24 h-52 w-52 rounded-full bg-pink-300/80 blur-md animate-float-slow" />
      <div className="absolute right-[-4rem] top-32 h-64 w-64 rounded-full bg-yellow-200/85 blur-md animate-float-medium" />
      <div className="absolute left-1/4 top-[28rem] h-28 w-28 rounded-full bg-lime-300/80 animate-bobble" />
      <div className="absolute right-1/4 top-[40rem] h-20 w-20 rounded-full bg-violet-300/80 animate-bobble-delayed" />
      <div className="absolute bottom-24 left-[-3rem] h-48 w-48 rounded-full bg-cyan-300/70 blur-md animate-float-medium" />
      <div className="absolute bottom-8 right-0 h-56 w-56 rounded-full bg-orange-300/60 blur-md animate-float-slow" />
      <div className="absolute left-[8%] top-16 h-16 w-28 rounded-full bg-white shadow-[0_6px_0_rgba(15,23,42,0.08)]" />
      <div className="absolute left-[12%] top-12 h-14 w-24 rounded-full bg-white shadow-[0_6px_0_rgba(15,23,42,0.08)]" />
      <div className="absolute left-[16%] top-16 h-16 w-28 rounded-full bg-white shadow-[0_6px_0_rgba(15,23,42,0.08)]" />
      <div className="absolute right-[10%] top-24 h-16 w-28 rounded-full bg-white shadow-[0_6px_0_rgba(15,23,42,0.08)]" />
      <div className="absolute right-[14%] top-20 h-14 w-24 rounded-full bg-white shadow-[0_6px_0_rgba(15,23,42,0.08)]" />
      <div className="absolute right-[18%] top-24 h-16 w-28 rounded-full bg-white shadow-[0_6px_0_rgba(15,23,42,0.08)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent_0%,rgba(126,214,87,0.35)_30%,rgba(95,190,71,0.7)_100%)]" />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-[radial-gradient(circle_at_10%_120%,#6dcc58_18%,transparent_19%),radial-gradient(circle_at_30%_120%,#6dcc58_18%,transparent_19%),radial-gradient(circle_at_50%_120%,#6dcc58_18%,transparent_19%),radial-gradient(circle_at_70%_120%,#6dcc58_18%,transparent_19%),radial-gradient(circle_at_90%_120%,#6dcc58_18%,transparent_19%)] opacity-80" />
    </div>
  );
}
