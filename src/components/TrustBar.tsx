import React from 'react';
import { ShieldCheck, FileText, Lock, Star } from 'lucide-react';

export function TrustBar() {
  return (
    <div className="border-y border-slate-800/80 bg-slate-950/60 py-6 my-10 text-xs text-slate-300 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-white text-xs">Battle-Tested SOP Kits</p>
            <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">Comprehensive operations manuals crafted for immediate team delegation.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-white text-xs">Fully Editable Word (.DOCX)</p>
            <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">Instant Microsoft Word & Google Docs templates ready for company branding.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-white text-xs">HR & OSHA Standards Aligned</p>
            <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">Structured with modern workplace compliance, safety guidelines & workflows.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <div>
            <p className="font-bold text-white text-xs">Trusted by Growing Operations</p>
            <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">Used by franchise operators, agency founders, and operations directors.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
