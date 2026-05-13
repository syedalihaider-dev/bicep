import BannerSection from "@/components/home/BannerSection";
import RecognitionSection from "@/components/home/RecognitionSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.homePage}>
      <BannerSection />
      <RecognitionSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
