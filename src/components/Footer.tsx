import Link from 'next/link';
import { BookOpen, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-zinc-950 font-black">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-white">OpsManual Pro</span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400 max-w-sm">
              Standard Operating Procedures (SOPs), Employee Handbooks, and Safety Audit Systems for growing SMBs. Fully editable Word (.docx), Notion, and PDF templates.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>OSHA 1910 & At-Will Employment Ready</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Popular Industry Kits</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/restaurant-hospitality-sop-handbook-template" className="hover:text-emerald-400">
                  Restaurant & Hospitality SOPs
                </Link>
              </li>
              <li>
                <Link href="/boutique-gym-fitness-studio-sop-handbook-template" className="hover:text-emerald-400">
                  Gym & Fitness Studio Manual
                </Link>
              </li>
              <li>
                <Link href="/medspa-aesthetic-clinic-sop-handbook-template" className="hover:text-emerald-400">
                  Medical Spa & Aesthetics SOPs
                </Link>
              </li>
              <li>
                <Link href="/airbnb-vacation-rental-property-management-sop-template" className="hover:text-emerald-400">
                  Airbnb Property Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Supported Formats</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Microsoft Word (.docx) Fully Editable</li>
              <li>Notion Workspace 1-Click Duplicate</li>
              <li>Google Docs Compatible</li>
              <li>Printable Daily Checklist PDF</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} OpsManual Pro. All rights reserved. Built for operational excellence & B2B compliance.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-zinc-300">Home</Link>
            <Link href="/#industries" className="hover:text-zinc-300">All Kits</Link>
            <Link href="/#pricing" className="hover:text-zinc-300">Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
