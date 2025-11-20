export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-white">Ramsha</h1>
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><a href="#home" className="text-white hover:text-[#FCA311] transition">Home</a></li>
          <li><a href="#about" className="text-white hover:text-[#FCA311] transition">About</a></li>
          <li><a href="#skills" className="text-white hover:text-[#FCA311] transition">Skills</a></li>
          <li><a href="#projects" className="text-white hover:text-[#FCA311] transition">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-[#FCA311] transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}


