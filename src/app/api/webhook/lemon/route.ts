import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createDownloadToken } from '@/lib/downloadAuth';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-signature') || '';
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || process.env.LEMON_WEBHOOK_SECRET;

    // Strict HMAC-SHA256 signature verification if secret is provided
    if (secret) {
      const hmac = crypto.createHmac('sha256', secret);
      const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
      const signatureBuffer = Buffer.from(signature, 'utf8');

      if (
        digest.length !== signatureBuffer.length ||
        !crypto.timingSafeEqual(digest, signatureBuffer)
      ) {
        console.error('Lemon Squeezy Webhook: Invalid HMAC signature');
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      }
    } else {
      console.warn('Lemon Squeezy Webhook: LEMONSQUEEZY_WEBHOOK_SECRET is not configured. Processing in test mode.');
    }

    interface WebhookPayload {
      meta?: {
        event_name?: string;
      };
      data?: {
        attributes?: {
          user_email?: string;
          customer_email?: string;
          user_name?: string;
          order_number?: string | number;
          identifier?: string;
          total_formatted?: string;
          urls?: {
            receipt?: string;
          };
          first_order_item?: {
            variant_name?: string;
            product_name?: string;
          };
        };
      };
    }

    let payload: WebhookPayload;
    try {
      payload = JSON.parse(rawBody) as WebhookPayload;
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    const eventName = payload?.meta?.event_name || 'unknown';
    console.log(`[LemonSqueezy Webhook] Received event: ${eventName}`);

    // Process order creation / completed payment
    if (eventName === 'order_created') {
      const attributes = payload?.data?.attributes || {};
      const customerEmail = attributes.user_email || attributes.customer_email;
      const customerName = attributes.user_name || 'Valued Customer';
      const orderNumber = attributes.order_number || attributes.identifier || '';
      const totalFormatted = attributes.total_formatted || '$9.90';
      const receiptUrl = attributes.urls?.receipt || '';
      const productName = attributes.first_order_item?.variant_name || attributes.first_order_item?.product_name || 'Standard Operating Procedures (SOP) & Policy Manual';

      // Generate a secure 30-day HMAC download token for instant customer fulfillment
      const downloadToken = createDownloadToken('opsmanual_download', 720);

      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://opsmanual-pro.vercel.app';
      const accessUrl = `${baseUrl}/success?order=${orderNumber}&token=${encodeURIComponent(downloadToken)}`;

      // Automated email delivery via Resend API
      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey && customerEmail) {
        try {
          const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your Standard Operating Procedures (SOP) & Policy Manual Is Ready</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
    .content { padding: 32px 24px; }
    .btn { display: inline-block; background-color: #2563eb; color: #ffffff !important; font-weight: 700; font-size: 15px; padding: 14px 28px; border-radius: 10px; text-decoration: none; margin: 20px 0; }
    .info-box { background: #f1f5f9; border-radius: 8px; padding: 16px; margin: 20px 0; font-size: 13px; line-height: 1.5; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Order Confirmed</h1>
      <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">Order #${orderNumber} • ${totalFormatted}</p>
    </div>
    <div class="content">
      <p>Hello <strong>${customerName}</strong>,</p>
      <p>Thank you for purchasing <strong>${productName}</strong>. Your complete industry-specific Standard Operating Procedures and Employee Handbook are ready for instant download in editable Word (.docx) format.</p>
      
      <div style="text-align: center;">
        <a href="${accessUrl}" class="btn">Download Editable Manual (.DOCX)</a>
      </div>

      <div class="info-box">
        <strong>Getting Started Instructions:</strong>
        <ul style="margin: 8px 0 0; padding-left: 20px;">
          <li>Open the .docx file in Microsoft Word, Google Docs, or Apple Pages.</li>
          <li>Customize the placeholder brackets with your company name, logo, and policies.</li>
          <li>Distribute copies to onboarding team members or save as an official company PDF.</li>
          <li>Bookmark your download link for lifetime access to future manual updates.</li>
        </ul>
      </div>

      ${receiptUrl ? `<p style="font-size: 13px; color: #64748b;">Official Lemon Squeezy Receipt: <a href="${receiptUrl}" style="color: #2563eb;">View Receipt</a></p>` : ''}
    </div>
    <div class="footer">
      <p>OpsManual Pro • Enterprise SOP & Employee Handbook Suite • 256-Bit SSL Encrypted</p>
    </div>
  </div>
</body>
</html>
          `.trim();

          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: process.env.EMAIL_FROM || 'OpsManualPro Orders <orders@opsmanual-pro.com>',
              to: [customerEmail],
              subject: `Your Official Standard Operating Procedures (SOP) & Policy Manual is Ready (Order #${orderNumber})`,
              html: emailHtml,
            }),
          });

          if (!resendResponse.ok) {
            const errBody = await resendResponse.text();
            console.error('[LemonSqueezy Webhook] Resend delivery failed:', errBody);
          } else {
            console.log(`[LemonSqueezy Webhook] Document delivery email dispatched to ${customerEmail}`);
          }
        } catch (emailErr) {
          console.error('[LemonSqueezy Webhook] Error sending delivery email:', emailErr);
        }
      } else {
        console.log(`[LemonSqueezy Webhook] Order recorded for ${customerEmail}. RESEND_API_KEY not configured, skipping email.`);
      }
    }

    return NextResponse.json({
      received: true,
      event: eventName,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : 'Internal webhook error';
    console.error('[LemonSqueezy Webhook] Handler error:', error);
    return NextResponse.json(
      { error: errMessage },
      { status: 500 }
    );
  }
}
