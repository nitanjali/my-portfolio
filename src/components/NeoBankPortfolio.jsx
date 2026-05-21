// // export default function NeoBankPortfolio() {
// //   const projects = [
// //     {
// //       title: "NeoBank Mobile App",
// //       desc: "Modern fintech banking experience with analytics and accessibility.",
// //     },
// //     {
// //       title: "Expense Dashboard",
// //       desc: "Clean expense tracking dashboard with visual financial insights.",
// //     },
// //     {
// //       title: "Design System",
// //       desc: "Scalable UI system focused on spacing, typography, and consistency.",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-[#F5F9FF] text-[#1B1D21] overflow-hidden">
// //       {/* HERO */}
// //       <section className="relative overflow-hidden px-6 md:px-20 pt-20 pb-28">
// //         {/* BACKGROUND */}
// //         <div className="absolute inset-0 bg-gradient-to-br from-[#DDEEFF] via-[#A8D2FF] to-[#6FAFFF]" />

// //         {/* GLOW */}
// //         <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
// //         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D8F5FF]/40 rounded-full blur-3xl" />

// //         <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
// //           {/* LEFT */}
// //           <div>
// //             <div className="inline-flex items-center px-5 py-3 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-white text-sm shadow-lg mb-8">
// //               UI/UX Designer + Frontend UI Engineer
// //             </div>

// //             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
// //               Nitanjali
// //               <br />
// //               Karanje
// //             </h1>

// //             <p className="mt-8 text-xl text-white/90 leading-relaxed max-w-xl">
// //               Designing modern fintech experiences with responsive UI,
// //               accessibility, clean design systems, and scalable frontend
// //               implementation.
// //             </p>

// //             <div className="mt-10 flex flex-wrap gap-5">
// //               <button className="px-8 py-4 rounded-2xl bg-white text-[#5B9DFF] font-semibold shadow-xl hover:scale-105 transition-all duration-300">
// //                 View Portfolio
// //               </button>

// //               <button className="px-8 py-4 rounded-2xl border border-white/30 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300">
// //                 Contact Me
// //               </button>
// //             </div>

// //             {/* SKILLS */}
// //             <div className="mt-14 flex flex-wrap gap-4">
// //               {[
// //                 "UI/UX Design",
// //                 "Responsive UI",
// //                 "Accessibility",
// //                 "Design Systems",
// //                 "React",
// //                 "Frontend Development",
// //               ].map((skill) => (
// //                 <div
// //                   key={skill}
// //                   className="px-5 py-3 rounded-2xl bg-white/20 border border-white/20 backdrop-blur-md text-white text-sm shadow-lg"
// //                 >
// //                   {skill}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* RIGHT MOCKUP */}
// //           <div className="relative flex justify-center">
// //             <div className="w-[360px] bg-white rounded-[42px] p-5 shadow-2xl border border-white/40">
// //               {/* CARD */}
// //               <div className="rounded-[32px] p-6 bg-gradient-to-br from-[#E4F1FF] via-[#A8D2FF] to-[#74B1FF] text-white shadow-xl mb-6">
// //                 <div className="flex justify-between items-center mb-10">
// //                   <div>
// //                     <p className="text-sm text-white/80">Total Balance</p>

// //                     <h2 className="text-5xl font-bold mt-2">$58,095</h2>
// //                   </div>

// //                   <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md" />
// //                 </div>

// //                 <div className="grid grid-cols-4 gap-4">
// //                   {["Send", "Pay", "Cards", "More"].map((item) => (
// //                     <div
// //                       key={item}
// //                       className="flex flex-col items-center gap-3"
// //                     >
// //                       <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md" />

// //                       <span className="text-xs text-white">{item}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* SAVINGS */}
// //               <div className="bg-[#F8FBFF] rounded-[28px] p-5 border border-[#E6EEF8] shadow-sm mb-6">
// //                 <div className="flex justify-between mb-3">
// //                   <p className="font-semibold">Savings Goal</p>

// //                   <p className="text-[#7B8794]">$150,874</p>
// //                 </div>

// //                 <div className="h-3 bg-[#DCEAFF] rounded-full overflow-hidden mb-3">
// //                   <div className="w-3/4 h-full bg-gradient-to-r from-[#79B7FF] to-[#CFF4FF] rounded-full" />
// //                 </div>

// //                 <p className="text-sm text-[#7B8794]">
// //                   $8,000 remaining to achieve your goals.
// //                 </p>
// //               </div>

