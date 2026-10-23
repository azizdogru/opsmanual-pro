import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  Packer,
  Header,
  Footer,
  PageNumber,
} from 'docx';
import { IndustrySopKit } from '@/types';

export async function generateIndustryDocx(kit: IndustrySopKit): Promise<Uint8Array> {
  const primaryNavy = '0F172A';
  const slate600 = '475569';
  const emerald600 = '059669';

  const doc = new Document({
    creator: 'OpsManual Pro Enterprise Systems',
    title: `${kit.name} - Standard Operating Procedures & Employee Handbook`,
    description: `Official enterprise operations manual and employee handbook for ${kit.name}.`,
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440, // 1 inch
              bottom: 1440,
              left: 1440,
              right: 1440,
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: `${kit.name.toUpperCase()} • OPERATIONS MANUAL`,
                    size: 16,
                    color: slate600,
                    font: 'Calibri',
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: `Confidential - For Internal Operating Use Only • `,
                    size: 16,
                    color: slate600,
                    font: 'Calibri',
                  }),
                  new TextRun({
                    children: ['Page ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES],
                    size: 16,
                    color: slate600,
                    font: 'Calibri',
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          // Title Banner
          new Paragraph({
            spacing: { before: 240, after: 120 },
            children: [
              new TextRun({
                text: '[COMPANY NAME / LOGO HERE]',
                bold: true,
                size: 24,
                color: emerald600,
                font: 'Calibri',
              }),
            ],
          }),
          new Paragraph({
            heading: HeadingLevel.TITLE,
            spacing: { before: 120, after: 240 },
            children: [
              new TextRun({
                text: `${kit.name}\nStandard Operating Procedures & Employee Handbook`,
                bold: true,
                size: 40,
                color: primaryNavy,
                font: 'Calibri',
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 120, after: 360 },
            children: [
              new TextRun({
                text: `Standard Version 2026.1 | Compliance Certification: ${kit.standardBadge}`,
                italics: true,
                size: 20,
                color: slate600,
                font: 'Calibri',
              }),
            ],
          }),

          // Metadata Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Target Sector:', bold: true, size: 20 }),
                          new TextRun({ text: ` ${kit.name}`, size: 20 }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Classification:', bold: true, size: 20 }),
                          new TextRun({ text: ` ${kit.industry}`, size: 20 }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Standard SOP Modules:', bold: true, size: 20 }),
                          new TextRun({ text: ` ${kit.sopProcedureCount} Written Protocols`, size: 20 }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Avg. Onboarding Ramp:', bold: true, size: 20 }),
                          new TextRun({ text: ` Reduced by ${kit.averageOnboardingReductionDays} Days`, size: 20 }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          // Page Break to Content
          new Paragraph({
            spacing: { before: 480, after: 240 },
            pageBreakBefore: true,
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({
                text: 'PART I: EMPLOYEE HANDBOOK & WORKPLACE POLICIES',
                bold: true,
                size: 28,
                color: primaryNavy,
                font: 'Calibri',
              }),
            ],
          }),

          ...kit.handbookSections.flatMap((section) => [
            new Paragraph({
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 300, after: 120 },
              children: [
                new TextRun({
                  text: section.title,
                  bold: true,
                  size: 24,
                  color: primaryNavy,
                  font: 'Calibri',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60, after: 180 },
              children: [
                new TextRun({
                  text: section.summary,
                  italics: true,
                  size: 20,
                  color: slate600,
                  font: 'Calibri',
                }),
              ],
            }),
            ...section.policies.flatMap((policy) => [
              new Paragraph({
                spacing: { before: 120, after: 60 },
                children: [
                  new TextRun({
                    text: `• ${policy.name}`,
                    bold: true,
                    size: 21,
                    color: primaryNavy,
                    font: 'Calibri',
                  }),
                ],
              }),
              new Paragraph({
                spacing: { before: 0, after: 60 },
                indent: { left: 360 },
                children: [
                  new TextRun({
                    text: policy.description,
                    size: 20,
                    font: 'Calibri',
                  }),
                ],
              }),
              new Paragraph({
                spacing: { before: 0, after: 180 },
                indent: { left: 360 },
                children: [
                  new TextRun({
                    text: `Mandatory Standard: `,
                    bold: true,
                    size: 19,
                    color: emerald600,
                    font: 'Calibri',
                  }),
                  new TextRun({
                    text: policy.rule,
                    italics: true,
                    size: 19,
                    color: slate600,
                    font: 'Calibri',
                  }),
                ],
              }),
            ]),
          ]),

          // Part 2: Featured SOPs
          new Paragraph({
            spacing: { before: 480, after: 240 },
            pageBreakBefore: true,
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({
                text: 'PART II: STANDARD OPERATING PROCEDURES (SOP) EXECUTION GUIDES',
                bold: true,
                size: 28,
                color: primaryNavy,
                font: 'Calibri',
              }),
            ],
          }),

          ...kit.featuredSops.flatMap((sop) => [
            new Paragraph({
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 300, after: 60 },
              children: [
                new TextRun({
                  text: `[${sop.code}] ${sop.title}`,
                  bold: true,
                  size: 24,
                  color: primaryNavy,
                  font: 'Calibri',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60, after: 120 },
              children: [
                new TextRun({
                  text: `Department: ${sop.department} | Frequency: ${sop.frequency} | Responsibility: ${sop.responsibility}`,
                  bold: true,
                  size: 18,
                  color: emerald600,
                  font: 'Calibri',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60, after: 120 },
              children: [
                new TextRun({
                  text: `Objective: `,
                  bold: true,
                  size: 20,
                  color: primaryNavy,
                  font: 'Calibri',
                }),
                new TextRun({
                  text: sop.objective,
                  size: 20,
                  font: 'Calibri',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60, after: 60 },
              children: [
                new TextRun({
                  text: 'Standard Step-by-Step Procedure:',
                  bold: true,
                  size: 20,
                  font: 'Calibri',
                }),
              ],
            }),
            ...sop.steps.map(
              (step, sIdx) =>
                new Paragraph({
                  spacing: { before: 30, after: 30 },
                  indent: { left: 360 },
                  children: [
                    new TextRun({
                      text: `${sIdx + 1}. `,
                      bold: true,
                      size: 20,
                      color: emerald600,
                      font: 'Calibri',
                    }),
                    new TextRun({
                      text: step,
                      size: 20,
                      font: 'Calibri',
                    }),
                  ],
                })
            ),
            new Paragraph({
              spacing: { before: 120, after: 240 },
              children: [
                new TextRun({
                  text: `Safety & Compliance Requirement: ${sop.safetyOrComplianceNote || 'Ensure all standard PPE and federal workplace regulations are maintained during procedure.'}`,
                  italics: true,
                  size: 18,
                  color: slate600,
                  font: 'Calibri',
                }),
              ],
            }),
          ]),

          // Part 3: Operational Checklists
          new Paragraph({
            spacing: { before: 480, after: 240 },
            pageBreakBefore: true,
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({
                text: 'PART III: DAILY AUDIT PUNCHLISTS & OPERATIONAL LOGS',
                bold: true,
                size: 28,
                color: primaryNavy,
                font: 'Calibri',
              }),
            ],
          }),

          ...kit.dailyChecklists.flatMap((chk) => [
            new Paragraph({
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 240, after: 60 },
              children: [
                new TextRun({
                  text: `${chk.name} (${chk.timeframe})`,
                  bold: true,
                  size: 22,
                  color: primaryNavy,
                  font: 'Calibri',
                }),
              ],
            }),
            ...chk.items.map(
              (item) =>
                new Paragraph({
                  spacing: { before: 40, after: 40 },
                  indent: { left: 360 },
                  children: [
                    new TextRun({
                      text: '[  ]  ',
                      bold: true,
                      size: 20,
                      color: emerald600,
                      font: 'Calibri',
                    }),
                    new TextRun({
                      text: item,
                      size: 20,
                      font: 'Calibri',
                    }),
                  ],
                })
            ),
          ]),

          // Employee Sign-off Page
          new Paragraph({
            spacing: { before: 480, after: 240 },
            pageBreakBefore: true,
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({
                text: 'EMPLOYEE ACKNOWLEDGMENT & SIGN-OFF FORM',
                bold: true,
                size: 28,
                color: primaryNavy,
                font: 'Calibri',
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 120, after: 240 },
            children: [
              new TextRun({
                text: 'I acknowledge that I have received, reviewed, and agree to abide by the policies, safety standards, and Standard Operating Procedures (SOPs) set forth in this operations manual. I understand that my employment remains at-will and that failure to adhere to these operating standards may result in corrective coaching up to and including termination of employment.',
                size: 20,
                font: 'Calibri',
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 360, after: 120 },
            children: [
              new TextRun({
                text: '___________________________________________________        __________________',
                bold: true,
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 240 },
            children: [
              new TextRun({
                text: 'Employee Printed Full Name & Signature                                        Date Signed',
                size: 18,
                color: slate600,
              }),
            ],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  return new Uint8Array(buffer);
}
