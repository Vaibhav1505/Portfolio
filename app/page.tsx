import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectExperience from "@/components/ProjectExperiece";


export default function Home() {
  return (
    <div className="">
      {/* <Spotlight /> */}
      <Navbar />
      <HeroSection />
      <ProjectExperience/>
      <Footer/>
    </div>
  );
}
