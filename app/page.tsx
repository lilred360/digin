import Link from 'next/link';
import { InfoCard, PageHero, SectionTitle, SiteChrome } from './components';
import { highlightCards, programFeatures, sports } from './site-data';

export default function HomePage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Welcome To DigIn Sports"
        title="A colorful sports world where kids can try everything."
        text="DigIn Sports turns every class into a playful adventure. Children explore new sports, new movement skills, and new confidence while parents get a program that feels clear, safe, and easy to follow."
        accent="bg-yellow-300 text-slate-900"
      >
        <div className="grid w-full gap-4">
          <div className="rounded-[2rem] border-4 border-slate-900 bg-white p-6 shadow-[8px_8px_0_rgba(15,23,42,1)]">
            <div className="text-sm font-black uppercase tracking-[0.18em] text-orange-500">
              Quick Peek
            </div>
            <div className="mt-4 grid gap-3">
              {programFeatures.slice(0, 4).map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl border-4 border-slate-900 px-4 py-3 text-sm font-black text-slate-900 ${
                    ['bg-pink-200', 'bg-cyan-200', 'bg-lime-200', 'bg-orange-200'][index]
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
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
              color={['bg-pink-200', 'bg-yellow-200', 'bg-cyan-200'][index]}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Explore The Site"
          title="Each page has its own part of the DigIn story."
          text="Parents can find details quickly, while kids get a bright world full of color, sports, and energy."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              href: '/program',
              label: 'Program',
              text: 'See how the weekly experience works from start to finish.',
              color: 'bg-yellow-300',
            },
            {
              href: '/sports',
              label: 'Sports',
              text: 'Meet the sports kids can explore throughout the rotation.',
              color: 'bg-pink-300',
            },
            {
              href: '/about',
              label: 'About Us',
              text: 'Learn what DigIn believes about first sports experiences.',
              color: 'bg-cyan-300',
            },
            {
              href: '/contact',
              label: 'Contact',
              text: 'Reach out when you are ready to talk about classes or scheduling.',
              color: 'bg-lime-300',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-[2rem] border-4 border-slate-900 p-6 shadow-[8px_8px_0_rgba(15,23,42,1)] transition hover:-translate-y-1 ${item.color}`}
            >
              <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-700">Page</div>
              <h3 className="mt-3 font-[family:var(--font-display)] text-3xl text-slate-950">
                {item.label}
              </h3>
              <p className="mt-3 text-base leading-8 text-slate-800">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <SectionTitle
          eyebrow="Sports Spotlight"
          title="The lineup stays fresh, silly, active, and exciting."
          text="From kicking and throwing to stretching and racing, DigIn gives children many ways to move."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sports.slice(0, 8).map((sport) => (
            <div
              key={sport.name}
              className={`rounded-[2rem] border-4 border-slate-900 bg-gradient-to-br ${sport.color} p-5 shadow-[7px_7px_0_rgba(15,23,42,1)]`}
            >
              <div className="text-sm font-black uppercase tracking-[0.16em] text-slate-700">
                Featured Sport
              </div>
              <div className="mt-3 text-2xl font-black text-slate-900">{sport.name}</div>
              <p className="mt-3 text-sm leading-7 text-slate-800">{sport.blurb}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
