const TABS = [
  { id: "home", label: "Home" },
  { id: "history", label: "History" },
  { id: "preferences", label: "Preferences" },
];

const TabNavigation = ({ activeTab, onChange, theme }) => {
  const shellClassName =
    theme === "boy"
      ? "border-gray-700 bg-gray-800 shadow-none backdrop-blur-none"
      : "border-white/70 bg-white/75";

  return (
    <nav className={`surface p-2 ${shellClassName}`}>
      <div className="grid grid-cols-3 gap-2">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          const activeClassName =
            theme === "boy"
              ? "bg-white text-black"
              : "bg-fuchsia-600 text-white";
          const inactiveClassName =
            theme === "boy"
              ? "bg-transparent text-white hover:bg-gray-700"
              : "bg-transparent text-slate-700 hover:bg-fuchsia-50";

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? activeClassName : inactiveClassName}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default TabNavigation;
