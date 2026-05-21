// import { useState } from "react";

// export default function PortfolioSite() {
//   const [activeTab, setActiveTab] = useState("home");

//   const projects = [
//     {
//       title: "EY TaxChat",
//       type: "Enterprise Tax Platform",
//       image:
//         "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
//       desc: "Enterprise tax workflow redesign focused on onboarding, document upload, and guided filing experience.",
//     },
//     {
//       title: "RBC Banking",
//       type: "Digital Banking UX",
//       image:
//         "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
//       desc: "Responsive banking dashboard with focus on clarity, accessibility, and transaction hierarchy.",
//     },
//     {
//       title: "Inchcape – World of Ports",
//       type: "Enterprise Operations UX",
//       image:
//         "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
//       desc: "Maritime logistics dashboard UX for vessel tracking, operations, and real-time monitoring.",
//     },
//   ];

//   const designSystem = {
//     colors: ["#111827", "#4F46E5", "#10B981", "#F59E0B", "#EF4444"],
//     typography: ["H1 64px", "H2 48px", "H3 32px", "Body 18px", "Caption 14px"],
//     spacing: ["4px", "8px", "16px", "24px", "32px", "48px", "64px"],
//   };

//   const figmaPages = [
//     {
//       title: "01 — Cover Page",
//       desc: "Portfolio cover with role, summary, industries, and featured projects.",
//     },
//     {
//       title: "02 — User Research",
//       desc: "Pain points, user goals, business objectives, and workflow analysis.",
//     },
//     {
//       title: "03 — User Flows",
//       desc: "Authentication flow, dashboard navigation, upload flow, and operational workflows.",
//     },
//     {
//       title: "04 — Low Fidelity Wireframes",
//       desc: "Desktop and mobile wireframes focused on hierarchy and navigation.",
//     },
//     {
//       title: "05 — High Fidelity UI",
//       desc: "Final polished UI screens with enterprise dashboard styling.",
//     },
//     {
//       title: "06 — Responsive Mobile UX",
//       desc: "Mobile onboarding, dashboard responsiveness, and adaptive layouts.",
//     },
//     {
//       title: "07 — Design System",
//       desc: "Colors, typography, buttons, forms, tables, cards, and component states.",
//     },
//     {
//       title: "08 — Clickable Prototype",
//       desc: "Interactive Figma prototype connecting all primary user journeys.",
//     },
//   ];

//   const prototypes = [
//     {
//       title: "Banking Dashboard Prototype",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
//     },
//     {
//       title: "Tax Workflow Prototype",
//       image:
//         "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
//     },
//     {
//       title: "Enterprise Ops Prototype",
//       image:
//         "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
//     },
//   ];

//   return (
//     <div className="bg-[#050816] min-h-screen text-white overflow-hidden">
//       {/* NAV */}
//       <div className="flex justify-between items-center px-10 py-6 border-b border-white/10 bg-[#0B1020]/90 backdrop-blur-xl sticky top-0 z-50">
//         <h1 className="font-black tracking-wide text-white text-xl">
//           NITANJALI
//         </h1>
//         <div className="flex gap-6 text-sm">
//           {"about,experience,work".split(",").map((tab) => (
//             <button key={tab} onClick={() => setActiveTab(tab)}>
//               {tab.toUpperCase()}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* HERO */}
//       <section className="px-10 md:px-20 py-28 text-center relative">
//         <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//           Product Designer & UX Engineer
//         </h1>
//         <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg leading-9">
//           Senior Frontend Developer transitioning into Product Design and UX
//           Engineering with 10+ years of experience building scalable,
//           accessible, and responsive digital systems.
//         </p>
//       </section>

//       {/* PROJECTS */}
//       <section className="px-10 py-20">
//         <h2 className="text-3xl font-bold mb-10">Case Studies</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((p) => (
//             <div key={p.title} className="bg-white rounded-2xl shadow">
//               <img
//                 src={p.image}
//                 className="rounded-t-2xl h-48 w-full object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="font-bold text-xl">{p.title}</h3>
//                 <p className="text-sm text-gray-500">{p.type}</p>
//                 <p className="mt-3 text-sm text-gray-600">{p.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* DESIGN SYSTEM */}
//       <section className="px-10 py-20 bg-white">
//         <h2 className="text-5xl font-black mb-16 text-white">About Me</h2>

