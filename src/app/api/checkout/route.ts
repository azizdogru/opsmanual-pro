import { NextResponse } from 'next/server';
import { INDUSTRY_MAP } from '@/data/industries';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { industrySlug, plan = 'single', email } = body;

    const kit = industrySlug ? INDUSTRY_MAP[industrySlug] : null;
    const isBundle = plan === 'bundle';

    const priceCents = isBundle ? 7900 : 3900;
    const productName = isBundle
      ? 'All-Access Enterprise SOP & Employee Handbook Master Bundle (All Industries)'
      : kit
      ? `${kit.name} Standard Operating Procedures & Employee Handbook (Word & Notion)`
      : 'Standard Operating Procedures & Employee Handbook Template Kit';

    const productDescription = isBundle
      ? 'Instant unlocked access to all industry operations manuals, editable Word .docx files, Notion workspace links, and OSHA compliance checklists.'
      : kit
      ? `Turnkey editable Word (.docx) & Notion operations manual for ${kit.name}. Includes ${kit.verifiedPageCount} pages, ${kit.sopProcedureCount} written SOPs, and employee acknowledgment forms.`
      : 'Comprehensive B2B operations manual and employee handbook.';

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://opsmanual-pro.vercel.app');

    const redirectUrl = `${baseUrl}/success?plan=${plan}${industrySlug ? `&industry=${industrySlug}` : ''}`;

    const apiKey = process.env.LEMONSQUEEZY_API_KEY;
    const storeId = process.env.LEMONSQUEEZY_STORE_ID || '502656';
    const variantId = process.env.LEMONSQUEEZY_VARIANT_ID || '2280326';

    if (apiKey) {
      try {
        const lsRes = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            Accept: 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
          },
          body: JSON.stringify({
            data: {
              type: 'checkouts',
              attributes: {
                custom_price: priceCents,
                product_options: {
                  name: productName,
                  description: productDescription,
                  redirect_url: redirectUrl,
                },
                checkout_data: {
                  email: email || undefined,
                  custom: {
                    industry: industrySlug || 'all',
                    plan: plan,
                  },
                },
              },
              relationships: {
                store: {
                  data: {
                    type: 'stores',
                    id: String(storeId),
                  },
                },
                variant: {
                  data: {
                    type: 'variants',
                    id: String(variantId),
                  },
                },
              },
            },
          }),
        });

        if (lsRes.ok) {
          const resJson = await lsRes.json();
          const checkoutUrl = resJson?.data?.attributes?.url;
          if (checkoutUrl) {
            return NextResponse.json({ url: checkoutUrl });
          }
        }
      } catch (e) {
        console.error('Dynamic LemonSqueezy session failed:', e);
      }
    }

    const fallbackUrl = `https://depositdemand.lemonsqueezy.com/checkout/buy/44ba076c-b57d-429b-af3d-6962ccf4dc46?checkout[custom][industry]=${industrySlug || 'all'}&checkout[custom][plan]=${plan}&checkout[success_url]=${encodeURIComponent(redirectUrl)}`;

    return NextResponse.json({ url: fallbackUrl });
  } catch (error) {
    console.error('Checkout API error:', error);
    return NextResponse.json({ error: 'Failed to process checkout' }, { status: 500 });
  }
}
