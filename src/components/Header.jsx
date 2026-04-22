const Header = ({ dayLabel, occasion, preference, onOpenPreferences }) => {
  return (
    <header className="surface overflow-hidden p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">
            StyleMate
          </p>
          <p className="mt-1 text-sm text-ink/60">{dayLabel}</p>
        </div>

        <button
          type="button"
          onClick={onOpenPreferences}
          className="rounded-full border border-ink/10 bg-ink/5 px-4 py-2 text-sm font-medium text-ink hover:bg-ink/10"
        >
          {preference}
        </button>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <span className="rounded-full bg-clay/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-clay">
          Occasion
        </span>
        <span className="text-sm font-medium text-ink/70">{occasion}</span>
      </div>
    </header>
  );
};

export default Header;
