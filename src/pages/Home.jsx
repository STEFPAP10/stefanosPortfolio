import { Navbar } from "../Components/NavBar";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutMe";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectSection";
import { Contact } from "lucide-react";
import { ContactSection } from "../Components/contact";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle */} 
        <ThemeToggle></ThemeToggle>

        {/*Backround Effects*/}
        <StarBackground></StarBackground>

        {/* Navbar*/}
        <Navbar></Navbar>

        {/* Main Content*/}
        <main>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <SkillsSection></SkillsSection>
            <ProjectsSection></ProjectsSection>
            <ContactSection></ContactSection>
        </main>

        {/* Footer*/}


    </div>;
};