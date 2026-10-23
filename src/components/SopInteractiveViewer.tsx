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
  BookOpen,
  ListChecks,
  Milestone,
} from 'lucide-react';

interface Props {
  kit: IndustrySopKit;
}

export default function SopInteractiveViewer({ kit }: Props) {
  const [activeTab, setActiveTab] = useState<'sops' | 'handbook' | 'onboarding' | 'checklists' | 'signoff'>('sops');
  const [selectedSopIndex, setSelectedSopIndex] = useState(0);

  const currentSop = kit.comprehensiveSops[selectedSopIndex] || kit.comprehensiveSops[0];

  return (
    <div className="w-full my-12 rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-2">
            <Eye className="h-3.5 w-3.5" />
            <span>Interactive Operations Viewer (Look Inside)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Complete Operations Manual & Regulatory Handbook
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            Preview the exact protocols, employee policies, onboarding roadmaps, and compliance punchlists included in this kit.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-400">{kit.verifiedPageCount} Formatted Pages in Word (.docx)</span>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-zinc-800 scrollbar-none">
        <button
          onClick={() => setActiveTab('sops')}
          className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all ${
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
          className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'handbook'
              ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
              : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <BookOpen className="h-3.5 w-3.5" />
          <span>2. Employee Handbook ({kit.companyPolicies.length} Statutory Policies)</span>
        </button>

        <button
          onClick={() => setActiveTab('onboarding')}
          className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'onboarding'
              ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
              : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <Milestone className="h-3.5 w-3.5" />
          <span>3. 90-Day Onboarding Roadmap</span>
        </button>

        <button
          onClick={() => setActiveTab('checklists')}
          className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'checklists'
              ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
              : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <ListChecks className="h-3.5 w-3.5" />
          <span>4. Daily Shift Punchlists</span>
        </button>

        <button
          onClick={() => setActiveTab('signoff')}
          className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === 'signoff'
              ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
              : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>5. Legal Sign-Off Form</span>
        </button>
      </div>

      {/* Viewer Content Box */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        {activeTab === 'sops' && (
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {kit.comprehensiveSops.map((sop, idx) => (
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

              <div className="mt-4 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60 text-xs">
                <span className="text-zinc-400 font-bold block mb-1.5">Required Tools & Materials:</span>
                <div className="flex flex-wrap gap-2">
                  {currentSop.prerequisites.map((pre, pIdx) => (
                    <span key={pIdx} className="bg-zinc-800/80 text-zinc-300 px-2 py-0.5 rounded text-[11px]">
                      • {pre}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <span className="text-xs uppercase tracking-wider font-bold text-zinc-400 mb-3 block">
                  Mandatory Execution Sequence (Step-by-Step):
                </span>
                <div className="space-y-3">
                  {currentSop.executionSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 text-xs leading-relaxed">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 font-bold text-emerald-400 text-[11px]">
                        {sIdx + 1}
                      </span>
                      <span className="text-zinc-300 pt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-200">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <strong className="text-amber-300">Regulatory Standard & Verification: </strong>
                  {currentSop.regulatoryStandard} — {currentSop.verificationStandard}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'handbook' && (
          <div className="space-y-4">
            {kit.companyPolicies.map((pol) => (
              <div key={pol.code} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-xs">
                <div className="flex items-center justify-between gap-2 border-b border-zinc-800/80 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-emerald-400">[{pol.code}]</span>
                    <h4 className="font-bold text-white text-sm">{pol.name}</h4>
                  </div>
                  <span className="text-[11px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                    {pol.category}
                  </span>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-3">
                  {pol.policyStatement}
                </p>
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
                  <div><strong className="text-emerald-400">Enforcement Protocol: </strong>{pol.enforcementProtocol}</div>
                  {pol.statutoryLegalReference && (
                    <div><strong className="text-zinc-300">Legal Authority Reference: </strong>{pol.statutoryLegalReference}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'onboarding' && (
          <div className="space-y-4">
            {kit.onboardingRoadmap.map((mile, i) => (
              <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-xs">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                  <h4 className="text-sm font-bold text-emerald-400">{mile.dayWindow}</h4>
                  <span className="text-zinc-400">Milestone Progression</span>
                </div>
                <p className="text-zinc-300 mb-3"><strong className="text-white">Objective: </strong>{mile.learningObjective}</p>
                <div className="space-y-1.5 mb-3">
                  {mile.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
                <div className="p-2.5 rounded bg-zinc-900/80 text-[11px] text-zinc-400">
                  <strong className="text-emerald-300">Passing Evaluation Standard: </strong>{mile.evaluationCriterion}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'checklists' && (
          <div className="space-y-4">
            {kit.dailyChecklists.map((chk, i) => (
              <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-xs">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                  <h4 className="font-bold text-white text-sm">{chk.name}</h4>
                  <span className="font-mono text-emerald-400">{chk.shiftTime}</span>
                </div>
                <div className="text-zinc-400 mb-3">Role Accountability: <strong className="text-zinc-200">{chk.responsibleRole}</strong></div>
                <div className="space-y-2">
                  {chk.tasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2.5 p-2 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-300">
                      <span className="text-emerald-400 font-bold">[  ]</span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'signoff' && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-xs text-zinc-300 space-y-4">
            <h4 className="text-base font-bold text-white">Employee Handbook & Operational SOP Acknowledgment Form</h4>
            <p className="leading-relaxed">
              I acknowledge that I have received, reviewed, and agree to abide by the policies, safety standards, and
              Standard Operating Procedures (SOPs) set forth in this operations manual. I understand and acknowledge that my
              employment with the Company remains strictly at-will, meaning that either I or the Company may terminate my
              employment at any time, with or without cause or prior notice.
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
            <span>100% Unlocked & Fully Editable in Microsoft Word (.docx) & Google Docs</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Includes Bonus 2-Page HACCP Shift Audit PDF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
