import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-50%,rgba(99,102,241,0.25),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 lg:pt-24 lg:pb-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-slate-200/80 mb-6">
            <Sparkles size={16} className="text-amber-300" />
            <span>AI that qualifies and follows up automatically</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Turn inbound interest into qualified pipeline, on autopilot
          </h1>

          <p className="mt-6 text-lg text-slate-300/90 max-w-xl">
            QualifyAI plugs into the tools you already use to triage, score, and follow up with leads in minutes — not days. No new workflows to learn.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#cta" className="inline-flex justify-center items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-lg font-medium shadow-sm hover:shadow">
              Start free trial <ArrowRight size={18} />
            </a>
            <a href="#demo" className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg font-medium border border-white/10 text-white/90 hover:bg-white/5">
              Book a demo
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-slate-300/80">
            <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-400" size={18}/> SOC2-ready</div>
            <div>14-day free trial</div>
            <div>Cancel anytime</div>
          </div>
        </div>

        {/* Spline 3D animation */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft overlay gradient to blend */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;