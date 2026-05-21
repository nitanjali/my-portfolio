export default function Alert({ type = "info", message }) {
  const styles = {
    warning: "bg-yellow-50 border-yellow-300 text-yellow-800",
    danger: "bg-red-50 border-red-300 text-red-800",
    success: "bg-green-50 border-green-300 text-green-800",
    info: "bg-blue-50 border-blue-300 text-blue-800",
  };

  return (
    <div className={`border p-4 rounded-xl ${styles[type]}`}>{message}</div>
  );
}
