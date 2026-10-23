# Trades, Contracting, Construction & Field Services Cluster Generator

def generate_trades_contracting(meta):
    name = meta["name"]
    slug = meta["slug"]
    role = meta["role"]
    badge = meta["badge"]

    sop_titles = [
        ("Fleet Service Vehicle Pre-Trip Inspection, Inventory & Tool Calibration", "Field Operations", "Daily", "Field Crew Lead / Lead Technician",
         ["Department of Transportation (DOT) Pre-Trip checklist", "Calibrated diagnostic gauges / multimeter", "Class 2 High-Visibility reflective vest & ANSI safety boots"],
         ["Conduct exterior 360-degree vehicle inspection: inspect tire pressure (cold PSI), tread depth (>4/32 inch), and lug nuts.",
          "Check vehicle fluid levels: engine oil, transmission fluid, brake reservoir, and radiator coolant.",
          "Verify vehicle lighting systems: headlights, hazard flashers, turn signals, and high-intensity strobe beacons.",
          "Audit onboard tool inventory: verify calibration dates on digital manifolds, combustion analyzers, or diagnostic scanners.",
          "Ensure onboard fire extinguisher is fully charged (gauge in green) and OSHA 25-person first aid kit is fully stocked.",
          "Complete digital Daily Vehicle Inspection Report (DVIR) in fleet management app prior to dispatch."],
         "Digital DVIR Submission & Dispatch Fleet Sign-Off", "FMCSA 49 CFR § 396.11 & OSHA 1910.178"),

        ("Job Site Hazard Assessment (JSA), Tailgate Safety Meeting & PPE Verification", "Safety & Compliance", "Daily", "Project Superintendent / Safety Officer",
         ["Job Safety Analysis (JSA) form tablet", "Personal Protective Equipment: Hard hat ANSI Z89.1, eye shield Z87.1, cut-resistant gloves", "First aid & eyewash station"],
         ["Walk job site perimeter prior to unloading equipment; identify overhead power lines, unstable excavations, and slip hazards.",
          "Conduct mandatory 5-minute morning Tailgate Safety Meeting with all technicians and sub-trades.",
          "Review specific daily high-hazard activities: working at heights, electrical tie-in, trench entry, or chemical applications.",
          "Verify each crew member wears required PPE: hard hat, steel-toe boots, eye protection, and high-visibility apparel.",
          "Identify designated site emergency coordinator, nearest hospital route, and emergency muster point.",
          "Obtain physical or digital signatures from all on-site personnel on the Daily JSA acknowledgment form."],
         "Completed Daily JSA Form with All Crew Signatures", "OSHA 1926.20 / 1926.21 General Safety Standards"),

        ("Lockout / Tagout (LOTO) Energy Isolation & Zero Voltage / Pressure Verification", "Safety & Technical Execution", "Incident-Driven", "Certified Journeyman Technician",
         ["OSHA-compliant standardized red lockout hasps & personal padlocks", "Durable standardized lockout danger tags with technician photo/phone", "Calibrated true-RMS digital multimeter or pressure gauge"],
         ["Notify customer facility manager and affected equipment operators that energy isolation is being initiated.",
          "Identify all energy sources supplying target equipment: electrical, pneumatic, hydraulic, gas, or thermal.",
          "Shut down equipment using standard operating controls; disengage primary disconnect breakers or main valves.",
          "Apply personal red safety padlock and completed danger tag directly to disconnect handle or ball valve lockout clasp.",
          "Dissipate residual stored energy: bleed hydraulic/air lines, discharge capacitor banks, and block mechanical counterweights.",
          "Perform verification test: verify zero voltage with calibrated multimeter or zero PSI on pressure gauge before touching conductors."],
         "LOTO Execution Verification Tag & Zero-Energy Log", "OSHA 29 CFR 1910.147 (The Control of Hazardous Energy)"),

        ("Fall Protection Systems, Ladder Safety & Working at Heights Protocol", "Safety & Field Operations", "Daily", "Safety Lead / Lead Installer",
         ["ANSI Z359 compliant full-body harness with trauma relief straps", "Shock-absorbing lanyard with double-locking carabiners", "Certified 5,000-lb anchor point connector"],
         ["Mandatory fall protection rule: any work performed at or above 6 feet (residential roofing, commercial ladders, solar arrays) requires active fall protection.",
          "Inspect full-body harness, D-rings, webbing, and stitching for frays, burns, or prior fall deployment indications.",
          "Erect extension ladders extending at least 3 feet past roof edge; secure ladder top with tie-off strap to prevent slippage.",
          "Maintain proper 4:1 ladder ratio (1 foot out for every 4 feet of vertical height); keep 3 points of contact during ascent.",
          "Fasten anchor bracket into structural framing truss using manufacturer-approved screws; connect shock-absorbing lanyard to dorsal D-ring.",
          "Immediately remove any fall arrest equipment from service if subjected to impact loading during a fall incident."],
         "Pre-Use Fall Protection Inspection Tag & Anchor Point Sign-Off", "OSHA 29 CFR 1926.501 & 1926.502"),

        ("Hazardous Material Handling, Chemical Safety Data Sheets (SDS) & Spill Containment", "Environmental Health & Safety", "Per Shift", "Field Hazardous Materials Coordinator",
         ["Mobile digital SDS library on smartphone/tablet", "Emergency chemical spill containment kit (absorbent pads & booms)", "Chemical-resistant nitrile/neoprene gloves & splash goggles"],
         ["Verify Safety Data Sheet (SDS) is accessible for all truck-mounted chemicals (refrigerants, solvents, acid cleaners, fertilizers).",
          "Ensure all secondary portable containers, spray bottles, and cans have clear GHS hazard labels affixed.",
          "Wear chemical splash goggles and impervious gloves when transferring, mixing, or applying hazardous compounds.",
          "In event of chemical spill: immediately halt source, deploy absorbent spill containment booms, and ventilate enclosed area.",
          "Collect saturated absorbent material into heavy-gauge chemical disposal bags; never hose chemical runoff into municipal storm drains.",
          "Document chemical quantity, location, and containment timestamp in company environmental incident log."],
         "Chemical Inventory Audit Sheet & SDS Digital Verification", "OSHA 1910.1200 Hazard Communication Standard"),

        ("Scope Verification, Work Order Execution & Customer Change Order Authorization", "Client Relations & Field Billing", "Daily", "Lead Service Tech / Estimator",
         ["Mobile Field Service Management software (ServiceTitan/Housecall Pro)", "Detailed scope of work agreement", "Customer digital signature tablet"],
         ["Greet customer promptly at scheduled arrival window; present company photo ID badge and professional uniform.",
          "Conduct physical pre-work walkthrough with customer; confirm reported defect, installation layout, and existing property conditions.",
          "If unforeseen mechanical, electrical, or structural obstacles arise: immediately halt work before incurring additional costs.",
          "Draft formal Change Order detailing revised scope, required parts, labor hours, and additional fee adjustment.",
          "Review Change Order with customer and obtain countersigned digital authorization prior to executing additional work.",
          "Photograph completed installation showing clean work area, plumb pipe/duct runs, and operating gauge readings."],
         "Countersigned Digital Change Order & Completion Photo Set", "Uniform Commercial Code & State Contracting Licensing Board"),

        ("Emergency Job Site Incident, Injury Reporting & Workers' Comp Escalation", "Human Resources & Safety", "Incident-Driven", "Lead Supervisor / Safety Director",
         ["OSHA Form 301 (Injury and Illness Incident Report)", "Pre-authorized occupational urgent care clinic roster", "Post-accident drug/alcohol screening kit"],
         ["Provide immediate first aid care to injured worker; call 911 immediately for severe bleeding, head trauma, or electrical shock.",
          "Notify Operations Manager and Company Safety Director within 15 minutes of any incident requiring professional medical attention.",
          "Escort injured employee to designated in-network occupational health clinic for evaluation and required post-accident screening.",
          "Secure incident scene immediately: photograph equipment, tools, scaffolding, and environmental conditions; preserve physical evidence.",
          "Interview crew witnesses and complete written witness statement forms within 2 hours.",
          "Submit completed OSHA Form 301 and state First Report of Injury (FROI) to workers' compensation carrier within 24 hours."],
         "OSHA Form 301 & Workers' Comp First Report of Injury", "OSHA 29 CFR 1904 & State Workers' Compensation Acts"),

        ("End-of-Day Service Vehicle Restock, Scrap Recovery & Shop Security Lockup", "Warehouse & Inventory", "Daily", "Shop Supervisor / Fleet Closer",
         ["Warehouse inventory barcode scanner", "Locking scrap copper/brass reclamation cage", "Facility master keys & alarm credentials"],
         ["Unload recovered scrap metal (copper pipe, brass fittings, aluminum coils, old compressors); weigh and deposit into locked scrap bins.",
          "Restock vehicle core inventory bins with fast-moving truck stock (capacitors, breakers, fittings, filters) for next-day dispatch.",
          "Plug in all rechargeable cordless power tool battery banks into commercial charging racks; verify thermal safety.",
          "Lock service van cargo doors; park trucks inside secured perimeter fence with rear doors backed against walls to deter theft.",
          "Conduct final walkthrough of fabrication shop: verify welding gas cylinders are shut and capped, power tools unplugged.",
          "Arm commercial perimeter alarm system and lock main vehicle gate with heavy-duty security padlock."],
         "Truck Restock Manifest & Warehouse Closing Checklist", "Commercial Property Loss Prevention Standards")
    ]

    policies = [
        {"code": f"POL-{slug[:3].upper()}-01", "name": "Occupational Safety, Mandatory PPE & OSHA Standard Compliance", "category": "Workplace Health & Safety",
         "purpose": f"To guarantee zero preventable workplace injuries, protect field crews, and enforce absolute OSHA compliance at {name}.",
         "policyStatement": f"Safety is the primary operating priority at {name}. All field technicians, apprentices, and subcontractors must wear mandatory personal protective equipment (PPE) including ANSI-rated eye protection, steel-toe boots, hard hats, and cut-resistant gloves on every active job site. Technicians are legally empowered and required to issue an immediate 'Stop-Work Order' if unsafe site conditions exist.",
         "enforcementProtocol": "Daily unannounced field safety audits. Failure to wear mandatory PPE or bypassing fall protection/LOTO results in immediate work suspension, written safety violation notice, and mandatory 4-hour OSHA safety retraining.",
         "statutoryLegalReference": "OSHA 29 CFR 1926 (Construction) & 1910 (General Industry); General Duty Clause 5(a)(1)"},
        {"code": f"POL-{slug[:3].upper()}-02", "name": "Fleet Vehicle Operation, Motor Vehicle Records & Safe Driving Mandate", "category": "Fleet & Transportation Safety",
         "purpose": f"To ensure the safe, legal, and courteous operation of company service vehicles on public roadways by {name}.",
         "policyStatement": f"Operating a company service vehicle at {name} is a conditional privilege. Drivers must hold an active, valid driver's license and maintain an acceptable motor vehicle record (MVR). Texting, handheld mobile phone use, or reckless driving while operating company vehicles is strictly prohibited. GPS telematics monitor speed, rapid acceleration, and harsh braking.",
         "enforcementProtocol": "Continuous MVR monitoring. Excessive speeding or handheld phone infractions result in vehicle suspension, written reprimand, and revocation of take-home truck privileges.",
         "statutoryLegalReference": "DOT FMCSA Regulations; State Motor Vehicle Codes"},
        {"code": f"POL-{slug[:3].upper()}-03", "name": "Substance-Free Workplace, Zero-Tolerance & Random Drug Testing", "category": "Health & Environmental Safety",
         "purpose": f"To prevent catastrophic job site accidents caused by drug or alcohol impairment in safety-sensitive trade roles at {name}.",
         "policyStatement": f"{name} enforces a 100% drug and alcohol-free workplace. Operating service vehicles, ladders, power tools, or hazardous equipment while impaired by alcohol, cannabis, or illicit drugs is strictly prohibited. Employees are subject to pre-employment, reasonable suspicion, and mandatory post-accident drug and alcohol screenings.",
         "enforcementProtocol": "Refusal to test or confirmed positive drug screen following an accident results in immediate termination of employment for cause.",
         "statutoryLegalReference": "Drug-Free Workplace Act 41 U.S.C. § 8102; DOT 49 CFR Part 40"},
        {"code": f"POL-{slug[:3].upper()}-04", "name": "Dispatch Punctuality, Arrival Windows & Travel Time Compensation", "category": "Operational Attendance & Wages",
         "purpose": f"To guarantee on-time arrival for customer appointments and ensure 100% lawful wage compensation under the FLSA at {name}.",
         "policyStatement": f"Technicians must arrive at the shop or first customer dispatch location by their scheduled call time. Unplanned absences must be communicated to the Dispatch Supervisor by 06:00 AM. In accordance with the Fair Labor Standards Act, non-exempt technicians are fully compensated for all travel time between job sites and warehouse restock stops.",
         "enforcementProtocol": "Tardy point tracking system. Repeated unexcused late arrivals or missed customer time windows result in formal counseling and reassignment to non-lead duties.",
         "statutoryLegalReference": "FLSA 29 U.S.C. § 201; Portal-to-Portal Act 29 U.S.C. § 254"},
        {"code": f"POL-{slug[:3].upper()}-05", "name": "Equal Opportunity, Anti-Harassment & Customer Site Respect Code", "category": "Workplace Conduct & Civil Rights",
         "purpose": f"To ensure a professional, non-discriminatory, and respectful environment on job sites and in customer homes for {name}.",
         "policyStatement": f"{name} maintains zero tolerance for discrimination, sexual harassment, or verbal slurs on job sites, in company vehicles, or inside customer homes. Inappropriate comments to homeowners, vulgar music, offensive signage on trucks, or retaliatory actions against co-workers will result in immediate termination.",
         "enforcementProtocol": "Immediate investigation of customer complaints or employee reports. Verified misconduct results in immediate employment separation.",
         "statutoryLegalReference": "Title VII Civil Rights Act 1964; EEOC Regulations"},
        {"code": f"POL-{slug[:3].upper()}-06", "name": "At-Will Employment, Trade Secrets & Tool Custody Agreement", "category": "Employment Governance & Property",
         "purpose": f"To affirm at-will employment while establishing clear accountability for expensive company tooling and diagnostic equipment at {name}.",
         "policyStatement": f"Employment at {name} is at-will. Company-provided power tools, recovery machines, and diagnostic instruments remain the sole property of {name}. Technicians are responsible for the reasonable care, security, and maintenance of issued tools. Unexplained tool loss or willful tool abandonment will be investigated and addressed through progressive discipline.",
         "enforcementProtocol": "Quarterly truck tool inventory audits. Disciplinary actions follow established progressive framework leading to separation for repeated tool negligence.",
         "statutoryLegalReference": "Uniform Employment Standards; At-Will Employment Doctrine"}
    ]

    sops = []
    for idx, (title, dept, freq, resp, prereqs, steps, verif, reg) in enumerate(sop_titles):
        sops.append({
            "code": f"SOP-{slug[:3].upper()}-0{idx+1}",
            "title": f"{name} — {title}",
            "department": dept,
            "frequency": freq,
            "responsibility": resp,
            "objective": f"To standardize and guarantee high-reliability execution of {title.lower()} under OSHA safety standards.",
            "prerequisites": prereqs,
            "executionSteps": steps,
            "verificationStandard": verif,
            "regulatoryStandard": reg
        })

    return policies, sops
