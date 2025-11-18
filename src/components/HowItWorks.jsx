import { CheckCircle2, Brain, Mail, CalendarDays } from "lucide-react";

function Step({ number, title, desc }) {
  return (
    <div className="relative p-6 rounded-2xl border border-white/10 bg-slate-900/50">
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-xl bg-white text-slate-900 font-semibold flex items-center justify-center shadow">{number}</div>
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-slate-300/90 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
          <p className="text-slate-300/90 mt-3">Plug in your tools, define what a qualified lead looks like, and let the agent do the rest while your team focuses on conversations that matter.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Step number="1" title="Connect" desc="Securely connect CRM, email, calendar, form sources, and enrichment providers." />
          <Step number="2" title="Define" desc="Set your qualification rules by ICP, persona, intent signals, and buying stage." />
          <Step number="3" title="Qualify" desc="Leads are scored and routed instantly with context-rich profiles and next-best actions." />
          <Step number="4" title="Engage" desc="Automated follow-ups across email and calendar to book time with the right buyers fast." />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;