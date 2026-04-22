import type { Metadata } from 'next';
import { BenefitsSection, CopyCards, PageHero, SiteChrome, SportsSamplerSection, TextSection } from '../components';
import { programPoints } from '../site-data';

export const metadata: Metadata = {
  title: 'Programs | DigIn Sports',
  description:
    'Explore the DigIn Sports Sports Sampler program, designed to keep kids ages 2-8 active, engaged, and excited each week.',
};

export default function ProgramPage() {
  return (
    <SiteChrome currentPath="/program">
      <PageHero
        currentPath="/program"
        title="Programs"
        subtitle="Sports Sampler keeps kids moving, learning, and cheering with a format that feels playful on the outside and dependable on the inside."
      />

      <TextSection
        eyebrow="How It Works"
        title="A fun weekly routine that keeps kids excited."
        text="Each class introduces a new sport in a way that feels welcoming and age-appropriate. The structure stays clear for parents and schools, while the experience stays bright and energetic for children."
      >
        <CopyCards
          items={programPoints}
          colorClasses={['bg-[#fff3bc]', 'bg-[#d7f4ff]', 'bg-[#ffe1d5]']}
        />
      </TextSection>

      <SportsSamplerSection
        title="Programs In Action"
        subtitle="The rotating weekly lineup gives every child something new to discover."
      />

      <BenefitsSection title="Why Families Love It" />
    </SiteChrome>
  );
}
