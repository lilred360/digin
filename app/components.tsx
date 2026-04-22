import Link from 'next/link';
import type { ReactNode } from 'react';
import { benefits, contactDetails, sportsWeeks } from './site-data';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/program', label: 'Programs' },
  { href: '/about', label: 'About Us' },
  { href: '/sports', label: 'Sports' },
  { href: '/contact', label: 'Contact' },
];

export function SiteChrome({
  children,
  currentPath,
}: {
  children: ReactNode;
  currentPath: string;
}) {
  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#2ca4ec_0%,#82d4ff_14%,#b7e9ff_40%,#d7f2ff_100%)] text-slate-900">
      <SkyBackground />
      <div className="relative z-10">
        <SiteHeader currentPath={currentPath} />
        {children}
        <CallToAction />
      </div>
    </div>
  );
}

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="relative px-4 pb-2 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <CloudPanel className="px-6 py-7 sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <LogoMark />
            </Link>

            <nav className="flex flex-wrap items-center gap-6 text-base font-black text-blue-900">
              {navItems.map((item) => {
                const active = currentPath === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative pb-2 transition ${active ? 'text-orange-500' : 'text-blue-900 hover:text-orange-500'}`}
                  >
                    {item.label}
                    {active ? (
                      <span className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-orange-400" />
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>
        </CloudPanel>
      </div>
    </header>
  );
}

export function HomeHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-2 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[3rem] px-8 py-10 sm:px-10 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.65),rgba(255,255,255,0)_62%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_60%_48%,rgba(255,255,255,0.1)_0deg,rgba(255,255,255,0.38)_20deg,rgba(255,255,255,0.08)_42deg,rgba(255,255,255,0.32)_66deg,rgba(255,255,255,0.08)_94deg,rgba(255,255,255,0.28)_122deg,rgba(255,255,255,0.08)_150deg,rgba(255,255,255,0.34)_180deg,rgba(255,255,255,0.08)_214deg,rgba(255,255,255,0.3)_248deg,rgba(255,255,255,0.08)_282deg,rgba(255,255,255,0.28)_320deg,rgba(255,255,255,0.1)_360deg)] opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,rgba(149,215,72,0)_0%,rgba(149,215,72,0.2)_15%,rgba(108,198,62,0.9)_100%)]" />
        <div className="absolute bottom-0 left-[-2%] h-36 w-[38%] rounded-t-[100%] bg-green-500/85" />
        <div className="absolute bottom-0 left-[22%] h-24 w-[30%] rounded-t-[100%] bg-lime-400/90" />
        <div className="absolute bottom-0 right-[8%] h-32 w-[34%] rounded-t-[100%] bg-green-500/85" />
        <div className="absolute bottom-0 right-[-4%] h-28 w-[28%] rounded-t-[100%] bg-lime-400/90" />

        <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl pt-5">
            <h1 className="font-[family:var(--font-display)] text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              <span className="block text-blue-800">Play More.</span>
              <span className="mt-2 block text-green-600">Learn More.</span>
              <span className="mt-2 block text-orange-400">Grow More.</span>
            </h1>

            <p className="mt-8 text-2xl font-black text-blue-900">
              Youth sports programs for kids ages 2-8
            </p>
            <div className="mt-5 h-2 w-80 max-w-full rounded-full bg-[radial-gradient(circle,#43b047_0_32%,transparent_36%)] bg-[length:18px_10px] bg-repeat-x" />
            <p className="mt-6 max-w-lg text-2xl leading-[1.55] text-blue-900">
              Sports Sampler keeps kids active, builds confidence, and makes movement fun week after week.
            </p>

            <Link
              href="/program"
              className="mt-8 inline-flex items-center rounded-full bg-blue-800 px-7 py-4 text-xl font-black text-white shadow-[0_8px_0_rgba(16,55,145,0.18)] transition hover:-translate-y-0.5"
            >
              <StarBurst className="mr-3 h-6 w-6 text-yellow-300" />
              Multi-Sport. Maximum Fun.
            </Link>
          </div>

          <div className="relative flex items-end justify-center">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  title,
  subtitle,
  currentPath,
}: {
  title: string;
  subtitle: string;
  currentPath: string;
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[3rem] px-8 py-10 sm:px-10 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.68),rgba(255,255,255,0)_64%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_170deg_at_55%_46%,rgba(255,255,255,0.1)_0deg,rgba(255,255,255,0.34)_22deg,rgba(255,255,255,0.08)_52deg,rgba(255,255,255,0.28)_80deg,rgba(255,255,255,0.08)_112deg,rgba(255,255,255,0.3)_144deg,rgba(255,255,255,0.08)_176deg,rgba(255,255,255,0.32)_208deg,rgba(255,255,255,0.08)_240deg,rgba(255,255,255,0.28)_272deg,rgba(255,255,255,0.08)_308deg,rgba(255,255,255,0.28)_336deg,rgba(255,255,255,0.1)_360deg)] opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,rgba(149,215,72,0)_0%,rgba(149,215,72,0.18)_16%,rgba(108,198,62,0.88)_100%)]" />
        <div className="absolute bottom-0 left-[-2%] h-32 w-[38%] rounded-t-[100%] bg-green-500/85" />
        <div className="absolute bottom-0 left-[24%] h-20 w-[28%] rounded-t-[100%] bg-lime-400/90" />
        <div className="absolute bottom-0 right-[10%] h-[7.5rem] w-[34%] rounded-t-[100%] bg-green-500/85" />

        <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl pt-6">
            <div className="inline-flex rounded-full bg-white/90 px-5 py-2 text-sm font-black uppercase tracking-[0.16em] text-orange-500 shadow-sm">
              DigIn Sports
            </div>
            <h1 className="mt-6 font-[family:var(--font-display)] text-5xl uppercase leading-[0.95] text-blue-800 sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-xl text-2xl leading-[1.55] text-blue-900">{subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-orange-400 px-7 py-4 text-xl font-black text-white shadow-[0_8px_0_rgba(234,119,29,0.2)] transition hover:-translate-y-0.5"
              >
                Contact DigIn
              </Link>
              <Link
                href={currentPath === '/sports' ? '/program' : '/sports'}
                className="rounded-full bg-blue-800 px-7 py-4 text-xl font-black text-white shadow-[0_8px_0_rgba(16,55,145,0.18)] transition hover:-translate-y-0.5"
              >
                {currentPath === '/sports' ? 'View Program' : 'View Sports'}
              </Link>
            </div>
          </div>

          <div className="relative flex items-end justify-center">
            <HeroScene compact />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SportsSamplerSection({
  title = 'Sports Sampler',
  subtitle = 'A new sport every week keeps kids engaged, excited, and coming back for more!',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-[#fbf6ef] px-4 py-14 sm:px-6 lg:px-8">
      <WaveTop />
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {sportsWeeks.map((sport) => (
            <div
              key={sport.week}
              className="rounded-[1.75rem] bg-white px-4 pb-5 pt-4 text-center shadow-[0_8px_20px_rgba(26,77,136,0.08)]"
            >
              <div className={`mx-auto inline-flex rounded-2xl px-4 py-2 text-xl font-black uppercase text-white ${sport.badgeClass}`}>
                {sport.week}
              </div>
              <div className="mt-5 flex justify-center">
                <SportIcon kind={sport.icon} className="h-24 w-24" />
              </div>
              <div className={`mt-4 text-2xl font-black leading-tight ${sport.textClass}`}>
                {sport.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection({
  title = 'More Than Just Sports',
}: {
  title?: string;
}) {
  return (
    <section className="relative bg-[#cfeeff] px-4 py-14 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-12 bg-[linear-gradient(180deg,#fbf6ef_0%,#cfeeff_100%)] [mask-image:radial-gradient(circle_at_2rem_-0.25rem,transparent_3rem,black_3.1rem)] [mask-size:8rem_100%]" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-tr-[100%] bg-lime-200/75" />
      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-tl-[100%] bg-lime-200/75" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={title} subtitle={null} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white px-7 py-8 text-center shadow-[0_10px_20px_rgba(26,77,136,0.08)]">
              <div className={`mx-auto flex h-20 w-20 items-center justify-center ${item.accentClass}`}>
                <BenefitIcon kind={item.icon} className="h-16 w-16" />
              </div>
              <h3 className={`mt-4 text-2xl font-black ${item.accentClass}`}>{item.title}</h3>
              <p className="mt-4 text-xl leading-[1.5] text-blue-900">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CopyCards({
  items,
  colorClasses,
}: {
  items: { title: string; text: string }[];
  colorClasses: string[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`rounded-[2rem] border-4 border-white px-6 py-7 shadow-[0_8px_20px_rgba(26,77,136,0.12)] ${colorClasses[index % colorClasses.length]}`}
        >
          <h3 className="font-[family:var(--font-display)] text-3xl uppercase leading-tight text-blue-800">
            {item.title}
          </h3>
          <p className="mt-4 text-xl leading-[1.6] text-blue-900">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function TextSection({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-lg font-black uppercase tracking-[0.14em] text-orange-500">{eyebrow}</p>
          <h2 className="mt-4 font-[family:var(--font-display)] text-5xl uppercase leading-[0.95] text-blue-800">
            {title}
          </h2>
          <p className="mt-6 text-2xl leading-[1.55] text-blue-900">{text}</p>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="relative bg-orange-400 px-4 pb-12 pt-8 sm:px-6 lg:px-8">
      <div className="absolute left-6 top-8">
        <StarBurst className="h-10 w-10 text-white" />
      </div>
      <div className="absolute right-10 top-7 text-white">
        <PaperPlane className="h-16 w-16" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex items-end gap-5">
          <div className="relative h-48 w-36 shrink-0">
            <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-[#ffd4b7]" />
            <div className="absolute left-10 top-6 h-8 w-10 rounded-full bg-[#7d4b2b]" />
            <div className="absolute left-9 top-12 h-2.5 w-2.5 rounded-full bg-slate-900" />
            <div className="absolute left-[4.3rem] top-12 h-2.5 w-2.5 rounded-full bg-slate-900" />
            <div className="absolute left-11 top-[3.9rem] h-3 w-6 rounded-b-full border-b-4 border-orange-500" />
            <div className="absolute left-2 top-[5.6rem] h-24 w-32 rounded-[2rem] bg-yellow-300" />
            <div className="absolute left-9 top-[6.5rem] h-12 w-12 rounded-full border-[10px] border-orange-500" />
            <div className="absolute left-0 top-[6.8rem] h-7 w-12 rotate-[-30deg] rounded-full bg-[#ffd4b7]" />
          </div>
          <DoodleLoop className="hidden h-24 w-24 text-white sm:block" />
        </div>

        <div className="pb-4 text-center lg:text-left">
          <h2 className="font-[family:var(--font-display)] text-4xl uppercase leading-[1] text-blue-900 sm:text-5xl lg:text-6xl">
            Ready To Bring Sports Sampler To Your School Or Program?
          </h2>
          <p className="mt-5 text-2xl font-black text-blue-900">
            We make it easy, fun, and stress-free!
          </p>
          <div className="mt-7 flex flex-col gap-4 text-xl font-black text-blue-900 lg:flex-row lg:items-center lg:gap-8">
            {contactDetails.map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                <ContactIcon kind={index === 0 ? 'mail' : 'phone'} className="h-8 w-8" />
                <a href={item.href} className="hover:text-white">
                  {item.label}: {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CloudTrim />
    </section>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string | null;
}) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-5">
        <StarBurst className="h-12 w-12 text-yellow-400" />
        <h2 className="font-[family:var(--font-display)] text-5xl uppercase leading-none text-blue-800 sm:text-6xl">
          {title}
        </h2>
        <StarBurst className="h-12 w-12 text-yellow-400" />
      </div>
      {subtitle ? <p className="mt-5 text-2xl text-blue-900">{subtitle}</p> : null}
    </div>
  );
}

function LogoMark() {
  return (
    <div className="flex items-end gap-2">
      <div className="font-[family:var(--font-display)] text-6xl uppercase leading-none text-blue-800">
        Dig
        <span className="relative inline-block px-1 text-orange-400">
          i
          <span className="absolute left-1/2 top-[-0.35rem] h-3 w-3 -translate-x-1/2 rounded-full bg-orange-400" />
        </span>
        n
      </div>
      <div className="pb-2 text-lg font-black uppercase tracking-[0.16em] text-green-600">Sports</div>
    </div>
  );
}

function CloudPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative rounded-[3rem] bg-white shadow-[0_16px_30px_rgba(16,55,145,0.08)] ${className ?? ''}`}>
      <CloudRow top />
      <CloudRow />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function CloudRow({ top = false }: { top?: boolean }) {
  const circles = [
    'h-16 w-16',
    'h-20 w-20',
    'h-16 w-16',
    'h-[4.5rem] w-[4.5rem]',
    'h-16 w-16',
    'h-20 w-20',
    'h-16 w-16',
    'h-[4.5rem] w-[4.5rem]',
    'h-16 w-16',
    'h-20 w-20',
    'h-16 w-16',
    'h-[4.5rem] w-[4.5rem]',
  ];

  return (
    <div className={`pointer-events-none absolute ${top ? '-top-8' : '-bottom-8'} inset-x-5 flex items-center justify-between`}>
      {circles.map((size, index) => (
        <div key={`${top ? 'top' : 'bottom'}-${index}`} className={`${size} rounded-full bg-white`} />
      ))}
    </div>
  );
}

function CloudTrim() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[-2.6rem] flex items-end justify-between px-2">
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className={`${index % 2 === 0 ? 'h-16 w-16' : 'h-20 w-20'} rounded-full bg-white`}
        />
      ))}
    </div>
  );
}

