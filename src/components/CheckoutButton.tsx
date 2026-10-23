'use client';

import React, { useState } from 'react';
import { Loader2, Download, Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  industrySlug?: string;
  plan?: 'single' | 'bundle';
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'bundle' | 'outline';
}

export default function CheckoutButton({
  industrySlug,
  plan = 'single',
  label,
  className = '',
  variant = 'primary',
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          industrySlug,
          plan,
        }),
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        window.location.href =
          'https://depositdemand.lemonsqueezy.com/checkout/buy/44ba076c-b57d-429b-af3d-6962ccf4dc46';
      }
    } catch (err) {
      console.error('Checkout error:', err);
      window.location.href =
        'https://depositdemand.lemonsqueezy.com/checkout/buy/44ba076c-b57d-429b-af3d-6962ccf4dc46';
    }
  };

  const isBundle = plan === 'bundle';
  const defaultLabel = isBundle
    ? 'Get All Industry Kits Master Bundle — $79'
    : 'Download Word (.docx) & Notion Kit — $39';

  let variantClasses =
    'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-emerald-500/25';

  if (variant === 'bundle') {
    variantClasses =
      'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:opacity-95 text-zinc-950 font-black shadow-lg shadow-emerald-500/30';
  } else if (variant === 'secondary') {
    variantClasses =
      'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700';
  } else if (variant === 'outline') {
    variantClasses =
      'border-2 border-emerald-500/60 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-500/10';
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75 disabled:cursor-wait whitespace-nowrap h-12 ${variantClasses} ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin text-zinc-950" />
          <span>Preparing Checkout...</span>
        </>
      ) : (
        <>
          {isBundle ? (
            <Sparkles className="h-4 w-4 shrink-0" />
          ) : (
            <Download className="h-4 w-4 shrink-0" />
          )}
          <span>{label || defaultLabel}</span>
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}
