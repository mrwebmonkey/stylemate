const InsightBox = ({ message, theme }) => {
  const shellClassName =
    theme === "boy"
      ? "border-gray-700 bg-gray-800 text-white shadow-none backdrop-blur-none"
      : "border-white/70 bg-white/80 text-slate-900";

  return (
    <section className={`surface p-5 ${shellClassName}`}>
      <p className={theme === "boy" ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/45" : "text-xs font-semibold uppercase tracking-[0.18em] text-ink/45"}>
        Style Insight
      </p>
      <p className={theme === "boy" ? "mt-3 text-sm leading-6 text-white/75" : "mt-3 text-sm leading-6 text-ink/75"}>
        {message}
      </p>
    </section>
  );
};

export default InsightBox;
