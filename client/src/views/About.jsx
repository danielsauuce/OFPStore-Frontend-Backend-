import HeroSection from '../components/HeroSectionAbout';
import IntroSection from '../components/IntroSectionAbout';
import ValuesSection from '../components/ValueSection';
import TeamCTA from '../components/TeamCTA';
import StatsSection from '../components/StatsSection';

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <IntroSection />
          <ValuesSection />
          <TeamCTA />
        </div>
      </section>

      <StatsSection />
    </div>
  );
}

export default About;
