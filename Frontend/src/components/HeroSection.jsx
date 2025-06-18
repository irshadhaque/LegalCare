import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function HeroSection() {
  const [animationData, setAnimationData] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const fullText = "LegalCare";
  const speed = 150;

  useEffect(() => {
    fetch("https://lottie.host/b28b72b0-7b49-4458-8c74-7ba643506bf1/A2YttlR0qv.json")
      .then((res) => res.json())
      .then(setAnimationData);

    // Typewriter effect
    let index = 0;
    let reverse = false;

    const interval = setInterval(() => {
      if (!reverse) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          reverse = true;
          setTimeout(() => {}, 1000);
        }
      } else {
        setDisplayText(fullText.slice(0, index - 1));
        index--;
        if (index === 0) reverse = false;
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0a0a0a] text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-8">
      {/* Lottie animation */}
      <div className="w-full md:w-1/2 max-w-md">
        {animationData && (
          <Lottie animationData={animationData} loop autoplay />
        )}
      </div>

      {/* Text block */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wider">
          {displayText}
          <span className="blinking-cursor">|</span>
        </h1>
        <p className="text-xl text-indigo-400">"We Make Legal Simple"</p>
        
      </div>
    </section>
  );
}
