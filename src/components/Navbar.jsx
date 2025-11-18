import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-amber-400 shadow-lg shadow-indigo-500/20" />
          <span className="text-white font-semibold tracking-tight">QualifyAI</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-slate-200/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#integrations" className="hover:text-white transition-colors">Integrations</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Customers</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="text-slate-200/80 hover:text-white transition-colors">Book a demo</a>
          <a href="#cta" className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow transition-shadow">
            Start free trial <ArrowRight size={18} />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#features" className="block text-slate-200/90">Features</a>
            <a onClick={() => setOpen(false)} href="#how" className="block text-slate-200/90">How it works</a>
            <a onClick={() => setOpen(false)} href="#integrations" className="block text-slate-200/90">Integrations</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="block text-slate-200/90">Customers</a>
            <a onClick={() => setOpen(false)} href="#cta" className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-medium shadow-sm">
              Start free trial <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;