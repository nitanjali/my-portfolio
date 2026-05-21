export default function Badge({ type = "info", text }) {
  const colors = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${colors[type]}`}>
      {text}
    </span>
  );
}
