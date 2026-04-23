const FeedbackMessage = ({ streakCount, acceptedToday, theme }) => {
  if (!acceptedToday) {
    return null;
  }

  const shellClassName =
    theme === "boy"
      ? "border-gray-700 bg-gray-800 text-white shadow-none backdrop-blur-none"
      : "border-moss/20 bg-moss/10 text-ink";

  return (
    <div className={`surface p-4 ${shellClassName}`}>
      <p className={theme === "boy" ? "text-sm font-semibold text-white" : "text-sm font-semibold text-moss"}>
        Nice choice. Today&apos;s outfit is locked in.
      </p>
      <p className={theme === "boy" ? "mt-1 text-sm text-white/70" : "mt-1 text-sm text-ink/70"}>
        Current streak: {streakCount} day{streakCount === 1 ? "" : "s"}.
      </p>
    </div>
  );
};

export default FeedbackMessage;
