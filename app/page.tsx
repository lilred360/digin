import { BenefitsSection, HomeHero, SiteChrome, SportsSamplerSection } from './components';

export default function HomePage() {
  return (
    <SiteChrome currentPath="/">
      <HomeHero />
      <SportsSamplerSection />
      <BenefitsSection />
    </SiteChrome>
  );
}
