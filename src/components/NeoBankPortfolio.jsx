import { useState } from "react";

export default function PortfolioSite() {
  const [activeTab, setActiveTab] = useState("home");

  const projects = [
    {
      title: "EY TaxChat",
      type: "Enterprise Tax Platform",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
      desc: "Enterprise tax workflow redesign focused on onboarding, document upload, and guided filing experience.",
    },
    {
      title: "RBC Banking",
      type: "Digital Banking UX",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
      desc: "Responsive banking dashboard with focus on clarity, accessibility, and transaction hierarchy.",
    },
    {
      title: "Inchcape – World of Ports",
      type: "Enterprise Operations UX",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
      desc: "Maritime logistics dashboard UX for vessel tracking, operations, and real-time monitoring.",
    },
  ];

  const designSystem = {
    colors: ["#111827", "#4F46E5", "#10B981", "#F59E0B", "#EF4444"],
    typography: ["H1 64px", "H2 48px", "H3 32px", "Body 18px", "Caption 14px"],
    spacing: ["4px", "8px", "16px", "24px", "32px", "48px", "64px"],
  };

  const figmaPages = [
    {
      title: "01 — Cover Page",
      desc: "Portfolio cover with role, summary, industries, and featured projects.",
    },
    {
      title: "02 — User Research",
      desc: "Pain points, user goals, business objectives, and workflow analysis.",
    },
    {
      title: "03 — User Flows",
      desc: "Authentication flow, dashboard navigation, upload flow, and operational workflows.",
    },
    {
      title: "04 — Low Fidelity Wireframes",
      desc: "Desktop and mobile wireframes focused on hierarchy and navigation.",
    },
    {
      title: "05 — High Fidelity UI",
      desc: "Final polished UI screens with enterprise dashboard styling.",
    },
    {
      title: "06 — Responsive Mobile UX",
      desc: "Mobile onboarding, dashboard responsiveness, and adaptive layouts.",
    },
    {
      title: "07 — Design System",
      desc: "Colors, typography, buttons, forms, tables, cards, and component states.",
    },
    {
      title: "08 — Clickable Prototype",
      desc: "Interactive Figma prototype connecting all primary user journeys.",
    },
  ];

  const prototypes = [
    {
      title: "Banking Dashboard Prototype",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Tax Workflow Prototype",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Enterprise Ops Prototype",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#050816] min-h-screen text-white overflow-hidden">
      {/* NAV */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-white/10 bg-[#0B1020]/90 backdrop-blur-xl sticky top-0 z-50">
        <h1 className="font-black tracking-wide text-white text-xl">
          NITANJALI
        </h1>
        <div className="flex gap-6 text-sm">
          {"about,experience,work".split(",").map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}>
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="px-10 md:px-20 py-28 text-center relative">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Product Designer & UX Engineer
        </h1>
        <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg leading-9">
          Senior Frontend Developer transitioning into Product Design and UX
          Engineering with 10+ years of experience building scalable,
          accessible, and responsive digital systems.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-10">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl shadow">
              <img
                src={p.image}
                className="rounded-t-2xl h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-xl">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.type}</p>
                <p className="mt-3 text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="px-10 py-20 bg-white">
        <h2 className="text-5xl font-black mb-16 text-white">About Me</h2>

        <div className="max-w-5xl">
          <p className="uppercase tracking-[0.3em] text-sm text-indigo-300 mb-6">
            UI Developer → UI/UX Designer
          </p>

          <p className="text-gray-400 text-xl leading-10 mb-8">
            Frontend Developer with 10+ years of experience building responsive,
            scalable, and accessibility-aware enterprise applications using
            React, HTML5, CSS3, JavaScript, and modern frontend systems.
          </p>

          <p className="text-gray-400 text-xl leading-10 mb-12">
            Transitioning into Product Design and UX Engineering with a strong
            focus on design systems, responsive interaction design, usability
            improvements, enterprise workflows, and scalable digital
            experiences.
          </p>
        </div>

        <h3 className="text-3xl font-black mb-10 text-white">Skills</h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold mb-4">Colors</h3>
            <div className="flex gap-3 flex-wrap">
              {designSystem.colors.map((c) => (
                <div
                  key={c}
                  className="w-12 h-12 rounded-full"
                  style={{ background: c }}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Typography</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              {designSystem.typography.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Spacing</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              {designSystem.spacing.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROTOTYPES */}
      <section className="px-10 py-20">
        <h2 className="text-5xl font-black mb-16 text-white">Experience</h2>

        <div className="space-y-10 mb-24">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
            <div className="flex flex-col lg:flex-row justify-between mb-6 gap-6">
              <div>
                <h3 className="text-3xl font-black text-white">
                  Hexaware Technologies
                </h3>
                <p className="text-indigo-300 mt-2 uppercase tracking-[0.25em] text-sm">
                  Frontend Developer
                </p>
              </div>

              <p className="text-gray-400">2018 — 2021</p>
            </div>

            <p className="text-gray-400 leading-9 text-lg">
              Developed responsive and scalable enterprise applications using
              React, Redux, HTML5, CSS3, LESS, and Material UI while focusing on
              accessibility-aware interfaces and performance optimization.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
            <div className="flex flex-col lg:flex-row justify-between mb-6 gap-6">
              <div>
                <h3 className="text-3xl font-black text-white">
                  Synechron Technologies
                </h3>
                <p className="text-indigo-300 mt-2 uppercase tracking-[0.25em] text-sm">
                  Frontend Developer
                </p>
              </div>

              <p className="text-gray-400">2013 — 2018</p>
            </div>

            <p className="text-gray-400 leading-9 text-lg">
              Built responsive banking, insurance, and healthcare interfaces
              using Bootstrap, LESS, SASS, JavaScript, and accessibility-aware
              frontend implementation practices.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
            <div className="flex flex-col lg:flex-row justify-between mb-6 gap-6">
              <div>
                <h3 className="text-3xl font-black text-white">Infosys</h3>
                <p className="text-indigo-300 mt-2 uppercase tracking-[0.25em] text-sm">
                  UI Developer / Designer
                </p>
              </div>

              <p className="text-gray-400">2010 — 2013</p>
            </div>

            <p className="text-gray-400 leading-9 text-lg">
              Developed responsive interfaces using Zurb Foundation while
              supporting accessibility-friendly layouts, readable typography,
              and structured UI systems.
            </p>
          </div>
        </div>

        <h2 className="text-5xl font-black mb-16 text-white">Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {prototypes.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl shadow">
              <img
                src={p.image}
                className="rounded-t-2xl h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FIGMA STRUCTURE */}
      <section className="px-10 py-20 bg-white">
        <h2 className="text-3xl font-bold mb-10">Figma Portfolio Structure</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {figmaPages.map((page) => (
            <div
              key={page.title}
              className="bg-[#f7f7f5] rounded-3xl p-8 border border-gray-200"
            >
              <div className="h-48 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 mb-6 flex items-center justify-center text-gray-500 text-sm uppercase tracking-[0.25em]">
                Figma Screen
              </div>

              <h3 className="text-2xl font-bold mb-4">{page.title}</h3>

              <p className="text-gray-600 leading-8">{page.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UX DELIVERABLES */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-10">UX Deliverables</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="h-32 rounded-2xl bg-gray-100 mb-5"></div>
            <h3 className="font-bold text-xl mb-3">Wireframes</h3>
            <p className="text-sm text-gray-600 leading-7">
              Low and high-fidelity layouts focused on usability and navigation
              clarity.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="h-32 rounded-2xl bg-gray-100 mb-5"></div>
            <h3 className="font-bold text-xl mb-3">Design Systems</h3>
            <p className="text-sm text-gray-600 leading-7">
              Reusable UI components and scalable responsive interface
              foundations.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="h-32 rounded-2xl bg-gray-100 mb-5"></div>
            <h3 className="font-bold text-xl mb-3">Prototypes</h3>
            <p className="text-sm text-gray-600 leading-7">
              Clickable enterprise UX flows designed for operational efficiency.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="h-32 rounded-2xl bg-gray-100 mb-5"></div>
            <h3 className="font-bold text-xl mb-3">Responsive UX</h3>
            <p className="text-sm text-gray-600 leading-7">
              Mobile-first and adaptive interfaces optimized across devices.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-10 py-20 text-center bg-black text-white">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="mt-4 text-gray-300">nitanjali23@gmail.com</p>
      </section>
    </div>
  );
}
