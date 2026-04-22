import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoCard, PageHero, SectionTitle, SiteChrome } from '../components';
import { highlightCards, programFeatures, programSteps } from '../site-data';

export const metadata: Metadata = {
  title: 'Program | DigIn Sports',
  description:
    'Learn how the DigIn Sports program works, who it is for, and why children ages 2-8 love the rotating multi-sport format.',
};

export default function ProgramPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="The Program"
        title="One big sports sampler, packed with motion, smiles, and discovery."
        text="DigIn Sports is built for kids who are just starting their sports journey. Each class keeps the energy high and the instructions simple so children can stay engaged and feel successful."
        accent="bg-pink-300 text-slate-900"
      >
        <div className="rounded-[2rem] border-4 border-slate-900 bg-cyan-200 p-6 shadow-[8px_8px_0_rgba(15,23,42,1)]">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-700">Program Highlights</div>
          <div className="mt-4 space-y-3">
            {programFeatures.map((feature, index) => (
              <div
                key={feature}
                className={`rounded-2xl border-4 border-slate-900 px-4 py-3 text-sm font-black text-slate-900 ${
                  ['bg-white', 'bg-yellow-200', 'bg-pink-200', 'bg-lime-200'][index]
                }`}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {highlightCards.map((card, index) => (
            <InfoCard
              key={card.title}
              title={card.title}
              text={card.text}
              color={['bg-yellow-200', 'bg-cyan-200', 'bg-pink-200'][index]}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="How It Works"
          title="A clear routine keeps the classes playful and easy to follow."
          text="The program is fun and lively, but it is also organized enough for adults to understand how the experience comes together."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programSteps.map((item, index) => (
            <div
              key={item.step}
              className={`rounded-[2rem] border-4 border-slate-900 p-7 shadow-[8px_8px_0_rgba(15,23,42,1)] ${
                ['bg-orange-200', 'bg-lime-200', 'bg-violet-200'][index]
              }`}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-900 bg-white text-lg font-black">
                {item.step}
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-900">{item.title}</h2>
              <p className="mt-3 text-base leading-8 text-slate-800">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border-4 border-slate-900 bg-white/90 p-8 shadow-[8px_8px_0_rgba(15,23,42,1)] lg:p-10">
          <SectionTitle
            eyebrow="Good Fit For"
            title="Families, schools, and care programs who want active fun with real structure."
            text="DigIn Sports is playful enough to excite children and clear enough to help parents and partners know exactly what they are signing up for."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full border-4 border-slate-900 bg-yellow-300 px-6 py-3 text-center text-sm font-black text-slate-900 shadow-[5px_5px_0_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0_rgba(15,23,42,1)]"
            >
              Ask About Scheduling
            </Link>
            <Link
              href="/sports"
              className="rounded-full border-4 border-slate-900 bg-cyan-300 px-6 py-3 text-center text-sm font-black text-slate-900 shadow-[5px_5px_0_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0_rgba(15,23,42,1)]"
            >
              Explore The Sports
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
