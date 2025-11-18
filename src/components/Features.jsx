import { Bot, MailCheck, Workflow, Timeline, Sparkles, Shield, PlugZap } from "lucide-react";

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/70 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4">
        <Icon size={20} />
      </div>
      <h3 className="text-white font-medium text-lg">{title}</h3>
      <p className="text-slate-300/90 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_90%_0%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to qualify at scale</h2>
          <p className="text-slate-300/90 mt-3">We integrate with your CRM, email, meeting tools, and data enrichment to automate the heavy lifting while keeping you in control.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Feature icon={Bot} title="AI Lead Triage" desc="Intelligently routes and prioritizes new inquiries based on firmographics, engagement, and fit." />
          <Feature icon={MailCheck} title="Automatic Follow-ups" desc="Personalized sequences that pick up context from your existing threads and keep the conversation moving." />
          <Feature icon={Workflow} title="No New Workflows" desc="Runs behind the scenes in the systems you already use — nothing new to learn or adopt." />
          <Feature icon={Timeline} title="Real-time Scoring" desc="Unified scorecard that updates as buyers engage across channels so you always know who to talk to next." />
          <Feature icon={Shield} title="Enterprise-grade" desc="Role-based access, audit trails, and SSO with data residency and retention controls." />
          <Feature icon={PlugZap} title="Deep Integrations" desc="Native connectors to Salesforce, HubSpot, Gmail/Outlook, Calendly, Zoom, Slack and more." />
        </div>
      </div>
    </section>
  );
}

export default Features;