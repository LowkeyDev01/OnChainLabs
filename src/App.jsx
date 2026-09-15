import NavBar from "./components/navbar.jsx";
import AboutSection from "./pages/aboutSection.jsx";
import CommSection from "./pages/CommunitySection.jsx";
import ContactSection from "./pages/ContactUs.jsx";
import HeroSection from "./pages/HeroSection.jsx"

export default function App(){
  return(
    <div className="relative w-full min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <CommSection />
      <ContactSection />
    </div>
  )
}