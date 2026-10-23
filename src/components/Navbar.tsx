import Link from 'next/link';
import { BookOpen, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-zinc-950 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <BookOpen className="h-5 w-5 font-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
              OpsManual <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[11px] font-bold text-emerald-400">PRO</span>
            </span>
            <span className="text-[10px] text-zinc-400 font-medium -mt-0.5">Enterprise SOP & HR Handbooks</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-zinc-300">
          <Link href="/#industries" className="hover:text-emerald-400 transition-colors">
            Industry SOP Kits
          </Link>
          <Link href="/#features" className="hover:text-emerald-400 transition-colors">
            What's Inside
          </Link>
          <Link href="/#compliance" className="hover:text-emerald-400 transition-colors">
            OSHA / HR Compliance
          </Link>
          <Link href="/#pricing" className="hover:text-emerald-400 transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#industries"
            className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs font-bold text-zinc-200 hover:border-emerald-500/40 hover:text-white transition-all shadow-sm"
          >
            Browse Kits
          </Link>
        </div>
      </div>
    </header>
  );
}
