import { Outlook, Mail, Calendar, Slack, Database, Link, Zap, Plug } from 'lucide-react';

function Integrations() {
  const logos = [
    { name: 'Salesforce', text: 'SF', color: 'from-sky-400 to-blue-500' },
    { name: 'HubSpot', text: 'HS', color: 'from-orange-500 to-amber-500' },
    { name: 'Gmail', text: 'G', color: 'from-rose-500 to-pink-500' },
    { name: 'Outlook', text: 'O', color: 'from-blue-500 to-indigo-500' },
    { name: 'Calendly', text: 'C', color: 'from-cyan-400 to-teal-400' },
    { name: 'Zoom', text: 'Z', color: 'from-blue-400 to-sky-500' },
    { name: 'Slack', text: 'S', color: 'from-violet-500 to-purple-500' },
    { name: 'Clearbit', text: 'CB', color: 'from-emerald-400 to-teal-500' },
  ];

  return (
    <section id="integrations" className="relative py-16 sm:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Works with your stack</h2>
          <p className="text-slate-300/90 mt-3">Connect to your CRM, inbox, calendar, meeting tools, and data providers in minutes.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {logos.map((l) => (
            <div key={l.name} className="aspect-square rounded-2xl border border-white/10 bg-slate-900/50 flex items-center justify-center">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${l.color} text-white font-semibold flex items-center justify-center`}>{l.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;