import type { Metadata } from 'next';
import { PageHero, SiteChrome, TextSection } from '../components';
import { contactDetails } from '../site-data';

export const metadata: Metadata = {
  title: 'Contact | DigIn Sports',
  description:
    'Contact DigIn Sports to ask about programs, schedules, and youth sports opportunities for children ages 2-8.',
};

export default function ContactPage() {
  return (
    <SiteChrome currentPath="/contact">
      <PageHero
        currentPath="/contact"
        title="Contact"
        subtitle="Ready to bring DigIn Sports to your kids, school, daycare, or program? This is the best place to start."
      />

      <TextSection
        eyebrow="Reach Out"
        title="We make the next step easy."
        text="Whether you have a quick question or want to talk about scheduling, the contact options below make it simple to connect."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {contactDetails.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-[2rem] border-4 border-white px-7 py-8 shadow-[0_8px_20px_rgba(26,77,136,0.12)] ${
                index === 0 ? 'bg-[#d7f4ff]' : 'bg-[#fff3bc]'
              }`}
            >
              <div className="text-lg font-black uppercase tracking-[0.14em] text-orange-500">{item.label}</div>
              <div className="mt-4 font-[family:var(--font-display)] text-4xl uppercase leading-tight text-blue-800">
                {item.value}
              </div>
            </a>
          ))}
        </div>
      </TextSection>
    </SiteChrome>
  );
}
