import type { Metadata } from 'next';
import { PageHero, SectionTitle, SiteChrome } from '../components';
import { contactOptions } from '../site-data';

export const metadata: Metadata = {
  title: 'Contact | DigIn Sports',
  description:
    'Contact DigIn Sports to ask about programs, schedules, and multi-sport classes for children ages 2-8.',
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Contact"
        title="Ready to bring the fun to your kids?"
        text="Whether you are a parent, school, daycare, or preschool, we would love to help you learn more about DigIn Sports and the weekly multi-sport experience."
        accent="bg-orange-300 text-slate-900"
      >
        <div className="rounded-[2rem] border-4 border-slate-900 bg-lime-200 p-6 shadow-[8px_8px_0_rgba(15,23,42,1)]">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-700">Who Can Reach Out?</div>
          <ul className="mt-4 space-y-3 text-base font-black text-slate-900">
            <li className="rounded-2xl border-4 border-slate-900 bg-white px-4 py-3">Parents</li>
            <li className="rounded-2xl border-4 border-slate-900 bg-pink-200 px-4 py-3">Schools</li>
            <li className="rounded-2xl border-4 border-slate-900 bg-cyan-200 px-4 py-3">Daycares and preschools</li>
          </ul>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <SectionTitle
          eyebrow="Say Hello"
          title="Choose the easiest way to get in touch."
          text="The site stays playful, but the contact options are direct and simple so adults can take the next step quickly."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {contactOptions.map((option, index) => (
            <a
              key={option.label}
              href={option.href}
              className={`rounded-[2rem] border-4 border-slate-900 p-7 shadow-[8px_8px_0_rgba(15,23,42,1)] transition hover:-translate-y-1 ${
                ['bg-pink-200', 'bg-yellow-200'][index]
              }`}
            >
              <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-700">{option.label}</div>
              <h2 className="mt-3 font-[family:var(--font-display)] text-4xl text-slate-950">
                {option.value}
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-800">{option.action}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border-4 border-slate-900 bg-white/90 p-8 shadow-[8px_8px_0_rgba(15,23,42,1)] lg:p-10">
          <SectionTitle
            eyebrow="Good To Know"
            title="DigIn Sports is ready for both playful questions and practical ones."
            text="If you want to ask about age groups, scheduling, or whether the program is a good fit, this is the place to start."
          />
        </div>
      </section>
    </SiteChrome>
  );
}
