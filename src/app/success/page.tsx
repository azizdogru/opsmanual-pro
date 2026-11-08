'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { INDUSTRY_MAP, INDUSTRIES } from '@/data/industries';
import { generateIndustryDocx } from '@/lib/docxGenerator';
import {
  CheckCircle2,
  Download,
  FileText,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const urlToken = searchParams.get('token') || '';
  const orderParam = searchParams.get('order') || searchParams.get('order_id') || searchParams.get('checkout_id') || '';
  const industrySlug =
    searchParams.get('industry') || 'restaurant-hospitality-sop-handbook-template';
  const plan = searchParams.get('plan') || 'single';

  const [activeToken, setActiveToken] = useState<string>(urlToken);
  const [orderId, setOrderId] = useState<string>(orderParam);

  const kit = INDUSTRY_MAP[industrySlug] || INDUSTRIES[0];
  const isBundle = plan === 'bundle';

  const [downloading, setDownloading] = useState(false);
  const [copiedLicense, setCopiedLicense] = useState(false);

  const licenseKey = `OPS-${industrySlug.substring(0, 4).toUpperCase()}-${Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase()}-2026`;

  useEffect(() => {
    if (urlToken) {
      setActiveToken(urlToken);
      try {
        localStorage.setItem('opsmanual_download_token', urlToken);
      } catch {}
    } else {
      try {
        const cached = localStorage.getItem('opsmanual_download_token');
        if (cached) setActiveToken(cached);
      } catch {}
    }

    if (orderParam) {
      setOrderId(orderParam);
      try {
        localStorage.setItem('opsmanual_order_id', orderParam);
      } catch {}
    } else {
      try {
        const cachedOrder = localStorage.getItem('opsmanual_order_id');
        if (cachedOrder) setOrderId(cachedOrder);
      } catch {}
    }
  }, [urlToken, orderParam]);

  const hasAccess = Boolean(activeToken || orderId);

  useEffect(() => {
    if (hasAccess) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#14b8a6', '#06b6d4', '#3b82f6'],
        });
      } catch (e) {
        // ignore
      }
    }
  }, [hasAccess]);

  const handleStartCheckout = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industrySlug, plan: 'single' }),
      });
      const data = await res.json();
      if (data.url || data.checkoutUrl) {
        window.location.href = data.url || data.checkoutUrl;
      }
    } catch (e) {
      console.error(e);
      window.location.href = '/#pricing';
    }
  };

  const handleDocxDownload = async (targetKit = kit) => {
    if (!hasAccess) {
      alert('Valid purchase session required. Please complete checkout to download.');
      return;
    }
    try {
      setDownloading(true);
      const tokenQuery = activeToken ? `&token=${encodeURIComponent(activeToken)}` : '';
      const orderQuery = orderId ? `&order=${encodeURIComponent(orderId)}` : '';
      window.location.href = `/api/download?industry=${targetKit.slug}${tokenQuery}${orderQuery}`;
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  if (!hasAccess) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center text-white">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition mb-8"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          <span>Back to OpsManual Pro</span>
        </Link>

        <div className="rounded-3xl border border-amber-500/30 bg-slate-900/90 p-8 sm:p-12 shadow-2xl space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <ShieldCheck className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Purchase Verification Required
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Operations Manual Access Protected
            </h1>
            <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
              No active purchase authorization was detected in this browser session. If you have already completed checkout, please click the download link in your order receipt email or unlock instant access below.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleStartCheckout}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-500 transition active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Unlock SOP Manual ($39)</span>
            </button>
            <Link
              href="/#industries"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition"
            >
              <span>Explore All Industries</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const copyLicense = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopiedLicense(true);
    setTimeout(() => setCopiedLicense(false), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 text-center">
      <div className="rounded-3xl border border-emerald-500/30 bg-zinc-900/60 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Order Confirmed! Your Operations Kit is Ready
        </h1>
        <p className="mt-3 text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
          Thank you for choosing OpsManual Pro. Your commercial license has been issued and your editable document package is ready for instant download below.
        </p>

        {/* License Box */}
        <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs">
          <span className="text-zinc-500">Commercial License:</span>
          <span className="font-mono font-bold text-emerald-400">{licenseKey}</span>
          <button
            onClick={copyLicense}
            className="text-zinc-400 hover:text-white transition-colors"
            title="Copy license key"
          >
            {copiedLicense ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        {/* Action Downloads */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
          <button
            onClick={() => handleDocxDownload(kit)}
            disabled={downloading}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-75"
          >
            <Download className="h-4 w-4" />
            <span>
              {downloading ? 'Preparing Word File...' : `Download Word Document (.docx)`}
            </span>
          </button>

          <a
            href={`/api/download-checklist?industry=${kit.slug}`}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-6 py-3.5 text-sm font-bold text-emerald-300 hover:bg-emerald-900/40 transition-all shadow-md"
            title="Download the official Daily Operations Audit Punchlist in PDF format"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Download Daily Audit PDF (.pdf)</span>
          </a>

          <a
            href="https://docs.new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 px-6 py-3.5 text-sm font-semibold text-zinc-100 hover:bg-zinc-700 transition-all group"
            title="Open Google Docs to import your Word file for online team editing"
          >
            <BookOpen className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Open Google Docs (docs.new)</span>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Bundle Downloads */}
        {isBundle && (
          <div className="mt-12 text-left border-t border-zinc-800 pt-8">
            <h3 className="text-base font-bold text-white mb-2">
              All Industry Kits in Your Master Bundle (One-Click Downloads):
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Each kit contains the full Word (.docx) manual, SOP procedures, and employee sign-off forms:
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 max-h-96 overflow-y-auto pr-2">
              {INDUSTRIES.map((k) => (
                <button
                  key={k.slug}
                  onClick={() => handleDocxDownload(k)}
                  className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5 text-xs text-zinc-200 hover:border-emerald-500/40 hover:bg-zinc-900 transition-colors text-left"
                >
                  <span className="truncate pr-2 font-medium">{k.name}</span>
                  <Download className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-zinc-400">Loading order details...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
