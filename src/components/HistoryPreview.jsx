const HistoryPreview = ({ history }) => {
  return (
    <section className="surface p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">Recent Wears</p>
          <h2 className="mt-2 font-display text-xl font-semibold text-ink">Last 2 outfits</h2>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        {history.length === 0 ? (
          <div className="rounded-2xl bg-mist/60 p-4 text-sm text-ink/65">
            Your worn history will start showing up once you tap &quot;Wear This&quot;.
          </div>
        ) : (
          history.map((outfit) => (
            <article key={`${outfit.id}-${outfit.wornOn}`} className="rounded-2xl bg-mist/60 p-4">
              <p className="text-sm font-semibold text-ink">{outfit.top}</p>
              <p className="mt-1 text-sm text-ink/70">
                {outfit.bottom} with {outfit.footwear}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink/45">{outfit.wornOn}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default HistoryPreview;
