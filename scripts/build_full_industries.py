import json
import os
import sys

# Add scripts directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from test_meta import INDUSTRIES_META
from cluster_f_and_b import generate_f_and_b
from cluster_health_clinical import generate_health_clinical
from cluster_tech_digital import generate_tech_digital
from cluster_trades_contracting import generate_trades_contracting
from cluster_fitness_wellness import generate_fitness_wellness
from cluster_real_estate import generate_real_estate
from cluster_ecommerce_logistics import generate_ecommerce_logistics
from cluster_professional_services import generate_professional_services

def get_onboarding_roadmap(cluster, name):
    if cluster in ["health_clinical", "professional_services"]:
        return [
            {
                "dayWindow": "Day 1 - 7: Clinical Credentialing, Compliance Induction & Privacy Safeguards",
                "learningObjective": f"Master statutory HIPAA / regulatory compliance, confidentiality mandates, and clinical orientation at {name}.",
                "deliverables": [
                    "Complete statutory compliance training and sign Employee Handbook & Confidentiality Agreement.",
                    "Verify active professional licensure, CPR/BLS certifications, and malpractice insurance credentials.",
                    "Shadow senior practitioner through standard patient intake, records management, and disinfection workflows."
                ],
                "evaluationCriterion": "Clinical Director sign-off on 100% compliance test score and verified credential dossier."
            },
            {
                "dayWindow": "Day 8 - 30: Supervised Clinical / Technical Execution & Standard Protocols",
                "learningObjective": "Execute standard clinical protocols under direct senior peer supervision and observation.",
                "deliverables": [
                    "Perform initial 25 supervised patient or client encounters with zero protocol deviations.",
                    "Demonstrate proficiency in sterile technique, instrument decontamination, and accurate charting.",
                    "Undergo 30-day formal clinical milestone review with department head."
                ],
                "evaluationCriterion": "Supervisor verification of 3 consecutive flawless daily chart and protocol audits."
            },
            {
                "dayWindow": "Day 31 - 60: Autonomous Practice & Emergency Escalation Competence",
                "learningObjective": "Achieve independent practice autonomy and master acute complication or risk escalation protocols.",
                "deliverables": [
                    "Operate assigned clinical schedule independently within target appointment pacing standards.",
                    "Demonstrate flawless execution of emergency response protocols (vascular occlusion, medical crisis, or Tarasoff escalation).",
                    "Participate in monthly quality assurance peer review committee."
                ],
                "evaluationCriterion": "Attainment of 98%+ quality benchmark score on unannounced supervisory chart audit."
            },
            {
                "dayWindow": "Day 61 - 90: Mastery, Advanced Modalities & Final Employment Review",
                "learningObjective": "Complete 90-day introductory milestone and qualify for permanent clinical staff status.",
                "deliverables": [
                    "Provide peer coaching for newly onboarded clinical assistants and support staff.",
                    "Demonstrate comprehensive mastery of risk management, adverse event reporting, and patient satisfaction.",
                    "Participate in comprehensive 90-day formal performance appraisal and career progression roadmap."
                ],
                "evaluationCriterion": "Medical / Managing Director formal approval of permanent employment status under at-will doctrine."
            }
        ]
    elif cluster in ["tech_digital"]:
        return [
            {
                "dayWindow": "Day 1 - 7: Security Induction, Dev Environment & Architecture Overview",
                "learningObjective": f"Complete security clearance, configure hardware MDM, and master code repository architecture at {name}.",
                "deliverables": [
                    "Complete SOC 2 security training, enroll laptop in MDM, and configure hardware FIDO2 MFA.",
                    "Successfully clone repository, pass local test suite, and deploy first 'good-first-issue' commit to staging.",
                    "Review architecture diagrams, system dependencies, and incident escalation protocols with engineering mentor."
                ],
                "evaluationCriterion": "IT Security Lead approval of verified 100% MFA enrollment and first merged staging PR."
            },
            {
                "dayWindow": "Day 8 - 30: Feature Delivery, Code Review & On-Call Shadowing",
                "learningObjective": "Deliver core sprint tickets independently and participate in team code review cycles.",
                "deliverables": [
                    "Ship first full production feature pull request adhering to CI/CD gates and test coverage standards (>85%).",
                    "Conduct at least 10 constructive peer code reviews in accordance with team style guidelines.",
                    "Shadow primary on-call engineer during one full sprint rotation to understand incident triage workflows."
                ],
                "evaluationCriterion": "Tech Lead sign-off on 30-day sprint velocity and zero critical regression bugs introduced."
            },
            {
                "dayWindow": "Day 31 - 60: Secondary On-Call Rotation & System Ownership",
                "learningObjective": "Take ownership of specific microservice or product domain and handle level-2 escalations.",
                "deliverables": [
                    "Serve as secondary on-call engineer during production release cycles.",
                    "Identify and refactor technical debt or optimize slow database queries/API endpoints.",
                    "Author technical design document (RFC) for upcoming product feature."
                ],
                "evaluationCriterion": "Engineering Manager approval of technical RFC and successful incident resolution cadence."
            },
            {
                "dayWindow": "Day 61 - 90: Full Operational Autonomy & Final Evaluation",
                "learningObjective": "Achieve full autonomous engineering contributor status and lead sprint initiatives.",
                "deliverables": [
                    "Operate as independent primary on-call engineer for assigned product domains.",
                    "Assist in onboarding and pair-programming with new engineering hires.",
                    "Participate in formal 90-day performance review and long-term career growth mapping."
                ],
                "evaluationCriterion": "VP of Engineering approval of permanent employment status under at-will doctrine."
            }
        ]
    elif cluster in ["trades_contracting"]:
        return [
            {
                "dayWindow": "Day 1 - 7: OSHA Safety Orientation, Tool Check & Fleet Clearance",
                "learningObjective": f"Master company safety standards, complete tool inventory, and clear fleet driving authorization at {name}.",
                "deliverables": [
                    "Complete OSHA safety briefing: hazard communication, fall protection, and mandatory PPE verification.",
                    "Verify clean Motor Vehicle Record (MVR) and pass fleet ride-along driving safety evaluation.",
                    "Inspect assigned service vehicle, verify inventory bins, and calibrate diagnostic tools."
                ],
                "evaluationCriterion": "Safety Director verification of signed safety checklist and passed driving evaluation."
            },
            {
                "dayWindow": "Day 8 - 30: Ride-Along Apprenticeship & Supervised Technical Dispatch",
                "learningObjective": "Execute standard diagnostic and service calls under the direct supervision of a Lead Journeyman.",
                "deliverables": [
                    "Shadow Senior Lead on 30 customer service calls covering diagnosis, parts requisition, and repair execution.",
                    "Demonstrate proficiency in Lockout/Tagout (LOTO) and Job Safety Analysis (JSA) procedures.",
                    "Complete customer communication and mobile invoice dispatch training."
                ],
                "evaluationCriterion": "Lead Journeyman sign-off on technical competency and zero safety violations."
            },
            {
                "dayWindow": "Day 31 - 60: Solo Truck Dispatch & Quality Verification",
                "learningObjective": "Operate assigned service van independently and achieve benchmark customer satisfaction scores.",
                "deliverables": [
                    "Execute solo dispatch service calls within target arrival windows and scope estimates.",
                    "Maintain zero customer callback warranty claims on completed repairs.",
                    "Maintain accurate truck inventory accounting and zero unrecorded tool shrinkage."
                ],
                "evaluationCriterion": "Attainment of 90%+ first-time fix rate and 4.8+ customer review rating across 50 solo jobs."
            },
            {
                "dayWindow": "Day 61 - 90: Trade Mastery, Complex Installs & Final Review",
                "learningObjective": "Master advanced complex installations and qualify for permanent lead technician status.",
                "deliverables": [
                    "Lead high-complexity multi-day residential or commercial installation project.",
                    "Coach and mentor junior apprentices on safe trade practices.",
                    "Participate in formal 90-day performance appraisal and wage progression review."
                ],
                "evaluationCriterion": "Operations Manager approval of permanent full technician status under at-will doctrine."
            }
        ]
    else:
        # F&B, Fitness, Real Estate, E-Commerce
        return [
            {
                "dayWindow": "Day 1 - 7: Foundations, Regulatory Compliance & Station Orientation",
                "learningObjective": f"Master mission, customer hospitality standards, and core statutory safety protocols for {name}.",
                "deliverables": [
                    "Complete Employee Handbook review and submit signed acknowledgment receipt.",
                    "Pass 100% on foundational workplace safety and emergency response assessment.",
                    "Shadow assigned designated senior lead across opening, mid-day, and closing operational shifts."
                ],
                "evaluationCriterion": "General Manager verification of signed documentation and 100% safety quiz pass score."
            },
            {
                "dayWindow": "Day 8 - 30: Supervised Core Operations Execution",
                "learningObjective": "Execute standard role operating procedures independently under peer observation.",
                "deliverables": [
                    "Demonstrate proficiency across daily opening, mid-day transition, and closing punchlist sequences.",
                    "Complete first 50 customer / client service interactions without senior supervisory intervention.",
                    "Undergo 30-day formal performance milestone review with department lead."
                ],
                "evaluationCriterion": "Shift supervisor sign-off on 3 consecutive flawless daily audit punchlists."
            },
            {
                "dayWindow": "Day 31 - 60: Quality Assurance, Speed & Independent Autonomy",
                "learningObjective": "Achieve full speed, operational autonomy, and frontline problem escalation competence.",
                "deliverables": [
                    "Operate primary station at benchmark throughput and quality standards during peak volume rushes.",
                    "Handle basic customer conflict or operational bottleneck using standard de-escalation protocol.",
                    "Participate in monthly facility hygiene and safety committee review."
                ],
                "evaluationCriterion": "Attainment of 95%+ quality benchmark score on unannounced supervisory audit."
            },
            {
                "dayWindow": "Day 61 - 90: Mastery, Leadership Readiness & Final Evaluation",
                "learningObjective": "Complete 90-day introductory evaluation and qualify for full operational autonomy.",
                "deliverables": [
                    "Assist in onboarding and peer-coaching newly hired department team members.",
                    "Demonstrate comprehensive grasp of regulatory compliance, incident reporting, and inventory management.",
                    "Participate in comprehensive 90-day formal evaluation and career milestone planning."
                ],
                "evaluationCriterion": "General Manager approval of permanent employment status under at-will doctrine."
            }
        ]

