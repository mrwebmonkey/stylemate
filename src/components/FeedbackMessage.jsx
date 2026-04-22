const FeedbackMessage = ({ streakCount, acceptedToday }) => {
  if (!acceptedToday) {
    return null;
  }

  return (
    <div className="surface border border-moss/20 bg-moss/10 p-4">
      <p className="text-sm font-semibold text-moss">Nice choice. Today&apos;s outfit is locked in.</p>
      <p className="mt-1 text-sm text-ink/70">Current streak: {streakCount} day{streakCount === 1 ? "" : "s"}.</p>
    </div>
  );
};

export default FeedbackMessage;