//         <div className="max-w-5xl">
//           <p className="uppercase tracking-[0.3em] text-sm text-indigo-300 mb-6">
//             UI Developer → UI/UX Designer
//           </p>

//           <p className="text-gray-400 text-xl leading-10 mb-8">
//             Frontend Developer with 10+ years of experience building responsive,
//             scalable, and accessibility-aware enterprise applications using
//             React, HTML5, CSS3, JavaScript, and modern frontend systems.
//           </p>

//           <p className="text-gray-400 text-xl leading-10 mb-12">
//             Transitioning into Product Design and UX Engineering with a strong
//             focus on design systems, responsive interaction design, usability
//             improvements, enterprise workflows, and scalable digital
//             experiences.
//           </p>
//         </div>

//         <h3 className="text-3xl font-black mb-10 text-white">Skills</h3>

//         <div className="grid md:grid-cols-3 gap-10">
//           <div>
//             <h3 className="font-bold mb-4">Colors</h3>
//             <div className="flex gap-3 flex-wrap">
//               {designSystem.colors.map((c) => (
//                 <div
//                   key={c}
//                   className="w-12 h-12 rounded-full"
//                   style={{ background: c }}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Typography</h3>
//             <ul className="text-sm text-gray-600 space-y-2">
//               {designSystem.typography.map((t) => (
//                 <li key={t}>{t}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Spacing</h3>
//             <ul className="text-sm text-gray-600 space-y-2">
//               {designSystem.spacing.map((s) => (
//                 <li key={s}>{s}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* PROTOTYPES */}
//       <section className="px-10 py-20">
//         <h2 className="text-5xl font-black mb-16 text-white">Experience</h2>

//         <div className="space-y-10 mb-24">
//           <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
//             <div className="flex flex-col lg:flex-row justify-between mb-6 gap-6">
//               <div>
//                 <h3 className="text-3xl font-black text-white">
//                   Hexaware Technologies
//                 </h3>
//                 <p className="text-indigo-300 mt-2 uppercase tracking-[0.25em] text-sm">
//                   Frontend Developer
//                 </p>
//               </div>

//               <p className="text-gray-400">2018 — 2021</p>
//             </div>

//             <p className="text-gray-400 leading-9 text-lg">
//               Developed responsive and scalable enterprise applications using
//               React, Redux, HTML5, CSS3, LESS, and Material UI while focusing on
//               accessibility-aware interfaces and performance optimization.
//             </p>
//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
//             <div className="flex flex-col lg:flex-row justify-between mb-6 gap-6">
//               <div>
//                 <h3 className="text-3xl font-black text-white">
//                   Synechron Technologies
//                 </h3>
//                 <p className="text-indigo-300 mt-2 uppercase tracking-[0.25em] text-sm">
//                   Frontend Developer
//                 </p>
//               </div>

//               <p className="text-gray-400">2013 — 2018</p>
//             </div>

//             <p className="text-gray-400 leading-9 text-lg">
//               Built responsive banking, insurance, and healthcare interfaces
//               using Bootstrap, LESS, SASS, JavaScript, and accessibility-aware
//               frontend implementation practices.
//             </p>
//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
//             <div className="flex flex-col lg:flex-row justify-between mb-6 gap-6">
//               <div>
//                 <h3 className="text-3xl font-black text-white">Infosys</h3>
//                 <p className="text-indigo-300 mt-2 uppercase tracking-[0.25em] text-sm">
//                   UI Developer / Designer
//                 </p>
//               </div>

//               <p className="text-gray-400">2010 — 2013</p>
//             </div>

//             <p className="text-gray-400 leading-9 text-lg">
//               Developed responsive interfaces using Zurb Foundation while
//               supporting accessibility-friendly layouts, readable typography,
//               and structured UI systems.
//             </p>
//           </div>
//         </div>

//         <h2 className="text-5xl font-black mb-16 text-white">Work</h2>

//         <div className="grid lg:grid-cols-2 gap-10">
//           <div className="bg-white/5 border border-white/10 rounded-[36px] overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl">
//             <img
//               src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
//               className="h-[320px] w-full object-cover"
//             />

//             <div className="p-10">
//               <p className="uppercase tracking-[0.25em] text-sm text-indigo-300 mb-4">
//                 Banking UX Case Study
//               </p>

//               <h3 className="text-4xl font-black text-white mb-6">
//                 RBC Digital Banking Platform
//               </h3>

