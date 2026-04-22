import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoCard, PageHero, SectionTitle, SiteChrome } from '../components';
import { aboutPoints } from '../site-data';

export const metadata: Metadata = {
  title: 'About Us | DigIn Sports',
  description:
    'Learn about the DigIn Sports approach to creating fun, encouraging first sports experiences for children ages 2-8.',
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="About Us"
        title="We believe sports should start with joy."
        text="DigIn Sports was imagined as a place where children can move, play, and discover what they love without pressure. The experience is playful for kids and reassuring for adults."
        accent="bg-lime-300 text-slate-900"
      >
        <div className="rounded-[2rem] border-4 border-slate-900 bg-pink-200 p-6 shadow-[8px_8px_0_rgba(15,23,42,1)]">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-700">Our Promise</div>
          <p className="mt-4 text-lg leading-8 text-slate-900">
            We create classes that feel upbeat, imaginative, active, and welcoming from the very first minute.
          </p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {aboutPoints.map((point, index) => (
            <InfoCard
              key={point.title}
              title={point.title}
              text={point.text}
              color={['bg-yellow-200', 'bg-cyan-200', 'bg-violet-200'][index]}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border-4 border-slate-900 bg-white/90 p-8 shadow-[8px_8px_0_rgba(15,23,42,1)] lg:p-10">
          <SectionTitle
            eyebrow="What Parents Need"
            title="A playful website can still answer practical questions."
            text="This refreshed design leans into bold colors and child-friendly energy, while keeping the copy clear enough for parents, teachers, and program coordinators who need real information."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/program"
              className="rounded-full border-4 border-slate-900 bg-cyan-300 px-6 py-3 text-center text-sm font-black text-slate-900 shadow-[5px_5px_0_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0_rgba(15,23,42,1)]"
            >
              Learn About The Program
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-4 border-slate-900 bg-orange-300 px-6 py-3 text-center text-sm font-black text-slate-900 shadow-[5px_5px_0_rgba(15,23,42,1)] transition hover:translate-y-[1px] hover:shadow-[2px_2px_0_rgba(15,23,42,1)]"
            >
              Reach Out To Us
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
