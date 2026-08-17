import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { CompaniesSection } from "@/components/sections/CompaniesSection";
import { GroupStructureSection } from "@/components/sections/GroupStructureSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { MegaProjectSection } from "@/components/sections/MegaProjectSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { CareersSection } from "@/components/sections/CareersSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FounderSection />
        <CompaniesSection />
        <GroupStructureSection />
        <ProjectsSection />
        <MegaProjectSection />
        <WhyUsSection />
        <NewsSection />
        {/*<AwardsSection />*/}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
