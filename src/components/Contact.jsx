export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 flex flex-col items-center text-center
                 bg-linear-to-bl from-[#14213D] via-black to-black"
    >
      <h2 className="text-4xl font-extrabold mb-6 text-[#FCA311]">
        Contact Me
      </h2>

      <p className="text-[#E5E5E5] mb-10 max-w-xl">
        Let’s connect! Feel free to reach out for collaborations, opportunities,
        or questions.
      </p>

      <form className="w-full max-w-xl flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="px-6 py-4 rounded-full bg-black/40 border border-[#FCA311] 
                     text-white focus:ring-2 focus:ring-[#FCA311] outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="px-6 py-4 rounded-full bg-black/40 border border-[#FCA311] 
                     text-white focus:ring-2 focus:ring-[#FCA311] outline-none"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="px-6 py-4 rounded-3xl bg-black/40 border border-[#FCA311] 
                     text-white focus:ring-2 focus:ring-[#FCA311] outline-none"
        ></textarea>

        <button
          type="submit"
          className="px-8 py-4 mt-2 bg-[#FCA311] text-[#14213D] font-bold rounded-full 
                     hover:scale-105 hover:bg-[#ffb733] cursor-pointer transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
