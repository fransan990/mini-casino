import styles from "./LandingPage.module.scss";

import { LandingHeader } from "../components/LandingHeader/LandingHeader";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { FeaturedGamesSection } from "../components/FeaturedGamesSection/FeaturedGamesSection";
import { HowItWorksSection } from "../components/HowItWorksSection/HowItWorksSection";
import { SafetyNotice } from "../components/SafetyNotice/SafetyNotice";

export function LandingPage() {
  return (
    <main className={styles.page}>
      <LandingHeader />

      <div className={styles.sections}>
        <HeroSection />
        <FeaturedGamesSection />
        <HowItWorksSection />
        <SafetyNotice />
      </div>
    </main>
  );
}