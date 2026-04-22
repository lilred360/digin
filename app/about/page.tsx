import type { Metadata } from 'next';
import { BenefitsSection, CopyCards, PageHero, SiteChrome, TextSection } from '../components';
import { aboutPoints } from '../site-data';

export const metadata: Metadata = {
  title: 'About Us | DigIn Sports',
  description:
    'Learn about the DigIn Sports approach to making youth sports playful, welcoming, and exciting for children ages 2-8.',
};

export default function AboutPage() {
  return (
    <SiteChrome currentPath="/about">
      <PageHero
        currentPath="/about"
        title="About Us"
        subtitle="DigIn Sports is built around joyful first sports experiences. We want kids to feel active, encouraged, and proud every time they show up."
      />

      <TextSection
        eyebrow="Our Approach"
        title="Playful for kids. Clear for grown-ups."
        text="The visual style is bright and imaginative because that is what draws children in. The messaging stays simple and direct so parents, schools, and program leaders can still get the information they need quickly."
      >
        <CopyCards
          items={aboutPoints}
          colorClasses={['bg-[#fff3bc]', 'bg-[#d7f4ff]', 'bg-[#f0e0ff]']}
        />
      </TextSection>

      <BenefitsSection title="What DigIn Stands For" />
    </SiteChrome>
  );
}
