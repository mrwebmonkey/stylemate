const ActionButtons = ({ onAccept, onShuffle, theme }) => {
  const primaryClassName =
    theme === "boy"
      ? "bg-white text-black hover:bg-gray-100"
      : "bg-fuchsia-600 text-white hover:bg-fuchsia-500";
  const secondaryClassName =
    theme === "boy"
      ? "border-gray-500 bg-transparent text-white hover:bg-gray-800"
      : "border-ink/10 bg-white/70 text-ink hover:bg-white";

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={onAccept}
        className={`rounded-2xl px-5 py-4 text-base font-semibold hover:-translate-y-0.5 ${primaryClassName}`}
      >
        Wear This
      </button>
      <button
        type="button"
        onClick={onShuffle}
        className={`rounded-2xl border px-5 py-4 text-base font-semibold hover:-translate-y-0.5 ${secondaryClassName}`}
      >
        Try Another
      </button>
    </div>
  );
};

export default ActionButtons;
