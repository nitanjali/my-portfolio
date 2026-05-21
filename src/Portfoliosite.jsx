import { useNavigate } from "react-router-dom";

export default function PortfolioSite() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Finbank — Banking App",
      route: "/work/bank",
      desc: "Modern fintech dashboard focused on clarity, spending insights, and trust-based UX.",
    },
    {
      title: "NOIR — AI Workspace",
      route: "/work/noir-ai",
      desc: "AI-powered productivity workspace for enterprise workflow intelligence.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-white/10 sticky top-0 bg-[#050816]/90 backdrop-blur-xl z-50">
        <h1 className="text-xl font-black tracking-wide">NITANJALI</h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#work">WORK</a>
        </div>
      </div>

      {/* HERO */}
      <section className="px-10 md:px-20 py-28">
        <div className="max-w-5xl">
          <p className="uppercase tracking-[0.3em] text-sm text-indigo-400 mb-6">
            Product Designer & UX Engineer
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
            Building thoughtful digital experiences.
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-9 max-w-3xl">
            Frontend Developer transitioning into Product Design and UX
            Engineering with 10+ years of experience building responsive,
            scalable, accessibility-aware enterprise applications.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-10 md:px-20 py-24 border-t border-white/5"
      >
        <h2 className="text-4xl font-black mb-10">About Me</h2>

        <div className="max-w-4xl space-y-8">
          <p className="text-gray-400 text-lg leading-9">
            Experienced frontend engineer with deep expertise in React,
            accessibility, responsive systems, and enterprise UI architecture.
          </p>

          <p className="text-gray-400 text-lg leading-9">
            Transitioning into UX/Product Design with focus on design systems,
            interaction design, usability, and scalable digital experiences.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="px-10 md:px-20 py-24 border-t border-white/5"
      >
        <h2 className="text-4xl font-black mb-14">Experience</h2>

        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">Hexaware Technologies</h3>

                <p className="text-indigo-300 text-sm mt-1 uppercase tracking-widest">
                  Frontend Developer
                </p>
              </div>

              <p className="text-gray-400">2018 — 2021</p>
            </div>

            <p className="text-gray-400 leading-8">
              Developed scalable enterprise applications using React, Redux,
              accessibility-aware systems, and responsive UI patterns.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">Synechron Technologies</h3>

                <p className="text-indigo-300 text-sm mt-1 uppercase tracking-widest">
                  Frontend Developer
                </p>
              </div>

              <p className="text-gray-400">2013 — 2018</p>
            </div>

            <p className="text-gray-400 leading-8">
              Built banking, healthcare, and insurance interfaces with strong
              focus on usability and responsive enterprise workflows.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">Infosys</h3>

                <p className="text-indigo-300 text-sm mt-1 uppercase tracking-widest">
                  UI Developer
                </p>
              </div>

              <p className="text-gray-400">2010 — 2013</p>
            </div>

            <p className="text-gray-400 leading-8">
              Developed responsive UI systems and accessibility-friendly layouts
              using enterprise frontend frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="px-10 md:px-20 py-24 border-t border-white/5"
      >
        <h2 className="text-4xl font-black mb-14">Featured Work</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => navigate(project.route)}
              className="cursor-pointer bg-white/5 border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all duration-300"
            >
              <p className="text-indigo-300 text-sm uppercase tracking-widest mb-4">
                UX Case Study
              </p>

              <h3 className="text-3xl font-black mb-5">{project.title}</h3>

              <p className="text-gray-400 leading-8 text-lg">{project.desc}</p>

              <div className="mt-10 text-sm text-white/70">View Project →</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-10 md:px-20 py-24 border-t border-white/5 text-center">
        <h2 className="text-4xl font-black">Let’s Work Together</h2>

        <p className="text-gray-400 mt-4 text-lg">nitanjali23@gmail.com</p>
      </section>
    </div>
  );
}
