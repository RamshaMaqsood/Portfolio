import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-br from-[#14213D] via-black to-black text-center py-10 px-6">
      <div className="flex justify-center gap-6 mb-6 text-[#FCA311] text-2xl">
        <a href="https://facebook.com" target="_blank" className="hover:text-white transition-all duration-300">
          <FaFacebook />
        </a>
        <a href="https://github.com/RamshaMaqsood" target="_blank" className="hover:text-white transition-all duration-300">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ramsha-maqsood-1a3515305/" target="_blank" className="hover:text-white transition-all duration-300">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" className="hover:text-white transition-all duration-300">
          <FaInstagram />
        </a>
      </div>
      {/* <div className="w-40 h-0.5 bg-[#FCA311] mx-auto mb-6"></div> */}
      <p className="text-gray-300 text-sm">
        © {new Date().getFullYear()} Ramsha Maqsood — All Rights Reserved
      </p>
    </footer>
  );
}
