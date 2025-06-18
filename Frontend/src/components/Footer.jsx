import logo from '../assets/logo.png'; 
import linkedin from '../assets/linkedin.png'; 
export default function Footer() {
  return (
    <footer className="bg-[#060319] text-white pt-12 pb-6 px-4 md:px-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-indigo-600 rounded-b-full" />

      <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        {/* Left - Contact Info */}
        <div>
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <h3 className="font-semibold text-lg">Contact Us :</h3>
          <p className="text-gray-300 mt-1">email: info@legalcare.app</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Follow us</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-indigo-400"
            >
              <img src={linkedin} alt="LinkedIn" className="w-12 h-12 bg-[#060319]" />
            </a>
          </div>
        </div>

        {/* Right - Address (optional) */}
        <div>
          <h3 className="font-semibold text-lg mb-2">LegalCare</h3>
          <p className="text-gray-300">Bengaluru,</p>
          <p className="text-gray-300">Karnataka,</p>
          <p className="text-gray-300">India</p>
        </div>
      </div>

      {/* Bottom Line */}
      <hr className="my-6 border-gray-700" />
      <p className="text-center text-sm text-gray-400">
        © 2025 LegalCare. All rights reserved.
      </p>
    </footer>
  );
}
