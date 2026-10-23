import { IndustrySopKit } from '@/types';

export const INDUSTRIES: IndustrySopKit[] = [
  {
    slug: 'restaurant-hospitality-sop-handbook-template',
    name: 'Restaurant & Hospitality Operations',
    industry: 'Food & Beverage / Hospitality',
    tagline: 'Complete Front-of-House, Back-of-House & ServSafe Food Safety Operations Manual',
    heroSubtitle: 'Turnkey 48-page operations kit for independent restaurants, bistros, and franchise dining. Includes line cook prep sheets, shift manager cash drops, server step-of-service, and FDA Food Code compliant sanitation SOPs.',
    standardBadge: 'FDA Food Code & OSHA 1910 Compliant',
    docPageCount: 52,
    sopProcedureCount: 38,
    checklistCount: 14,
    averageOnboardingReductionDays: 9,
    metaTitle: 'Restaurant SOP Template & Employee Handbook (Word, Notion, PDF) | Operations Manual',
    metaDescription: 'Download official restaurant Standard Operating Procedures (SOPs) and employee handbook. Includes opening/closing checklists, ServSafe standards, and server steps of service.',
    handbookSections: [
      {
        title: 'Section 1: Company Culture, Guest Experience & Core Values',
        summary: 'Sets the foundational hospitality benchmark for guest interactions and team expectations.',
        policies: [
          {
            name: 'The 60-Second Guest Acknowledgment Standard',
            description: 'Every seated guest must be greeted with ice water and bread within 60 seconds.',
            rule: 'Immediate eye contact, smile, and warm welcome regardless of shift volume.'
          },
          {
            name: 'At-Will Employment & Probational Onboarding',
            description: 'Clarifies legal employment classification under applicable state labor codes.',
            rule: '90-day introductory review period with documented milestone benchmarks.'
          },
          {
            name: 'Anti-Harassment, Equal Opportunity & Zero-Tolerance Code',
            description: 'Federal Title VII compliance protecting kitchen and floor team members.',
            rule: 'Direct reporting hotline to ownership; immediate suspension pending objective inquiry.'
          }
        ]
      },
      {
        title: 'Section 2: Kitchen Standards, Food Handling & Cross-Contamination',
        summary: 'Back-of-house operational protocols enforcing temperature controls and allergen management.',
        policies: [
          {
            name: 'HACCP Temperature Monitoring & Log Submission',
            description: 'Walk-in refrigeration must maintain below 38°F (3.3°C) at all operational hours.',
            rule: 'Logs checked at 09:00, 14:00, and 21:00; temperature violations reported to Kitchen Manager immediately.'
          },
          {
            name: 'Allergen Isolation & Dedicated Cookware Protocols',
            description: 'Strict separation for the Big 9 allergens (peanuts, tree nuts, dairy, gluten, shellfish, etc.).',
            rule: 'Purple cutting boards and sanitized saute pans must be utilized with ticket red-flagging.'
          },
          {
            name: 'Personal Hygiene & Glove Replacement Cadence',
            description: 'Hand washing mandatory between raw meat handling and ready-to-eat station transitions.',
            rule: 'Minimum 20-second scrub with hot water and anti-bacterial soap; single-use glove protocol.'
          }
        ]
      },
      {
        title: 'Section 3: Front-of-House (FOH) Steps of Service & Cash Control',
        summary: 'Standard operating steps for servers, bartenders, runners, and shift closing cashiers.',
        policies: [
          {
            name: 'The 7-Step Dining Room Service Sequence',
            description: 'Greet -> Drink Order -> Feature Presentation -> Entree Fire -> Two-Minute Check-Back -> Dessert -> Cash-out.',
            rule: 'Upselling craft cocktails and signature appetizers expected on every check.'
          },
          {
            name: 'Shift Drawer Reconciliation & Blind Drop Protocol',
            description: 'Ensures strict cash integrity and minimizes end-of-shift register discrepancies.',
            rule: 'Drawers counted blind; discrepancies over $5.00 require manager countersignature.'
          }
        ]
      }
    ],
    featuredSops: [
      {
        code: 'SOP-FOH-01',
        title: 'Dining Room Opening & Pre-Shift Setup Sequence',
        department: 'Front-of-House',
        frequency: 'Daily',
        responsibility: 'Shift Supervisor & Lead Server',
        objective: 'Ensure the front of house is pristine, stocked, and aligned prior to unlocking the front doors.',
        steps: [
          'Unlock main entrance at 10:00 AM; conduct complete visual inspection of dining area.',
          'Verify POS terminals are online, receipt paper is filled, and daily specials are updated.',
          'Wipe down all tabletops, banquettes, and bar surfaces with approved quaternary sanitizer.',
          'Fill and inspect condiment caddies, clean silverware roll-ups, and polish water glassware.',
          'Inspect restrooms: verify hand soap, paper towels, and toilet seat covers are fully replenished.',
          'Hold mandatory 5-minute pre-shift staff huddle covering out-of-stock items, VIP reservations, and daily target sales.'
        ],
        safetyOrComplianceNote: 'Ensure all emergency exit pathways and fire extinguishers remain unobstructed by furniture.'
      },
      {
        code: 'SOP-BOH-04',
        title: 'Nightly Deep Clean, Equipment Shutdown & Sanitization',
        department: 'Back-of-House Kitchen',
        frequency: 'Per Shift',
        responsibility: 'Closing Line Cooks & Dishwasher',
        objective: 'Eliminate bio-film, grease buildup, and cross-contamination hazards following service completion.',
        steps: [
          'Turn off deep fryers, flat-tops, ovens, and salamanders; engage ventilation hood fire interlocks.',
          'Filter fryer cooking oil through high-temp cone filters; dispose of expired oil in exterior grease trap.',
          'Scrape and scrub griddle surfaces using grill brick and high-temp food-grade oil.',
          'Disassemble slicers and food processors; wash in 3-compartment sink (Wash 110°F, Rinse, Sanitize 200ppm quat).',
          'Sweep and deck-brush entire kitchen floor with degreaser; squeegee into floor drains.',
          'Wrap, date-label, and store all perishable ingredients in walk-in according to FIFO hierarchy (Cooked on top, poultry on bottom).'
        ],
        safetyOrComplianceNote: 'Heavy-duty heat-resistant gloves and safety goggles required during fryer filtration.'
      },
      {
        code: 'SOP-MGMT-02',
        title: 'End-of-Day POS Sales Reconciliation & Safe Deposit',
        department: 'Management',
        frequency: 'Daily',
        responsibility: 'General Manager / Closing Shift Lead',
        objective: 'Safeguard daily revenues, reconcile server tips, and verify credit card batch settlement.',
        steps: [
          'Initiate POS End-of-Day batch closeout; confirm credit card gateway settlement status is successful.',
          'Print individual server checkout slips; collect cash owed from cash tables less accumulated credit card tips.',
          'Count register cash drawer bank ($300 float); place excess operational cash into bank deposit bag.',
          'Log total gross sales, discounts, comps, and employee meals in the Master Operations Spreadsheet.',
          'Seal tamper-evident deposit envelope; insert into under-counter drop safe.',
          'Arm security system, verify exterior delivery doors are deadbolted, and depart premises in pairs.'
        ]
      }
    ],
    dailyChecklists: [
      {
        name: 'Morning Opening Operational Audit (FOH & BOH)',
        timeframe: '08:00 AM - 10:30 AM',
        items: [
          'Verify walk-in cooler temp is 36°F - 38°F and freezer is 0°F or below.',
          'Turn on ice machine; verify clear ice production and sanitize scoop in holder.',
          'POS stations logged in, drawer float counted to exactly $300.00 cash.',
          'Music playlist set to approved morning tempo; dining room lights dimmed to standard ambiance.',
          'Pre-shift line checks complete: hot well holding at >140°F, cold rail <40°F.',
          'Dishwasher chemical sanitizing buckets tested with chlorine test strips (50-100 ppm).'
        ]
      },
      {
        name: 'Nightly Closing Security & Food Safety Checklist',
        timeframe: '10:00 PM - 11:30 PM',
        items: [
          'All cooking pilot lights and natural gas valves verified closed and off.',
          'Walk-in cooler curtains drawn shut and doors firmly latched.',
          'Trash compactors locked; outdoor dumpster lids secured to prevent pests.',
          'Draft beer tap lines capped; soda syrup nozzles soaked in hot soda water.',
          'Safe drop completed with dual-manager verification signature.',
          'Premises armed; motion detectors active and all external doors deadbolted.'
        ]
      }
    ]
  },
  {
    slug: 'boutique-gym-fitness-studio-sop-handbook-template',
    name: 'Boutique Gym & Fitness Studio Operations',
    industry: 'Health, Wellness & Fitness',
    tagline: 'Comprehensive Facility Cleanliness, Member Retention & Safety SOP Operations Kit',
    heroSubtitle: 'Turnkey 46-page operations kit designed for CrossFit boxes, Pilates studios, and commercial gyms. Features AED emergency response, trainer class choreography standards, biohazard sanitation, and auto-renew billing dispute resolution.',
    standardBadge: 'ACE/NASM Facility Standards & OSHA General Industry',
    docPageCount: 46,
    sopProcedureCount: 32,
    checklistCount: 12,
    averageOnboardingReductionDays: 7,
    metaTitle: 'Gym & Fitness Studio SOP Template & Employee Handbook (Word, Notion, PDF)',
    metaDescription: 'Download official gym Standard Operating Procedures (SOPs) and personal trainer employee handbook. Includes AED protocols, equipment maintenance, and member contract retention.',
    handbookSections: [
      {
        title: 'Section 1: Studio Ethos, Coach Standards & Client Experience',
        summary: 'Sets the energy, tone, and professional boundaries expected of certified trainers and desk staff.',
        policies: [
          {
            name: 'The 15-Minute Pre-Class Greeting Window',
            description: 'Trainers must be on the gym floor 15 minutes prior to class to greet athletes and assess injuries.',
            rule: 'No mobile phone usage on the training floor during active member workout sessions.'
          },
          {
            name: 'Client Boundaries, Physical Touch & Cuing Protocol',
            description: 'Enforces verbal-first movement corrections with explicit verbal consent for hands-on adjustments.',
            rule: 'Strict prohibition of personal romantic relationships between coaching staff and active direct clients.'
          }
        ]
      },
      {
        title: 'Section 2: Emergency Response, AED Deployment & Incident Reporting',
        summary: 'Critical liability mitigation protocols for cardiovascular distress, fainting, and severe joint injuries.',
        policies: [
          {
            name: 'Cardiac Arrest Response & AED Deployment Sequence',
            description: 'All coaches must hold current AHA or Red Cross CPR/AED certification.',
            rule: 'Call 911 immediately, assign bystander to guide ambulance, attach AED pads within 90 seconds.'
          },
          {
            name: 'Mandatory Incident Documentation Protocol',
            description: 'Any drop, tear, or loss of consciousness must be documented within 2 hours.',
            rule: 'Incident Form #GYM-102 completed with witness statements and video timestamp archives.'
          }
        ]
      }
    ],
    featuredSops: [
      {
        code: 'SOP-GYM-01',
        title: 'Daily Equipment Inspection & Cable/Carabiner Preventive Maintenance',
        department: 'Operations',
        frequency: 'Daily',
        responsibility: 'Opening Operations Lead',
        objective: 'Prevent catastrophic mechanical failure on cable crossovers, barbells, and cardio machinery.',
        steps: [
          'Inspect all braided steel cables on functional trainers for fraying, plastic sheath cracking, or ball-stop slipping.',
          'Test quick-release selector pins on plate stacks; confirm smooth magnetic engagement.',
          'Spin barbell sleeves to verify needle bearings are lubricated and free of chalk binding.',
          'Inspect treadmill emergency stop lanyards; pull lanyard during 3mph jog to confirm instantaneous cutoff.',
          'Spray and wipe kettlebells, dumbbells, and rubber bumper plates with hospital-grade disinfectant.',
          'Log any defective apparatus on the Maintenance Kanban board and affix high-visibility Out-of-Order yellow tag.'
        ],
        safetyOrComplianceNote: 'Any frayed cable must be immediately locked out with physical padlocks (Lockout/Tagout protocol).'
      },
      {
        code: 'SOP-GYM-05',
        title: 'Bloodborne Pathogens & Biohazard Surface Disinfection',
        department: 'Safety & Facility',
        frequency: 'Incident-Driven',
        responsibility: 'Any Certified Staff Member',
        objective: 'Safely remediate torn calluses, cuts, or bodily fluids in strict accordance with OSHA 29 CFR 1910.1030.',
        steps: [
          'Retrieve the Biohazard Emergency Spill Kit located beneath the front desk checkout counter.',
          'Don nitrile examination gloves and protective fluid-shield eye goggles.',
          'Cordon off the affected training station with red safety cones (minimum 10-foot perimeter).',
          'Spray area generously with EPA-registered virucidal disinfectant (minimum 10-minute wet dwell time).',
          'Wipe up fluid using disposable heavy absorbent paper towels; transfer towels into designated Red Biohazard Bag.',
          'Seal biohazard container; wash hands vigorously with warm antimicrobial soap for 30 seconds.'
        ]
      }
    ],
    dailyChecklists: [
      {
        name: 'Morning Studio Launch & Sound/Lighting Calibration',
        timeframe: '05:00 AM - 05:45 AM',
        items: [
          'Unlock facility exterior; disarm zone alarm.',
          'Calibrate Sonos sound matrix to 72dB ambient warm-up volume.',
          'Locker room inspection: verify shampoo, body wash, and clean towel pyramid replenishment.',
          'Barbell chalk bowls refilled; chalk dust vacuumed from rubber lifting platforms.',
          'Check-in iPads powered on and connected to Mindbody / Wodify booking kiosk mode.'
        ]
      }
    ]
  },
  {
    slug: 'medspa-aesthetic-clinic-sop-handbook-template',
    name: 'Medical Spa & Aesthetic Practice Operations',
    industry: 'Healthcare / Medical Aesthetics',
    tagline: 'Clinical Protocols, HIPAA Privacy, Injectables Management & Client Retention Kit',
    heroSubtitle: 'Comprehensive 54-page operations manual for cosmetic practices, laser clinics, and plastic surgery offices. Features Botox/filler inventory chain of custody, medical director oversight protocols, and HIPAA patient consent standards.',
    standardBadge: 'HIPAA & OSHA Healthcare Standard Compliant',
    docPageCount: 54,
    sopProcedureCount: 42,
    checklistCount: 16,
    averageOnboardingReductionDays: 12,
    metaTitle: 'Medical Spa SOP Template & Employee Handbook (Word, Notion, PDF)',
    metaDescription: 'Download official Medical Spa Standard Operating Procedures (SOPs) and aesthetic nurse employee handbook. Includes Botox inventory logs, HIPAA policies, and emergency protocols.',
    handbookSections: [
      {
        title: 'Section 1: Clinical Governance & Medical Director Delegations',
        summary: 'Defines physician oversight, mid-level provider scopes of practice, and emergency intervention protocols.',
        policies: [
          {
            name: 'Scope of Practice & Supervisory Standing Orders',
            description: 'All Nurse Practitioners and Registered Nurses must operate under signed standing medical protocols.',
            rule: 'No neurotoxin or dermal filler administration without completed Good Faith Exam (GFE) on record.'
          },
          {
            name: 'Vascular Occlusion & Hyaluronidase Emergency Protocol',
            description: 'Immediate mandatory response in the event of suspected intravascular injection of HA filler.',
            rule: 'Emergency crash kit kept fully stocked with 1,500 units of Hylenex, warm compresses, and oral ASA.'
          }
        ]
      },
      {
        title: 'Section 2: Patient Privacy, Photography & HIPAA Compliance',
        summary: 'Enforces federal safeguards regarding before/after clinical photography and confidential treatment charts.',
        policies: [
          {
            name: 'Clinical Photography Consent & Watermarking',
            description: 'Signed media releases must differentiate between internal medical records and public social media.',
            rule: 'Photos taken strictly on encrypted enterprise iPad; personal employee smartphones strictly prohibited.'
          }
        ]
      }
    ],
    featuredSops: [
      {
        code: 'SOP-MED-02',
        title: 'Neurotoxin (Botox / Dysport) Reconstitution & Cold Chain Log',
        department: 'Clinical Aesthetics',
        frequency: 'Daily',
        responsibility: 'Aesthetic RN / Clinical Lead',
        objective: 'Preserve pharmaceutical efficacy, maintain cold-chain continuity, and track lot expiration dates.',
        steps: [
          'Verify refrigeration temp between 2°C - 8°C (36°F - 46°F) and record on daily pharmaceutical log.',
          'Inspect vacuum seal on new 100-unit Allergan Botox vial before popping aluminum cap.',
          'Draw exactly 2.5 mL of sterile, preserved 0.9% Sodium Chloride into reconstitution syringe.',
          'Angle syringe at 45° against glass vial wall; allow vacuum to slowly pull diluent to avoid protein foaming.',
          'Gently rotate vial between palms; do not shake violently.',
          'Label vial with exact date, reconstitution time, injector initials, and expiration deadline (discard after 48 hours).'
        ],
        safetyOrComplianceNote: 'Maintain dual-signer narcotics / injectable tracking sheet in double-locked medication cabinet.'
      }
    ],
    dailyChecklists: [
      {
        name: 'Clinical Morning Opening & Sterilization Room Audit',
        timeframe: '08:00 AM - 09:00 AM',
        items: [
          'Autoclave biological indicator test run and verified negative for bacterial spores.',
          'Treatment rooms restocked with disposable drape sheets, sterile gauze, and chlorhexidine prep pads.',
          'Sharps disposal containers inspected; replaced if exceeding the 3/4 fill capacity line.',
          'Laser calibration self-test performed and recorded on manufacturer maintenance log.',
          'EMR schedule audited for unreviewed medical history updates or allergy warnings.'
        ]
      }
    ]
  },
  {
    slug: 'airbnb-vacation-rental-property-management-sop-template',
    name: 'Airbnb & Short-Term Rental Property Management',
    industry: 'Real Estate & Hospitality',
    tagline: 'Turnover Cleaning, Guest Communication, Maintenance & Damage Claims Operations Kit',
    heroSubtitle: 'Complete 44-page operations manual for short-term rental co-hosts, Superhosts, and property managers. Includes 50-point turnover cleaning punchlists, smart lock access failure resolution, and aircover reimbursement filing SOPs.',
    standardBadge: 'VRMA (Vacation Rental Mgmt) Standard Approved',
    docPageCount: 44,
    sopProcedureCount: 30,
    checklistCount: 10,
    averageOnboardingReductionDays: 6,
    metaTitle: 'Airbnb Property Management SOP Template & Cleaner Handbook (Word, Notion, PDF)',
    metaDescription: 'Download official vacation rental Standard Operating Procedures (SOPs). Features turnover inspection checklists, damage reporting, smart lock troubleshooting, and cleaner handbooks.',
    handbookSections: [
      {
        title: 'Section 1: The 5-Star Cleanliness Standard & Quality Control',
        summary: 'Enforces hotel-grade linen sanitization, staging aesthetics, and olfactory inspection standards.',
        policies: [
          {
            name: 'The White-Glove Turnover Audit',
            description: 'Turnover cleaners must photograph every room and upload to turnover tracking software before 3:00 PM.',
            rule: 'No hair on linens, no water stains on chrome fixtures, zero foul odors permitted upon entry.'
          }
        ]
      }
    ],
    featuredSops: [
      {
        code: 'SOP-STR-01',
        title: 'Guest Lockout & Smart Lock Emergency Access Escalation',
        department: 'Guest Relations',
        frequency: 'Incident-Driven',
        responsibility: '24/7 Remote Dispatch Coordinator',
        objective: 'Resolve guest entry failures within 10 minutes to protect Superhost ratings and prevent cancelations.',
        steps: [
          'Answer guest communication within 60 seconds across Airbnb/VRBO messaging portal or direct phone line.',
          'Open Yale/Schlage smart lock portal; verify WiFi bridge status and generate a 1-time emergency 6-digit PIN.',
          'Guide guest verbally through keypad wake-up sequence (* or touch face) and PIN confirmation entry.',
          'If lock battery is drained: instruct guest on using 9V battery jump terminal under keypad housing.',
          'If lock hardware is jammed: dispatch backup mobile courier with physical master key box code within 20 minutes.',
          'Log incident; schedule maintenance tech to replace smart lock AA lithium batteries next morning.'
        ]
      }
    ],
    dailyChecklists: [
      {
        name: '50-Point Turnover Cleaning & Restocking Inspection',
        timeframe: '10:00 AM - 03:00 PM',
        items: [
          'Strip and wash all duvet covers, flat sheets, and pillowcases on 140°F sanitize cycle.',
          'Inspect mattress encasement covers for stains or tears; replace immediately from linen cache.',
          'Clean refrigerator interior; discard any open condiments left by previous guests.',
          'Replenish welcome basket: 2 branded water bottles, local snack packs, and handwritten welcome card.',
          'Verify TV remote batteries, Netflix guest account logout, and High-Speed WiFi speed test (>100 Mbps).'
        ]
      }
    ]
  },
  {
    slug: 'ecommerce-warehouse-fulfillment-sop-template',
    name: 'E-Commerce Warehouse & 3PL Fulfillment',
    industry: 'Logistics, Supply Chain & E-Commerce',
    tagline: 'Pick, Pack, Ship, Inventory Cycle Counts & Forklift Safety Operations Kit',
    heroSubtitle: 'Complete 50-page warehouse operations manual for DTC e-commerce brands and fulfillment hubs. Features pick-path optimization, barcode scan validation, return merchandise authorization (RMA), and OSHA material handling compliance.',
    standardBadge: 'OSHA 1910 Material Handling & WMS Verified',
    docPageCount: 50,
    sopProcedureCount: 36,
    checklistCount: 14,
    averageOnboardingReductionDays: 8,
    metaTitle: 'Warehouse Fulfillment SOP Template & Employee Handbook (Word, Notion, PDF)',
    metaDescription: 'Download official E-Commerce Warehouse Standard Operating Procedures (SOPs). Includes pick-pack-ship protocols, barcode audit logs, return processing, and forklift safety.',
    handbookSections: [
      {
        title: 'Section 1: Warehouse Safety, PPE & Equipment Licensing',
        summary: 'Enforces hard-hat, steel-toe boot, high-visibility vest, and powered industrial truck guidelines.',
        policies: [
          {
            name: 'Mandatory PPE & Footwear Standards',
            description: 'All associates crossing the yellow staging line must wear ASTM F2413 rated steel-toe footwear.',
            rule: 'Zero exceptions; associates sent home unpaid if arriving in non-compliant athletic shoes.'
          }
        ]
      }
    ],
    featuredSops: [
      {
        code: 'SOP-WMS-03',
        title: 'Pick-Pack-Ship Scan Verification & Manifest Generation',
        department: 'Fulfillment',
        frequency: 'Daily',
        responsibility: 'Packing Associate',
        objective: 'Achieve 99.8% order accuracy through multi-point barcode scanning and void-fill protection.',
        steps: [
          'Scan tote barcode to bring up active shipping order in Warehouse Management System (WMS).',
          'Scan individual item UPCs; confirm item description, size, and quantity matches digital pick ticket.',
          'Select appropriately sized box; apply bottom tape with minimum 2-inch tape overhang on flaps.',
          'Insert item with sufficient biodegradable air-pillows or kraft paper cushioning to eliminate shifting.',
          'Print 4x6 thermal shipping label (FedEx, UPS, USPS); apply smoothly without folds over barcode.',
          'Push completed parcel onto conveyor roller towards regional staging bay.'
        ]
      }
    ],
    dailyChecklists: [
      {
        name: 'Shift Pre-Operation Forklift & Pallet Jack Safety Inspection',
        timeframe: 'Prior to Each Shift',
        items: [
          'Hydraulic lines inspected for fluid weeping or cracked hoses.',
          'Forks inspected for bends, cracks, or excessive heel wear.',
          'Backup beeper, warning strobe, and horn tested and verified loud.',
          'Seatbelt mechanism latches and locks under sudden deceleration tug.'
        ]
      }
    ]
  },
  {
    slug: 'residential-commercial-cleaning-service-sop-template',
    name: 'Residential & Commercial Cleaning Service',
    industry: 'Facility Services & Janitorial',
    tagline: 'Room-by-Room Cleaning Systems, Chemical Safety (SDS) & Key Control Operations Manual',
    heroSubtitle: 'Complete 42-page operations manual for professional cleaning companies. Includes colour-coded microfiber cloth systems, client home key security protocols, biohazard OSHA bloodborne guidelines, and breakages escalation.',
    standardBadge: 'ISSA Clean Standard & OSHA HazCom Compliant',
    docPageCount: 42,
    sopProcedureCount: 28,
    checklistCount: 10,
    averageOnboardingReductionDays: 5,
    metaTitle: 'Cleaning Business SOP Template & Cleaner Employee Handbook (Word, Notion, PDF)',
    metaDescription: 'Download official Cleaning Business Standard Operating Procedures (SOPs). Includes color-coded cloth protocols, SDS chemical safety, client key handling, and checklists.',
    handbookSections: [
      {
        title: 'Section 1: Chemical Safety, SDS Sheets & Surface Care',
        summary: 'Protects expensive client countertops, natural stone, and wood flooring from chemical etching.',
        policies: [
          {
            name: 'Strict Surface Chemical Compatibility Rules',
            description: 'No acidic or vinegar-based cleaners ever allowed on marble, travertine, or granite.',
            rule: 'Neutral pH stone cleaner only; cleaners liable for replacement costs if etching occurs.'
          }
        ]
      }
    ],
    featuredSops: [
      {
        code: 'SOP-CLN-02',
        title: 'Color-Coded Microfiber Cloth Protocol (Cross-Contamination Elimination)',
        department: 'Sanitation',
        frequency: 'Daily',
        responsibility: 'Lead Cleaner',
        objective: 'Guarantee that restroom bacteria is never transferred to kitchen counters or office desks.',
        steps: [
          'RED CLOTHS: Exclusively reserved for toilet bowls, urinals, and immediate surrounding floor tiles.',
          'YELLOW CLOTHS: Sinks, showers, bathroom mirrors, and bathtub ceramic walls.',
          'BLUE CLOTHS: General office surfaces, living room dusting, woodwork, and glass windows.',
          'GREEN CLOTHS: Kitchen food prep countertops, breakroom microwaves, and pantry shelves.',
          'Never mix soiled colored cloths in common caddy; place immediately into color-coded collection bags.'
        ]
      }
    ],
    dailyChecklists: [
      {
        name: 'Vehicle Dispatch & Chemical Restocking Checklist',
        timeframe: '07:30 AM - 08:15 AM',
        items: [
          'HEPA vacuums emptied; spare commercial belt and filtration bags verified.',
          'All spray bottles labeled with GHS / OSHA compliant chemical identifiers.',
          'Client physical keys logged out with secure dual-pin key tracker box.'
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
