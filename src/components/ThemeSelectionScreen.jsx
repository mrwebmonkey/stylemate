const OPTIONS = [
  {
    value: "boy",
    label: "Boy",
    description: "Dark, black, and grey UI tones.",
    cardClassName: "border-white/10 bg-slate-900 text-white",
    accentClassName: "bg-white/10 text-white/80",
  },
  {
    value: "girl",
    label: "Girl",
    description: "Pink and purple UI tones.",
    cardClassName: "border-fuchsia-200 bg-white text-slate-900",
    accentClassName: "bg-fuchsia-100 text-fuchsia-700",
  },
];

const ThemeSelectionScreen = ({ onSelectTheme }) => {
  return (
    <main className="min-h-screen bg-gray-900 px-5 py-8 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">StyleMate</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">Choose your style</h1>
        <p className="mt-3 text-sm leading-6 text-white/70">
          This only changes the app theme, so your outfit suggestions keep working the same way.
        </p>

        <div className="mt-8 grid gap-4">
          {OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelectTheme(option.value)}
              className={`rounded-[28px] border p-5 text-left shadow-soft transition hover:-translate-y-0.5 ${option.cardClassName}`}
            >
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${option.accentClassName}`}>
                Theme
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold">{option.label}</h2>
              <p className="mt-2 text-sm leading-6 opacity-80">{option.description}</p>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ThemeSelectionScreen;
