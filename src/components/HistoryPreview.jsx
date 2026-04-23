const HistoryPreview = ({ history, theme, title = "Last 2 outfits", limit = 2 }) => {
  const items = history.slice(0, limit);
  const shellClassName =
    theme === "boy"
      ? "border-gray-700 bg-gray-800 text-white shadow-none backdrop-blur-none"
      : "border-white/70 bg-white/80 text-slate-900";
  const cardClassName = "bg-gray-800 text-white";

  return (
    <section className={`surface p-5 ${shellClassName}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className={theme === "boy" ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/45" : "text-xs font-semibold uppercase tracking-[0.18em] text-ink/45"}>
            Recent Wears
          </p>
          <h2 className="mt-2 font-display text-xl font-semibold">{title}</h2>
        </div>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {items.length === 0 ? (
          <div className="min-w-full rounded-lg bg-gray-800 p-4 text-sm text-white/70">
            Your worn history will start showing up once you tap &quot;Wear This&quot;.
          </div>
        ) : (
          items.map((outfit) => (
            <article key={`${outfit.id}-${outfit.wornOn}`} className={`min-w-[220px] rounded-lg p-3 sm:p-4 ${cardClassName}`}>
              <p className="text-sm font-semibold">👕 {outfit.top}</p>
              <p className="mt-2 text-sm text-white/80">👖 {outfit.bottom}</p>
              <p className="mt-2 text-sm text-white/80">👟 {outfit.footwear}</p>
              {outfit.accessories?.[0] && (
                <p className="mt-2 text-xs text-white/60">Accessory: {outfit.accessories[0]}</p>
              )}
              <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-white/45">
                {outfit.wornOn}
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default HistoryPreview;
