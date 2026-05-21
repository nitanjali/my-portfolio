import { useState } from "react";

export default function FinbankApp() {
  const [tab, setTab] = useState("overview");

  const nav = ["overview", "transactions", "insights", "cards", "profile"];

  return (
    <div className="min-h-screen flex bg-[#F5F7FB] text-[#0F172A]">
      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r p-6">
        <h1 className="text-[#2563EB] font-black text-2xl mb-10">FINBANK</h1>

        <div className="space-y-2">
          {nav.map((n) => (
            <button
              key={n}
              onClick={() => setTab(n)}
              className={`w-full text-left px-4 py-3 rounded-xl capitalize ${
                tab === n ? "bg-[#2563EB] text-white" : "hover:bg-gray-100"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <div className="mt-10 text-xs text-gray-400">
          Personal Finance OS v1.0
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">
        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Hi Alex 👋</h2>
          <p className="text-gray-500">Here’s your financial health summary</p>
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div className="space-y-6">
            {/* KPI ROW */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border">
                <p className="text-gray-500 text-sm">Balance</p>
                <h3 className="text-2xl font-bold">$12,450</h3>
                <p className="text-green-600 text-xs mt-1">+2.4% this month</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border">
                <p className="text-gray-500 text-sm">Spent</p>
                <h3 className="text-2xl font-bold">$3,210</h3>
                <p className="text-red-500 text-xs mt-1">-5% vs last month</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border">
                <p className="text-gray-500 text-sm">Income</p>
                <h3 className="text-2xl font-bold">$4,800</h3>
                <p className="text-green-600 text-xs mt-1">Stable</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border">
                <p className="text-gray-500 text-sm">Savings Rate</p>
                <h3 className="text-2xl font-bold">34%</h3>
                <p className="text-[#2563EB] text-xs mt-1">Healthy</p>
              </div>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-3 gap-6">
              {/* SPENDING BREAKDOWN */}
              <div className="col-span-2 bg-white p-6 rounded-2xl border">
                <h3 className="font-bold mb-4">Monthly Spending Breakdown</h3>

                {[
                  ["Food & Dining", 35],
                  ["Transport", 18],
                  ["Shopping", 27],
                  ["Bills", 20],
                ].map(([label, val]) => (
                  <div key={label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{label}</span>
                      <span>{val}%</span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-[#2563EB]"
                        style={{ width: `${val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* FINANCIAL HEALTH */}
              <div className="bg-white p-6 rounded-2xl border">
                <h3 className="font-bold mb-4">Financial Health</h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-500">Score</p>
                    <p className="text-2xl font-bold text-[#2563EB]">82/100</p>
                  </div>

                  <div>
                    <p className="text-gray-500">Risk Level</p>
                    <p className="font-semibold text-green-600">Low</p>
                  </div>

                  <div>
                    <p className="text-gray-500">Advice</p>
                    <p className="text-sm text-gray-600">
                      Increase savings by 5% for optimal growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RECENT ACTIVITY */}
            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="font-bold mb-4">Recent Activity</h3>

              <div className="space-y-3">
                {[
                  ["Starbucks", "Food", "-$12.50"],
                  ["Uber", "Transport", "-$18.20"],
                  ["Netflix", "Subscription", "-$19.99"],
                  ["Salary", "Income", "+$4,800"],
                ].map(([name, type, amt]) => (
                  <div
                    key={name}
                    className="flex justify-between p-3 rounded-xl hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-xs text-gray-400">{type}</p>
                    </div>

                    <p
                      className={
                        amt.includes("+") ? "text-green-600" : "text-red-500"
                      }
                    >
                      {amt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TRANSACTIONS */}
        {tab === "transactions" && (
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-bold mb-4">Transactions</h3>

            {[
              ["Amazon", "-$120"],
              ["Spotify", "-$9.99"],
              ["Salary", "+$4800"],
            ].map(([a, b]) => (
              <div key={a} className="flex justify-between py-3 border-b">
                <span>{a}</span>
                <span
                  className={
                    b.includes("+") ? "text-green-600" : "text-red-500"
                  }
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* INSIGHTS */}
        {tab === "insights" && (
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-bold mb-4">Spending Insights</h3>

            <p className="text-gray-600 mb-4">
              You are spending 12% more on food compared to last month.
            </p>

            <p className="text-gray-600">
              Your savings rate is above average — strong financial health.
            </p>
          </div>
        )}

        {/* CARDS */}
        {tab === "cards" && (
          <div>
            <h3 className="font-bold mb-4">Cards</h3>

            <div className="w-80 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white p-6 rounded-2xl">
              <p>Visa Platinum</p>
              <h3 className="mt-6 tracking-widest">**** **** **** 4821</h3>
            </div>
          </div>
        )}

        {/* PROFILE */}
        {tab === "profile" && (
          <div className="bg-white p-6 rounded-2xl border max-w-md">
            <h3 className="font-bold mb-4">Profile</h3>
            <p>Alex Johnson</p>
            <p className="text-gray-500">alex@finbank.com</p>
          </div>
        )}
      </div>
    </div>
  );
}
