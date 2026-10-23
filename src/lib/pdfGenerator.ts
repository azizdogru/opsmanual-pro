import { jsPDF } from 'jspdf';
import { IndustrySopKit } from '@/types';

export function generateSopAuditPdf(kit: IndustrySopKit): Uint8Array {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 32;
  const contentWidth = pageWidth - margin * 2;

  // ==========================================
  // PAGE 1: DAILY SHIFT AUDIT & QUALITY CONTROL
  // ==========================================
  doc.setFillColor(15, 23, 42); // Slate 900
  doc.rect(0, 0, pageWidth, 75, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('DAILY OPERATIONAL AUDIT & SHIFT VERIFICATION PUNCHLIST', margin, 30);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text(
    `Regulatory Compliance Standard: ${kit.standardBadge} | Form #AUDIT-${kit.slug.substring(0, 4).toUpperCase()}-2026`,
    margin,
    46
  );
  doc.text(
    `Operating Facility: ${kit.name} (${kit.industry})`,
    margin,
    59
  );

  let y = 90;

  // Shift Meta Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, contentWidth, 42, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Date of Shift: ____________________', margin + 12, y + 16);
  doc.text('Shift Cadence:   [  ] OPENING     [  ] MID-DAY     [  ] CLOSING', margin + 240, y + 16);
  doc.text('Accountable Supervisor on Duty: ____________________________', margin + 12, y + 32);
  doc.text('Facility Audit Status:   [  ] 100% PASS     [  ] ESCALATED', margin + 240, y + 32);

  y += 54;

  // Render Checklists
  kit.dailyChecklists.slice(0, 3).forEach((chk) => {
    doc.setFillColor(30, 41, 59); // Slate 800
    doc.rect(margin, y, contentWidth, 18, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(`${chk.name.toUpperCase()} (${chk.shiftTime}) — Role: ${chk.responsibleRole}`, margin + 8, y + 12);
    y += 22;

    chk.tasks.forEach((task) => {
      // Clean Checkbox
      doc.setDrawColor(16, 185, 129);
      doc.setLineWidth(1.2);
      doc.rect(margin + 6, y - 7, 9, 9, 'D');

      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);

      const splitText = doc.splitTextToSize(task, contentWidth - 30);
      doc.text(splitText, margin + 22, y);

      y += splitText.length * 10.5 + 4;
    });

    y += 6;
  });

  // Critical Escalation Banner (Dynamic per industry)
  y = 705;
  doc.setFillColor(254, 242, 242);
  doc.setDrawColor(248, 113, 113);
  doc.roundedRect(margin, y, contentWidth, 44, 3, 3, 'FD');

  doc.setTextColor(153, 27, 27);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text(`CRITICAL STATUTORY COMPLIANCE & ESCALATION PROTOCOL:`, margin + 10, y + 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(185, 28, 28);
  doc.text(
    `Any non-conformance, security event, or protocol violation under ${kit.standardBadge} must be immediately`,
    margin + 10,
    y + 26
  );
  doc.text(
    `escalated to senior leadership. Formal incident triage and corrective action logging is required within 60 minutes.`,
    margin + 10,
    y + 36
  );

  // Signatures Bottom Box
  y = 760;
  doc.setDrawColor(148, 163, 184);
  doc.line(margin + 10, y + 26, margin + 220, y + 26);
  doc.line(margin + 280, y + 26, margin + 490, y + 26);

  doc.setTextColor(100, 116, 139);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.text('Shift Supervisor Verification Signature & Timestamp', margin + 10, y + 37);
  doc.text('General Manager Audit Review & Formal Compliance Archive', margin + 280, y + 37);

  // ==========================================
  // PAGE 2: SECTOR-SPECIFIC SOP VERIFICATION LOGBOOK
  // ==========================================
  doc.addPage();

  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 60, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('SECTION II: OPERATIONAL SOP VERIFICATION & QUALITY AUDIT LOGBOOK', margin, 28);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text(
    `Facility: ${kit.name} | Standard: ${kit.standardBadge}`,
    margin,
    44
  );
  doc.text(
    'Daily verification matrix for primary standard operating procedures and mandatory compliance checkpoints.',
    margin,
    54
  );

  y = 76;

  // Dynamic Table Headers
  const tableHeaders = ['SOP / Protocol', 'Accountable Role', 'Verification Standard', 'Compliance Mandate', 'Status'];
  const colWidths = [140, 95, 145, 100, 51];

  let startX = margin;
  doc.setFillColor(30, 41, 59);
  doc.rect(margin, y, contentWidth, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);

  tableHeaders.forEach((h, i) => {
    doc.text(h, startX + 4, y + 13);
    startX += colWidths[i];
  });

  y += 20;

  // Render Dynamic Rows from Comprehensive SOPs
  kit.comprehensiveSops.slice(0, 10).forEach((sop, rIdx) => {
    const rowHeight = 36;
    doc.setFillColor(rIdx % 2 === 1 ? 248 : 255, rIdx % 2 === 1 ? 250 : 255, rIdx % 2 === 1 ? 252 : 255);
    doc.rect(margin, y, contentWidth, rowHeight, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.rect(margin, y, contentWidth, rowHeight, 'D');

    // Col 1: Protocol
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(15, 23, 42);
    const titleLines = doc.splitTextToSize(sop.title.replace(`${kit.name} — `, ''), colWidths[0] - 8);
    doc.text(titleLines.slice(0, 2), margin + 4, y + 12);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`[${sop.code}] ${sop.department}`, margin + 4, y + 28);

    // Col 2: Role
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(51, 65, 85);
    const roleLines = doc.splitTextToSize(sop.responsibility, colWidths[1] - 8);
    doc.text(roleLines.slice(0, 2), margin + colWidths[0] + 4, y + 14);

    // Col 3: Verification Standard
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(15, 23, 42);
    const verLines = doc.splitTextToSize(sop.verificationStandard, colWidths[2] - 8);
    doc.text(verLines.slice(0, 3), margin + colWidths[0] + colWidths[1] + 4, y + 11);

    // Col 4: Regulatory Standard
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(6.5);
    doc.setTextColor(180, 83, 9);
    const regLines = doc.splitTextToSize(sop.regulatoryStandard, colWidths[3] - 8);
    doc.text(regLines.slice(0, 3), margin + colWidths[0] + colWidths[1] + colWidths[2] + 4, y + 11);

    // Col 5: Status
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(100, 116, 139);
    doc.text('[  ] PASS', margin + colWidths[0] + colWidths[1] + colWidths[2] + colWidths[3] + 4, y + 14);
    doc.text('[  ] AUDIT', margin + colWidths[0] + colWidths[1] + colWidths[2] + colWidths[3] + 4, y + 26);

    // Vertical Dividers
    let divX = margin + colWidths[0];
    colWidths.slice(1).forEach((w) => {
      doc.setDrawColor(226, 232, 240);
      doc.line(divX, y, divX, y + rowHeight);
      divX += w;
    });

    y += rowHeight;
  });

  // Closing Sign-off Page 2
  y = 760;
  doc.setFillColor(248, 250, 252);
  doc.rect(0, y, pageWidth, 82, 'F');
  doc.setTextColor(100, 116, 139);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.text(
    `OpsManual Pro Enterprise Quality Assurance | Page 2 of 2 | Regulated under: ${kit.standardBadge}`,
    margin,
    y + 20
  );
  doc.text(
    'This daily compliance verification logbook must be retained on file for a minimum of 90 calendar days for statutory audits.',
    margin,
    y + 32
  );

  const arrayBuffer = doc.output('arraybuffer');
  return new Uint8Array(arrayBuffer);
}
