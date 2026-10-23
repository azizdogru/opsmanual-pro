'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  CheckSquare,
  Square,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Calculator,
} from 'lucide-react';
import CheckoutButton from './CheckoutButton';

interface AuditItem {
  id: string;
  label: string;
  category: string;
  riskAmount: number;
  description: string;
}

const AUDIT_QUESTIONS: AuditItem[] = [
  {
    id: 'sops',
    label: 'Written, Step-by-Step Industry SOPs on File',
    category: 'Operations & Quality',
    riskAmount: 12500,
    description: 'Documented, station-by-station operational protocols accessible to all frontline staff during daily shifts.',
  },
  {
    id: 'handbook',
    label: 'Signed Statutory At-Will Employee Handbook',
    category: 'HR & Legal Shield',
    riskAmount: 25000,
    description: 'Signed employee acknowledgment confirming at-will employment, anti-harassment, and attendance rules.',
  },
  {
    id: 'discipline',
    label: 'Documented Progressive Discipline Matrix',
    category: 'Employment Law',
    riskAmount: 18500,
    description: 'Multi-step written counseling trail protecting against wrongful termination and unemployment dispute claims.',
  },
  {
    id: 'safety',
    label: 'OSHA Workplace Safety & Emergency Action Plan',
    category: 'Regulatory Safety',
    riskAmount: 16131,
    description: 'HazCom chemical documentation, required PPE standards, and documented emergency injury protocols.',
  },
  {
    id: 'checklists',
    label: 'Daily Shift Verification Punchlists Executed',
    category: 'Accountability',
    riskAmount: 8000,
    description: 'Opening, mid-day handover, and closing audit punchlists with manager verification signatures.',
  },
];

export default function ComplianceAuditSimulator() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    sops: false,
    handbook: false,
    discipline: false,
    safety: false,
    checklists: false,
  });

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = AUDIT_QUESTIONS.length;
  const scorePercent = Math.round((completedCount / totalCount) * 100);

  const totalRiskExposure = AUDIT_QUESTIONS.reduce((acc, curr) => {
    return checkedItems[curr.id] ? acc : acc + curr.riskAmount;
  }, 0);

  let statusBadge = {
    text: 'High Regulatory & Legal Liability Exposure',
    color: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
    barColor: 'bg-rose-500',
  };

  if (scorePercent >= 80) {
    statusBadge = {
      text: 'Audit-Ready & Statutorily Protected',
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      barColor: 'bg-emerald-500',
    };
  } else if (scorePercent >= 40) {
    statusBadge = {
      text: 'Moderate Operational Liability Risk',
      color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      barColor: 'bg-amber-500',
    };
  }

  return (
    <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 md:p-10 backdrop-blur-xl shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-2">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Risk & Readiness Audit</span>
          </div>
          <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">
            Operational Compliance & Legal Shield Scorecard
          </h3>
          <p className="text-xs md:text-sm text-zinc-400 mt-1 max-w-2xl">
            Check off your business's current operational documentation to calculate your audit readiness score and estimated liability exposure.
          </p>
        </div>

        {/* Live Score Display */}
        <div className="flex flex-col items-start md:items-end">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Readiness Score</span>
          <div className="text-3xl md:text-4xl font-black text-white mt-0.5">
            {scorePercent}%
          </div>
          <div className={`mt-1.5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${statusBadge.color}`}>
            <span>{statusBadge.text}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-zinc-900 rounded-full h-2 mb-8 overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${statusBadge.barColor}`}
          style={{ width: `${scorePercent}%` }}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Checklist Items */}
        <div className="lg:col-span-7 space-y-3">
          <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block mb-2">
            Audit Checklist (Click to Toggle Your Business Status)
          </span>

          {AUDIT_QUESTIONS.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                type="button"
                className={`w-full text-left rounded-xl p-4 border transition-all flex items-start gap-3.5 ${
                  isChecked
                    ? 'border-emerald-500/40 bg-emerald-950/20 text-white'
                    : 'border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/80 text-zinc-300'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Square className="h-5 w-5 text-zinc-600" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-white">{item.label}</span>
                    <span className="text-[10px] font-mono text-zinc-500">{item.category}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Risk Exposure & CTA Box */}
        <div className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-4">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              <span>Calculated Liability Exposure</span>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-5 mb-6">
              <span className="text-xs text-zinc-400 block">Estimated Potential Fines & Defense Risk:</span>
              <div className="text-3xl md:text-4xl font-black text-rose-400 mt-1 font-mono">
                ${totalRiskExposure.toLocaleString()}
              </div>
              <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                Based on average statutory OSHA serious violation maximums ($16,131/violation), Department of Labor wage audits, and unshielded employee dispute settlements.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-zinc-300 mb-6">
              <div className="flex items-center justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Required Document Pages:</span>
                <span className="font-bold text-white">14 Pages (Editable .docx)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Written SOP Workflows:</span>
                <span className="font-bold text-white">8 Executable SOPs</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Shift Punchlists:</span>
                <span className="font-bold text-white">3 Daily Checklists + PDF</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-zinc-400">HR Consultant Billing Value:</span>
                <span className="font-bold text-emerald-400 line-through">$3,500.00</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <CheckoutButton
              plan="bundle"
              variant="bundle"
              label="Eliminate Liability — Master Bundle ($79)"
              className="w-full"
            />
            <p className="text-[10px] text-zinc-500 text-center">
              Instant delivery of all 49 industry kits in Microsoft Word (.docx) & Google Docs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
