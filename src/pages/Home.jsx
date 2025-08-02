import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "../components/navBar";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HeroSection } from "../components/heroSection";


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <StarBackground />
        <ThemeToggle />
        <NavBar />
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        <Footer />
        <ToastContainer />
        </div>
    );
};  