import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FinbankTransfer() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={() => navigate("/work/bank")}
          className="text-[#2563EB] font-medium"
        >
          ← Back
        </button>

        <h1 className="font-black text-[#111827]">Send Money</h1>

        <div />
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-[24px] shadow border">
          <h2 className="text-xl font-bold mb-4">Select Recipient</h2>

          {["Alex Johnson", "Sarah Smith", "Netflix", "Amazon"].map((r) => (
            <div
              key={r}
              className="p-4 border rounded-xl mb-3 hover:bg-gray-50 cursor-pointer"
              onClick={() => setStep(2)}
            >
              {r}
            </div>
          ))}
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-[24px] shadow border">
          <h2 className="text-xl font-bold mb-4">Enter Amount</h2>

          <input
            type="number"
            placeholder="$0.00"
            className="w-full p-4 text-2xl border rounded-xl mb-4"
          />

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[10, 50, 100].map((a) => (
              <button key={a} className="p-3 bg-[#F1F5F9] rounded-xl">
                ${a}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(3)}
            className="w-full bg-[#2563EB] text-white py-3 rounded-xl"
          >
            Continue
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-[24px] shadow border text-center">
          <div className="text-green-500 text-5xl mb-4">✓</div>

          <h2 className="text-xl font-bold">Transfer Successful</h2>

          <p className="text-gray-500 mt-2">Transaction ID: TXN123456</p>

          <button
            onClick={() => navigate(project.route)}
            className="mt-6 bg-[#2563EB] text-white px-6 py-3 rounded-xl"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
