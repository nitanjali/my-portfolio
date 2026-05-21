import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Alert from "../components/ui/Alert";

export default function FinbankDashboard() {
  const transactions = [
    { name: "Starbucks", amount: -12, type: "Food" },
    { name: "Netflix", amount: -19, type: "Subscription" },
    { name: "Salary", amount: 4800, type: "Income" },
    { name: "Uber", amount: -22, type: "Transport" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FC] p-8">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Financial Overview</h1>
        <p className="text-gray-500">
          Personalized insights based on spending behavior
        </p>
      </div>

      {/* ALERT */}
      <Alert
        type="warning"
        message="You spent 18% more on food this month compared to last month"
      />

      {/* KPI CARDS */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Card>
          <p className="text-gray-500 text-sm">Balance</p>
          <h2 className="text-2xl font-bold">$12,450</h2>
        </Card>

        <Card>
          <p className="text-gray-500 text-sm">Spent</p>
          <h2 className="text-2xl font-bold text-red-500">$3,210</h2>
        </Card>

        <Card>
          <p className="text-gray-500 text-sm">Income</p>
          <h2 className="text-2xl font-bold text-green-600">$4,800</h2>
        </Card>

        <Card>
          <p className="text-gray-500 text-sm">Savings Rate</p>
          <h2 className="text-2xl font-bold text-blue-600">34%</h2>
        </Card>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        {/* TRANSACTIONS */}
        <div className="col-span-2">
          <Card>
            <h2 className="font-bold mb-4">Recent Transactions</h2>

            <div className="space-y-3">
              {transactions.map((t) => (
                <div
                  key={t.name}
                  className="flex justify-between border-b py-3"
                >
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <Badge text={t.type} />
                  </div>

                  <p
                    className={t.amount > 0 ? "text-green-600" : "text-red-500"}
                  >
                    {t.amount > 0 ? "+" : ""}
                    {t.amount}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* INSIGHTS */}
        <Card>
          <h2 className="font-bold mb-4">UX Insights</h2>

          <p className="text-sm text-gray-600 mb-3">
            Spending pattern shows high food dependency.
          </p>

          <p className="text-sm text-gray-600 mb-3">
            Savings behavior is improving month over month.
          </p>

          <p className="text-sm text-gray-600">
            Recommend setting automated savings rule.
          </p>
        </Card>
      </div>
    </div>
  );
}
