export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 flex justify-center items-center text-center bg-linear-to-br from-[#14213D] via-black to-[#000000]"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-4xl">
        <h2 className="text-4xl font-extrabold mb-6 text-[#FCA311] opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
          About Me
        </h2>
        <p className="text-lg text-[#E5E5E5] max-w-3xl mx-auto opacity-0 animate-[fadeIn_1s_0.5s_ease-in_forwards]">
          I am Ramsha, a passionate Frontend React Developer focused on creating
          modern, clean, and elegant web interfaces. I love transforming design
          concepts into responsive and interactive web experiences using React,
          TailwindCSS, and other modern frontend technologies. I strive for code
          quality, simplicity, and a seamless user experience in every project I
          work on.
        </p>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
