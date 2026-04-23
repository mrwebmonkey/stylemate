const OPTIONS = [
  { value: "casual", label: "Casual", blurb: "Easy daily looks" },
  { value: "formal", label: "Formal", blurb: "Sharper work-ready picks" },
  { value: "ethnic", label: "Ethnic", blurb: "Traditional-inspired outfits" },
];

const PreferencesModal = ({ isOpen, isRequired = false, preference, onClose, onSelect }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 flex items-end bg-ink/35 p-4 sm:items-center sm:justify-center">
      <div className="w-full max-w-sm rounded-[28px] bg-white p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Preferences</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">What do you usually wear?</h2>
            <p className="mt-2 text-sm leading-6 text-ink/65">
              We&apos;ll use this to keep your daily outfit suggestions more relevant.
            </p>
          </div>
          {!isRequired && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-ink/5 px-3 py-2 text-sm font-medium text-ink"
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
                className={`rounded-2xl border p-4 text-left ${
                  isActive
                    ? "border-clay bg-clay/10"
                    : "border-ink/10 bg-mist/50 hover:border-ink/20"
                }`}
              >
                <p className="font-semibold text-ink">{option.label}</p>
                <p className="mt-1 text-sm text-ink/65">{option.blurb}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PreferencesModal;
