import { jsPDF } from 'jspdf';
import { IndustrySopKit } from '@/types';

export function generateSopAuditPdf(kit: IndustrySopKit): Uint8Array {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 36;
  const contentWidth = pageWidth - margin * 2;

  // Header Banner - Navy Dark
  doc.setFillColor(15, 23, 42); // #0F172A
  doc.rect(0, 0, pageWidth, 75, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('OFFICIAL DAILY OPERATIONAL & COMPLIANCE PUNCHLIST', margin, 32);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184); // Slate 400
  doc.text(
    `Enterprise SOP Audit & Quality Control System | Standard: ${kit.standardBadge}`,
    margin,
    47
  );
  doc.text(
    `Operational Framework for: ${kit.name} (${kit.industry})`,
    margin,
    60
  );

  let y = 95;

  // Sector Overview Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, contentWidth, 55, 4, 4, 'FD');

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('SHIFT SUPERVISOR VERIFICATION & DUTY INSTRUCTIONS', margin + 12, y + 16);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text(
    'This checklist must be physically initialed and archived on the facility clipboard or operational binder at shift end.',
    margin + 12,
    y + 30
  );
  doc.text(
    `Audited Department: ${kit.name} Operations  |  Expected Failure Escalation Window: Under 15 Minutes`,
    margin + 12,
    y + 44
  );

  y += 70;

  // Daily Checklists
  kit.dailyChecklists.forEach((chk) => {
    // Header for Checklist
    doc.setFillColor(30, 41, 59); // Slate 800
    doc.rect(margin, y, contentWidth, 20, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(`${chk.name.toUpperCase()} (${chk.timeframe})`, margin + 8, y + 14);

    y += 26;

    chk.items.forEach((item) => {
      // Checkbox
      doc.setDrawColor(16, 185, 129); // Emerald 500
      doc.setLineWidth(1);
      doc.rect(margin + 6, y - 8, 9, 9, 'D');

      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);

      const splitText = doc.splitTextToSize(item, contentWidth - 30);
      doc.text(splitText, margin + 22, y);
      y += splitText.length * 11 + 4;
    });

    y += 10;
  });

  // Featured SOP Quick-Reference
  if (kit.featuredSops.length > 0) {
    const primarySop = kit.featuredSops[0];
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(margin, y, contentWidth, 140, 4, 4, 'FD');

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(
      `MANDATORY DAILY PROCEDURE: [${primarySop.code}] ${primarySop.title}`,
      margin + 12,
      y + 18
    );

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(
      `Responsibility: ${primarySop.responsibility}  |  Objective: ${primarySop.objective}`,
      margin + 12,
      y + 32
    );

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    let stepY = y + 46;
    primarySop.steps.slice(0, 5).forEach((step, sIdx) => {
      doc.setTextColor(16, 185, 129);
      doc.text(`${sIdx + 1}.`, margin + 12, stepY);
      doc.setTextColor(15, 23, 42);
      const splitStep = doc.splitTextToSize(step, contentWidth - 45);
      doc.text(splitStep, margin + 26, stepY);
      stepY += splitStep.length * 10 + 2;
    });
  }

  // Sign-off row at bottom
  doc.setFillColor(248, 250, 252);
  doc.rect(0, 780, pageWidth, 62, 'F');
  doc.setDrawColor(148, 163, 184);
  doc.line(margin, 810, margin + 220, 810);
  doc.line(margin + 260, 810, margin + 420, 810);

  doc.setTextColor(100, 116, 139);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('Shift Manager Printed Name & Signature', margin, 822);
  doc.text('Date & Shift Audit Verification', margin + 260, 822);

  const arrayBuffer = doc.output('arraybuffer');
  return new Uint8Array(arrayBuffer);
}
