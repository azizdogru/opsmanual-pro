import { NextResponse } from 'next/server';
import { INDUSTRY_MAP } from '@/data/industries';
import { generateSopAuditPdf } from '@/lib/pdfGenerator';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('industry');

    if (!slug || !INDUSTRY_MAP[slug]) {
      return NextResponse.json(
        { error: 'Valid industry slug is required' },
        { status: 400 }
      );
    }

    const kit = INDUSTRY_MAP[slug];
    const pdfBytes = generateSopAuditPdf(kit);

    const safeFilename = `${kit.slug}-daily-operations-punchlist.pdf`;

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${safeFilename}"`,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
