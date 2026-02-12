export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-linear-to-br from-[#14213D] via-black to-[#000000]"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-white opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
          Hi, I'm Ramsha 👋
        </h1>
        <p className="text-lg text-gray-200 max-w-xl opacity-0 animate-[fadeIn_1s_1s_ease-in_forwards]">
          I’m a MERN Stack Developer building clean, modern, and high-performance web applications using React, Node.js, Express, MongoDB, and TailwindCSS.
        </p>

        <div className="mt-6 flex gap-4 opacity-0 animate-[slideUp_1s_2s_ease-out_forwards]">
          <a
            href="#contact"
            className="bg-[#FCA311] text-black px-6 py-3 rounded-lg text-lg hover:bg-[#14213D] hover:text-white hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-[#FCA311] text-[#FCA311] px-6 py-3 rounded-lg text-lg hover:bg-[#FCA311] hover:text-black hover:scale-105 transition-all duration-300"
          >
            See Projects
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>

  );
}



