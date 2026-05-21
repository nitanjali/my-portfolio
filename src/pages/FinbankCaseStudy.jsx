import { useEffect } from "react";

export default function FinbankCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const transactions = [
    {
      name: "Alice Burgers",
      date: "23 min ago",
      amount: "-$500.00",
      type: "Transfer",
      color: "text-red-500",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Emma Watson",
      date: "5 hours ago",
      amount: "-$200.00",
      type: "Withdraw",
      color: "text-red-500",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      name: "Catherine Ann",
      date: "Yesterday",
      amount: "-$1,000.00",
      type: "Investment",
      color: "text-red-500",
      avatar: "https://i.pravatar.cc/100?img=18",
    },
  ];

  const analytics = [
    {
      title: "Income",
      amount: "$5,600",
      icon: "↙",
      bg: "bg-[#EEF4FF]",
      color: "text-[#1677FF]",
    },
    {
      title: "Expenses",
      amount: "$1,300",
      icon: "↗",
      bg: "bg-[#ECFFF9]",
      color: "text-[#10B981]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] overflow-hidden">
      {/* ================= HERO ================= */}

      <section className="relative px-6 md:px-20 pt-24 pb-32 bg-gradient-to-br from-[#1677FF] via-[#1F6FFF] to-[#45D6C4] overflow-hidden">
        <div className="absolute top-[-120px] right-[-100px] w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-300" />

            <p className="uppercase tracking-[0.25em] text-xs text-white">
              Mobile Banking UX Case Study
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] text-white tracking-tight">
            Finbank — Premium Mobile Banking Experience
          </h1>

          <p className="mt-8 text-white/85 text-lg md:text-xl leading-9 max-w-3xl">
            A fintech banking platform designed to simplify financial management
            through clean mobile-first UX, modular dashboard systems, and
            accessibility-focused interactions.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            {[
              {
                label: "User Satisfaction",
                value: "92%",
              },
              {
                label: "Transactions",
                value: "24K+",
              },
              {
                label: "Avg Session",
                value: "18m",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/12 border border-white/20 backdrop-blur-xl rounded-[28px] px-8 py-6 min-w-[180px]"
              >
                <p className="text-sm text-white/80 mb-2">{item.label}</p>

                <h3 className="text-4xl font-bold text-white">{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}

      <section className="px-6 md:px-20 py-24">
        <div className="max-w-5xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#1677FF] mb-5">
            The Problem
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Traditional banking apps create friction and cognitive overload.
          </h2>

          <p className="text-[#667085] text-lg leading-9 max-w-3xl">
            Users struggled to track spending, locate important actions, and
            understand financial information quickly inside cluttered mobile
            banking experiences.
          </p>
        </div>
      </section>

      {/* ================= USER PERSONA ================= */}

      <section className="px-6 md:px-20 pb-24">
        <div className="bg-white rounded-[40px] border border-[#E8EEF7] p-10 shadow-sm">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-center">
            <img
              src="https://i.pravatar.cc/300?img=32"
              alt="persona"
              className="w-[220px] h-[220px] rounded-[32px] object-cover"
            />

            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#1677FF] mb-5">
                User Persona
              </p>

              <h2 className="text-4xl font-bold mb-4">
                Nita Ka — Freelance Designer
              </h2>

              <p className="text-[#667085] leading-8 mb-8">
                Needs fast money transfers, simplified analytics, and
                stress-free banking experiences.
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-[#F8FAFF] rounded-2xl p-5 border border-[#EEF2FF]">
                  <p className="text-sm text-gray-500 mb-2">Pain Point</p>

                  <h3 className="font-semibold">Complex navigation</h3>
                </div>

                <div className="bg-[#F8FAFF] rounded-2xl p-5 border border-[#EEF2FF]">
                  <p className="text-sm text-gray-500 mb-2">Goal</p>

                  <h3 className="font-semibold">Quick transactions</h3>
                </div>

                <div className="bg-[#F8FAFF] rounded-2xl p-5 border border-[#EEF2FF]">
                  <p className="text-sm text-gray-500 mb-2">Motivation</p>

                  <h3 className="font-semibold">Financial clarity</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOBILE UI ================= */}

      <section className="px-6 md:px-20 pb-24">
        <div className="flex flex-wrap justify-center gap-8">
          {/* LOGIN */}
          <div className="w-[280px] bg-white rounded-[42px] border border-[#E8EEF7] shadow-[0_20px_50px_rgba(37,99,235,0.08)] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between text-xs mb-10">
                <span>9:41</span>
                <span>•••</span>
              </div>

              <div className="mb-10">
                <h3 className="text-[32px] font-bold leading-tight text-[#101828]">
                  Welcome Back
                </h3>

                <p className="text-gray-500 mt-3 leading-6 text-[15px]">
                  Login to continue banking securely and manage your finances
                  with a seamless experience.
                </p>
              </div>

              <div className="space-y-5">
                <input
                  className="w-full h-14 rounded-2xl border border-[#E8EEF7] px-5 bg-[#FAFBFD]"
                  placeholder="Email or Mobile Number"
                />

                <input
                  type="password"
                  className="w-full h-14 rounded-2xl border border-[#E8EEF7] px-5 bg-[#FAFBFD]"
                  placeholder="Password"
                />

                <button className="w-full h-14 rounded-2xl bg-[#1677FF] text-white font-semibold shadow-lg">
                  Login
                </button>

                <button className="w-full h-14 rounded-2xl border border-[#45D6C4] text-[#1677FF] font-semibold bg-[#F7FFFD]">
                  Login with Biometrics
                </button>
              </div>
            </div>
          </div>

          {/* DASHBOARD */}
          <div className="w-[320px] bg-white rounded-[42px] border border-[#E8EEF7] shadow-[0_20px_50px_rgba(37,99,235,0.08)] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-gray-500 text-sm">Good Morning</p>

                  <h2 className="text-2xl font-bold">Nita 👋</h2>
                </div>

                <img
                  src="https://i.pravatar.cc/100?img=32"
                  alt=""
                  className="w-11 h-11 rounded-full object-cover"
                />
              </div>

              <div className="rounded-[30px] bg-gradient-to-br from-[#1677FF] to-[#45D6C4] p-7 text-white">
                <p className="text-white/80 text-sm mb-3">Total Balance</p>

                <h2 className="text-5xl font-bold">$58,095</h2>

                <p className="mt-2 text-white/80">•••• 4587</p>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-8">
                {["↗", "↙", "📈", "+"].map((icon, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-[#EEF4FF] flex items-center justify-center text-[#1677FF] text-lg">
                      {icon}
                    </div>

                    <span className="text-xs text-gray-500">
                      {["Transfer", "Withdraw", "Invest", "Top Up"][i]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Recent Transactions</h3>

                  <button className="text-[#1677FF] text-sm font-semibold">
                    See All
                  </button>
                </div>

                <div className="space-y-5">
                  {transactions.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        <div>
                          <p className="font-semibold text-sm">{t.name}</p>

                          <p className="text-xs text-gray-500">{t.type}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className={`font-bold text-sm ${t.color}`}>
                          {t.amount}
                        </p>

                        <p className="text-xs text-gray-400">{t.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ANALYTICS */}
          <div className="w-[280px] bg-white rounded-[42px] border border-[#E8EEF7] shadow-[0_20px_50px_rgba(37,99,235,0.08)] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Analytics</h3>

                <button className="w-10 h-10 rounded-2xl border border-[#E8EEF7]">
                  📅
                </button>
              </div>

              <div className="bg-[#F8FAFF] rounded-[30px] p-5 border border-[#EEF2FF] mb-6">
                <div className="relative h-40 flex items-end justify-between gap-2">
                  {[40, 65, 55, 90, 70, 85, 60].map((height, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-2xl ${
                        i === 3
                          ? "bg-gradient-to-t from-[#45D6C4] to-[#1677FF]"
                          : "bg-[#DDE9FF]"
                      }`}
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {analytics.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#F8FAFF] rounded-[24px] p-4 border border-[#EEF2FF]"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color} mb-4`}
                    >
                      {item.icon}
                    </div>

                    <p className="text-sm text-gray-500">{item.title}</p>

                    <h4 className="text-2xl font-bold mt-1">{item.amount}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESIGN SYSTEM ================= */}

      <section className="px-6 md:px-20 pb-28">
        <div className="bg-white rounded-[40px] border border-[#E8EEF7] p-10 shadow-sm">
          <h2 className="text-5xl font-bold mb-14">Design System</h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* COLORS */}
            <div className="bg-[#F8FAFF] rounded-[32px] p-8 border border-[#EEF2FF]">
              <h3 className="text-2xl font-bold mb-8">Colors</h3>

              <div className="flex gap-5 flex-wrap">
                {["#1677FF", "#45D6C4", "#101828", "#F6C344"].map((color) => (
                  <div
                    key={color}
                    className="w-20 h-20 rounded-[24px]"
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>

            {/* TYPOGRAPHY */}
            <div className="bg-[#F8FAFF] rounded-[32px] p-8 border border-[#EEF2FF]">
              <h3 className="text-2xl font-bold mb-8">Typography</h3>

              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl font-bold">H1 — 64px</h1>

                  <p className="text-sm text-gray-500 mt-1">
                    Hero headings / Landing sections
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold">H2 — 40px</h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Section titles / Analytics headings
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">H3 — 24px</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Cards / Dashboard titles
                  </p>
                </div>

                <div>
                  <p className="text-base text-[#667085]">Body — 16px</p>

                  <p className="text-sm text-gray-500 mt-1">
                    Primary content and descriptions
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#667085]">Caption — 14px</p>

                  <p className="text-sm text-gray-500 mt-1">
                    Supporting labels and metadata
                  </p>
                </div>
              </div>
            </div>

            {/* COMPONENTS */}
            <div className="bg-[#F8FAFF] rounded-[32px] p-8 border border-[#EEF2FF]">
              <h3 className="text-2xl font-bold mb-8">Components</h3>

              <div className="space-y-5">
                <button className="w-full h-14 rounded-2xl bg-[#1677FF] text-white font-semibold">
                  Primary Button
                </button>

                <button className="w-full h-14 rounded-2xl border border-[#E8EEF7] bg-white font-semibold">
                  Secondary Button
                </button>

                {/* SEARCH */}
                <div className="h-14 rounded-2xl bg-white border border-[#E8EEF7] flex items-center justify-between px-5">
                  <div className="flex items-center gap-3 text-gray-400">
                    <span>🔍</span>

                    <span className="text-sm">Search transactions...</span>
                  </div>

                  <button className="text-[#1677FF] text-sm font-semibold">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL OUTCOME ================= */}

      <section className="px-6 md:px-20 pb-28">
        <div className="bg-gradient-to-br from-[#1677FF] to-[#45D6C4] rounded-[40px] p-12 text-white">
          <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-5">
            Final Outcome
          </p>

          <h2 className="text-5xl font-bold leading-tight max-w-4xl mb-8">
            Designed to make digital banking feel more human, trustworthy, and
            effortless.
          </h2>

          <p className="text-white/85 text-lg leading-9 max-w-3xl">
            The final experience focuses on emotional clarity, financial
            visibility, and reducing friction across critical banking actions.
          </p>
        </div>
      </section>
    </div>
  );
}
