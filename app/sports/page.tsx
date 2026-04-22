import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, SectionTitle, SiteChrome } from '../components';
import { sports } from '../site-data';

export const metadata: Metadata = {
  title: 'Sports | DigIn Sports',
  description:
    'See the sports children can explore through DigIn Sports, from soccer and T-ball to yoga and track and field.',
};

export default function SportsPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="The Sports"
        title="Every week brings a new game to learn, try, and celebrate."
        text="DigIn Sports keeps kids curious with a rotating lineup of sports that encourages movement, listening, teamwork, and simple skill-building."
        accent="bg-cyan-300 text-slate-900"
      >
        <div className="rounded-[2rem] border-4 border-slate-900 bg-yellow-200 p-6 shadow-[8px_8px_0_rgba(15,23,42,1)]">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-700">What Kids Practice</div>
          <ul className="mt-4 space-y-3 text-base font-black text-slate-900">
            <li className="rounded-2xl border-4 border-slate-900 bg-white px-4 py-3">Balance and body control</li>
            <li className="rounded-2xl border-4 border-slate-900 bg-pink-200 px-4 py-3">Throwing, kicking, and aiming</li>
            <li className="rounded-2xl border-4 border-slate-900 bg-lime-200 px-4 py-3">Taking turns and listening</li>
            <li className="rounded-2xl border-4 border-slate-900 bg-orange-200 px-4 py-3">Feeling proud of trying something new</li>
          </ul>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <SectionTitle
          eyebrow="Rotation Lineup"
          title="A bright mix of sports helps every child find something exciting."
          text="Some kids love running, some love stretching, and some love learning how to kick or swing. The rotation gives them all a moment to shine."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {sports.map((sport) => (
            <div
              key={sport.name}
              className={`rounded-[2rem] border-4 border-slate-900 bg-gradient-to-br ${sport.color} p-6 shadow-[8px_8px_0_rgba(15,23,42,1)] transition hover:-translate-y-1`}
            >
              <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-700">Sport</div>
              <h2 className="mt-3 font-[family:var(--font-display)] text-3xl text-slate-950">
                {sport.name}
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-800">{sport.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border-4 border-slate-900 bg-white/90 p-8 shadow-[8px_8px_0_rgba(15,23,42,1)] lg:p-10">
          <SectionTitle
            eyebrow="Keep Exploring"
            title="The sports are playful, but the purpose is real."
            text="Every activity supports confidence, coordination, and comfort with movement so kids can build positive first experiences with sports."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/program"
              className="rounded-full border-4 border-slate-900 bg-pink-300 px-6 py-3 text-center text-sm font-black text-slate-900 shadow-[5px_5px_0_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0_rgba(15,23,42,1)]"
            >
              See How The Program Works
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-4 border-slate-900 bg-yellow-300 px-6 py-3 text-center text-sm font-black text-slate-900 shadow-[5px_5px_0_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0_rgba(15,23,42,1)]"
            >
              Contact DigIn Sports
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