//               <p className="text-gray-400 text-lg leading-9 mb-8">
//                 Responsive banking experience focused on dashboard usability,
//                 transaction visibility, accessibility-aware interfaces, and
//                 scalable enterprise UX systems.
//               </p>

//               <div className="flex flex-wrap gap-4 mb-10">
//                 <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-sm text-white">
//                   React
//                 </div>

//                 <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-sm text-white">
//                   Responsive UX
//                 </div>

//                 <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-sm text-white">
//                   Accessibility
//                 </div>

//                 <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-sm text-white">
//                   Dashboard Design
//                 </div>
//               </div>

//               <div className="space-y-8">
//                 <div className="bg-[#0F172A] rounded-[28px] p-8 border border-white/5">
//                   <h4 className="text-2xl font-bold text-white mb-4">
//                     Prototype
//                   </h4>

//                   <p className="text-gray-400 leading-8 mb-6">
//                     Banking dashboard prototype focused on accounts overview,
//                     transactions, analytics cards, and responsive mobile
//                     experiences.
//                   </p>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="h-28 rounded-2xl bg-white/5 border border-white/5"></div>
//                     <div className="h-28 rounded-2xl bg-white/5 border border-white/5"></div>
//                   </div>
//                 </div>

//                 <div className="bg-[#0F172A] rounded-[28px] p-8 border border-white/5">
//                   <h4 className="text-2xl font-bold text-white mb-4">
//                     Design System
//                   </h4>

//                   <p className="text-gray-400 leading-8 mb-6">
//                     Enterprise UI system with typography hierarchy, reusable
//                     banking components, accessible color systems, tables, cards,
//                     and responsive layout foundations.
//                   </p>

//                   <div className="flex gap-4 flex-wrap">
//                     <div className="w-12 h-12 rounded-full bg-indigo-500"></div>
//                     <div className="w-12 h-12 rounded-full bg-emerald-500"></div>
//                     <div className="w-12 h-12 rounded-full bg-orange-400"></div>
//                     <div className="w-12 h-12 rounded-full bg-rose-500"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FIGMA STRUCTURE */}
//       <section className="px-10 py-20 bg-white">
//         <h2 className="text-3xl font-bold mb-10">Figma Portfolio Structure</h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {figmaPages.map((page) => (
//             <div
//               key={page.title}
//               className="bg-[#f7f7f5] rounded-3xl p-8 border border-gray-200"
//             >
//               <div className="h-48 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 mb-6 flex items-center justify-center text-gray-500 text-sm uppercase tracking-[0.25em]">
//                 Figma Screen
//               </div>

//               <h3 className="text-2xl font-bold mb-4">{page.title}</h3>

//               <p className="text-gray-600 leading-8">{page.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* UX DELIVERABLES */}
//       <section className="px-10 py-20">
//         <h2 className="text-3xl font-bold mb-10">UX Deliverables</h2>

//         <div className="grid md:grid-cols-4 gap-6">
//           <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
//             <div className="h-32 rounded-2xl bg-gray-100 mb-5"></div>
//             <h3 className="font-bold text-xl mb-3">Wireframes</h3>
//             <p className="text-sm text-gray-600 leading-7">
//               Low and high-fidelity layouts focused on usability and navigation
//               clarity.
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
//             <div className="h-32 rounded-2xl bg-gray-100 mb-5"></div>
//             <h3 className="font-bold text-xl mb-3">Design Systems</h3>
//             <p className="text-sm text-gray-600 leading-7">
//               Reusable UI components and scalable responsive interface
//               foundations.
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
//             <div className="h-32 rounded-2xl bg-gray-100 mb-5"></div>
//             <h3 className="font-bold text-xl mb-3">Prototypes</h3>
//             <p className="text-sm text-gray-600 leading-7">
//               Clickable enterprise UX flows designed for operational efficiency.
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
//             <div className="h-32 rounded-2xl bg-gray-100 mb-5"></div>
//             <h3 className="font-bold text-xl mb-3">Responsive UX</h3>
//             <p className="text-sm text-gray-600 leading-7">
//               Mobile-first and adaptive interfaces optimized across devices.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="px-10 py-20 text-center bg-black text-white">
//         <h2 className="text-3xl font-bold">Let’s Work Together</h2>
//         <p className="mt-4 text-gray-300">nitanjali23@gmail.com</p>
//       </section>
//     </div>
//   );
// }

