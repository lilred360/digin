import type { Metadata } from 'next';
import { BenefitsSection, PageHero, SiteChrome, SportsSamplerSection, TextSection } from '../components';

export const metadata: Metadata = {
  title: 'Sports | DigIn Sports',
  description:
    'See the sports kids can explore through DigIn Sports, from soccer and football to yoga and track and field.',
};

export default function SportsPage() {
  return (
    <SiteChrome currentPath="/sports">
      <PageHero
        currentPath="/sports"
        title="Sports"
        subtitle="Every week brings a new game, new equipment, and a new way for kids to build confidence through movement."
      />

      <SportsSamplerSection
        title="Weekly Sports Rotation"
        subtitle="From big kicks to stretches and smiles, the lineup stays fresh and engaging."
      />

      <TextSection
        eyebrow="More Than A Sport"
        title="Each activity builds more than one skill."
        text="DigIn Sports uses every weekly theme to support balance, coordination, listening, teamwork, and a positive connection to being active."
      />

      <BenefitsSection title="What Kids Grow" />
    </SiteChrome>
  );
}
