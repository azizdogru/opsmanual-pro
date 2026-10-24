'use client';

import React, { useState } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

export function DwellTimeWidget() {
  const [fixedCosts, setFixedCosts] = useState(6500);
  const [avgTicket, setAvgTicket] = useState(120);
  const [marginPct, setMarginPct] = useState(65);

  const profitPerUnit = avgTicket * (marginPct / 100);
  const breakEvenUnits = Math.ceil(fixedCosts / Math.max(1, profitPerUnit));
  const breakEvenRevenue = breakEvenUnits * avgTicket;

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 my-10 shadow-2xl text-xs text-zinc-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Interactive Unit Economics Simulator</span>
          </div>
          <h3 className="text-xl font-black text-white tracking-tight">
            Commercial Break-Even &amp; Revenue Target Estimator
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Simulate monthly operating costs against profit margins to determine viability.
          </p>
        </div>

        <div className="bg-zinc-800/80 px-4 py-2.5 rounded-xl border border-zinc-700/60 text-right">
          <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Break-Even Revenue</p>
          <p className="text-2xl font-black text-emerald-400">${breakEvenRevenue.toLocaleString()}/mo</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex justify-between font-bold text-white mb-2">
            <span>Monthly Fixed Overhead</span>
            <span className="text-indigo-400 font-mono">${fixedCosts.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={1000}
            max={25000}
            step={500}
            value={fixedCosts}
            onChange={(e) => setFixedCosts(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
            <span>$1,000</span>
            <span>$12,500</span>
            <span>$25,000</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between font-bold text-white mb-2">
            <span>Average Order / Ticket</span>
            <span className="text-emerald-400 font-mono">${avgTicket}</span>
          </div>
          <input
            type="range"
            min={20}
            max={1000}
            step={10}
            value={avgTicket}
            onChange={(e) => setAvgTicket(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
            <span>$20</span>
            <span>$500</span>
            <span>$1,000</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between font-bold text-white mb-2">
            <span>Gross Margin</span>
            <span className="text-amber-400 font-mono">{marginPct}%</span>
          </div>
          <input
            type="range"
            min={20}
            max={90}
            step={5}
            value={marginPct}
            onChange={(e) => setMarginPct(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
            <span>20% (Retail)</span>
            <span>55% (Food/Services)</span>
            <span>90% (SaaS)</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-zinc-400">
          Target Volume: Requires <strong>{breakEvenUnits.toLocaleString()} units/clients</strong> per month to cover operational overhead.
        </p>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg transition"
        >
          <span>Explore Professional Tools</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