// // import { useState } from "react";

// // export default function PortfolioSite() {
// //   const [activeTab, setActiveTab] = useState("home");

// //   const projects = [
// //     {
// //       title: "EY TaxChat",
// //       type: "Enterprise Tax Platform",
// //       image:
// //         "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
// //       desc: "Enterprise tax workflow redesign focused on onboarding, document upload, and guided filing experience.",
// //     },
// //     {
// //       title: "RBC Banking",
// //       type: "Digital Banking UX",
// //       image:
// //         "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
// //       desc: "Responsive banking dashboard with focus on clarity, accessibility, and transaction hierarchy.",
// //     },
// //     {
// //       title: "Inchcape – World of Ports",
// //       type: "Enterprise Operations UX",
// //       image:
// //         "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
// //       desc: "Maritime logistics dashboard UX for vessel tracking, operations, and real-time monitoring.",
// //     },
// //   ];

// //   const designSystem = {
// //     colors: ["#111827", "#4F46E5", "#10B981", "#F59E0B", "#EF4444"],
// //     typography: ["H1 64px", "H2 48px", "H3 32px", "Body 18px", "Caption 14px"],
// //     spacing: ["4px", "8px", "16px", "24px", "32px", "48px", "64px"],
// //   };

// //   const figmaPages = [
// //     {
// //       title: "01 — Cover Page",
// //       desc: "Portfolio cover with role, summary, industries, and featured projects.",
// //     },
// //     {
// //       title: "02 — User Research",
// //       desc: "Pain points, user goals, business objectives, and workflow analysis.",
// //     },
// //     {
// //       title: "03 — User Flows",
// //       desc: "Authentication flow, dashboard navigation, upload flow, and operational workflows.",
// //     },
// //     {
// //       title: "04 — Low Fidelity Wireframes",
// //       desc: "Desktop and mobile wireframes focused on hierarchy and navigation.",
// //     },
// //     {
// //       title: "05 — High Fidelity UI",
// //       desc: "Final polished UI screens with enterprise dashboard styling.",
// //     },
// //     {
// //       title: "06 — Responsive Mobile UX",
// //       desc: "Mobile onboarding, dashboard responsiveness, and adaptive layouts.",
// //     },
// //     {
// //       title: "07 — Design System",
// //       desc: "Colors, typography, buttons, forms, tables, cards, and component states.",
// //     },
// //     {
// //       title: "08 — Clickable Prototype",
// //       desc: "Interactive Figma prototype connecting all primary user journeys.",
// //     },
// //   ];

// //   const prototypes = [
// //     {
// //       title: "Banking Dashboard Prototype",
// //       image:
// //         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
// //     },
// //     {
// //       title: "Tax Workflow Prototype",
// //       image:
// //         "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
// //     },
// //     {
// //       title: "Enterprise Ops Prototype",
// //       image:
// //         "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
// //     },
// //   ];

// //   // ✅ FIXED: moved OUTSIDE JSX
// //   const bankingScreens = [
// //     {
// //       title: "Dashboard",
// //       subtitle: "Account Overview",
// //       amount: "$24,560",
// //       card: "**** 4832",
// //     },
// //     {
// //       title: "Transactions",
// //       subtitle: "Recent Activity",
// //       transactions: ["Amazon - $120", "Netflix - $18", "Apple - $230"],
// //     },
// //     {
// //       title: "Analytics",
// //       subtitle: "Monthly Spending",
// //       stats: ["Food 30%", "Bills 20%", "Shopping 40%"],
// //     },
// //   ];

// //   return (
// //     <div className="bg-[#050816] min-h-screen text-white overflow-hidden">
// //       {/* NAV */}
// //       <div className="flex justify-between items-center px-10 py-6 border-b border-white/10 bg-[#0B1020]/90 backdrop-blur-xl sticky top-0 z-50">
// //         <h1 className="font-black tracking-wide text-white text-xl">
// //           NITANJALI
// //         </h1>
// //         <div className="flex gap-6 text-sm">
// //           {"about,experience,work".split(",").map((tab) => (
// //             <button key={tab} onClick={() => setActiveTab(tab)}>
// //               {tab.toUpperCase()}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* HERO */}
// //       <section className="px-10 md:px-20 py-28 text-center">
// //         <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
// //           Product Designer & UX Engineer
// //         </h1>
// //         <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg leading-9">
// //           Senior Frontend Developer transitioning into Product Design and UX
// //           Engineering with 10+ years of experience building scalable,
// //           accessible, and responsive digital systems.
// //         </p>
// //       </section>

