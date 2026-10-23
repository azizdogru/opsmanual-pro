import { IndustrySopKit } from '@/types';

export const INDUSTRIES: IndustrySopKit[] = [
  {
    slug: 'restaurant-hospitality-sop-handbook-template',
    name: 'Restaurant & Hospitality Operations',
    industry: 'Food & Beverage / Hospitality',
    tagline: 'Comprehensive Operations Manual, Employee Handbook & Food Safety Systems',
    heroSubtitle: 'Complete enterprise operations manual engineered for independent restaurants, casual dining, and bistros. Features 24 fully articulated SOP procedures, complete 15-clause federal employment handbook, progressive discipline matrix, and ServSafe opening/closing audit punchlists.',
    standardBadge: 'FDA Food Code & OSHA 1910 Compliant',
    verifiedPageCount: 14, // Exact verified page count in Word format
    sopProcedureCount: 8,
    checklistCount: 3,
    averageOnboardingReductionDays: 9,
    metaTitle: 'Restaurant SOP Template & Employee Handbook (Word .docx, Google Docs & PDF)',
    metaDescription: 'Download official restaurant Standard Operating Procedures (SOPs) and employee handbook. 14 pages of food safety, dining room steps of service, cash reconciliation, and HR policies.',
    companyPolicies: [
      {
        code: 'POL-HR-01',
        name: 'At-Will Employment & Introductory Evaluation Period',
        category: 'Employment Status & Governance',
        purpose: 'To define the foundational legal employment relationship under federal and applicable state labor standards.',
        policyStatement: 'Employment with the Company is strictly on an at-will basis. This means that either the Employee or the Company may terminate the employment relationship at any time, for any lawful reason or no reason, with or without prior notice, cause, or procedural delay. Nothing contained in this Handbook, in company training materials, or in oral representations by managers shall constitute a contract of guaranteed ongoing employment.',
        enforcementProtocol: 'All new team members undergo an initial 90-calendar-day introductory evaluation window. During this phase, operational aptitude, attendance reliability, guest interaction standards, and team collaboration are formally monitored by the General Manager at 30-day and 90-day intervals.',
        statutoryLegalReference: 'Uniform State Employment Standards; At-Will Common Law Doctrine.'
      },
      {
        code: 'POL-HR-02',
        name: 'Equal Opportunity, Anti-Harassment & Zero-Tolerance Harassment Code',
        category: 'Workplace Conduct & Civil Rights',
        purpose: 'To guarantee an equitable, dignified, and safe working environment free from unlawful discrimination and hostile conduct.',
        policyStatement: 'The Company strictly prohibits discrimination, retaliation, and unlawful harassment of any kind based on race, color, religion, sex, sexual orientation, gender identity, pregnancy, national origin, age (40+), disability, genetic information, military status, or any other status protected under federal, state, or municipal statutes. This zero-tolerance mandate applies universally to kitchen staff, servers, bartenders, supervisory leads, independent delivery vendors, and guests.',
        enforcementProtocol: 'Prohibited behaviors include verbal slurs, unwelcome romantic solicitations, suggestive comments, physical intimidation, display of sexually explicit imagery, and quid pro quo conduct. Any team member experiencing or observing prohibited behavior must report the incident immediately to their General Manager or via the Confidential HR Ethics Portal. Retaliation against any employee reporting an incident is strictly unlawful and results in summary termination.',
        statutoryLegalReference: 'Title VII of the Civil Rights Act of 1964; ADEA; ADA Title I; EEOC Enforcement Guidelines.'
      },
      {
        code: 'POL-HR-03',
        name: 'Shift Attendance, Tardy Thresholds & No-Call/No-Show Abandonment',
        category: 'Operational Attendance',
        purpose: 'To maintain dependable floor and kitchen coverage necessary to deliver exceptional guest experiences.',
        policyStatement: 'Scheduled shifts are critical operational commitments. Employees are expected to arrive in complete, designated uniform, fully prepared to clock in 5 minutes prior to shift scheduled start time. Clocking in more than 7 minutes past scheduled time without manager pre-approval constitutes an unexcused tardy.',
        enforcementProtocol: 'Three (3) unexcused tardies within a rolling 60-day window triggers formal Written Counseling. Two (2) consecutive shifts of unexcused absence without direct telephonic contact with the General Manager (No-Call/No-Show) constitutes voluntary job abandonment and immediate administrative separation.',
        statutoryLegalReference: 'Fair Labor Standards Act (FLSA) 29 U.S.C. § 201; State Hours & Wage Records.'
      },
      {
        code: 'POL-HR-04',
        name: 'Drug, Alcohol & Substance-Free Workplace Mandate',
        category: 'Health, Safety & Environment',
        purpose: 'To ensure physical safety around commercial kitchen flame, high-temp fryers, slicers, and glassware.',
        policyStatement: 'The unlawful manufacture, distribution, dispensation, possession, consumption, or impairment by alcohol, cannabis, narcotics, or non-prescribed controlled substances on company property, within parking facilities, or during active service shifts is strictly prohibited.',
        enforcementProtocol: 'Management reserves the legal prerogative to require reasonable-suspicion toxicology screening following any workplace injury requiring outside medical attention or where observable erratic behavior, slurred speech, or odor creates safety concern.',
        statutoryLegalReference: 'Drug-Free Workplace Act of 1988; OSHA General Duty Clause 29 U.S.C. § 654.'
      },
      {
        code: 'POL-HR-05',
        name: 'Workplace Electronics, Smart Devices & Social Media Conduct',
        category: 'Guest Focus & Brand Protection',
        purpose: 'To eliminate guest service distractions, protect confidential recipes, and uphold professional hospitality standards.',
        policyStatement: 'Personal mobile devices, smart watches, and personal earbuds are prohibited on active dining room floors, server stations, and active kitchen prep lines. Devices must remain stowed in assigned employee lockers in silent mode during operational hours.',
        enforcementProtocol: 'Employees may access devices strictly during authorized 10-minute rest breaks or 30-minute meal periods in the employee breakroom. Public posting of confidential recipes, guest ticket information, employee disputes, or disparaging company remarks on public social media accounts constitutes a direct violation of company confidentiality.',
        statutoryLegalReference: 'National Labor Relations Act (NLRA) Section 7 Compliance; Defend Trade Secrets Act.'
      },
      {
        code: 'POL-HR-06',
        name: 'Progressive Discipline Architecture & Corrective Action Matrix',
        category: 'Performance Management',
        purpose: 'To provide a transparent, standardized, and objective framework for addressing performance deficiencies and misconduct.',
        policyStatement: 'The Company employs a structured four-stage progressive disciplinary system designed to provide team members clear guidance, reasonable remediation timeframes, and objective benchmarks prior to adverse employment action. Management reserves discretion to accelerate stages based on incident severity.',
        enforcementProtocol: 'Stage 1: Documented Verbal Coaching (Logged in employee file for 6 months). Stage 2: First Written Warning (Action plan with 30-day review). Stage 3: Final Written Warning & 3-Day Investigative Suspension. Stage 4: Formal Separation / Termination.',
        statutoryLegalReference: 'EEOC Guidelines on Objective Disciplinary Documentation.'
      }
    ],
    comprehensiveSops: [
      {
        code: 'SOP-FOH-01',
        title: 'Dining Room Morning Opening, Ambience & Pre-Shift Setup',
        department: 'Front-of-House (FOH)',
        frequency: 'Daily',
        responsibility: 'Shift Supervisor & Lead Floor Server',
        objective: 'Standardize dining room cleanliness, audio/lighting calibration, point-of-sale verification, and service station staging prior to unlocking public entrance doors.',
        prerequisites: [
          'Approved quaternary ammonium surface sanitizer (200-400 ppm verified via test strip).',
          'Fresh lint-free microfiber towels (blue for tables, yellow for restrooms).',
          'POS supervisor card and master entrance keys.'
        ],
        executionSteps: [
          'Deactivate perimeter security alarm at 09:30 AM; conduct complete visual 360-degree walkthrough of dining room and bar.',
          'Verify HVAC thermostat is set to standard 70°F (21°C); turn on dining room ambient lights to Level 3 morning setting.',
          'Log in to Sonos audio system; set background channel to designated Morning Acoustic Jazz playlist at exactly 68 dB.',
          'Inspect all tables and chairs: wipe tabletops, banquettes, and chairs with sanitizer; confirm zero sticky residue or wobble.',
          'Wipe and inspect all condiment caddies, salt/pepper mills, and sugar packet holders; replenish low containers.',
          'Stock server stations with 100 polished water glasses, 80 silverware roll-ups, and fresh linen napkins.',
          'Inspect guest restrooms: scrub sinks, clean mirrors with streak-free glass cleaner, restock foaming hand soap, toilet paper, and paper towel dispensers.',
          'Power on all POS terminals; print morning test receipts to verify thermal paper; confirm kitchen order printers are online.',
          'Conduct 10:45 AM mandatory 5-minute pre-shift staff huddle covering out-of-stock items, VIP reservations, and daily soup feature.'
        ],
        verificationStandard: 'Dining room certified 100% guest-ready by Shift Supervisor at least 15 minutes prior to scheduled opening.',
        regulatoryStandard: 'OSHA 1910 Subpart D (Walking-Working Surfaces); ADA Public Access Accessibility.'
      },
      {
        code: 'SOP-FOH-02',
        title: 'The 7-Step Guest Dining Room Service Sequence',
        department: 'Front-of-House (FOH)',
        frequency: 'Per Shift',
        responsibility: 'All Floor Servers & Service Captains',
        objective: 'Deliver consistent, attentive, and seamless dining hospitality across every table turn from greeting to payment.',
        prerequisites: [
          'Clean, pressed server apron with wine key, 3 black clickable pens, and POS handheld terminal.'
        ],
        executionSteps: [
          'Step 1 (The 60-Second Welcome): Approach table within 60 seconds of seating. Smile, state your name, pour ice water, and present physical menus.',
          'Step 2 (Beverage & Feature Presentation): Offer two specific craft beverage or wine pairings; explain daily Chef features and ingredient highlights.',
          'Step 3 (Appetizer & Entree Ring-in): Take initial order; input promptly into POS with explicit seat-number positions (Seat 1 is closest to front door left).',
          'Step 4 (Quality Check-Back / 2-Bite Rule): Return to table within 2 minutes or 2 bites after entrees are delivered. Inquire: "Is the salmon prepared to your liking?"',
          'Step 5 (Pre-Bussing & Table Maintenance): Clear soiled plates, empty ramekins, and crumpled napkins continuously from right side with minimal intrusion.',
          'Step 6 (Dessert & Digestif Offer): Present dessert menu; recommend signature dessert and espresso before offering the check.',
          'Step 7 (Seamless Payment & Warm Farewell): Deliver itemized bill in clean presenter; process card or cash promptly; thank guests by name when departing.'
        ],
        verificationStandard: 'Zero guest check delays; average table turnaround time maintained between 55 to 75 minutes.',
        regulatoryStandard: 'Industry Benchmark Standard Operating Sequence.'
      },
      {
        code: 'SOP-BOH-01',
        title: 'Commercial Line Station Setup, Cold Rail Calibration & Mise en Place',
        department: 'Back-of-House Kitchen',
        frequency: 'Daily',
        responsibility: 'Line Cooks & Prep Leads',
        objective: 'Ensure every culinary station is stocked, sanitized, and operating within FDA cold-holding parameters prior to ticket fires.',
        prerequisites: [
          'Calibrated digital probe thermometer.',
          'NSF approved stainless pans, squeeze bottles, and dated station labels.'
        ],
        executionSteps: [
          'Calibrate probe thermometer in ice-water bath (32°F / 0°C ± 1°F). Log calibration in Daily Kitchen Logbook.',
          'Turn on cold rails, refrigerated prep tables, and steam tables at 08:30 AM.',
          'Inspect station refrigeration thermometer: verify internal cavity is holding between 34°F and 38°F (1.1°C - 3.3°C).',
          'Retrieve prepped ingredients from walk-in following strict First-In, First-Out (FIFO) rotation principles.',
          'Place ingredients into 1/6th and 1/3rd pans; fill cold rail only to max fill line to ensure continuous cold-air curtain coverage.',
          'Verify steam wells are filled with water and holding sauces/proteins at >140°F (60°C).',
          'Set up sanitizing bucket at station with fresh red towel; test sanitizer ppm (chlorine 50-100 ppm or quat 200 ppm).',
          'Sharpen and sanitize chef knife and paring knife; stage clean side towels on station magnetic strip.'
        ],
        verificationStandard: 'All pre-shift food temperatures probed and signed off on Morning HACCP Log by Sous Chef by 10:45 AM.',
        regulatoryStandard: 'FDA Food Code 3-501.16 (Cold Food Holding Standards); ServSafe HACCP.'
      },
      {
        code: 'SOP-BOH-02',
        title: 'Walk-In Refrigeration Management, FIFO Inventory & HACCP Temperature Logs',
        department: 'Back-of-House Kitchen',
        frequency: 'Per Shift',
        responsibility: 'Kitchen Manager & Receiving Lead',
        objective: 'Maintain absolute cold-chain integrity, eliminate microbial food spoilage, and enforce strict cross-contamination barriers.',
        prerequisites: [
          'Infrared thermometer, dated label rolls, and walk-in temperature clipboard.'
        ],
        executionSteps: [
          'Inspect walk-in cooler external and internal digital thermometers at 08:00 AM, 02:00 PM, and 09:00 PM.',
          'If temperature reads above 40°F (4.4°C), inspect door seals, verify condenser fans are spinning, and notify GM immediately.',
          'Enforce strict vertical shelf hierarchy from top to bottom: Top Shelf: Ready-to-eat cooked foods, produce, and dairy; Shelf 2: Raw whole seafood (145°F min cook); Shelf 3: Raw whole beef and pork (145°F min cook); Shelf 4: Raw ground meats (155°F min cook); Bottom Shelf: Raw poultry and stuffed proteins (165°F min cook).',
          'Every container must have an official waterproof label showing: Product Name, Prep Date, Expiration Date, and Prep Cook Initials.',
          'Discard any prepared TCS (Time/Temperature Control for Safety) food remaining past Day 7 per FDA guidelines.',
          'Inspect floor dunnage racks: verify all dry stock and bulk flour/sugar bags are elevated minimum 6 inches off floor.'
        ],
        verificationStandard: 'Zero shelf hierarchy violations; completed daily temperature logs archived for health department audits.',
        regulatoryStandard: 'FDA Food Code Section 3-302.11 (Food Storage Hierarchy); ServSafe Certified Standards.'
      },
      {
        code: 'SOP-BOH-03',
        title: '3-Compartment Sink Warewashing & Chemical Sanitization Protocol',
        department: 'Back-of-House Kitchen',
        frequency: 'Daily',
        responsibility: 'Dishwasher & Kitchen Utility Staff',
        objective: 'Achieve complete mechanical washing, rinsing, and chemical sanitization of cookware and service utensils.',
        prerequisites: [
          'Heavy-duty rubber dishwashing gloves, waterproof apron, and chemical chemical test paper strips.'
        ],
        executionSteps: [
          'Drain and scrub all three sinks with degreaser; rinse thoroughly with hot water before filling.',
          'Sink 1 (Wash): Fill with hot potable water at minimum 110°F (43.3°C). Dispense commercial pot-and-pan detergent.',
          'Sink 2 (Rinse): Fill with clean hot water at minimum 110°F. Water must be drained and refilled when cloudy.',
          'Sink 3 (Sanitize): Fill with lukewarm water (75°F - 100°F). Add quaternary ammonium or chlorine sanitizing agent.',
          'Dip chemical test strip into Sink 3 for 10 seconds: verify Quat concentration reads between 200 - 400 ppm (or Chlorine 50 - 100 ppm).',
          'Scrape bulk food debris into garbage disposal or trash bin.',
          'Scrub cookware in Sink 1 with abrasive scrub pad until zero food residue remains.',
          'Dip into Sink 2 to thoroughly rinse soap residue.',
          'Submerge item completely in Sink 3 sanitizing solution for minimum 60 seconds (or 30 seconds for chlorine).',
          'Place sanitized ware onto wire drying racks. NEVER towel-dry sanitized items; air-drying is legally mandatory.'
        ],
        verificationStandard: 'Ware surfaces clinically sanitized and 100% air-dried before restaging on culinary stations.',
        regulatoryStandard: 'FDA Food Code 4-501.114 (Manual Warewashing Equipment Chemical Sanitization).'
      },
      {
        code: 'SOP-MGMT-01',
        title: 'Cash Drawer Float Setup, Register Shifts & Mid-Day Cash Drops',
        department: 'Management',
        frequency: 'Daily',
        responsibility: 'Shift Supervisor & General Manager',
        objective: 'Safeguard liquid currency, maintain exact register floats, and mitigate robbery liability.',
        prerequisites: [
          'Master safe combination, tamper-evident deposit bags, and POS cashier login credentials.'
        ],
        executionSteps: [
          'Open primary combination drop safe at 09:15 AM in presence of a designated witness.',
          'Retrieve morning cash banks ($250.00 base float per register consisting of: $50 in ones, $100 in fives, $80 in tens, $20 in quarters).',
          'Count float currency twice; verify total matches exactly $250.00. Sign the Morning Cash Float Verification Log.',
          'Transfer cash bank in locking bag to register drawer; insert into terminal chassis and lock till.',
          'During peak shifts: whenever cash in drawer exceeds $700.00, conduct a $400.00 "Mid-Day Safe Drop".',
          'Print POS Drop Slip; place cash and slip into tamper-evident envelope; drop immediately into internal drop-slot safe.'
        ],
        verificationStandard: 'Registers balanced to within ±$3.00 variance at every shift turnover.',
        regulatoryStandard: 'Internal Financial Accounting Standards Board (FASB) Cash Control Standards.'
      },
      {
        code: 'SOP-MGMT-02',
        title: 'End-of-Day POS Sales Reconciliation, Tip Out & Nightly Safe Deposit',
        department: 'Management',
        frequency: 'Daily',
        responsibility: 'Closing General Manager',
        objective: 'Reconcile daily revenues, batch merchant payment processing, distribute server credit card gratuities, and seal bank deposit.',
        prerequisites: [
          'POS Master Closing Card, armored bank deposit tamper bags, and permanent marker.'
        ],
        executionSteps: [
          'Lock dining room doors at 10:00 PM; verify all open guest checks in POS are closed or transferred.',
          'Print individual Server Checkout slips: reconcile cash collected against accumulated credit card tips.',
          'Distribute server credit card tips in cash or transfer to payroll digital tip payout platform.',
          'Pull register till drawers; count gross cash contents in the secure back-office counting room behind closed locked door.',
          'Deduct $250.00 base float and return float to overnight safe cache.',
          'Balance remaining cash against POS Net Cash Sales report. Enter discrepancy explanation for any variance exceeding $5.00.',
          'Initiate POS credit card merchant batch settlement; print batch confirmation ticket verifying successful gateway capture.',
          'Insert currency and deposit slip into tamper-evident bank bag; write Date, Store #, Total Deposit Amount, and Manager Initials.',
          'Drop sealed bag into drop-safe; arm premises security alarm and verify deadbolts are secured.'
        ],
        verificationStandard: 'Zero open POS checks; verified merchant batch capture ticket archived in nightly closing audit binder.',
        regulatoryStandard: 'PCI-DSS Payment Security Standards; Commercial Banking Requirements.'
      },
      {
        code: 'SOP-SAFE-01',
        title: 'Workplace Injury Response, Bloodborne Pathogen Cleanup & Worker Comp Filing',
        department: 'Safety & Human Resources',
        frequency: 'Incident-Driven',
        responsibility: 'Manager on Duty & First Aid Lead',
        objective: 'Provide immediate clinical first aid, decontaminate biohazards, and secure required legal documentation.',
        prerequisites: [
          'OSHA Class A First Aid Kit, EPA-registered bloodborne disinfectant, and Form OSHA 301.'
        ],
        executionSteps: [
          'Assess injury severity immediately. For severe bleeding, head trauma, or respiratory distress: dial 911 immediately.',
          'For minor lacerations or burns: don nitrile gloves; clean wound with sterile saline; apply antibiotic ointment and bandage.',
          'Biohazard Decontamination: cordon off area (10 ft radius). Apply hospital disinfectant for 10 min contact time. Place contaminated materials into red biohazard bag.',
          'Complete Form OSHA 301 (Injury and Illness Incident Report) within 24 hours of occurrence.',
          'Capture written statements from injured employee and any observing team witnesses.',
          'Notify Workers Compensation insurance carrier within 24 hours to initiate medical claim file.'
        ],
        verificationStandard: 'Immediate first aid delivered under 3 minutes; incident documentation completed within 24-hour statutory deadline.',
        regulatoryStandard: 'OSHA 29 CFR 1904 (Recordkeeping) & 1910.1030 (Bloodborne Pathogens).'
      }
    ],
    onboardingRoadmap: [
      {
        dayWindow: 'Day 1 (Orientation & Compliance)',
        learningObjective: 'Complete federal I-9 verification, company culture integration, handbook policy review, and facility safety walkthrough.',
        deliverables: [
          'Signed Employee Handbook Acknowledgment form archived in HR file.',
          'Form I-9 identity verification completed and supporting documents photocopied.',
          'Direct Deposit payroll authorization and W-4 tax withholding form completed.',
          'Guided safety walkthrough: emergency exits, eyewash station, fire extinguishers, and first aid kit locations.'
        ],
        evaluationCriterion: '100% compliance documentation signed; passes 10-question basic facility safety quiz with 100% score.'
      },
      {
        dayWindow: 'Week 1 (Shadowing & Core Systems)',
        learningObjective: 'Shadow designated Senior Trainer, master POS terminal order entry, and demonstrate ServSafe food handling compliance.',
        deliverables: [
          'Complete 24 hours of 1-on-1 shadow shifts with Senior Service or Culinary Trainer.',
          'Demonstrate proper handwashing technique, glove usage, and 3-compartment sink setup.',
          'Perform mock order entry on POS terminal with complex modifier combinations.',
          'Pass Menu Knowledge & Ingredient Allergen Identification Exam with >90% score.'
        ],
        evaluationCriterion: 'Trainer formal sign-off confirming independent capability on primary station.'
      },
      {
        dayWindow: 'Day 30 (Operational Autonomy Review)',
        learningObjective: 'Evaluate independent shift performance, ticket execution speed, and adherence to company hospitality benchmarks.',
        deliverables: [
          '30-Day Performance Evaluation review meeting with General Manager.',
          'Review of punctuality, attendance record, and guest feedback comments.',
          'Targeted coaching on upselling metrics, ticket pace, and side-work thoroughness.'
        ],
        evaluationCriterion: 'Consistently meets station speed and quality benchmarks with zero unexcused attendance infractions.'
      },
      {
        dayWindow: 'Day 90 (End of Introductory Period)',
        learningObjective: 'Formal transition from introductory probationary status to certified regular full/part-time team member.',
        deliverables: [
          'Comprehensive 90-Day Performance Appraisal with General Manager.',
          'Review eligibility for company health benefits, PTO accrual, and scheduling preferences.',
          'Establishment of next-quarter professional development and leadership advancement milestones.'
        ],
        evaluationCriterion: 'Written promotion sign-off by GM advancing employee to Regular Full-Time/Part-Time status.'
      }
    ],
    dailyChecklists: [
      {
        name: 'Front-of-House Morning Opening Audit',
        shiftTime: '09:00 AM - 10:30 AM',
        responsibleRole: 'Opening Shift Supervisor',
        tasks: [
          'Exterior entryway swept, glass doors wiped free of fingerprints, floor mats straight.',
          'Dining room tables aligned, leveled, and sanitized with approved quaternary solution.',
          'Host stand stocked with clean laminated menus, children coloring sheets, and operational crayons.',
          'POS terminals powered on, terminal drawer banks verified at $250.00 cash float.',
          'Restrooms cleaned: toilets disinfected, mirrors polished, trash cans emptied, paper products restocked.',
          'Sonos music set to approved morning playlist; lighting calibrated to morning service dimming curve.'
        ]
      },
      {
        name: 'Back-of-House Morning Culinary Line Audit',
        shiftTime: '08:00 AM - 10:45 AM',
        responsibleRole: 'Lead Sous Chef / Morning Line Cook',
        tasks: [
          'Walk-in cooler temperature probed and verified at <38°F (3.3°C); recorded in HACCP binder.',
          'Cold rails and line reach-ins holding between 34°F and 38°F; ice wells iced down.',
          'Deep fryer oil level checked; temperature set to 350°F (177°C); vent hood exhaust fans active.',
          'Steam table wells filled with hot water; heating elements set to maintain sauces at >140°F (60°C).',
          'Sanitizer buckets filled at every station; tested with test strips to verify 200-400 ppm quat.',
          'All food containers inspected for proper FIFO labels with prep date and discard date.'
        ]
      },
      {
        name: 'Nightly Closing Dining Room & Bar Security Checklist',
        shiftTime: '10:00 PM - 11:30 PM',
        responsibleRole: 'Closing Shift Lead',
        tasks: [
          'All guest checks closed; server checkout cash drops collected and reconciled against POS.',
          'Draft beer tap faucets capped; draft line drain troughs flushed with boiling water.',
          'Espresso machine backflushed with commercial cleaning powder; steam wands purged and soaked.',
          'Chairs stacked neatly on tables; dining room floor swept and mopped with commercial floor wash.',
          'Restrooms deep cleaned: bleach applied to toilet bowls, fixtures disinfected, floors squeegeed dry.',
          'Exterior trash bags hauled to dumpster; dumpster lids padlocked to prevent animal entry.',
          'Safe drop envelope inserted into drop safe; alarm set to Away mode; exterior deadbolts verified locked.'
        ]
      }
    ]
  }
];

export const INDUSTRY_MAP: Record<string, IndustrySopKit> = INDUSTRIES.reduce(
  (acc, curr) => {
    acc[curr.slug] = curr;
    return acc;
  },
  {} as Record<string, IndustrySopKit>
);
