const InsightBox = ({ message }) => {
  return (
    <section className="surface p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">Style Insight</p>
      <p className="mt-3 text-sm leading-6 text-ink/75">{message}</p>
    </section>
  );
};

export default InsightBox;
