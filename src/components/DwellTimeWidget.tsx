'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, FileCheck2, AlertTriangle, Users } from 'lucide-react';
import { INDUSTRIES } from '@/data/industries';

export function DwellTimeWidget() {
  const [selectedSlug, setSelectedSlug] = useState(INDUSTRIES[0]?.slug || '');
  const [teamSize, setTeamSize] = useState(8);
  const [hourlyWage, setHourlyWage] = useState(24);

  const selectedIndustry = INDUSTRIES.find((i) => i.slug === selectedSlug) || INDUSTRIES[0];

  // Dynamic ROI and legal bill avoidance calculations
  const consultantAvoidance = 3500;
  const trainingHoursSavedPerEmp = 18; // hours saved onboarding/year
  const payrollSavings = Math.round(teamSize * trainingHoursSavedPerEmp * hourlyWage);
  const totalValue = consultantAvoidance + payrollSavings;

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 my-10 shadow-2xl text-xs text-zinc-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OSHA, EEOC &amp; Operations Risk Simulator</span>
          </div>
          <h3 className="text-xl font-black text-white tracking-tight">
            Calculate Operational Risk Exposure &amp; SOP Cost Savings
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Estimate legal consulting bills avoided, shift training efficiency gains, and labor compliance protections.
          </p>
        </div>

        <div className="bg-zinc-800/80 px-4 py-2.5 rounded-xl border border-zinc-700/60 text-right shrink-0">
          <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Estimated Total Value Saved</p>
          <p className="text-2xl font-black text-emerald-400">${totalValue.toLocaleString()}</p>
          <p className="text-[10px] text-zinc-400 mt-0.5">$3,500 Legal Fee + ${payrollSavings.toLocaleString()} Payroll Efficiency</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs font-bold text-zinc-200 mb-2">Target Industry &amp; Facility Type</label>
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-medium"
          >
            {INDUSTRIES.map((ind) => (
              <option key={ind.slug} value={ind.slug}>
                {ind.name}
              </option>
            ))}
          </select>
          <p className="text-[11px] text-zinc-400 mt-2">
            Standard: <span className="text-emerald-400 font-medium">{selectedIndustry?.standardBadge || 'OSHA 1910 Compliant'}</span>
          </p>
        </div>

        <div>
          <div className="flex justify-between font-bold text-white mb-2">
            <span>Active Team &amp; Shift Size</span>
            <span className="text-emerald-400 font-mono">{teamSize} Employees</span>
          </div>
          <input
            type="range"
            min={2}
            max={75}
            step={1}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
            <span>2 Staff</span>
            <span>35 Staff</span>
            <span>75 Staff</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between font-bold text-white mb-2">
            <span>Avg Blended Hourly Wage</span>
            <span className="text-teal-400 font-mono">${hourlyWage}/hr</span>
          </div>
          <input
            type="range"
            min={15}
            max={65}
            step={1}
            value={hourlyWage}
            onChange={(e) => setHourlyWage(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
            <span>$15/hr</span>
            <span>$40/hr</span>
            <span>$65/hr</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-zinc-300">
          <FileCheck2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Includes complete 6-clause progressive discipline matrix and emergency protocol punchlists in .docx format.
          </span>
        </div>

        <Link
          href={`/${selectedIndustry?.slug || ''}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition shrink-0"
        >
          <span>Get {selectedIndustry?.name ? selectedIndustry.name.split(' ')[0] : 'Industry'} Operations Manual</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