// //               {/* TRANSACTIONS */}
// //               <div className="bg-white rounded-[28px] border border-[#E6EEF8] shadow-sm p-5">
// //                 <div className="flex justify-between mb-6">
// //                   <h3 className="text-lg font-semibold">Transactions</h3>

// //                   <p className="text-sm text-[#7B8794]">See All</p>
// //                 </div>

// //                 {[1, 2, 3].map((item) => (
// //                   <div
// //                     key={item}
// //                     className="flex items-center justify-between py-4 border-b border-[#EEF2F7]"
// //                   >
// //                     <div className="flex items-center gap-4">
// //                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B8DAFF] to-[#EEF8FF]" />

// //                       <div>
// //                         <p className="font-medium">Apple Store</p>

// //                         <p className="text-sm text-[#7B8794]">Shopping</p>
// //                       </div>
// //                     </div>

// //                     <div className="text-right">
// //                       <p className="font-semibold">-$499</p>

// //                       <p className="text-sm text-[#7B8794]">Today</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ABOUT */}
// //       <section className="px-6 md:px-20 py-24">
// //         <div className="grid lg:grid-cols-3 gap-8">
// //           <div className="bg-white rounded-[32px] p-10 border border-[#E8EEF8] shadow-sm lg:col-span-2">
// //             <p className="uppercase tracking-[4px] text-[#6FAFFF] text-sm font-semibold mb-5">
// //               About Me
// //             </p>

// //             <h2 className="text-5xl font-bold leading-tight mb-8">
// //               Frontend UI Developer transitioning into modern UI/UX design.
// //             </h2>

// //             <p className="text-lg text-[#667085] leading-relaxed mb-8">
// //               10+ years of experience building responsive enterprise interfaces,
// //               accessibility-focused frontend systems, and scalable UI solutions
// //               using HTML, CSS, JavaScript, React, and modern design workflows.
// //             </p>

// //             <div className="grid md:grid-cols-3 gap-6">
// //               <div className="bg-[#F8FBFF] rounded-[24px] p-6 border border-[#E6EEF8]">
// //                 <h3 className="text-3xl font-bold text-[#5B9DFF] mb-2">10+</h3>

// //                 <p className="text-[#667085]">Years Experience</p>
// //               </div>

// //               <div className="bg-[#F8FBFF] rounded-[24px] p-6 border border-[#E6EEF8]">
// //                 <h3 className="text-3xl font-bold text-[#5B9DFF] mb-2">UI</h3>

// //                 <p className="text-[#667085]">Design Systems</p>
// //               </div>

// //               <div className="bg-[#F8FBFF] rounded-[24px] p-6 border border-[#E6EEF8]">
// //                 <h3 className="text-3xl font-bold text-[#5B9DFF] mb-2">UX</h3>

// //                 <p className="text-[#667085]">Fintech Experiences</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* PROFILE */}
// //           <div className="bg-gradient-to-br from-[#DDEEFF] to-[#F5FBFF] rounded-[32px] p-10 border border-white shadow-lg">
// //             <div className="w-24 h-24 rounded-[28px] bg-white shadow-md mb-8" />

// //             <h3 className="text-3xl font-bold mb-3">Nitanjali Karanje</h3>

// //             <p className="text-[#667085] leading-relaxed mb-8">
// //               UI/UX Designer focused on fintech products, responsive systems,
// //               accessibility, and modern frontend experiences.
// //             </p>

// //             <div className="space-y-4">
// //               <div className="bg-white rounded-2xl p-4 shadow-sm">
// //                 HTML / CSS / React
// //               </div>

// //               <div className="bg-white rounded-2xl p-4 shadow-sm">
// //                 Responsive Design
// //               </div>

// //               <div className="bg-white rounded-2xl p-4 shadow-sm">
// //                 Figma / Prototyping
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* PROJECTS */}
// //       <section className="px-6 md:px-20 py-24">
// //         <div className="mb-16">
// //           <p className="uppercase tracking-[4px] text-[#6FAFFF] text-sm font-semibold mb-5">
// //             Featured Projects
// //           </p>

// //           <h2 className="text-5xl font-bold leading-tight max-w-3xl">
// //             Fintech UI/UX portfolio projects focused on modern product design.
// //           </h2>
// //         </div>