// //       {/* PROJECTS */}
// //       <section className="px-10 py-20">
// //         <h2 className="text-3xl font-bold mb-10">Case Studies</h2>
// //         <div className="grid md:grid-cols-3 gap-8">
// //           {projects.map((p) => (
// //             <div key={p.title} className="bg-white rounded-2xl shadow">
// //               <img
// //                 src={p.image}
// //                 className="rounded-t-2xl h-48 w-full object-cover"
// //                 alt={p.title}
// //               />
// //               <div className="p-5">
// //                 <h3 className="font-bold text-xl">{p.title}</h3>
// //                 <p className="text-sm text-gray-500">{p.type}</p>
// //                 <p className="mt-3 text-sm text-gray-600">{p.desc}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* DESIGN SYSTEM */}
// //       <section className="px-10 py-20 bg-white">
// //         <h2 className="text-5xl font-black mb-16 text-white">About Me</h2>

// //         <div className="max-w-5xl">
// //           <p className="text-gray-400 text-xl leading-10 mb-8">
// //             Frontend Developer with 10+ years of experience building responsive
// //             and accessible enterprise applications using React, HTML5, CSS3,
// //             JavaScript, and modern frontend systems.
// //           </p>

// //           <p className="text-gray-400 text-xl leading-10 mb-12">
// //             Transitioning into Product Design and UX Engineering focused on
// //             design systems, usability, and scalable digital experiences.
// //           </p>
// //         </div>

// //         <h3 className="text-3xl font-black mb-10 text-white">Skills</h3>

// //         <div className="grid md:grid-cols-3 gap-10">
// //           <div>
// //             <h3 className="font-bold mb-4">Colors</h3>
// //             <div className="flex gap-3 flex-wrap">
// //               {designSystem.colors.map((c) => (
// //                 <div
// //                   key={c}
// //                   className="w-12 h-12 rounded-full"
// //                   style={{ background: c }}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           <div>
// //             <h3 className="font-bold mb-4">Typography</h3>
// //             <ul className="text-sm text-gray-600 space-y-2">
// //               {designSystem.typography.map((t) => (
// //                 <li key={t}>{t}</li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div>
// //             <h3 className="font-bold mb-4">Spacing</h3>
// //             <ul className="text-sm text-gray-600 space-y-2">
// //               {designSystem.spacing.map((s) => (
// //                 <li key={s}>{s}</li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </section>

// //       {/* EXPERIENCE + WORK */}
// //       <section className="px-10 py-20">
// //         <h2 className="text-5xl font-black mb-16 text-white">Experience</h2>

// //         {/* (kept your existing experience blocks unchanged for brevity) */}

// //         <h2 className="text-5xl font-black mb-16 text-white mt-20">Work</h2>

// //         <div className="grid lg:grid-cols-2 gap-10">
// //           {bankingScreens.map((screen) => (
// //             <div
// //               key={screen.title}
// //               className="bg-[#111827] border border-white/10 rounded-[40px] p-6"
// //             >
// //               <h3 className="text-2xl font-black text-white">{screen.title}</h3>

// //               {screen.amount && (
// //                 <p className="text-indigo-300 text-3xl mt-4">{screen.amount}</p>
// //               )}

// //               {screen.transactions && (
// //                 <ul className="mt-4 text-gray-400">
// //                   {screen.transactions.map((t) => (
// //                     <li key={t}>{t}</li>
// //                   ))}
// //                 </ul>
// //               )}

