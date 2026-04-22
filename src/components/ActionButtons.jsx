const ActionButtons = ({ onAccept, onShuffle }) => {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={onAccept}
        className="rounded-2xl bg-ink px-5 py-4 text-base font-semibold text-white hover:-translate-y-0.5 hover:bg-ink/90"
      >
        Wear This
      </button>
      <button
        type="button"
        onClick={onShuffle}
        className="rounded-2xl border border-ink/10 bg-white/70 px-5 py-4 text-base font-semibold text-ink hover:-translate-y-0.5 hover:bg-white"
      >
        Try Another
      </button>
    </div>
  );
};

export default ActionButtons;
