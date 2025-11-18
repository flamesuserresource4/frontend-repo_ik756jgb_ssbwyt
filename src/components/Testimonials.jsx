function Testimonials() {
  const items = [
    {
      quote: "We went from 5-day response times to under 5 minutes — our meetings booked doubled in a month.",
      author: "VP Demand Gen, Series B SaaS",
    },
    {
      quote: "It plugs into Salesforce and Gmail so there's no change management. The team loved it on day one.",
      author: "RevOps Lead, Enterprise",
    },
    {
      quote: "The quality of conversations improved because reps only talk to real buyers now.",
      author: "Head of Sales, Startup",
    },
  ];

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(244,114,182,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((t, i) => (
            <figure key={i} className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
              <blockquote className="text-slate-200/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;