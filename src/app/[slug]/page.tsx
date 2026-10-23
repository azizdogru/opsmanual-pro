import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { INDUSTRY_MAP, INDUSTRIES } from '@/data/industries';
import CheckoutButton from '@/components/CheckoutButton';
import SopInteractiveViewer from '@/components/SopInteractiveViewer';
import {
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  FileText,
  Clock,
  Layers,
  ChevronRight,
  Download,
  Users,
  Sparkles,
  Lock,
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INDUSTRIES.map((kit) => ({
    slug: kit.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const kit = INDUSTRY_MAP[params.slug];
  if (!kit) return {};

  const title = kit.metaTitle || `${kit.name} SOP Template & Employee Handbook (Word .docx, Google Docs)`;
  const description =
    kit.metaDescription ||
    `Turnkey ${kit.name} Standard Operating Procedures (SOPs) and employee onboarding handbook. Fully editable in Microsoft Word (.docx), Google Docs, and printable PDF.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://opsmanual-pro.vercel.app/${kit.slug}`,
    },
  };
}

export default function IndustryKitPage({ params }: Props) {
  const kit = INDUSTRY_MAP[params.slug];

  if (!kit) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden pb-24">
      {/* Breadcrumb */}
      <div className="border-b border-zinc-800/80 bg-zinc-900/40">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2.5 text-xs text-zinc-400 sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-zinc-200">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-zinc-600" />
          <Link href="/#industries" className="hover:text-zinc-200">
            Operations Manuals
          </Link>
          <ChevronRight className="h-3 w-3 text-zinc-600" />
          <span className="text-zinc-200 font-medium truncate">{kit.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-6">
          <ShieldCheck className="h-4 w-4" />
          <span>{kit.standardBadge}</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
          {kit.name}{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            SOP & Handbook Kit
          </span>
        </h1>

        <p className="mt-5 text-base md:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          {kit.heroSubtitle}
        </p>

        {/* Highlight Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-center">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400">Manual Length</span>
            <div className="mt-1 text-lg font-black text-white">{kit.verifiedPageCount} Pages</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400">Written SOPs</span>
            <div className="mt-1 text-lg font-black text-emerald-400">{kit.sopProcedureCount} Procedures</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400">Daily Punchlists</span>
            <div className="mt-1 text-lg font-black text-white">{kit.checklistCount} Checklists</div>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400">Onboarding Ramp</span>
            <div className="mt-1 text-lg font-black text-emerald-400">-{kit.averageOnboardingReductionDays} Days</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CheckoutButton
            industrySlug={kit.slug}
            plan="single"
            label="Download Complete Operations Kit — $39"
            className="w-full sm:w-auto"
          />
          <CheckoutButton
            industrySlug={kit.slug}
            plan="bundle"
            variant="bundle"
            label="Get All Industry Kits — $79"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Includes Microsoft Word (.docx), Google Docs Ready & Printable 2-Page Shift Audit PDF</span>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Interactive SOP & Handbook Viewer Component */}
        <section>
          <SopInteractiveViewer kit={kit} />
        </section>

        {/* Benefits & Included Assets Breakdown */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            What's Delivered in the {kit.name} Operations Kit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Microsoft Word (.docx) Master</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Structured {kit.verifiedPageCount}-page operations handbook with company placeholders, department roles, and step-by-step procedures. Unlocked and ready to brand.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-4">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Google Docs Compatible</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Seamless drag-and-drop import to Google Drive. Clean heading hierarchy and tables make it ready for instant cloud team collaboration.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">Printable 2-Page Shift Audit PDF</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Ready-to-print daily opening/closing punchlists and HACCP temperature/equipment verification log designed for back-of-house clipboard auditing.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-950 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Standardize Your {kit.name} Operations Today
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Instant digital download. 100% unlocked files with perpetual commercial license.
            </p>
          </div>
          <CheckoutButton
            industrySlug={kit.slug}
            plan="single"
            label="Download Complete Operations Kit — $39"
          />
        </section>
      </div>
    </div>
  );
}