// //         <div className="grid lg:grid-cols-3 gap-8">
// //           {projects.map((project) => (
// //             <div
// //               key={project.title}
// //               className="bg-white rounded-[32px] overflow-hidden border border-[#E8EEF8] shadow-sm hover:-translate-y-2 transition-all duration-300"
// //             >
// //               <div className="h-[260px] bg-gradient-to-br from-[#E4F1FF] via-[#A8D2FF] to-[#74B1FF] p-6 relative overflow-hidden">
// //                 <div className="absolute top-8 right-8 w-28 h-28 rounded-full bg-white/20 blur-2xl" />

// //                 <div className="relative z-10 bg-white rounded-[28px] p-5 shadow-xl w-[220px] mt-8 mx-auto">
// //                   <div className="h-16 rounded-2xl bg-gradient-to-r from-[#9BC8FF] to-[#DFF7FF] mb-4" />

// //                   <div className="grid grid-cols-4 gap-2 mb-4">
// //                     {[1, 2, 3, 4].map((item) => (
// //                       <div
// //                         key={item}
// //                         className="h-10 rounded-xl bg-[#EEF6FF]"
// //                       />
// //                     ))}
// //                   </div>

// //                   <div className="h-20 rounded-2xl bg-[#F7FBFF] border border-[#E8EEF8]" />
// //                 </div>
// //               </div>

// //               <div className="p-8">
// //                 <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

// //                 <p className="text-[#667085] leading-relaxed">{project.desc}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// export default function Portfolio() {
//   const works = [
//     {
//       title: "NeoBank Fintech App",
//       desc: "Modern banking experience focused on financial wellness, clean analytics, and accessible UI.",
//     },
//     {
//       title: "Expense Dashboard",
//       desc: "Responsive dashboard with data visualization and budgeting insights.",
//     },
//     {
//       title: "Design System",
//       desc: "Scalable UI system with reusable components, spacing, typography, and accessibility.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F7F9FC] text-[#111827]">
//       {/* NAVBAR */}
//       <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-[#E5E7EB]">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
//           <div>
//             <h1 className="text-2xl font-semibold tracking-tight">Nitanjali</h1>
//           </div>

//           <nav className="flex items-center gap-8 text-sm font-medium text-[#4B5563]">
//             <a href="#about" className="hover:text-black transition-all">
//               About
//             </a>

//             <a href="#experience" className="hover:text-black transition-all">
//               Experience
//             </a>

//             <a href="#work" className="hover:text-black transition-all">
//               Work
//             </a>
//           </nav>
//         </div>
//       </header>

//       {/* HERO */}
//       <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-28">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           {/* LEFT */}
//           <div>
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-sm font-medium mb-8">
//               UI/UX Designer + Frontend UI Developer
//             </div>

//             <h1 className="text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
//               Designing
//               <br />
//               clean digital
//               <br />
//               experiences.
//             </h1>

//             <p className="mt-8 text-xl text-[#6B7280] leading-relaxed max-w-xl">
//               Frontend UI Developer with 10+ years of experience building
//               responsive enterprise applications, now focused on UI/UX design,
//               modern product interfaces, accessibility, and design systems.
//             </p>

//             <div className="mt-12 flex flex-wrap gap-5">
//               <button className="px-8 py-4 rounded-2xl bg-[#111827] text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg">
//                 View Work
//               </button>

//               <button className="px-8 py-4 rounded-2xl border border-[#D1D5DB] bg-white hover:bg-[#F9FAFB] transition-all duration-300">
//                 Contact Me
//               </button>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="relative">
//             <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[#E0E7FF] blur-3xl opacity-70" />

//             <div className="relative bg-white rounded-[36px] shadow-2xl border border-[#E5E7EB] overflow-hidden">
//               {/* TOP */}
//               <div className="h-[220px] bg-gradient-to-br from-[#DCE7FF] via-[#F3F6FF] to-[#FFFFFF] p-8">
//                 <div className="bg-white rounded-[28px] p-6 shadow-xl w-[260px]">
//                   <div className="flex justify-between items-center mb-6">
//                     <div>
//                       <p className="text-sm text-[#6B7280]">Balance</p>

//                       <h2 className="text-4xl font-bold mt-2">$58,095</h2>
//                     </div>

//                     <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C7D2FE] to-[#EEF2FF]" />
//                   </div>

//                   <div className="grid grid-cols-4 gap-3">
//                     {[1, 2, 3, 4].map((item) => (
//                       <div
//                         key={item}
//                         className="h-12 rounded-xl bg-[#EEF2FF]"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* BOTTOM */}
//               <div className="p-8">
//                 <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[28px] p-6 mb-6">
//                   <div className="flex justify-between mb-4">
//                     <p className="font-medium">Savings Goal</p>

