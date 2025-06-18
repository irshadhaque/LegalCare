
import React, { useEffect, useState } from 'react';
import about1 from '../assets/about1.jpeg';
import about3 from '../assets/about3.jpeg';
import about4 from '../assets/about4.jpeg'; // Your own images

const images = [about1, about3, about4];

export default function AboutUsSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-12 bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] text-white">
      <div className="max-w-6xl mx-auto rounded-xl shadow-lg bg-[#0a0a0a]/40 backdrop-blur-md p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Left */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About LegalCare</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            LegalCare is committed to transforming how enterprises manage legal operations.
            Our mission is to make legal processes seamless, accessible, and data-driven.
            We provide technology-driven solutions that simplify compliance, protect rights,
            and empower employees.
          </p>
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white font-medium transition">
            Read More →
          </button>
        </div>

        {/* Image Right */}
        <div className="flex-1">
          <img
            src={images[currentImage]}
            alt="About Us"
            className="w-full h-[300px] object-cover rounded-xl shadow-md transition duration-1000 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
