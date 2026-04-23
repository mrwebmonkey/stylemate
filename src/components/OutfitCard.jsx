const OutfitLine = ({ label, value, theme }) => (
  <div className={theme === "boy" ? "rounded-2xl bg-gray-900 p-4" : "rounded-2xl bg-mist/60 p-4"}>
    <p className={theme === "boy" ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/50" : "text-xs font-semibold uppercase tracking-[0.18em] text-ink/45"}>
      {label}
    </p>
    <p className={theme === "boy" ? "mt-2 text-base font-medium text-white" : "mt-2 text-base font-medium text-ink"}>
      {value}
    </p>
  </div>
);

const OutfitCard = ({ outfit, note, theme }) => {
  const shellClassName =
    theme === "boy"
      ? "border-gray-700 bg-gray-800 text-white shadow-none backdrop-blur-none"
      : "border-white/70 bg-white/80 text-slate-900";
  const noteClassName =
    theme === "boy"
      ? "bg-gray-700 text-white"
      : "bg-moss/15 text-moss";
  const tagClassName =
    theme === "boy"
      ? "border-gray-600 bg-gray-900 text-white/80"
      : "border-ink/10 bg-white text-ink/70";

  return (
    <section className={`surface overflow-hidden p-4 sm:p-5 ${shellClassName}`}>
      <img
        src={outfit.image}
        alt={`${outfit.top}, ${outfit.bottom}, ${outfit.footwear}`}
        className="aspect-[4/5] w-full rounded-[24px] object-cover shadow-lg shadow-black/10"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="pt-6">
          <p className={theme === "boy" ? "text-sm font-semibold uppercase tracking-[0.22em] text-white/80" : "text-sm font-semibold uppercase tracking-[0.22em] text-clay"}>
            Wear This Today
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-[2.2rem]">
            Your instant outfit
          </h1>
        </div>

        <span className={`mt-6 rounded-full px-3 py-1 text-xs font-semibold ${noteClassName}`}>
          {note}
        </span>
      </div>

      <div className="mt-6 grid gap-3">
        <OutfitLine label="Top Wear" value={outfit.top} theme={theme} />
        <OutfitLine label="Bottom Wear" value={outfit.bottom} theme={theme} />
        <OutfitLine label="Footwear" value={outfit.footwear} theme={theme} />
      </div>

      {outfit.accessories?.length > 0 && (
        <div className="mt-6">
          <p className={theme === "boy" ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/50" : "text-xs font-semibold uppercase tracking-[0.18em] text-ink/45"}>
            Accessories
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {outfit.accessories.map((item) => (
              <span key={item} className={`rounded-full border px-3 py-1 text-xs font-medium ${tagClassName}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {outfit.tags.map((tag) => (
          <span key={tag} className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${tagClassName}`}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default OutfitCard;
