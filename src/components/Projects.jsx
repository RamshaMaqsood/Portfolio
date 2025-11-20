export default function Projects() {
  const projects = [
    {
      title: "Food Delivery App",
      desc:"Minimal multi-section food delivery interface.",
      img: "/images/food-delivery.jpg",
      link: "https://food-delivery-app-zeta-flax.vercel.app/",
    },
    {
      title: "Weather App",
      desc: "React weather app with API, clean UI and theme support.",
      img: "/images/weather-app.png",
      link: "https://weather-app-sable-psi-bru6cgliwz.vercel.app/",
    },
     {
      title: "Tic Tac Toe",
      desc: "A classic two-player game built in React.",
      img: "/images/tic-tac-toe.png",
      link: "https://tic-tac-toe-five-omega-92.vercel.app/",
    },
    {
      title: "Dice Roll Game",
      desc: "A simple React-based dice roller that generates random results.",
      img: "/images/dice-game.png",
      link: "https://dice-game-xi-six.vercel.app/",
    },
    {
      title: "To-do List App",
      desc: "A simple app to add, edit, and delete daily tasks.",
      img: "/images/to-do-list.jpeg",
      link: "https://to-do-list-tau-steel.vercel.app/",
    },
    {
      title: "StopWatch",
      desc: "A clean, easy-to-use stopwatch with start, stop, and reset controls..",
      img: "/images/stopwatch.png",
      link: "https://stop-watch-omega-rose.vercel.app/",
    },
    {
      title: "Quiz App",
      desc: "Interactive quiz with progress + scoring.",
      img: "/images/quiz-app.jpeg",
      link: "https://quiz-murex-delta.vercel.app/",
    },
    {
      title: "Super Heros",
      desc: "Fetches and displays superhero details from an API.",
      img: "/images/superhero.jpg",
      link: "https://super-heroes-nine.vercel.app/",
    },
    {
      title: "Products Fetching",
      desc: "Fetches and displays product details from an external API.",
      img: "/images/products.jpeg",
      link: "https://products-api-nine-wine.vercel.app/",
    },
    {
      title: "Daraz Template",
      desc: "A clean, responsive UI replica of the Daraz homepage.",
      img: "/images/daraz.png",
      link: "https://daraz-template.vercel.app/",
    },
    {
      title: "Videography Template",
      desc: "A clean, responsive UI replica of the Videography Website.",
      img: "/images/videography.jpg",
      link: "https://videography-template.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-32 px-6 flex flex-col items-center text-center
                 bg-linear-to-br from-[#14213D] via-black to-[#000000]"
    >
      <h2 className="text-4xl font-extrabold mb-16 text-[#FCA311]">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#000000]/40 border border-[#FCA311] rounded-xl shadow-lg overflow-hidden
                       hover:shadow-[0_0_18px_#FCA311] hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.desc}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 border border-[#FCA311] text-[#FCA311]
                           rounded-lg hover:bg-[#FCA311] hover:text-[#14213D] 
                           transition-all duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
