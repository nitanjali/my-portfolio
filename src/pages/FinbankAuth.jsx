import { useNavigate } from "react-router-dom";

export default function FinbankAuth() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-[24px] shadow-xl border p-8">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-[#2563EB]">FINBANK</h1>

          <p className="text-gray-500 mt-2">Smart banking for everyday life</p>
        </div>

        {/* INPUTS */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />

          <div className="flex justify-between text-sm text-gray-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="text-[#2563EB] cursor-pointer">Forgot?</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate(project.route)}
          className="w-full mt-6 bg-[#2563EB] text-white py-4 rounded-xl font-semibold hover:bg-[#1D4ED8] transition"
        >
          Login
        </button>

        {/* ALT */}
        <p className="text-center text-sm text-gray-500 mt-6">
          New user?{" "}
          <span className="text-[#2563EB] cursor-pointer">Create account</span>
        </p>
      </div>
    </div>
  );
}
