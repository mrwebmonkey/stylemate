const OPTIONS = [
  { value: "casual", label: "Casual", blurb: "Easy daily looks" },
  { value: "formal", label: "Formal", blurb: "Sharper work-ready picks" },
  { value: "ethnic", label: "Ethnic", blurb: "Traditional-inspired outfits" },
  { value: "sport", label: "Sport", blurb: "Active and sporty outfits" },
];

const PreferencesModal = ({ isOpen, isRequired = false, preference, onClose, onSelect, theme }) => {
  if (!isOpen) {
    return null;
  }

  const panelClassName =
    theme === "boy"
      ? "bg-gray-800 text-white"
      : "bg-white text-slate-900";
  const closeClassName =
    theme === "boy"
      ? "bg-gray-700 text-white"
      : "bg-ink/5 text-ink";
  const activeClassName =
    theme === "boy"
      ? "border-white bg-white text-black"
      : "border-clay bg-clay/10";
  const idleClassName =
    theme === "boy"
      ? "border-gray-600 bg-gray-900 hover:border-gray-500"
      : "border-ink/10 bg-mist/50 hover:border-ink/20";

  return (
    <div className="fixed inset-0 z-10 flex items-end bg-ink/35 p-4 sm:items-center sm:justify-center">
      <div className={`w-full max-w-sm rounded-[28px] p-6 shadow-soft ${panelClassName}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Preferences</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">What do you usually wear?</h2>
            <p className={theme === "boy" ? "mt-2 text-sm leading-6 text-white/65" : "mt-2 text-sm leading-6 text-ink/65"}>
              We&apos;ll use this to keep your daily outfit suggestions more relevant.
            </p>
          </div>
          {!isRequired && (
            <button
              type="button"
              onClick={onClose}
              className={`rounded-full px-3 py-2 text-sm font-medium ${closeClassName}`}
            >
              Close
            </button>
          )}
        </div>

        <div className="mt-5 grid gap-3">
          {OPTIONS.map((option) => {
            const isActive = option.value === preference;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onSelect(option.value)}
                className={`rounded-2xl border p-4 text-left ${isActive ? activeClassName : idleClassName}`}
              >
                <p className="font-semibold">{option.label}</p>
                <p className={theme === "boy" ? "mt-1 text-sm text-white/65" : "mt-1 text-sm text-ink/65"}>
                  {option.blurb}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PreferencesModal;
