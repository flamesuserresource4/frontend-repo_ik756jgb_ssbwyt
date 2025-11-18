import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-20 lg:py-24">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-400 p-1">
          <div className="rounded-[22px] bg-slate-900/80 p-10">
            <h3 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Start qualifying leads on autopilot</h3>
            <p className="text-slate-200/90 mt-3 max-w-2xl mx-auto">Launch in days, not months. Try it free — connect your stack and see qualified pipeline appear.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-lg font-medium shadow-sm hover:shadow">
                Start free trial <ArrowRight size={18} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border border-white/10 text-white/90 hover:bg-white/5">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;