def get_daily_checklists(cluster, name, slug):
    if "mental-health" in slug:
        return [
            {
                "name": "Morning Therapy Suite Preparation & Confidentiality Audit",
                "shiftTime": "08:00 AM - 09:00 AM",
                "responsibleRole": "Practice Administrator / Lead Therapist",
                "tasks": [
                    "Activate hallway sound masking (white noise) generators to protect acoustic privacy.",
                    "Review morning clinical intake appointments in HIPAA-compliant EHR; verify digital consent forms.",
                    "Inspect individual consultation therapy rooms: ensure comfortable seating, tissues, and clean water carafes.",
                    "Verify telehealth video room link stability and confirm 256-bit encryption connection.",
                    "Review on-call emergency crisis coverage schedule and verify 988 dispatch numbers.",
                    "Initial morning clinical readiness clipboard at reception desk."
                ]
            },
            {
                "name": "Mid-Day Session Documentation & Crisis On-Call Standby",
                "shiftTime": "01:00 PM - 02:00 PM",
                "responsibleRole": "Clinical Supervisor / On-Call Clinician",
                "tasks": [
                    "Verify clinicians complete concurrent session progress notes (DAP/SOAP format) within 2 hours.",
                    "Audit high-risk client safety plans (C-SSRS Low/Moderate) and ensure emergency contacts are current.",
                    "Process prescription refill requests and coordinate with referring psychiatrists.",
                    "Confirm physical files retrieved for legacy review are re-locked in fire-rated file vaults.",
                    "Perform midday waiting room sweep: sanitize touchpoints and restock patient informational brochures.",
                    "Check on-call crisis phone battery and cellular network signal."
                ]
            },
            {
                "name": "Evening Practice Lockdown & Physical Soundproofing Sweep",
                "shiftTime": "07:30 PM - 08:30 PM",
                "responsibleRole": "Closing Practice Manager",
                "tasks": [
                    "Verify all therapy consultation rooms are vacated; inspect rooms for personal items left by clients.",
                    "Turn off sound masking machines, waiting area lighting, and ambient noise systems.",
                    "Enforce Clean Desk Policy: ensure zero physical PHI or intake notes remain on reception desks.",
                    "Force automatic timeout logout across all reception and clinician computer workstations.",
                    "Deposit copay cash receipts and checks into dual-key depository safe.",
                    "Arm facility security alarm and lock heavy soundproof entrance doors with deadbolts."
                ]
            }
        ]
    elif "home-health" in slug:
        return [
            {
                "name": "Morning Caregiver Field Dispatch & Vitals Kit Audit",
                "shiftTime": "07:00 AM - 08:30 AM",
                "responsibleRole": "Clinical Care Coordinator (RN)",
                "tasks": [
                    "Audit daily patient visit manifest in Electronic Visit Verification (EVV) software.",
                    "Verify field caregiver PPE supply kits: sterile gloves, surgical masks, sanitizing wipes.",
                    "Calibrate portable digital blood pressure monitors, pulse oximeters, and temporal thermometers.",
                    "Review daily medication change orders received from attending physicians.",
                    "Confirm caregiver arrival check-ins via mobile GPS EVV app within 15 minutes of scheduled window.",
                    "Brief caregivers on high-acuity fall risk and dementia patient protocols."
                ]
            },
            {
                "name": "Mid-Day Clinical Progress & Care Plan Reconciliation",
                "shiftTime": "12:30 PM - 02:00 PM",
                "responsibleRole": "Director of Clinical Services",
                "tasks": [
                    "Review incoming caregiver encounter logs in mobile EHR: flag any vital sign anomalies.",
                    "Coordinate with home physical therapists and occupational therapists regarding mobility milestones.",
                    "Follow up on missed EVV clock-ins; dispatch backup on-call caregiver if delay exceeds 30 minutes.",
                    "Process family care conference requests and update authorized contact rosters.",
                    "Verify patient medication administration records (MAR) reflect 100% on-time doses.",
                    "Audit durable medical equipment (DME) deliveries (oxygen concentrators, hospital beds, walkers)."
                ]
            },
            {
                "name": "Evening Caregiver Shift Handover & On-Call Nurse Dispatch",
                "shiftTime": "05:30 PM - 07:00 PM",
                "responsibleRole": "Evening Triage Nurse (RN)",
                "tasks": [
                    "Reconcile daily EVV timesheets and verify statutory Medicaid/Medicare visit compliance.",
                    "Transfer after-hours patient emergency triage line to designated on-call Registered Nurse.",
                    "Verify overnight respite and 24/7 continuous care home aides have clocked in on-site.",
                    "Archive completed patient daily visit notes in permanent HIPAA cloud repository.",
                    "Review overnight critical escalation protocol with physician answering service.",
                    "Lock clinical supply room, arm office alarm system, and secure facility."
                ]
            }
        ]
    elif "car-rental" in slug:
        return [
            {
                "name": "Morning Fleet Staging & Vehicle Dispatch Readiness Audit",
                "shiftTime": "07:00 AM - 08:30 AM",
                "responsibleRole": "Opening Fleet Lead",
                "tasks": [
                    "Unlock key management vault and audit all vehicle key fobs against morning reservation manifest.",
                    "Inspect primary ready-line vehicles: verify tire cold pressure, clean windshields, and vacuumed interiors.",
                    "Verify fuel levels are 100% full and EV battery packs are charged to >85% State-of-Charge (SOC).",
                    "Conduct walkaround inspection of VIP customer premium reservation vehicles.",
                    "Power on counter POS terminals, verify barcode scanner connectivity, and test credit card terminals.",
                    "Review morning flight arrival boards to anticipate airline delays or early customer arrivals."
                ]
            },
            {
                "name": "Mid-Day Return Processing, Quick-Turn Detailing & Fuel Audit",
                "shiftTime": "12:00 PM - 02:00 PM",
                "responsibleRole": "Mid-Day Fleet Coordinator",
                "tasks": [
                    "Process arriving return vehicles: record exact odometer reading and fuel / EV charge level.",
                    "Conduct 360-degree digital photographic damage inspection; upload photos to cloud return ticket.",
                    "Route returned vehicles through rapid detailing bay: wash exterior, vacuum floorboards, and wipe touchpoints.",
                    "Apply $250 smoking remediation fee for vehicles with detected smoke odor; initiate ozone machine treatment.",
                    "Replenish vehicle windshield wiper fluid reservoir and verify spare tire tool kit is complete.",
                    "Stage clean, inspected vehicles on ready line with printed mirror hang-tags."
                ]
            },
            {
                "name": "Nightly Fleet Inventory Reconciliation & Yard Security Lockup",
                "shiftTime": "08:00 PM - 10:00 PM",
                "responsibleRole": "Closing Fleet Supervisor",
                "tasks": [
                    "Conduct physical lot walk: verify every parked vehicle has windows closed and doors locked.",
                    "Reconcile physical lot inventory against active software manifest; account for all out-on-rent vehicles.",
                    "Return all vehicle key fobs to electronic key vault; verify zero keys remain on service desks.",
                    "Close out daily counter POS registers, reconcile credit card batches, and drop cash receipts into safe.",
                    "Inspect perimeter security lighting and verify 4K CCTV surveillance cameras have clear sightlines.",
                    "Lock main customer entrance and padlock heavy perimeter vehicle gates."
                ]
            }
        ]
    elif cluster == "tech_digital":
        return [
            {
                "name": "Morning Infrastructure Observability & Security Health Audit",
                "shiftTime": "08:30 AM - 09:30 AM",
                "responsibleRole": "On-Call DevOps Engineer / Reliability Lead",
                "tasks": [
                    "Review Datadog/CloudWatch APM dashboards for API latency (p95), 5xx error rates, and CPU/memory pressure.",
                    "Verify automated overnight database backups completed and snapshot replication verified in secondary region.",
                    "Audit pending security vulnerability alerts in GitHub Dependabot and Snyk repository scanners.",
                    "Check active cloud infrastructure consumption and API spend meters (AWS, GCP, OpenAI).",
                    "Conduct morning engineering standup alignment covering high-priority defect blockers.",
                    "Verify public status page reflects accurate real-time uptime metrics for enterprise customers."
                ]
            },
            {
                "name": "Mid-Day Production Deployment & Security Review",
                "shiftTime": "01:00 PM - 02:30 PM",
                "responsibleRole": "Release Coordinator / Lead Engineer",
                "tasks": [
                    "Verify all release candidate pull requests have required peer approvals and green CI/CD build tests.",
                    "Execute canary staging deployment; monitor synthetic transaction health for 15 minutes.",
                    "Promote build to production cluster; monitor real-time Sentry error logs for new exceptions.",
                    "Validate rollback script availability and ensure database migrations are backward compatible.",
                    "Verify customer-facing release notes are drafted for marketing and customer success teams.",
                    "Confirm all staging database test records are purged and sanitized."
                ]
            },
            {
                "name": "End-of-Day On-Call Handover & Incident Retrospective Review",
                "shiftTime": "05:00 PM - 06:00 PM",
                "responsibleRole": "Outgoing / Incoming On-Call Commander",
                "tasks": [
                    "Review all customer escalation tickets logged in Zendesk/Intercom during the business day.",
                    "Transfer PagerDuty on-call alert schedule to oncoming evening on-call engineer; verify alert phone test.",
                    "Confirm all open Sev-3 defect tickets have assigned owners and sprint milestone tags.",
                    "Verify no unapproved administrative IAM accounts or elevated permissions remain active.",
                    "Review daily customer data export / deletion (DSAR) requests and confirm statutory SLA status.",
                    "Post daily engineering summary update to internal team Slack channel."
                ]
            }
        ]
    elif cluster == "health_clinical":
        return [
            {
                "name": "Morning Operatory Sterilization, Waterline Purge & Supply Staging",
                "shiftTime": "07:30 AM - 08:30 AM",
                "responsibleRole": "Lead Clinical Assistant / Registered Nurse",
                "tasks": [
                    "Deactivate security alarm, power on treatment room dental/medical units, and check master air/water valves.",
                    "Purge operatory waterlines for 2 minutes with antimicrobial treated reservoir water.",
                    "Wipe all operatory contact surfaces with hospital-grade disinfectant wipes; apply fresh barrier film.",
                    "Verify autoclave spore test incubator status (verify zero bacterial growth) and record in sterilization log.",
                    "Retrieve patient treatment charts for day; verify required lab cases, prescriptions, and implants are received.",
                    "Check emergency crash cart: verify oxygen cylinder pressure >1000 psi and AED status light is green."
                ]
            },
            {
                "name": "Mid-Day Instrument Ultrasonic Decontamination & Autoclave Cycling",
                "shiftTime": "12:30 PM - 01:30 PM",
                "responsibleRole": "Sterilization Technician",
                "tasks": [
                    "Process morning soiled instruments through ultrasonic enzymatic bath for 15 minutes.",
                    "Rinse, dry, and inspect instruments for rust or damage; package in self-sealing chemical indicator pouches.",
                    "Load autoclave and execute full sterilization cycle (250°F / 15 psi for 30 minutes); verify chemical indicator turns black.",
                    "Inspect operatory sharps containers: replace any container reaching the 3/4 full fill line.",
                    "Conduct secondary wipe-down of all clinical treatment chairs and Mayo stands between morning and afternoon patients.",
                    "Audit midday schedule: confirm afternoon arrivals have completed digital health history updates."
                ]
            },
            {
                "name": "End-of-Day Clinical Terminal Clean, Waterline Purge & Vault Lockup",
                "shiftTime": "05:00 PM - 06:00 PM",
                "responsibleRole": "Closing Clinical Lead",
                "tasks": [
                    "Flush high-volume evacuation (HVE) lines with enzymatic line cleaner; empty and clean suction traps.",
                    "Purge waterlines dry; turn off master compressor, nitrous/oxygen tanks, and dental unit master switches.",
                    "Execute terminal disinfection: wipe all operatory counters, treatment chairs, and overhead lamps with hospital disinfectant.",
                    "Count controlled substances with oncoming/supervising doctor; record in perpetual DEA log and lock vault.",
                    "Trigger automated daily encrypted cloud backup of EMR database; verify backup status reads 'Complete'.",
                    "Arm facility security alarm, lock medical records closet, and secure exterior entrance doors."
                ]
            }
        ]
    elif cluster == "trades_contracting":
        return [
            {
                "name": "Morning Fleet Pre-Trip Inspection & Tailgate Safety Briefing",
                "shiftTime": "06:30 AM - 07:30 AM",
                "responsibleRole": "Field Crew Supervisor",
                "tasks": [
                    "Conduct Daily Vehicle Inspection Report (DVIR) on service vans: check tires, fluid levels, lights, and wipers.",
                    "Conduct 5-minute Tailgate Safety Meeting: review day's high-hazard tasks and verify mandatory PPE.",
                    "Audit truck inventory: verify job-specific parts, refrigerant jugs, pipe fittings, and fasteners are loaded.",
                    "Inspect full-body fall arrest harnesses and ladders: verify zero cuts, frays, or mechanical defects.",
                    "Review dispatch schedule and route optimization in field service mobile app.",
                    "Ensure onboard OSHA first aid kits and chemical spill kits are fully stocked."
                ]
            },
            {
                "name": "Mid-Day Job Site Hazard Audit & Customer Change Order Check",
                "shiftTime": "12:00 PM - 01:00 PM",
                "responsibleRole": "Lead Field Journeyman",
                "tasks": [
                    "Conduct on-site Job Safety Analysis (JSA) prior to initiating major mechanical or structural tasks.",
                    "Verify Lockout/Tagout (LOTO) energy isolation with calibrated digital multimeter before touching electrical circuits.",
                    "Photograph in-progress work: document pipe/duct alignment, wiring color codes, and component serial tags.",
                    "Review unexpected site obstacles with customer; obtain countersigned digital Change Order prior to extra work.",
                    "Maintain clean, debris-free drop cloth work zone in customer residence or commercial facility.",
                    "Log midday progress update and estimated completion timeframe in dispatch app."
                ]
            },
            {
                "name": "End-of-Day Truck Inventory Restock & Shop Perimeter Lockup",
                "shiftTime": "04:30 PM - 05:30 PM",
                "responsibleRole": "Shop Supervisor",
                "tasks": [
                    "Unload scrap metal (copper, brass, aluminum) and deposit into locked warehouse reclamation cage.",
                    "Restock fast-moving truck stock items (capacitors, breakers, fittings) from warehouse replenishment shelves.",
                    "Plug cordless tool batteries into commercial charging station; inspect corded tools for insulation damage.",
                    "Lock service truck cargo doors; park trucks inside perimeter security fence.",
                    "Conduct shop walkthrough: verify welding gas cylinders are shut, compressed air bled, and bay doors locked.",
                    "Arm facility commercial motion alarm system and lock exterior yard gate with heavy padlock."
                ]
            }
        ]
    elif cluster == "real_estate_hospitality":
        return [
            {
                "name": "Morning Turnover Schedule Routing & Linen Staging Audit",
                "shiftTime": "08:30 AM - 10:00 AM",
                "responsibleRole": "Turnover Operations Coordinator",
                "tasks": [
                    "Review PMS departure/arrival manifest: map turnover priority schedule based on early check-in requests.",
                    "Stage clean, sanitized linen sets (sheets, pillowcases, duvet covers, bath towels) sorted by property size.",
                    "Verify smart lock battery levels across all properties; dispatch maintenance tech for any lock <20% battery.",
                    "Ensure turnover cleaning caddies are stocked with EPA-registered virucidal disinfectants and microfiber cloths.",
                    "Dispatch mobile turnover housekeeping teams with automated digital photo checklists.",
                    "Monitor checkouts: confirm guest smart lock checkout PIN events by 10:00 AM checkout cutoff."
                ]
            },
            {
                "name": "Mid-Day Property Turnover Inspection & Damage Verification",
                "shiftTime": "12:30 PM - 02:30 PM",
                "responsibleRole": "Quality Assurance Inspector",
                "tasks": [
                    "Conduct physical walk-through of completed properties: inspect bed miters, mirror streaks, and bath tiles.",
                    "Test all major appliances: run ice maker, inspect refrigerator cleanliness, and check oven interior.",
                    "Audit guest amenities: restock sealed coffee, tea, paper goods, shampoo, conditioner, and body wash.",
                    "Test life safety equipment: verify smoke and CO detectors sound upon test button depress.",
                    "Inspect properties for damage or rule violations (smoking, pets, unauthorized parties); photograph evidence for AirCover.",
                    "Upload complete 24-photo inspection set to PMS; mark property status as 'Clean & Guest-Ready'."
                ]
            },
            {
                "name": "Evening Arrival Monitoring & Emergency Lockout Standby",
                "shiftTime": "04:00 PM - 07:00 PM",
                "responsibleRole": "Evening Guest Support Lead",
                "tasks": [
                    "Monitor real-time smart lock entry dashboard: verify arriving guests successfully enter properties.",
                    "Respond to incoming guest messaging within 5 minutes regarding Wi-Fi, thermostat, or parking questions.",
                    "Monitor indoor decibel sensors (Minut/NoiseAware) for volume spikes exceeding 70 dB.",
                    "Verify trash and recycling toters have been rolled to curb for designated municipal collection morning.",
                    "Confirm all vacant properties are in Eco-Mode (65°F heating / 78°F cooling) with deadbolts locked.",
                    "Transfer after-hours emergency phone line to on-call night manager."
                ]
            }
        ]
    else:
        # Standard F&B & Others
        return [
            {
                "name": "Daily Opening, Prep Verification & Equipment Health Audit",
                "shiftTime": "06:30 AM - 08:30 AM",
                "responsibleRole": "Opening Shift Supervisor",
                "tasks": [
                    "Deactivate intrusion alarm, power on primary service equipment, and inspect ventilation.",
                    "Verify commercial refrigeration units are holding strictly at or below 38°F (3.3°C).",
                    "Calibrate digital thermometers in ice slurry (verifying 32.0°F ± 1°F accuracy).",
                    "Prepare chemical sanitizer buckets; verify quaternary concentration between 200-400 ppm.",
                    "Inspect incoming food/inventory deliveries for cold chain integrity and best-by expiration dates.",
                    "Count POS register float cash ($300 standard drawer) and verify card processing connectivity."
                ]
            },
            {
                "name": "Mid-Day Operational Transition & Shift Handover",
                "shiftTime": "01:30 PM - 03:00 PM",
                "responsibleRole": "Mid-Day Assistant Manager",
                "tasks": [
                    "Conduct secondary temperature audit across all cold holding line inserts.",
                    "Perform mid-shift cash drop for currency exceeding $500 threshold into dual-key drop safe.",
                    "Inspect customer restrooms: restock tissue, sanitize touchpoints, and empty trash receptacles.",
                    "Review 86-board (out-of-stock items) with team and synchronize digital online ordering status.",
                    "Verify staff meal and rest break compliance in accordance with FLSA and state labor rules.",
                    "Hand off shift logbook to incoming evening lead, noting VIP reservations and special requests."
                ]
            },
            {
                "name": "Nightly Closing, Sanitation & Security Lockup",
                "shiftTime": "09:30 PM - 11:30 PM",
                "responsibleRole": "Closing Manager & Lead Closer",
                "tasks": [
                    "Break down service lines, store food in airtight labeled containers, and clean cooking equipment.",
                    "Run commercial high-temp warewasher; record final rinse temperature reaching at least 180°F.",
                    "Sweep and mop all kitchen and service floors with degreasing neutral cleaner.",
                    "Close POS terminals, execute blind cash drawer reconciliation, and print server sales summaries.",
                    "Deposit reconciled cash bags into drop safe; retain manager dual-verification receipt.",
                    "Verify all exterior doors are deadbolted, arm security intrusion alarm, and lock perimeter gates."
                ]
            }
        ]

