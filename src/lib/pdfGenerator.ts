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
  doc.text('DAILY OPERATIONAL AUDIT & SHIFT VERIFICATION PUNCHLIST', margin, 32);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184);
  doc.text(
    `Official Facility Quality Standard: ${kit.standardBadge} | Form #AUDIT-${kit.slug.substring(0, 3).toUpperCase()}-2026`,
    margin,
    47
  );
  doc.text(
    `Operating Unit: ${kit.name} (${kit.industry})`,
    margin,
    60
  );

  let y = 92;

  // Shift Meta Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, contentWidth, 42, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Date of Shift: ____________________', margin + 12, y + 16);
  doc.text('Shift (Circle):   OPENING  /  MID-DAY  /  CLOSING', margin + 260, y + 16);
  doc.text('Lead Supervisor on Duty: ____________________________', margin + 12, y + 32);
  doc.text('Incident Log Number (if applicable): #____________', margin + 260, y + 32);

  y += 56;

  // Render Checklists
  kit.dailyChecklists.slice(0, 2).forEach((chk) => {
    doc.setFillColor(30, 41, 59); // Slate 800
    doc.rect(margin, y, contentWidth, 18, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(`${chk.name.toUpperCase()} (${chk.shiftTime})`, margin + 8, y + 13);
    y += 24;

    chk.tasks.forEach((task) => {
      // Checkbox
      doc.setDrawColor(16, 185, 129);
      doc.setLineWidth(1);
      doc.rect(margin + 6, y - 8, 9, 9, 'D');

      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);

      const splitText = doc.splitTextToSize(task, contentWidth - 85);
      doc.text(splitText, margin + 22, y);

      // Initial Box on Right
      doc.setDrawColor(203, 213, 225);
      doc.rect(margin + contentWidth - 55, y - 9, 50, 12, 'D');
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);
      doc.text('INITIALS', margin + contentWidth - 46, y);

      y += splitText.length * 11 + 4;
    });

    y += 10;
  });

  // Critical Escalation Banner
  y = 710;
  doc.setFillColor(254, 242, 242);
  doc.setDrawColor(248, 113, 113);
  doc.roundedRect(margin, y, contentWidth, 44, 3, 3, 'FD');

  doc.setTextColor(153, 27, 27);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('CRITICAL SAFETY & REFRIGERATION ESCALATION THRESHOLDS:', margin + 10, y + 15);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(185, 28, 28);
  doc.text(
    'Any walk-in refrigeration temperature reading above 40°F (4.4°C) or hot holding unit below 140°F (60°C) must be',
    margin + 10,
    y + 27
  );
  doc.text(
    'reported to General Management within 15 minutes. Immediate corrective action log entry is legally required.',
    margin + 10,
    y + 37
  );

  // Signatures Bottom Box
  y = 765;
  doc.setDrawColor(148, 163, 184);
  doc.line(margin + 10, y + 30, margin + 220, y + 30);
  doc.line(margin + 280, y + 30, margin + 460, y + 30);

  doc.setTextColor(100, 116, 139);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.text('Shift Manager Verification Signature & Date', margin + 10, y + 42);
  doc.text('General Manager Audit Review & Filing', margin + 280, y + 42);

  // ==========================================
  // PAGE 2: EQUIPMENT & TEMPERATURE AUDIT LOG
  // ==========================================
  doc.addPage();

  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 55, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('SECTION II: HACCP TEMPERATURE & EQUIPMENT LOGBOOK', margin, 32);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('Daily Cold Chain, Chemical Sanitizer Concentration & Critical Control Point (CCP) Log', margin, 46);

  y = 75;

  // Temperature Grid Table
  const renderLogTable = () => {
    const tableHeaders = ['Unit / Equipment Name', 'Target Standard', '09:00 AM', '02:00 PM', '09:00 PM', 'Action Taken'];
    const colWidths = [150, 95, 65, 65, 65, 95];

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

    const sampleRows = [
      ['Walk-in Cooler #1 (Proteins)', '< 38°F (3.3°C)'],
      ['Walk-in Cooler #2 (Produce/Dairy)', '< 38°F (3.3°C)'],
      ['Main Walk-in Freezer', '< 0°F (-18°C)'],
      ['Line Cook Reach-in Rail #1', '34°F - 38°F'],
      ['Line Cook Reach-in Rail #2', '34°F - 38°F'],
      ['Steam Table Soup Well (Hot Hold)', '> 140°F (60°C)'],
      ['Deep Fryer Left Bank', '350°F ± 5°F'],
      ['Deep Fryer Right Bank', '350°F ± 5°F'],
      ['3-Compartment Sink (Sink 1 Wash)', '> 110°F (43.3°C)'],
      ['3-Compartment Sink (Sink 3 Quat)', '200 - 400 ppm'],
      ['Commercial Dishmachine Wash Cycle', '> 160°F (Wash)'],
      ['Commercial Dishmachine Final Rinse', '> 180°F (Sanitize)'],
    ];

    sampleRows.forEach((row, rIdx) => {
      doc.setFillColor(rIdx % 2 === 1 ? 248 : 255, rIdx % 2 === 1 ? 250 : 255, rIdx % 2 === 1 ? 252 : 255);
      doc.rect(margin, y, contentWidth, 22, 'F');
      doc.setDrawColor(226, 232, 240);
      doc.rect(margin, y, contentWidth, 22, 'D');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(15, 23, 42);
      doc.text(row[0], margin + 4, y + 14);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139);
      doc.text(row[1], margin + 154, y + 14);

      // Grid dividers
      let divX = margin + 150;
      colWidths.slice(1).forEach((w) => {
        doc.line(divX, y, divX, y + 22);
        divX += w;
      });

      y += 22;
    });
  };

  renderLogTable();

  // Closing Sign-off Page 2
  y = 760;
  doc.setFillColor(248, 250, 252);
  doc.rect(0, y, pageWidth, 82, 'F');
  doc.setTextColor(100, 116, 139);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.text(
    'OpsManual Pro Quality Assurance System | Page 2 of 2 | Regulated under federal FDA & OSHA Standards',
    margin,
    y + 20
  );
  doc.text(
    'This daily compliance logbook must be retained on premises for a minimum of 90 calendar days for statutory audits.',
    margin,
    y + 32
  );

  const arrayBuffer = doc.output('arraybuffer');
  return new Uint8Array(arrayBuffer);
}
