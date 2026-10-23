import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  Packer,
  Header,
  Footer,
  PageNumber,
  BorderStyle,
} from 'docx';
import { IndustrySopKit } from '@/types';

export async function generateIndustryDocx(kit: IndustrySopKit): Promise<Uint8Array> {
  const primaryNavy = '0F172A'; // Slate 900
  const secondaryNavy = '1E293B'; // Slate 800
  const slate600 = '475569';
  const slate400 = '94A3B8';
  const emerald600 = '059669';
  const amber700 = 'B45309';

  const doc = new Document({
    creator: 'OpsManual Pro Enterprise Systems',
    title: `${kit.name} - Operations Manual & Employee Handbook`,
    description: `Complete standard operating procedures and employment handbook for ${kit.name}.`,
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
                    text: `${kit.name.toUpperCase()} • OPERATIONS & COMPLIANCE MANUAL`,
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
          // ==========================================
          // COVER PAGE
          // ==========================================
          new Paragraph({
            spacing: { before: 240, after: 120 },
            children: [
              new TextRun({
                text: '[INSERT COMPANY LOGO / OPERATING ENTITY NAME HERE]',
                bold: true,
                size: 24,
                color: emerald600,
                font: 'Calibri',
              }),
            ],
          }),
          new Paragraph({
            heading: HeadingLevel.TITLE,
            spacing: { before: 180, after: 240 },
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
                text: `Standard Version 2026.1 • Regulatory Compliance: ${kit.standardBadge}`,
                italics: true,
                size: 20,
                color: slate600,
                font: 'Calibri',
              }),
            ],
          }),

          // Overview Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Industry Sector:', bold: true, size: 20 }),
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
                          new TextRun({ text: ` ${kit.sopProcedureCount} Articulated Protocols`, size: 20 }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Onboarding Ramp:', bold: true, size: 20 }),
                          new TextRun({ text: ` Reduced by ${kit.averageOnboardingReductionDays} Days`, size: 20 }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 360, after: 240 },
            children: [
              new TextRun({
                text: 'NOTICE OF CONFIDENTIALITY & PROPRIETARY RIGHTS:\nThe information, operating procedures, safety standards, and internal trade workflows detailed within this document are the exclusive proprietary property of the Company. Unauthorized reproduction, external distribution, or transmission of this manual in whole or in part without prior written consent from the executive managing officers is strictly prohibited and subject to legal prosecution under federal trade secret statutes.',
                italics: true,
                size: 18,
                color: slate600,
                font: 'Calibri',
              }),
            ],
          }),

          // ==========================================
          // PART I: STATUTORY EMPLOYEE HANDBOOK
          // ==========================================
          new Paragraph({
            pageBreakBefore: true,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 180 },
            children: [
              new TextRun({
                text: 'PART I: STATUTORY EMPLOYEE HANDBOOK & WORKPLACE POLICIES',
                bold: true,
                size: 28,
                color: primaryNavy,
                font: 'Calibri',
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 60, after: 240 },
            children: [
              new TextRun({
                text: 'The policies set forth herein establish the professional code of conduct, employment expectations, and statutory rights governing all personnel. Every employee is required to read, comprehend, and strictly abide by these provisions throughout the tenure of their employment.',
                size: 20,
                color: slate600,
                font: 'Calibri',
              }),
            ],
          }),

          ...kit.companyPolicies.flatMap((policy) => [
            new Paragraph({
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 300, after: 80 },
              children: [
                new TextRun({
                  text: `[${policy.code}] ${policy.name}`,
                  bold: true,
                  size: 24,
                  color: primaryNavy,
                  font: 'Calibri',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 0, after: 100 },
              children: [
                new TextRun({
                  text: `Category: ${policy.category}  |  Legal Reference: ${policy.statutoryLegalReference || 'Federal/State Standard'}`,
                  bold: true,
                  size: 18,
                  color: emerald600,
                  font: 'Calibri',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60, after: 60 },
              children: [
                new TextRun({ text: 'Policy Purpose & Objective: ', bold: true, size: 20 }),
                new TextRun({ text: policy.purpose, size: 20 }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60, after: 60 },
              children: [
                new TextRun({ text: 'Formal Policy Statement: ', bold: true, size: 20 }),
                new TextRun({ text: policy.policyStatement, size: 20 }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60, after: 240 },
              children: [
                new TextRun({ text: 'Operational Enforcement & Protocol: ', bold: true, size: 20, color: secondaryNavy }),
                new TextRun({ text: policy.enforcementProtocol, size: 20 }),
              ],
            }),
          ]),

          // ==========================================
          // PART II: COMPREHENSIVE SOPS
          // ==========================================
          new Paragraph({
            pageBreakBefore: true,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 180 },
            children: [
              new TextRun({
                text: 'PART II: STANDARD OPERATING PROCEDURES (SOP) EXECUTION REPOSITORY',
                bold: true,
                size: 28,
                color: primaryNavy,
                font: 'Calibri',
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 60, after: 240 },
            children: [
              new TextRun({
                text: 'The following procedures represent the authoritative, non-negotiable operational standards for all shift tasks, equipment handling, and safety routines. Each procedure outlines prerequisite materials, step-by-step actions, and measurable verification benchmarks.',
                size: 20,
                color: slate600,
                font: 'Calibri',
              }),
            ],
          }),

          ...kit.comprehensiveSops.flatMap((sop) => [
            new Paragraph({
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 320, after: 60 },
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
              spacing: { before: 0, after: 100 },
              children: [
                new TextRun({
                  text: `Department: ${sop.department}  |  Frequency: ${sop.frequency}  |  Accountable Role: ${sop.responsibility}`,
                  bold: true,
                  size: 18,
                  color: emerald600,
                  font: 'Calibri',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60, after: 60 },
              children: [
                new TextRun({ text: 'Core Objective: ', bold: true, size: 20 }),
                new TextRun({ text: sop.objective, size: 20 }),
              ],
            }),
            new Paragraph({
              spacing: { before: 80, after: 40 },
              children: [
                new TextRun({ text: 'Prerequisites & Tools Required:', bold: true, size: 20 }),
              ],
            }),
            ...sop.prerequisites.map(
              (pre) =>
                new Paragraph({
                  spacing: { before: 20, after: 20 },
                  indent: { left: 360 },
                  children: [
                    new TextRun({ text: '• ', bold: true, size: 20, color: emerald600 }),
                    new TextRun({ text: pre, size: 20 }),
                  ],
                })
            ),
            new Paragraph({
              spacing: { before: 100, after: 40 },
              children: [
                new TextRun({ text: 'Mandatory Execution Steps (Sequential):', bold: true, size: 20 }),
              ],
            }),
            ...sop.executionSteps.map(
              (step, idx) =>
                new Paragraph({
                  spacing: { before: 40, after: 40 },
                  indent: { left: 360 },
                  children: [
                    new TextRun({ text: `${idx + 1}. `, bold: true, size: 20, color: primaryNavy }),
                    new TextRun({ text: step, size: 20 }),
                  ],
                })
            ),
            new Paragraph({
              spacing: { before: 100, after: 60 },
              children: [
                new TextRun({ text: 'Verification & Quality Standard: ', bold: true, size: 20 }),
                new TextRun({ text: sop.verificationStandard, size: 20 }),
              ],
            }),
            new Paragraph({
              spacing: { before: 40, after: 240 },
              children: [
                new TextRun({ text: 'Regulatory & Compliance Mandate: ', bold: true, size: 18, color: amber700 }),
                new TextRun({ text: sop.regulatoryStandard, italics: true, size: 18, color: slate600 }),
              ],
            }),
          ]),

          // ==========================================
          // PART III: ONBOARDING ROADMAP (30-60-90)
          // ==========================================
          new Paragraph({
            pageBreakBefore: true,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 180 },
            children: [
              new TextRun({
                text: 'PART III: NEW HIRE 90-DAY ONBOARDING ROADMAP & MILESTONES',
                bold: true,
                size: 28,
                color: primaryNavy,
                font: 'Calibri',
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 60, after: 240 },
            children: [
              new TextRun({
                text: 'A structured progression framework transitioning incoming team members from day-one orientation into completely autonomous, high-performing operators within 90 days.',
                size: 20,
                color: slate600,
                font: 'Calibri',
              }),
            ],
          }),

          ...kit.onboardingRoadmap.flatMap((milestone) => [
            new Paragraph({
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 280, after: 60 },
              children: [
                new TextRun({
                  text: milestone.dayWindow,
                  bold: true,
                  size: 22,
                  color: primaryNavy,
                  font: 'Calibri',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 0, after: 80 },
              children: [
                new TextRun({ text: 'Learning Objective: ', bold: true, size: 20 }),
                new TextRun({ text: milestone.learningObjective, size: 20 }),
              ],
            }),
            new Paragraph({
              spacing: { before: 60, after: 40 },
              children: [
                new TextRun({ text: 'Key Operational Deliverables & Tasks:', bold: true, size: 20 }),
              ],
            }),
            ...milestone.deliverables.map(
              (del) =>
                new Paragraph({
                  spacing: { before: 20, after: 20 },
                  indent: { left: 360 },
                  children: [
                    new TextRun({ text: '[  ]  ', bold: true, size: 20, color: emerald600 }),
                    new TextRun({ text: del, size: 20 }),
                  ],
                })
            ),
            new Paragraph({
              spacing: { before: 60, after: 200 },
              children: [
                new TextRun({ text: 'Formal Evaluation Benchmark: ', bold: true, size: 19, color: secondaryNavy }),
                new TextRun({ text: milestone.evaluationCriterion, italics: true, size: 19, color: slate600 }),
              ],
            }),
          ]),

          // ==========================================
          // PART IV: DAILY SHIFT AUDIT CHECKLISTS
          // ==========================================
          new Paragraph({
            pageBreakBefore: true,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 180 },
            children: [
              new TextRun({
                text: 'PART IV: DAILY OPERATIONAL AUDIT PUNCHLISTS & LOGS',
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
              spacing: { before: 240, after: 40 },
              children: [
                new TextRun({
                  text: `${chk.name} (${chk.shiftTime})`,
                  bold: true,
                  size: 22,
                  color: primaryNavy,
                  font: 'Calibri',
                }),
              ],
            }),
            new Paragraph({
              spacing: { before: 0, after: 100 },
              children: [
                new TextRun({
                  text: `Accountable Role: ${chk.responsibleRole}`,
                  bold: true,
                  size: 18,
                  color: emerald600,
                  font: 'Calibri',
                }),
              ],
            }),
            ...chk.tasks.map(
              (task) =>
                new Paragraph({
                  spacing: { before: 30, after: 30 },
                  indent: { left: 360 },
                  children: [
                    new TextRun({ text: '[  ]  ', bold: true, size: 20, color: emerald600 }),
                    new TextRun({ text: task, size: 20 }),
                  ],
                })
            ),
          ]),

          // ==========================================
          // PART V: EMPLOYEE SIGN-OFF & LEGAL FORMS
          // ==========================================
          new Paragraph({
            pageBreakBefore: true,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 180 },
            children: [
              new TextRun({
                text: 'EMPLOYEE HANDBOOK & OPERATIONAL SOP ACKNOWLEDGMENT',
                bold: true,
                size: 28,
                color: primaryNavy,
                font: 'Calibri',
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 120, after: 200 },
            children: [
              new TextRun({
                text: 'I acknowledge that I have received, reviewed, and agree to abide by the policies, safety standards, and Standard Operating Procedures (SOPs) set forth in this comprehensive operations manual. I understand and acknowledge that my employment with the Company remains strictly at-will, meaning that either I or the Company may terminate my employment at any time, with or without cause or prior notice.',
                size: 20,
                font: 'Calibri',
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 60, after: 240 },
            children: [
              new TextRun({
                text: 'I further understand that non-compliance with any safety mandates, harassment policies, or operational standards established herein may result in progressive disciplinary action up to and including immediate termination of employment and forfeiture of voluntary separation privileges.',
                size: 20,
                font: 'Calibri',
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 360, after: 60 },
            children: [
              new TextRun({
                text: 'Employee Printed Full Legal Name:  __________________________________________________',
                bold: true,
                size: 20,
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 180, after: 60 },
            children: [
              new TextRun({
                text: 'Employee Signature:  ___________________________________   Date:  ____________________',
                bold: true,
                size: 20,
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 180, after: 60 },
            children: [
              new TextRun({
                text: 'General Manager Witnessing Signature:  ___________________   Date:  ____________________',
                bold: true,
                size: 20,
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
