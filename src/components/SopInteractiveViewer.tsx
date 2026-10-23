'use client';

import React, { useState } from 'react';
import { IndustrySopKit } from '@/types';
import {
  FileText,
  ShieldCheck,
  CheckCircle,
  Clock,
  Eye,
  AlertTriangle,
  Lock,
  Download,
  BookOpen,
  ListChecks,
} from 'lucide-react';

interface Props {
  kit: IndustrySopKit;
}

export default function SopInteractiveViewer({ kit }: Props) {
  const [activeTab, setActiveTab] = useState<'handbook' | 'sops' | 'checklists' | 'signoff'>('sops');
  const [selectedSopIndex, setSelectedSopIndex] = useState(0);

  const currentSop = kit.featuredSops[selectedSopIndex] || kit.featuredSops[0];

  return (
    <div className="w-full my-12 rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-2">
            <Eye className="h-3.5 w-3.5" />
            <span>Interactive Operations Viewer (Look Inside)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Enterprise SOP & Employee Handbook Architecture
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            Preview the exact protocols, checklists, and legal clauses included in the unlocked Word (.docx) & Notion kit.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-400">{kit.docPageCount} Fully Formatted Pages</span>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-zinc-800 scrollbar-none">
        <button
          onClick={() => setActiveTab('sops')}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'sops'
              ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
              : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <FileText className="h-3.5 w-3.5" />
          <span>1. Standard Operating Procedures ({kit.sopProcedureCount} Written SOPs)</span>
        </button>

        <button
          onClick={() => setActiveTab('handbook')}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'handbook'
              ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
              : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <BookOpen className="h-3.5 w-3.5" />
          <span>2. Employee Handbook Policies</span>
        </button>

        <button
          onClick={() => setActiveTab('checklists')}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'checklists'
              ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
              : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <ListChecks className="h-3.5 w-3.5" />
          <span>3. Daily Audit Punchlists</span>
        </button>

        <button
          onClick={() => setActiveTab('signoff')}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'signoff'
              ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
              : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>4. Legal Employee Sign-Off Form</span>
        </button>
      </div>

      {/* Viewer Content Box */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        {activeTab === 'sops' && (
          <div>
            {/* SOP Picker Sub-buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {kit.featuredSops.map((sop, idx) => (
                <button
                  key={sop.code}
                  onClick={() => setSelectedSopIndex(idx)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedSopIndex === idx
                      ? 'border border-emerald-500/50 bg-emerald-500/20 text-emerald-300'
                      : 'border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white'
                  }`}
                >
                  [{sop.code}] {sop.title.split('&')[0]}
                </button>
              ))}
            </div>

            {/* Render Current SOP Procedure */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-6 font-sans">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    [{currentSop.code}] • Department: {currentSop.department}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">{currentSop.title}</h4>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Clock className="h-3.5 w-3.5 text-zinc-500" />
                  <span>Cadence: <strong>{currentSop.frequency}</strong></span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-zinc-500 block mb-1">Primary Role Accountability:</span>
                  <span className="font-bold text-zinc-200">{currentSop.responsibility}</span>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-zinc-500 block mb-1">Standard Core Objective:</span>
                  <span className="text-zinc-300">{currentSop.objective}</span>
                </div>
              </div>

              {/* Step Sequence */}
              <div className="mt-6">
                <span className="text-xs uppercase tracking-wider font-bold text-zinc-400 mb-3 block">
                  Mandatory Execution Sequence:
                </span>
                <div className="space-y-3">
                  {currentSop.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 text-xs leading-relaxed">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 font-bold text-emerald-400 text-[11px]">
                        {sIdx + 1}
                      </span>
                      <span className="text-zinc-300 pt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Box */}
              {currentSop.safetyOrComplianceNote && (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                  <div>
                    <strong className="text-amber-300">Safety & Compliance Protocol: </strong>
                    {currentSop.safetyOrComplianceNote}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'handbook' && (
          <div className="space-y-6">
            {kit.handbookSections.map((sec, i) => (
              <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <h4 className="text-base font-bold text-white mb-1">{sec.title}</h4>
                <p className="text-xs text-zinc-400 mb-4">{sec.summary}</p>
                <div className="space-y-3">
                  {sec.policies.map((pol, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-xs"
                    >
                      <div className="font-bold text-white mb-1 flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                        <span>{pol.name}</span>
                      </div>
                      <p className="text-zinc-300 leading-relaxed mb-2">{pol.description}</p>
                      <div className="text-[11px] text-zinc-400">
                        <strong className="text-emerald-400 font-mono">Enforcement Standard: </strong>
                        {pol.rule}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'checklists' && (
          <div className="space-y-6">
            {kit.dailyChecklists.map((chk, i) => (
              <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                  <h4 className="text-base font-bold text-white">{chk.name}</h4>
                  <span className="text-xs font-mono font-bold text-emerald-400">{chk.timeframe}</span>
                </div>
                <div className="space-y-2">
                  {chk.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 text-xs text-zinc-300"
                    >
                      <div className="h-4 w-4 shrink-0 rounded border border-emerald-500/60 flex items-center justify-center text-emerald-400">
                        ✓
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'signoff' && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-xs text-zinc-300 space-y-4">
            <h4 className="text-base font-bold text-white">Employee Handbook & SOP Acknowledgment Form</h4>
            <p className="leading-relaxed">
              I acknowledge that I have received, reviewed, and agree to abide by the policies, safety standards, and
              Standard Operating Procedures (SOPs) set forth in this operations manual. I understand that my employment
              remains at-will and that failure to adhere to these operating standards may result in corrective coaching
              up to and including termination of employment.
            </p>
            <div className="pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-500 block mb-8">Employee Full Printed Legal Name & Signature:</span>
                <div className="border-b border-zinc-700 w-full" />
              </div>
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-500 block mb-8">Date of Execution & Signature:</span>
                <div className="border-b border-zinc-700 w-full" />
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5 text-emerald-400" />
            <span>100% Unlocked & Fully Editable in Microsoft Word (.docx), Notion & Google Docs</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Includes Bonus Printable Daily Audit PDF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
