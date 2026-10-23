# Real Estate, Short-Term Rentals & Hospitality Facilities Cluster Generator

def generate_real_estate(meta):
    name = meta["name"]
    slug = meta["slug"]
    role = meta["role"]
    badge = meta["badge"]

    sop_titles = [
        ("Property Turnover Cleaning, High-Temp Linen Sanitization & Bed Staging", "Housekeeping Operations", "Daily", "Head Turnover Specialist / Housekeeper",
         ["EPA-registered hospital virucidal surface disinfectant", "Commercial laundry detergent with oxygen bleach", "Color-coded microfiber cleaning cloths"],
         ["Strip all bed linens, pillowcases, duvet covers, and bath towels; inspect for tears or stains.",
          "Launder all linens on heavy-duty commercial wash cycle with water temperature reaching at least 140°F (60°C).",
          "Dry linens on high heat for minimum 45 minutes to guarantee thermal eradication of bedbugs and allergens.",
          "Dress mattresses using fresh fitted sheets, crisp flat sheets with hospital mitered corners, and fluffed decorative pillows.",
          "Disinfect bathroom touchpoints: scrub shower tiles, toilet bowl, faucets, and vanity mirrors with virucidal spray.",
          "Vacuum all bedroom rugs and mop hard surface floors with neutral floor cleaner; stage clean towel sets on bed."],
         "Turnover Cleaning Photo Audit Uploaded to PMS", "VRMA Hospitality Cleaning Standards & CDC Recommendations"),

        ("Guest Identity Verification, Smart Lock PIN Generation & Check-In Routing", "Guest Experience & Security", "Daily", "Guest Experience Coordinator",
         ["Property Management System (PMS - Guesty/Hospitable)", "Smart Lock Cloud Console (Schlage Encode/August/Yale)", "Government ID verification platform (Superhog/Autohost)"],
         ["Verify guest has submitted valid government photo ID and completed secondary identity screening.",
          "Confirm guest has digitally executed Property Rental Agreement and authorized required security deposit hold.",
          "Generate unique 4-digit smart lock access PIN matching the last 4 digits of guest's verified mobile phone number.",
          "Program lock schedule to activate precisely at 04:00 PM on arrival date and auto-expire at 11:00 AM on departure date.",
          "Send automated welcome transmission 24 hours prior to arrival with parking instructions, Wi-Fi credentials, and smart lock guide.",
          "Monitor smart lock cloud dashboard to confirm successful first door entry event on arrival afternoon."],
         "Smart Lock Cloud Entry Confirmation & ID Audit Trail", "Municipal Short-Term Rental Ordinances & VRMA Standards"),

        ("Life Safety Audit, Smoke / Carbon Monoxide Detector Testing & Fire Extinguisher", "Life Safety & Compliance", "Monthly", "Property Safety Inspector",
         ["Aerosol canned smoke detector tester", "CO test spray ampoule", "UL-rated 2A:10B:C dry chemical fire extinguisher"],
         ["Test every hardwired and battery-powered smoke detector in each bedroom and hallway using aerosol test smoke.",
          "Inspect carbon monoxide detectors located on each living level; verify audible alarm siren sounds upon test button depress.",
          "Inspect pressure gauge on all fire extinguishers: confirm yellow needle is centered in green operational zone.",
          "Verify emergency egress windows and sliding doors operate smoothly without sticking or requiring specialized keys.",
          "Inspect printed Emergency Evacuation Map posted on back of entry door: ensure primary/secondary exits are clearly legible.",
          "Log monthly test dates and battery replacement timestamps in cloud property compliance vault."],
         "Monthly Life Safety Testing Checklist & Signed Affidavit", "NFPA 72 National Fire Alarm Code & Local STR Safety Ordinances"),

        ("Pre-Stay Damage Inspection, Photographic Inventory & AirCover Security Claim Filing", "Asset Protection", "Incident-Driven", "Property Operations Manager",
         ["Mobile inspection software with timestamped camera (Breezeway)", "Standardized staging inventory checklist", "Online OTA resolution portal (Airbnb AirCover / VRBO)"],
         ["Perform thorough walk-through of property immediately following departure and prior to turnover cleaning.",
          "Photograph any physical property damage (stained furniture, broken lamps, wall gouges, cracked fixtures) with wide and macro angles.",
          "Retrieve pre-arrival baseline photos from PMS inspection archive to verify damage occurred during specific guest reservation.",
          "Obtain professional repair estimates or replacement purchase receipts from licensed contractors or commercial suppliers.",
          "Submit formal security deposit deduction or AirCover reimbursement claim through platform within statutory 14-day window.",
          "Coordinate immediate vendor repairs to ensure property is fully restored before oncoming guest check-in."],
         "AirCover Damage Claim Dossier with Metadata Photos & Invoices", "OTA Terms of Service & Uniform Commercial Law"),

        ("Noise Decibel Monitoring, Minut/NoiseAware Thresholds & Party De-Escalation", "Neighborhood Relations & Security", "Incident-Driven", "On-Call Security Coordinator",
         ["Real-time decibel sensor platform (Minut / NoiseAware)", "Automated SMS guest notification dispatch", "Local on-call mobile security dispatch patrol"],
         ["Monitor real-time indoor and outdoor decibel sensors set to statutory quiet-hour threshold (typically 70 dB during daytime, 55 dB after 10 PM).",
          "When noise decibels exceed threshold for 10 consecutive minutes: system triggers immediate automated polite SMS alert to guest.",
          "If noise continues 15 minutes post-alert: coordinator places direct phone call to guest contact number reminding them of quiet hours.",
          "If party or unauthorized gathering is confirmed: dispatch licensed private security patrol to property within 30 minutes.",
          "Security patrol requests immediate cessation of noise and removal of non-registered visitors.",
          "If guests refuse compliance: notify local municipal police dispatch and execute immediate reservation cancellation without refund."],
         "Minut Decibel Sensor Audit Graph & Incident Escalation Log", "Municipal Quiet Hour Ordinances & VRMA Good Neighbor Policy"),

        ("Kitchen & Appliance Deep Clean, Refrigerator Sanitation & Inventory Restock", "Housekeeping Operations", "Daily", "Kitchen Turnover Specialist",
         ["Food-safe stainless steel cleaner and degreaser", "EPA-registered quaternary disinfectant", "Standardized kitchen inventory staging sheet"],
         ["Inspect refrigerator and freezer: discard all perishable food items left by prior guests; wipe interior shelving with food-safe cleaner.",
          "Run dishwasher empty on sanitizing cycle with citric acid tablet to remove hard water mineral deposits and odors.",
          "Degrease cooktop burners, oven interior, microwave turntable, and toaster crumb trays.",
          "Audit kitchen inventory: verify full set of 8 plates, bowls, silverware, wine glasses, coffee mugs, and chef knives.",
          "Restock complimentary guest consumables: fresh sealed ground coffee, tea bags, sugar packets, cooking oil, and salt/pepper.",
          "Inspect cookware: discard and replace any non-stick frying pans with scratched or damaged Teflon coating."],
         "Kitchen Inventory Restock Sheet & Appliance Inspection Log", "VRMA Quality Standards & Local Health Code"),

        ("HVAC Smart Thermostat Regulation, Filter Cadence & Seasonal Winterization", "Facilities & Maintenance", "Weekly", "Property Maintenance Tech",
         ["Smart thermostat enterprise portal (Ecobee/Honeywell)", "High-efficiency MERV 11 HVAC furnace filters", "Infrared digital thermometer"],
         ["Program smart thermostat vacation eco-setpoints (65°F heating / 78°F cooling) during unreserved vacancy periods.",
          "Inspect air handler filter slot: replace MERV 11 pleated furnace filters every 60 days to protect compressor coils.",
          "Verify condensate drain line flows freely; pour 1 cup distilled white vinegar down drain line monthly to prevent algae clogs.",
          "For cold climate properties: execute winterization protocol if vacancy exceeds 7 days (set heating to 58°F, insulate hose bibbs).",
          "Inspect outdoor condenser unit: clear away fallen leaves, pine needles, and vegetation within 3-foot perimeter.",
          "Document filter change date and return air temperature delta (18°F - 22°F nominal split) in maintenance log."],
         "HVAC Maintenance Logbook & Filter Replacement Stamp", "ASHRAE Residential HVAC Guidelines & Energy Star Standards"),

        ("Post-Checkout Lockup, Utility Eco-Mode & Trash Bin Municipal Management", "Closing Operations", "Daily", "Turnover Lead",
         ["Property turnover checkout punchlist", "Trash & recycling municipal schedule", "Perimeter security deadbolt keys"],
         ["Verify all interior windows, balcony sliders, and garage access doors are closed and securely latched.",
          "Switch smart thermostat to automated 'Eco Vacancy' mode; ensure all interior lights, fans, and TVs are powered off.",
          "Bag all property trash in heavy-gauge 13-gallon contractor bags; deposit bags into exterior municipal rolling toters.",
          "Roll trash and recycling toters to street curb on designated city pickup collection morning; retrieve toters by evening.",
          "Conduct final exterior perimeter walkthrough: inspect patio furniture, propane grill valve (confirm shut off), and fire pit lid.",
          "Close front entrance door; verify smart lock motorized deadbolt throws completely into strike plate; lock key lockbox."],
         "Final Turnover Photo Log & Remote Lock Status Confirmation", "Municipal Code Enforcement & Property Security Standards")
    ]

    policies = [
        {"code": f"POL-{slug[:3].upper()}-01", "name": "Guest Safety, Life Safety Systems & Habitability Mandate", "category": "Property Safety & Habitability",
         "purpose": f"To guarantee that every managed property at {name} meets the highest standards of safety, habitability, and legal compliance.",
         "policyStatement": f"{name} is dedicated to uncompromising guest safety. Every managed residential unit must maintain active, tested smoke and carbon monoxide detectors, operational fire extinguishers, unblocked emergency egress pathways, and sanitized living conditions. Maintenance defects affecting guest health (loss of heat, water, electrical) must be triaged within 2 hours of report.",
         "enforcementProtocol": "Mandatory turnover safety verification on every reservation change. Neglecting safety checks results in contractor suspension and formal disciplinary counseling.",
         "statutoryLegalReference": "Uniform Housing Code; NFPA 101 Life Safety Code; Municipal Short-Term Rental Ordinances"},
        {"code": f"POL-{slug[:3].upper()}-02", "name": "Property Turnover Punctuality, Arrival Readiness & Cleaning Cadence", "category": "Operational Attendance",
         "purpose": f"To ensure 100% on-time property readiness for arriving guests across all scheduled reservation check-in windows at {name}.",
         "policyStatement": f"Turnover housekeepers and maintenance specialists at {name} must arrive at scheduled properties promptly at 10:00 AM checkout. All turnover cleaning, linen laundering, and photo staging must be completed and submitted to the PMS by 03:00 PM to guarantee smooth 04:00 PM guest check-in. Unplanned delays must be escalated to the Operations Manager immediately.",
         "enforcementProtocol": "Point-based attendance system: late property delivery results in reduction of assigned property routes and progressive performance counseling.",
         "statutoryLegalReference": "FLSA 29 U.S.C. § 201; Uniform Labor Standards"},
        {"code": f"POL-{slug[:3].upper()}-03", "name": "Good Neighbor Policy, Noise Decibel Compliance & Party Zero-Tolerance", "category": "Community Relations & Conduct",
         "purpose": f"To protect surrounding residential neighborhoods, prevent nuisance complaints, and ensure peaceful community relations for {name}.",
         "policyStatement": f"{name} enforces a strict zero-tolerance party policy across all properties. All guests must observe municipal quiet hours (10:00 PM to 08:00 AM). Property managers, cleaners, and contractors must conduct themselves courteously, observe local parking restrictions, and never block neighbor driveways or litter common grounds.",
         "enforcementProtocol": "Immediate eviction of violating guests. Staff members who ignore noise complaints or mismanage neighbor disputes face progressive disciplinary action.",
         "statutoryLegalReference": "Municipal Noise Control Ordinances; Nuisance Abatement Laws"},
        {"code": f"POL-{slug[:3].upper()}-04", "name": "Substance-Free Workplace, Drug-Free Driving & Property Safety", "category": "Health & Environmental Safety",
         "purpose": f"To guarantee that all turnover personnel operate machinery, vehicles, and cleaning chemicals with total sobriety at {name}.",
         "policyStatement": f"Operating vehicles, cleaning chemicals, or property machinery while impaired by alcohol, cannabis, or illicit narcotics is strictly forbidden at {name}. Staff members are prohibited from consuming any guest alcoholic beverages, food items, or consumables left in properties.",
         "enforcementProtocol": "Reasonable suspicion testing. Confirmed impairment on property or theft of guest consumables results in immediate termination of employment.",
         "statutoryLegalReference": "Drug-Free Workplace Act 41 U.S.C. § 8102; OSHA General Duty Clause 5(a)(1)"},
        {"code": f"POL-{slug[:3].upper()}-05", "name": "Equal Opportunity, Fair Housing & Anti-Discrimination Code", "category": "Civil Rights & Fair Housing",
         "purpose": f"To ensure non-discriminatory service delivery to all guests, property owners, and staff members at {name}.",
         "policyStatement": f"{name} adheres strictly to the Federal Fair Housing Act and Title VII Civil Rights protections. Discrimination against any guest, owner, or team member on the basis of race, color, national origin, religion, sex, familial status, or disability (including certified service animals) is strictly prohibited.",
         "enforcementProtocol": "Immediate executive investigation of discrimination allegations. Substantiated violations result in immediate termination of employment.",
         "statutoryLegalReference": "Fair Housing Act 42 U.S.C. § 3601; Americans with Disabilities Act (ADA); Title VII"},
        {"code": f"POL-{slug[:3].upper()}-06", "name": "At-Will Employment, Property Key Security & Non-Disclosure Agreement", "category": "Employment Governance & Security",
         "purpose": f"To affirm at-will employment while maintaining absolute security over client property keys, access codes, and financial records at {name}.",
         "policyStatement": f"Employment at {name} is at-will. Smart lock master codes, physical lockbox keys, owner contact details, and financial reservation data are confidential trade secrets. Sharing property door codes with unauthorized third parties or duplicating physical keys is strictly prohibited.",
         "enforcementProtocol": "Compromise of property access security mandates immediate rekeying at employee expense, disciplinary counseling, and potential termination.",
         "statutoryLegalReference": "Uniform Trade Secrets Act; State Employment Standards; At-Will Doctrine"}
    ]

    sops = []
    for idx, (title, dept, freq, resp, prereqs, steps, verif, reg) in enumerate(sop_titles):
        sops.append({
            "code": f"SOP-{slug[:3].upper()}-0{idx+1}",
            "title": f"{name} — {title}",
            "department": dept,
            "frequency": freq,
            "responsibility": resp,
            "objective": f"To standardize and guarantee high-reliability execution of {title.lower()} under property management industry standards.",
            "prerequisites": prereqs,
            "executionSteps": steps,
            "verificationStandard": verif,
            "regulatoryStandard": reg
        })

    return policies, sops