//                     <p className="text-[#6B7280]">$150,874</p>
//                   </div>

//                   <div className="h-3 bg-[#E5E7EB] rounded-full overflow-hidden mb-3">
//                     <div className="w-3/4 h-full bg-[#111827] rounded-full" />
//                   </div>

//                   <p className="text-sm text-[#6B7280]">
//                     $8,000 remaining to reach your goal.
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   {[1, 2, 3].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center justify-between p-4 rounded-2xl border border-[#E5E7EB]"
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 rounded-full bg-[#EEF2FF]" />

//                         <div>
//                           <p className="font-medium">Apple Store</p>

//                           <p className="text-sm text-[#6B7280]">Shopping</p>
//                         </div>
//                       </div>

//                       <p className="font-semibold">-$499</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
//         <div className="grid lg:grid-cols-2 gap-16">
//           <div>
//             <p className="text-sm uppercase tracking-[4px] text-[#6B7280] mb-6">
//               About Me
//             </p>

//             <h2 className="text-5xl font-semibold leading-tight mb-8">
//               Creating intuitive interfaces with strong frontend foundations.
//             </h2>
//           </div>

//           <div>
//             <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
//               I specialize in responsive UI development and modern user
//               experiences with strong attention to accessibility, spacing,
//               visual hierarchy, and scalable component systems.
//             </p>

//             <p className="text-lg text-[#6B7280] leading-relaxed">
//               Currently transitioning deeper into UI/UX design by building
//               fintech product concepts, case studies, wireframes, and
//               interactive prototypes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* EXPERIENCE */}
//       <section
//         id="experience"
//         className="max-w-7xl mx-auto px-6 md:px-12 py-24"
//       >
//         <div className="mb-16">
//           <p className="text-sm uppercase tracking-[4px] text-[#6B7280] mb-6">
//             Experience
//           </p>

//           <h2 className="text-5xl font-semibold">
//             10+ years of frontend UI experience.
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-10 shadow-sm">
//             <h3 className="text-4xl font-semibold mb-4">UI</h3>

//             <p className="text-[#6B7280] leading-relaxed">
//               Responsive layouts, accessibility, modern UI systems, and scalable
//               frontend architecture.
//             </p>
//           </div>

//           <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-10 shadow-sm">
//             <h3 className="text-4xl font-semibold mb-4">UX</h3>

//             <p className="text-[#6B7280] leading-relaxed">
//               User flows, wireframes, interaction design, and clean product
//               experiences.
//             </p>
//           </div>

//           <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-10 shadow-sm">
//             <h3 className="text-4xl font-semibold mb-4">Design</h3>

//             <p className="text-[#6B7280] leading-relaxed">
//               Design systems, typography, spacing, visual consistency, and
//               fintech interfaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* WORK */}
//       <section id="work" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
//         <div className="mb-16">
//           <p className="text-sm uppercase tracking-[4px] text-[#6B7280] mb-6">
//             Selected Work
//           </p>

//           <h2 className="text-5xl font-semibold max-w-3xl leading-tight">
//             UI/UX projects and product concepts focused on fintech experiences.
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {works.map((work) => (
//             <div
//               key={work.title}
//               className="group bg-white border border-[#E5E7EB] rounded-[36px] overflow-hidden shadow-sm hover:-translate-y-2 transition-all duration-300"
//             >
//               {/* MOCKUP */}
//               <div className="h-[280px] bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFF] to-white p-8 relative overflow-hidden">
//                 <div className="absolute top-6 right-6 w-32 h-32 rounded-full bg-[#E0E7FF] blur-3xl opacity-70" />

//                 <div className="relative bg-white rounded-[28px] p-5 shadow-xl w-[240px] mx-auto mt-8">
//                   <div className="h-16 rounded-2xl bg-gradient-to-r from-[#C7D2FE] to-[#EEF2FF] mb-5" />

//                   <div className="grid grid-cols-4 gap-2 mb-4">
//                     {[1, 2, 3, 4].map((item) => (
//                       <div
//                         key={item}
//                         className="h-10 rounded-xl bg-[#F3F4F6]"
//                       />
//                     ))}
//                   </div>

//                   <div className="h-20 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB]" />
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="p-8">
//                 <h3 className="text-2xl font-semibold mb-4">{work.title}</h3>

//                 <p className="text-[#6B7280] leading-relaxed mb-8">
//                   {work.desc}
//                 </p>

//                 <button className="text-sm font-medium text-black">
//                   View Case Study →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

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
