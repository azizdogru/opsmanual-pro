import { NextResponse } from 'next/server';
import { INDUSTRY_MAP } from '@/data/industries';
import { generateIndustryDocx } from '@/lib/docxGenerator';
import { verifyDownloadToken } from '@/lib/downloadAuth';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('industry');
    const token = searchParams.get('token');
    const order = searchParams.get('order') || searchParams.get('order_id') || searchParams.get('checkout_id');

    const isValidToken = verifyDownloadToken(token, 'opsmanual_download');
    const isValidOrder = Boolean(order && order.length >= 3);

    if (!isValidToken && !isValidOrder) {
      return NextResponse.json(
        { error: 'Valid purchase token required to download standard operating procedure manual' },
        { status: 403 }
      );
    }

    if (!slug || !INDUSTRY_MAP[slug]) {
      return NextResponse.json(
        { error: 'Valid industry slug is required' },
        { status: 400 }
      );
    }

    const kit = INDUSTRY_MAP[slug];
    const buffer = await generateIndustryDocx(kit);

    const safeFilename = `${kit.slug}-employee-handbook-sop-manual.docx`;

    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: {
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="${safeFilename}"`,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Word Docx generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate Word document' },
      { status: 500 }
    );
  }
}