// //               {screen.stats && (
// //                 <ul className="mt-4 text-gray-400">
// //                   {screen.stats.map((s) => (
// //                     <li key={s}>{s}</li>
// //                   ))}
// //                 </ul>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* CONTACT */}
// //       <section className="px-10 py-20 text-center bg-black text-white">
// //         <h2 className="text-3xl font-bold">Let’s Work Together</h2>
// //         <p className="mt-4 text-gray-300">nitanjali23@gmail.com</p>
// //       </section>
// //     </div>
// //   );
// // }

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
    colors: ["#000000", "#111111", "#2A2A2A", "#A1A1A1", "#FFFFFF"],
    typography: ["H1 72px", "H2 48px", "H3 32px", "Body 18px", "Caption 14px"],
    spacing: ["4px", "8px", "16px", "24px", "32px", "48px", "64px"],
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {/* NAV */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <h1 className="font-black tracking-[0.3em] text-white text-xl">
          NITANJALI
        </h1>

        <div className="flex gap-8 text-sm tracking-[0.2em] uppercase text-gray-400">
          {"about,experience,work,contact".split(",").map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="hover:text-white transition-all duration-300"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="px-10 md:px-20 py-32 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent relative z-10">
          Product Designer
          <br />& UX Engineer
        </h1>

        <p className="mt-10 text-gray-500 max-w-3xl mx-auto text-lg leading-9 relative z-10">
          Senior Frontend Developer transitioning into Product Design and UX
          Engineering with 10+ years of experience building scalable,
          accessibility-aware enterprise systems and modern digital experiences.
        </p>

        <div className="mt-12 flex justify-center gap-5 relative z-10">
          <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300">
            View Work
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white hover:bg-white/10 transition-all duration-300">
            Contact
          </button>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-10 py-24">
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Selected Projects
            </p>

            <h2 className="text-5xl font-black">Case Studies</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-[#0B0B0B] border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <p className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-4">
                  {p.type}
                </p>

                <h3 className="font-black text-2xl mb-5">{p.title}</h3>

                <p className="text-gray-400 leading-8 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-28 border-t border-white/5">
        <div className="max-w-6xl">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
            About
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-12">
            Building enterprise experiences through design systems,
            accessibility, and scalable UX engineering.
          </h2>

          <div className="grid md:grid-cols-2 gap-14">
            <p className="text-gray-400 text-lg leading-9">
              Frontend Developer with 10+ years of experience building
              responsive enterprise applications using React, HTML5, CSS3,
              JavaScript, and scalable frontend architectures.
            </p>

            <p className="text-gray-400 text-lg leading-9">
              Transitioning into Product Design and UX Engineering with focus on
              interaction design, enterprise dashboards, accessibility-aware UX,
              responsive systems, and design scalability.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-10 py-24">
        <h2 className="text-5xl font-black mb-16">Design System</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* COLORS */}
          <div className="bg-[#0B0B0B] border border-white/10 rounded-[32px] p-8">
            <h3 className="text-2xl font-bold mb-8">Colors</h3>

            <div className="flex gap-4 flex-wrap">
              {designSystem.colors.map((c) => (
                <div
                  key={c}
                  className="w-14 h-14 rounded-full border border-white/10"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>

          {/* TYPOGRAPHY */}
          <div className="bg-[#0B0B0B] border border-white/10 rounded-[32px] p-8">
            <h3 className="text-2xl font-bold mb-8">Typography</h3>

            <ul className="space-y-4 text-gray-400">
              {designSystem.typography.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          {/* SPACING */}
          <div className="bg-[#0B0B0B] border border-white/10 rounded-[32px] p-8">
            <h3 className="text-2xl font-bold mb-8">Spacing</h3>

            <ul className="space-y-4 text-gray-400">
              {designSystem.spacing.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-10 py-28 border-t border-white/5">
        <h2 className="text-5xl font-black mb-16">Experience</h2>

        <div className="space-y-10">
          {[
            {
              company: "Hexaware Technologies",
              role: "Frontend Developer",
              year: "2018 — 2021",
              desc: "Developed scalable enterprise React applications focused on accessibility, responsive UX systems, and modern frontend architecture.",
            },
            {
              company: "Synechron Technologies",
              role: "Frontend Developer",
              year: "2013 — 2018",
              desc: "Built responsive banking, healthcare, and insurance interfaces using scalable frontend frameworks and accessibility-aware implementation.",
            },
            {
              company: "Infosys",
              role: "UI Developer / Designer",
              year: "2010 — 2013",
              desc: "Created responsive UI systems focused on readable typography, structured layouts, and enterprise usability foundations.",
            },
          ].map((exp) => (
            <div
              key={exp.company}
              className="bg-[#0B0B0B] border border-white/10 rounded-[36px] p-10"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-3xl font-black">{exp.company}</h3>

                  <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mt-3">
                    {exp.role}
                  </p>
                </div>

                <p className="text-gray-500">{exp.year}</p>
              </div>

              <p className="text-gray-400 leading-9 text-lg">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="px-10 py-28">
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
            Featured Product
          </p>

          <h2 className="text-6xl font-black">Work</h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-10">
          {/* NOIR AI WORKSPACE */}
          <div className="bg-[#0B0F19] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
            {/* HEADER */}
            <div className="p-12 border-b border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent">
              <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
                AI SaaS Dashboard
              </p>

              <h3 className="text-6xl font-black leading-tight mb-8">
                NOIR — AI Workspace
              </h3>

              <p className="text-gray-400 text-xl leading-10 max-w-4xl">
                Minimal AI-powered productivity platform focused on intelligent
                workflows, analytics visibility, modern dashboard systems, task
                organization, and enterprise UX scalability.
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-4 mt-10">
                {[
                  "AI UX",
                  "Dashboard Design",
                  "React",
                  "Design Systems",
                  "Productivity UX",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-gray-300"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* DASHBOARD */}
            <div className="p-8 bg-black">
              <div className="grid grid-cols-12 gap-6">
                {/* SIDEBAR */}
                <div className="col-span-3 rounded-[32px] bg-white/[0.03] border border-white/5 p-6 min-h-[500px]">
                  <div className="space-y-4">
                    {[
                      "Overview",
                      "Analytics",
                      "Tasks",
                      "AI Assistant",
                      "Calendar",
                      "Settings",
                    ].map((item) => (
                      <div
                        key={item}
                        className="h-14 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center px-5 text-gray-300 text-sm hover:bg-white/[0.08] transition-all duration-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="col-span-9 space-y-6">
                  {/* STATS */}
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      {
                        label: "Productivity",
                        value: "92%",
                      },
                      {
                        label: "Tasks Completed",
                        value: "148",
                      },
                      {
                        label: "AI Insights",
                        value: "24",
                      },
                    ].map((card) => (
                      <div
                        key={card.label}
                        className="rounded-[32px] bg-white/[0.03] border border-white/5 p-8"
                      >
                        <p className="text-sm text-gray-500 mb-4">
                          {card.label}
                        </p>

                        <h4 className="text-5xl font-black">{card.value}</h4>
                      </div>
                    ))}
                  </div>

                  {/* AI PANEL */}
                  <div className="rounded-[36px] bg-white/[0.03] border border-white/5 p-10">
                    <div className="flex justify-between items-center mb-10">
                      <div>
                        <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-3">
                          AI Assistant
                        </p>

                        <h4 className="text-3xl font-black">
                          Smart Workflow Insights
                        </h4>
                      </div>

                      <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
                    </div>

                    <div className="space-y-5">
                      {[
                        "Reduce meeting overload by consolidating duplicate sessions.",
                        "Productivity increased 18% after workflow optimization.",
                        "AI recommends prioritizing onboarding-related tasks.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl bg-white/[0.04] border border-white/5 p-6 text-gray-300 leading-8"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ANALYTICS */}
                  <div className="rounded-[36px] bg-white/[0.03] border border-white/5 p-10">
                    <div className="flex justify-between mb-10">
                      <div>
                        <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-3">
                          Analytics
                        </p>

                        <h4 className="text-3xl font-black">
                          Weekly Performance
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-end gap-5 h-52">
                      {[40, 80, 55, 90, 70, 95, 60].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-3xl bg-gradient-to-t from-white/20 to-white/5 border border-white/5 hover:from-white/30 transition-all duration-500"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECONDARY PROJECT */}
          <div className="bg-[#0B0B0B] border border-white/10 rounded-[40px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
              className="h-[320px] w-full object-cover"
              alt="RBC Banking"
            />

            <div className="p-10">
              <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-4">
                Banking UX Case Study
              </p>

              <h3 className="text-4xl font-black mb-6">
                RBC Digital Banking Platform
              </h3>

              <p className="text-gray-400 text-lg leading-9">
                Responsive banking experience focused on dashboard usability,
                transaction visibility, accessibility-aware interfaces, and
                scalable enterprise UX systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-10 py-28 text-center border-t border-white/5">
        <h2 className="text-6xl font-black mb-8">
          Let’s Build Something Meaningful
        </h2>

        <p className="text-gray-500 text-xl mb-10">
          Product Design • UX Engineering • Enterprise Experiences
        </p>

        <button className="px-10 py-5 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300">
          nitanjali23@gmail.com
        </button>
      </section>
    </div>
  );
}
