const Header = ({ dayLabel, occasion, preference, onOpenPreferences, theme }) => {
  const shellClassName =
    theme === "boy"
      ? "border-gray-700 bg-gray-800 text-white shadow-none backdrop-blur-none"
      : "border-white/70 bg-white/80 text-slate-900";
  const badgeClassName =
    theme === "boy"
      ? "border-gray-600 bg-gray-800 text-white hover:bg-gray-700"
      : "border-ink/10 bg-ink/5 text-ink hover:bg-ink/10";
  const accentClassName =
    theme === "boy"
      ? "bg-gray-700 text-white"
      : "bg-clay/15 text-clay";
  const mutedClassName = theme === "boy" ? "text-white/70" : "text-ink/60";
  const secondaryTextClassName = theme === "boy" ? "text-white/80" : "text-ink/70";

  return (
    <header className={`surface overflow-hidden p-5 sm:p-6 ${shellClassName}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            StyleMate
          </p>
          <p className={`mt-1 text-sm ${mutedClassName}`}>{dayLabel}</p>
        </div>

        <button
          type="button"
          onClick={onOpenPreferences}
          className={`rounded-full border px-4 py-2 text-sm font-medium ${badgeClassName}`}
        >
          {preference}
        </button>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${accentClassName}`}>
          Occasion
        </span>
        <span className={`text-sm font-medium ${secondaryTextClassName}`}>{occasion}</span>
      </div>
    </header>
  );
};

export default Header;