function WaveTop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[-1px] h-10 bg-[#fbf6ef] [mask-image:radial-gradient(circle_at_2rem_100%,transparent_3rem,black_3.1rem)] [mask-size:8rem_100%]" />
  );
}

function SkyBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),rgba(255,255,255,0)_50%)]" />
      <div className="absolute inset-0 opacity-40 bg-[conic-gradient(from_180deg_at_50%_8%,rgba(255,255,255,0.06)_0deg,rgba(255,255,255,0.36)_18deg,rgba(255,255,255,0.06)_36deg,rgba(255,255,255,0.26)_54deg,rgba(255,255,255,0.06)_72deg,rgba(255,255,255,0.32)_90deg,rgba(255,255,255,0.06)_108deg,rgba(255,255,255,0.28)_126deg,rgba(255,255,255,0.06)_144deg,rgba(255,255,255,0.24)_162deg,rgba(255,255,255,0.06)_180deg,rgba(255,255,255,0.24)_198deg,rgba(255,255,255,0.06)_216deg,rgba(255,255,255,0.3)_234deg,rgba(255,255,255,0.06)_252deg,rgba(255,255,255,0.26)_270deg,rgba(255,255,255,0.06)_288deg,rgba(255,255,255,0.3)_306deg,rgba(255,255,255,0.06)_324deg,rgba(255,255,255,0.34)_342deg,rgba(255,255,255,0.06)_360deg)]" />
      <div className="absolute left-[6%] top-[18rem] h-10 w-28 rounded-full bg-white/85" />
      <div className="absolute left-[8%] top-[17rem] h-9 w-24 rounded-full bg-white/85" />
      <div className="absolute left-[10%] top-[18rem] h-10 w-28 rounded-full bg-white/85" />
      <div className="absolute right-[10%] top-[20rem] h-10 w-28 rounded-full bg-white/85" />
      <div className="absolute right-[12%] top-[19rem] h-9 w-24 rounded-full bg-white/85" />
      <div className="absolute right-[14%] top-[20rem] h-10 w-28 rounded-full bg-white/85" />
    </div>
  );
}