def main():
    all_kits = []

    print(f"Starting compilation of {len(INDUSTRIES_META)} authentic industry SOP kits...")

    for meta in INDUSTRIES_META:
        slug = meta["slug"]
        name = meta["name"]
        industry = meta["industry"]
        cluster = meta["cluster"]
        badge = meta["badge"]
        role = meta["role"]

        # Generate cluster-specific policies and SOPs
        if cluster == "f_and_b":
            policies, sops = generate_f_and_b(meta)
        elif cluster == "health_clinical":
            policies, sops = generate_health_clinical(meta)
        elif cluster == "tech_digital":
            policies, sops = generate_tech_digital(meta)
        elif cluster == "trades_contracting":
            policies, sops = generate_trades_contracting(meta)
        elif cluster == "fitness_wellness":
            policies, sops = generate_fitness_wellness(meta)
        elif cluster == "real_estate_hospitality":
            policies, sops = generate_real_estate(meta)
        elif cluster == "ecommerce_logistics":
            policies, sops = generate_ecommerce_logistics(meta)
        elif cluster == "professional_services":
            policies, sops = generate_professional_services(meta)
        else:
            raise ValueError(f"Unknown cluster: {cluster}")

        onboarding = get_onboarding_roadmap(cluster, name)
        checklists = get_daily_checklists(cluster, name, slug)

        kit = {
            "slug": slug,
            "name": name,
            "industry": industry,
            "tagline": "Comprehensive Operations Manual, Employee Handbook & Quality Systems",
            "heroSubtitle": f"Complete enterprise operations manual engineered for {name}. Features 8 fully articulated SOP procedures, complete 6-clause statutory employment handbook, progressive discipline matrix, and printable shift audit punchlists.",
            "standardBadge": badge,
            "verifiedPageCount": 14,
            "sopProcedureCount": len(sops),
            "checklistCount": len(checklists),
            "averageOnboardingReductionDays": 9,
            "metaTitle": f"{name} SOP Template & Employee Handbook (Word .docx & PDF)",
            "metaDescription": f"Download official {name} Standard Operating Procedures (SOPs) and employee handbook. 14 formatted pages of industry protocols, HR policies, and daily audit checklists.",
            "companyPolicies": policies,
            "comprehensiveSops": sops,
            "onboardingRoadmap": onboarding,
            "dailyChecklists": checklists
        }

        all_kits.append(kit)

    print(f"Successfully compiled all {len(all_kits)} kits.")

    # Write output to /Users/aziz/Documents/opsmanual-pro/src/data/industries.ts
    output_path = "/Users/aziz/Documents/opsmanual-pro/src/data/industries.ts"

    header = "import { IndustrySopKit } from '@/types';\n\nexport const INDUSTRIES: IndustrySopKit[] = "
    footer = ";\n\nexport const INDUSTRY_MAP: Record<string, IndustrySopKit> = INDUSTRIES.reduce(\n  (acc, curr) => {\n    acc[curr.slug] = curr;\n    return acc;\n  },\n  {} as Record<string, IndustrySopKit>\n);\n"

    json_str = json.dumps(all_kits, indent=2)

    with open(output_path, "w") as f:
        f.write(header + json_str + footer)

    print(f"Wrote {len(all_kits)} updated industry kits to {output_path} (size: {os.path.getsize(output_path):,} bytes).")

if __name__ == "__main__":
    main()
