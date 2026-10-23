import Link from 'next/link';
import { INDUSTRIES } from '@/data/industries';
import CheckoutButton from '@/components/CheckoutButton';
import {
  BookOpen,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  ChevronRight,
  Download,
  Users,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-96 right-10 h-96 w-96 rounded-full bg-teal-500/10 blur-[100px]" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-6">
          <ShieldCheck className="h-4 w-4" />
          <span>OSHA 1910, EEOC & At-Will Employment Ready</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
          Standard Operating Procedures & Employee Handbooks{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Built for Real Operations.
          </span>
        </h1>

        <p className="mt-6 text-base md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Skip $3,500 HR consultant bills. Download battle-tested, 40+ page industry SOP manuals, employee onboarding handbooks, and daily opening/closing punchlists in fully editable Microsoft Word (.docx) & Notion formats.
        </p>

        {/* CTA Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CheckoutButton
            plan="bundle"
            variant="bundle"
            label="Get All Industry Kits Master Bundle — $79"
            className="w-full sm:w-auto"
          />
          <a
            href="#industries"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700 transition-all h-12"
          >
            <span>Browse 40+ Industry Manuals</span>
            <ArrowRight className="h-4 w-4 text-zinc-400" />
          </a>
        </div>

        {/* Trust Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
            <span className="text-xs text-zinc-400">Average Manual Size</span>
            <div className="text-2xl font-black text-white mt-1">45+ Pages</div>
            <span className="text-[11px] text-emerald-400">Per Industry Kit</span>
          </div>
          <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
            <span className="text-xs text-zinc-400">Written Protocols</span>
            <div className="text-2xl font-black text-white mt-1">30+ SOPs</div>
            <span className="text-[11px] text-emerald-400">Step-by-Step Executable</span>
          </div>
          <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
            <span className="text-xs text-zinc-400">Onboarding Speed</span>
            <div className="text-2xl font-black text-white mt-1">-8 Days</div>
            <span className="text-[11px] text-emerald-400">Faster Staff Autonomy</span>
          </div>
          <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
            <span className="text-xs text-zinc-400">Supported Formats</span>
            <div className="text-2xl font-black text-white mt-1">Word & Notion</div>
            <span className="text-[11px] text-emerald-400">Plus Printable PDF</span>
          </div>
        </div>
      </section>

      {/* Industry Catalog Grid */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Turnkey Industry Toolkits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Choose Your Operational Handbook
          </h2>
          <p className="text-sm md:text-base text-zinc-400 mt-2">
            Each manual includes complete step-by-step procedures, role accountability matrices, and legal employee sign-off forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((kit) => (
            <Link
              key={kit.slug}
              href={`/${kit.slug}`}
              className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 hover:border-emerald-500/50 hover:bg-zinc-900/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {kit.industry}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                    {kit.docPageCount} Pages
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {kit.name}
                </h3>

                <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                  {kit.heroSubtitle}
                </p>

                <div className="mt-4 pt-4 border-t border-zinc-800/60 flex items-center gap-4 text-xs text-zinc-300 font-mono">
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Written SOPs</span>
                    <strong>{kit.sopProcedureCount} Procedures</strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">Punchlists</span>
                    <strong>{kit.checklistCount} Checklists</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-zinc-800/60">
                <span className="text-sm font-bold text-white">$39.00</span>
                <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Look Inside</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Master Bundle Pitch */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 via-zinc-900 to-zinc-950 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-bold text-emerald-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Complete Operations-in-a-Box Access</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            The Master Operations Bundle — $79
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Get instant, lifetime unlocked access to all current and future industry operations manuals, 200+ Standard Operating Procedures, Notion workspaces, and editable Word (.docx) templates.
          </p>

          <div className="mt-8 flex justify-center">
            <CheckoutButton
              plan="bundle"
              variant="bundle"
              label="Unlock All Industry Kits for $79"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Commercial Single & Multi-Unit License</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Apple Pay, Google Pay & Corporate Cards</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Instant Digital Delivery</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
