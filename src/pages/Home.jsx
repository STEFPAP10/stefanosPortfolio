import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackround } from "../components/StarBackround"
import { Navbar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectSection"
import { Contact } from "lucide-react"
import { ContactSection } from "../components/ContactSection"

export const Home =()=>{
    return <div className="min-h-screen  bg-background text-foreground overflow-x-hidden ">

        {/* Theme Toggle */}
        <ThemeToggle/>

        {/*Backround Effects */}
        <StarBackround/>

        {/*NavBar */}
        <Navbar/>
         
        {/*Main Content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>

        {/*Footer */}
    </div>
}