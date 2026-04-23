const OutfitLine = ({ label, value }) => (
  <div className="rounded-2xl bg-mist/60 p-4">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">{label}</p>
    <p className="mt-2 text-base font-medium text-ink">{value}</p>
  </div>
);

const OutfitCard = ({ outfit, note }) => {
  return (
    <section className="surface overflow-hidden p-4 sm:p-5">
      <img
        src={outfit.image}
        alt={`${outfit.top}, ${outfit.bottom}, ${outfit.footwear}`}
        className="aspect-[4/5] w-full rounded-[24px] object-cover shadow-lg shadow-black/10"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">
            Wear This Today
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.2rem]">
            Your instant outfit
          </h1>
        </div>

        <span className="mt-6 rounded-full bg-moss/15 px-3 py-1 text-xs font-semibold text-moss">
          {note}
        </span>
      </div>

      <div className="mt-6 grid gap-3">
        <OutfitLine label="Top Wear" value={outfit.top} />
        <OutfitLine label="Bottom Wear" value={outfit.bottom} />
        <OutfitLine label="Footwear" value={outfit.footwear} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {outfit.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium capitalize text-ink/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default OutfitCard;
