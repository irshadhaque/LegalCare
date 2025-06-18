import AboutUs from "../components/AboutUs";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TextSection from "../components/TextSection";

export default function Home() {
  return (
    <div className="bg-[#0f0c29] text-white">
    <HeroSection />
    <FeaturesSection />
    <AboutUs />
    <TextSection />
    <Footer />
    </div>
  );
}