function HeroScene({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? 'h-[24rem] w-full max-w-[26rem]' : 'h-[34rem] w-full max-w-[34rem]'}`}>
      <div className="absolute right-2 top-6">
        <SunFace className={`${compact ? 'h-28 w-28' : 'h-36 w-36'}`} />
      </div>
      <div className="absolute left-[10%] top-[35%] h-8 w-20 rounded-full bg-white/90" />
      <div className="absolute left-[14%] top-[32%] h-7 w-16 rounded-full bg-white/90" />
      <div className="absolute left-[18%] top-[35%] h-8 w-20 rounded-full bg-white/90" />
      <div className="absolute right-[4%] top-[54%] h-8 w-20 rounded-full bg-white/90" />
      <div className="absolute right-[8%] top-[51%] h-7 w-16 rounded-full bg-white/90" />
      <div className="absolute right-[12%] top-[54%] h-8 w-20 rounded-full bg-white/90" />

      <svg
        viewBox="0 0 420 520"
        className="absolute bottom-0 right-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={compact ? 'translate(18 55) scale(0.9)' : 'translate(0 0)'}>
          <path d="M223 121C223 94 246 72 275 72C304 72 328 94 328 121V145H223V121Z" fill="#5B311F" />
          <circle cx="274" cy="145" r="78" fill="#FFD7BC" />
          <path d="M197 157C197 108 233 72 282 72C331 72 364 107 364 149C364 168 357 183 345 194C332 157 301 130 262 130C236 130 212 143 197 157Z" fill="#603521" />
          <circle cx="248" cy="150" r="7" fill="#1E293B" />
          <circle cx="298" cy="150" r="7" fill="#1E293B" />
          <path d="M250 187C261 199 288 199 299 187" stroke="#F97316" strokeWidth="7" strokeLinecap="round" />
          <path d="M214 232C234 208 263 196 296 196C329 196 356 208 375 232L394 342C346 366 211 367 158 341L214 232Z" fill="#1358C8" />
          <rect x="227" y="267" width="100" height="54" rx="16" fill="#1F66D8" />
          <path d="M241 319C241 291 262 270 288 270C315 270 336 292 336 319V418H241V319Z" fill="#0F4EBC" />
          <path d="M332 236C372 246 395 265 404 302C412 336 405 390 390 432" stroke="#0F4EBC" strokeWidth="34" strokeLinecap="round" />
          <path d="M385 411L401 375L413 416" stroke="#FFD7BC" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M187 240C149 261 128 284 116 325C108 351 105 380 108 418" stroke="#0F4EBC" strokeWidth="34" strokeLinecap="round" />
          <path d="M115 419L103 461L91 420" stroke="#FFD7BC" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M252 322L208 380" stroke="#0F4EBC" strokeWidth="34" strokeLinecap="round" />
          <path d="M312 322L339 419" stroke="#0F4EBC" strokeWidth="34" strokeLinecap="round" />
          <circle cx="174" cy="377" r="72" fill="white" />
          <circle cx="174" cy="377" r="72" stroke="#111827" strokeWidth="6" />
          <path d="M143 344L173 333L201 345L204 377L183 395L153 393L138 367L143 344Z" fill="#111827" />
          <path d="M173 333L174 305M204 377L238 379M153 393L136 421M183 395L195 430M138 367L110 356" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
          <path d="M214 273H247M260 273C260 254 274 239 293 239C312 239 327 254 327 273M251 273V233M292 273V227" stroke="white" strokeWidth="9" strokeLinecap="round" />
          <path d="M240 273C240 258 251 246 266 246M318 273C318 258 307 246 292 246" stroke="white" strokeWidth="9" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

export function SportIcon({
  kind,
  className,
}: {
  kind: string;
  className?: string;
}) {
  const base = className ?? 'h-20 w-20';

  switch (kind) {
    case 'soccer':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="48" cy="48" r="34" fill="white" stroke="#2B2B2B" strokeWidth="3" />
          <path d="M38 28L49 24L60 30L61 43L50 50L37 47L33 36L38 28Z" fill="#2B2B2B" />
          <path d="M49 24L50 12M61 43L76 44M37 47L28 61M50 50L56 66M33 36L20 31" stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'football':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 59C27 31 47 18 78 18C84 30 86 45 79 67C52 78 31 74 19 59Z" fill="#C67228" stroke="#7C4212" strokeWidth="3" />
          <path d="M31 68L68 25" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M45 50L58 50" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <path d="M48 44V56M52 44V56" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'tball':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="77" rx="25" ry="5" fill="#FFB36B" />
          <path d="M37 29L37 75" stroke="#FF7A28" strokeWidth="5" strokeLinecap="round" />
          <path d="M26 29H48" stroke="#FF7A28" strokeWidth="5" strokeLinecap="round" />
          <circle cx="58" cy="45" r="13" fill="white" stroke="#FF7A28" strokeWidth="3" />
          <path d="M51 38C55 42 61 48 65 52M65 38C61 42 55 48 51 52" stroke="#FF7A28" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'golf':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 18L43 53" stroke="#2C5743" strokeWidth="5" strokeLinecap="round" />
          <path d="M33 47C42 48 47 55 44 64L29 67C23 61 24 50 33 47Z" fill="#8B8B8B" stroke="#555" strokeWidth="2" />
          <circle cx="62" cy="70" r="9" fill="white" stroke="#B7B7B7" strokeWidth="2" />
          <path d="M58 67H66M62 63V71" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'volleyball':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="48" cy="48" r="33" fill="white" stroke="#4F2CCB" strokeWidth="3" />
          <path d="M20 40C33 35 51 36 69 46M30 20C43 31 49 48 48 81M61 21C53 31 47 44 46 62M21 60C31 54 40 51 54 50" stroke="#4F2CCB" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'hockey':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 22L50 55L33 73" stroke="#F08A29" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M67 22L45 55L62 73" stroke="#F08A29" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M31 73H44M52 73H64" stroke="#2A54B8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'yoga':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="40" width="48" height="22" rx="4" fill="#4EC4E0" stroke="#1385A7" strokeWidth="3" />
          <path d="M67 40C67 31 59 24 49 24C40 24 33 31 33 40" stroke="#1385A7" strokeWidth="3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29 63C40 55 51 49 65 45L76 52C68 65 55 74 39 79L24 73L29 63Z" fill="#FFB13A" stroke="#FF7A28" strokeWidth="3" />
          <path d="M37 63C45 65 52 68 59 73" stroke="#FF7A28" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M51 46L66 29" stroke="#FF7A28" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
  }
}

function BenefitIcon({
  kind,
  className,
}: {
  kind: string;
  className?: string;
}) {
  const base = className ?? 'h-14 w-14';
  switch (kind) {
    case 'run':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="54" cy="17" r="8" stroke="currentColor" strokeWidth="4" />
          <path d="M38 42L53 31L66 37M53 31L47 50L30 63M47 50L62 57L72 43M44 57L34 78H19M60 60L73 79H86" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'friends':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="29" cy="26" r="7" stroke="currentColor" strokeWidth="4" />
          <circle cx="66" cy="26" r="7" stroke="currentColor" strokeWidth="4" />
          <path d="M22 68V44M34 68V44M61 68V44M73 68V44M34 45L48 58L61 45M41 15L48 24L55 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 73C31 61 20 49 20 34C20 23 28 16 39 16C45 16 50 18 54 23C58 18 63 16 69 16C80 16 88 23 88 34C88 49 77 61 60 73L54 78L48 73Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 96 96" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="48" cy="41" r="28" stroke="currentColor" strokeWidth="4" />
          <circle cx="39" cy="34" r="2.5" fill="currentColor" />
          <circle cx="57" cy="34" r="2.5" fill="currentColor" />
          <path d="M38 49C43 56 53 56 58 49" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
  }
}

function ContactIcon({
  kind,
  className,
}: {
  kind: 'mail' | 'phone';
  className?: string;
}) {
  const base = className ?? 'h-8 w-8';
  if (kind === 'mail') {
    return (
      <svg viewBox="0 0 32 32" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M5 10L16 18L27 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className={base} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 5C12 9 14 12 18 15C20 17 23 19 27 21L23 27C16 24 8 16 5 9L10 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SunFace({ className }: { className?: string }) {
  const rays = Array.from({ length: 12 });
  return (
    <div className={`relative ${className ?? 'h-32 w-32'}`}>
      {rays.map((_, index) => {
        const rotation = index * 30;
        return (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 h-3 w-10 origin-left rounded-full bg-yellow-400"
            style={{
              transform: `translate(-6%, -50%) rotate(${rotation}deg) translateX(3rem)`,
            }}
          />
        );
      })}
      <div className="absolute inset-4 rounded-full bg-yellow-300 shadow-[inset_0_-8px_0_rgba(234,179,8,0.25)]">
        <div className="absolute left-[34%] top-[38%] h-2.5 w-2.5 rounded-full bg-blue-900" />
        <div className="absolute right-[34%] top-[38%] h-2.5 w-2.5 rounded-full bg-blue-900" />
        <div className="absolute left-1/2 top-[53%] h-4 w-8 -translate-x-1/2 rounded-b-full border-b-4 border-orange-400" />
      </div>
    </div>
  );
}

function StarBurst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 3L29 16L43 17L32 26L35 40L24 32L13 40L16 26L5 17L19 16L24 3Z" />
    </svg>
  );
}

function PaperPlane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 36L64 10L42 62L31 41L8 36Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M31 41L64 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function DoodleLoop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 82C36 54 49 34 66 34C80 34 92 47 92 61C92 72 86 82 72 87C58 92 43 85 43 74C43 63 53 54 65 54" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
    </svg>
  );
}
