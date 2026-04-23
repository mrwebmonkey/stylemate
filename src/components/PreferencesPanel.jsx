const STYLE_OPTIONS = [
  { value: "casual", label: "Casual" },
  { value: "formal", label: "Formal" },
  { value: "ethnic", label: "Ethnic" },
  { value: "sport", label: "Sport" },
];

const THEME_OPTIONS = [
  { value: "boy", label: "Boy" },
  { value: "girl", label: "Girl" },
];

const PreferencesPanel = ({ preference, theme, onChangePreference, onChangeTheme }) => {
  const surfaceClassName =
    theme === "boy"
      ? "border-gray-700 bg-gray-800 text-white shadow-none backdrop-blur-none"
      : "border-white/70 bg-white/80 text-slate-900";

  const mutedClassName = theme === "boy" ? "text-white/65" : "text-slate-600";

  return (
    <section className={`surface p-5 sm:p-6 ${surfaceClassName}`}>
      <div>
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${mutedClassName}`}>Preferences</p>
        <h2 className="mt-2 font-display text-2xl font-semibold">Personalize StyleMate</h2>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold">Style preference</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {STYLE_OPTIONS.map((option) => {
            const isActive = option.value === preference;
            const className =
              theme === "boy"
                ? isActive
                  ? "border-white bg-white text-black"
                  : "border-gray-600 bg-gray-900 text-white"
                : isActive
                  ? "border-fuchsia-600 bg-fuchsia-600 text-white"
                  : "border-fuchsia-100 bg-white text-slate-900";

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onChangePreference(option.value)}
                className={`rounded-2xl border px-4 py-4 text-sm font-semibold ${className}`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold">Theme</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {THEME_OPTIONS.map((option) => {
            const isActive = option.value === theme;
            const className =
              theme === "boy"
                ? isActive
                  ? "border-white bg-white text-black"
                  : "border-gray-600 bg-gray-900 text-white"
                : isActive
                  ? "border-violet-600 bg-violet-600 text-white"
                  : "border-violet-100 bg-white text-slate-900";

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onChangeTheme(option.value)}
                className={`rounded-2xl border px-4 py-4 text-sm font-semibold ${className}`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreferencesPanel;
