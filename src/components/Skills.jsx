export default function Skills() {
  const skills = [
    "React.js",
    "JavaScript",
    "TailwindCSS",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-32 px-6 flex flex-col items-center text-center bg-linear-to-bl from-[#14213D] via-black to-[#000000] overflow-hidden"
    >
      <h2 className="text-4xl font-extrabold mb-16 text-[#FCA311] z-10 relative">
        My Skills
      </h2>
      <div className="relative w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 z-10">
        {skills.map((skill) => (
          <div
            key={skill}
            className="w-32 h-32 bg-[#000000]/40 border-4 border-[#FCA311] rounded-full flex justify-center items-center
                       hover:bg-[#FCA311] hover:text-[#14213D] hover:scale-110 shadow-lg transition-all duration-300"
          >
            <span className="text-center px-2 text-[#E5E5E5] font-bold">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


