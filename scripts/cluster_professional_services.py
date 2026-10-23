# Professional Services, Architecture & Accounting Practice Cluster Generator

def generate_professional_services(meta):
    name = meta["name"]
    slug = meta["slug"]
    role = meta["role"]
    badge = meta["badge"]

    sop_titles = [
        ("Client Intake, Conflict of Interest Search & Engagement Letter Execution", "Client Onboarding & Compliance", "Daily", "Managing Partner / Senior Associate",
         ["Master client conflict-of-interest database", "Standardized engagement letter template with clear fee schedule", "Encrypted digital signature platform (DocuSign/PandaDoc)"],
         ["Perform electronic conflict check querying prospective client name, corporate entity, and opposing parties against master client register.",
          "Verify prospective client scope of engagement aligns with firm licensure, capacity, and professional competence standards.",
          "Draft formal Engagement Letter defining specific scope of professional services, deliverables, fee structure, and retainer requirements.",
          "Include statutory limitation of liability, dispute resolution arbitration clauses, and document retention policies.",
          "Send Engagement Letter for digital execution; verify receipt of executed agreement and upfront retainer funds before commencing billable work.",
          "Open new client billing matter in practice management system (Karbon/TaxDome/Deltek) and assign engagement team members."],
         "Countersigned Engagement Letter & Cleared Conflict Check in Practice System", "AICPA Code of Professional Conduct & State Professional Licensing Rules"),

        ("Confidential Client Document Management, 256-Bit Portal Security & Retention Schedule", "Information Security & Records", "Daily", "IT Director / Records Administrator",
         ["256-bit AES encrypted client portal (ShareFile/SmartVault)", "Firm document retention schedule (7-year statutory rule)", "Certified secure document destruction bins"],
         ["Enforce strict client communication rule: sensitive financial records, tax returns, and architectural schematics must be transmitted via encrypted portal.",
          "Prohibit sending unencrypted client tax returns, Social Security Numbers, or bank account numbers via standard email.",
          "File electronic client workpapers in standardized directory hierarchy with role-based access permissions restricted to engagement team.",
          "Maintain firm Clean Desk Policy: lock all physical client paper files and tax documents in fire-rated cabinets at end of day.",
          "Execute annual document retention audit: flag records exceeding statutory 7-year retention schedule for partner destruction approval.",
          "Dispose of expired physical paper files via NAID-certified secure shredding service; obtain formal Certificate of Destruction."],
         "Portal 2FA Security Audit & NAID Certificate of Destruction", "FTC Safeguards Rule & AICPA Confidential Client Information Rule"),

        ("Work-in-Progress (WIP) Tracking, Billable Hour Verification & Client Invoicing", "Practice Management & Billing", "Weekly", "Billing Specialist / Managing Partner",
         ["Practice management time-tracking console", "Standardized billable task code list", "Client engagement fee agreement"],
         ["Require all professional staff to log billable and non-billable client time entries daily in practice management software.",
          "Review weekly Work-in-Progress (WIP) report: identify projects exceeding estimated hours or approaching fixed-fee caps.",
          "Audit time descriptions for clarity: ensure narrative clearly explains specific research, analysis, drafting, or consultation performed.",
          "Generate pre-billing worksheets; route to engagement lead partner for write-up/write-down adjustments and draft invoice approval.",
          "Issue finalized client invoices with clear line-item descriptions, payment terms (Net 15/30), and ACH/Credit Card payment link.",
          "Monitor accounts receivable aging report weekly; initiate partner courtesy calls for invoices exceeding 45 days past due."],
         "Monthly Billing Realization Report (Target >92% Realization)", "GAAP Accounting & Fair Professional Billing Standards"),

        ("Quality Assurance Peer Review, Multi-Tier Deliverable Sign-Off & Delivery", "Technical Quality Control", "Daily", "Quality Control Reviewer / Partner",
         ["Standardized technical review checklist", "Two-tier preparer/reviewer digital sign-off log", "Final deliverable transmittal letter template"],
         ["Mandate two-tier review process on all client work: primary preparation by associate, comprehensive quality review by senior partner.",
          "Reviewer verifies mathematical accuracy, statutory tax code compliance (Internal Revenue Code), or building code conformity (IBC).",
          "Cross-reference source documents against final workpaper schedules; ensure all open review queries are formally resolved.",
          "Affix professional digital signature and firm seal to finalized tax returns, audit reports, or architectural drawings.",
          "Package deliverable with formal transmittal letter explaining key conclusions, statutory filing deadlines, and client action items.",
          "Archive permanent final review copy in client master vault with immutable timestamp."],
         "Completed QC Checklist with Dual Partner Signatures", "AICPA Statements on Quality Control Standards (SQCS) & AIA Standards"),

        ("Client Communication Protocol, Response SLAs & Critical Escalation Cadence", "Client Relations", "Daily", "Account Manager / Client Lead",
         ["Practice communication tracking software", "Priority escalation matrix", "Secure client messaging application"],
         ["Acknowledge all client emails and telephone inquiries within 4 business hours (or same-day response window).",
          "For technical inquiries requiring research: communicate estimated resolution timeframe to client within 24 hours.",
          "If client expresses dissatisfaction with service pacing or deliverables: escalate immediately to Managing Partner within 2 hours.",
          "Conduct documented Partner de-escalation meeting with client; establish mutually agreed corrective action milestone schedule.",
          "Document all material verbal conversations and telephone agreements with follow-up written confirmation emails.",
          "Maintain complete communication logs in client CRM profile for liability defense documentation."],
         "Client Response SLA Dashboard (>95% Same-Day Response)", "Professional Liability Standards & Client Relations Guidelines"),

        ("Client Escrow / Trust Account Management & Retainer Fund Reconciliation", "Financial Governance", "Monthly", "Chief Financial Officer / Controller",
         ["Dedicated IOLTA / Client Trust bank account", "Three-way trust reconciliation spreadsheet", "State regulatory trust accounting manual"],
         ["Deposit all unearned client retainer advances directly into dedicated Client Trust / Escrow bank account.",
          "Strictly prohibit commingling of firm operational funds with client trust monies (immediate disciplinary and legal violation).",
          "Transfer funds from trust account to firm operating account only after earned work is completed and invoice delivered to client.",
          "Execute monthly mandatory Three-Way Trust Reconciliation: reconcile bank statement balance, client trust ledger, and checkbook journal.",
          "Investigate and resolve any trust account variance immediately; maintain zero negative balances across individual client ledgers.",
          "Retain monthly three-way reconciliation packages signed by Managing Partner in compliance archive for 7 years."],
         "Signed Monthly Three-Way Trust Reconciliation Package", "State Bar & State Board of Accountancy Trust Accounting Rules"),

        ("Professional Liability Notice, Potential Claim Escalation & Risk Management", "Legal & Risk Governance", "Incident-Driven", "Managing Partner / Risk Counsel",
         ["Errors & Omissions (E&O) professional liability policy", "Firm Incident Notification Report template", "Designated outside legal counsel contact roster"],
         ["Identify potential risk event: client threat of lawsuit, notice of formal IRS audit penalty, or catastrophic design defect.",
          "Immediately instruct all engagement staff to cease informal communications regarding dispute; issue strict litigation hold on all files.",
          "Preserve all electronic records, emails, workpapers, draft drawings, and text messages; disable automatic document deletion policies.",
          "Provide immediate written notification of potential claim to firm's professional liability insurance carrier within required policy window.",
          "Consult with carrier-appointed defense counsel prior to admitting liability, offering financial concessions, or signing settlement agreements.",
          "Conduct internal post-incident review to identify operational root causes and update firm quality control procedures."],
         "Formal Claim Notice Receipt from Professional Liability Carrier", "E&O Insurance Policy Requirements & State Licensure Rules"),

        ("Physical Office Opening/Closing, Clean Desk Sweep & Fire-Rated Vault Lockup", "Physical Security & Facility", "Daily", "Office Manager / Closing Lead",
         ["UL-rated Class 350 fire-resistant document vault", "Access control keycards and perimeter security code", "Nightly office closing checklist"],
         ["Conduct evening walkthrough across all open partner offices, associate cubicles, conference rooms, and print stations.",
          "Enforce Clean Desk Policy: gather any loose client tax folders, architectural blueprints, or invoices left on desks.",
          "Store all active physical client files inside locked fire-rated document vaults; spin mechanical combination dial.",
          "Inspect conference rooms: erase dry-erase whiteboards containing confidential project budgets or client diagrams.",
          "Verify high-speed network scanners and production copiers have cleared memory buffers and zero paper originals left on glass.",
          "Arm commercial motion alarm system and lock heavy tempered glass entrance doors with high-security deadbolts."],
         "Nightly Clean Desk Audit & Vault Lockup Sign-Off Sheet", "AICPA Security Guidelines & Physical Data Protection Rules")
    ]

    policies = [
        {"code": f"POL-{slug[:3].upper()}-01", "name": "Client Confidentiality, Non-Disclosure & Professional Ethics Mandate", "category": "Professional Ethics & Confidentiality",
         "purpose": f"To uphold strict professional confidentiality, regulatory compliance, and fiduciary ethics at {name}.",
         "policyStatement": f"All partners, professional staff, and contractors at {name} must maintain absolute confidentiality regarding client financial, tax, and proprietary business affairs. Client information must never be discussed outside the firm or in public settings. Disclosing client confidential data without explicit written consent is a violation of professional licensing standards.",
         "enforcementProtocol": "Breach of client confidentiality results in immediate suspension, formal investigation, disciplinary termination for cause, and mandatory reporting to state professional regulatory boards.",
         "statutoryLegalReference": "AICPA Code of Professional Conduct Rule 1.700; State Board of Accountancy Rules; Circular 230 § 10.20"},
        {"code": f"POL-{slug[:3].upper()}-02", "name": "Data Security, Clean Desk Policy & Encrypted Communications Code", "category": "Information Security",
         "purpose": f"To safeguard electronic and physical client records against data breaches and unauthorized disclosure at {name}.",
         "policyStatement": f"{name} enforces a mandatory Clean Desk Policy and 256-bit encryption standard for all electronic communications containing client sensitive records. Employees must lock workstations when departing desks and store physical client workpapers in fire-rated locking cabinets. Transmitting unencrypted Social Security Numbers or bank details via email is strictly forbidden.",
         "enforcementProtocol": "Monthly unannounced security audits. Physical or electronic security lapses mandate formal counseling and progressive disciplinary reprimands.",
         "statutoryLegalReference": "FTC Safeguards Rule 16 C.F.R. Part 314; Gramm-Leach-Bliley Act (GLBA)"},
        {"code": f"POL-{slug[:3].upper()}-03", "name": "Billing Integrity, Timekeeping Accuracy & Conflict of Interest", "category": "Billing Integrity & Ethics",
         "purpose": f"To guarantee honest, transparent billing practices and eliminate conflicts of interest in client representations at {name}.",
         "policyStatement": f"All billable time recorded at {name} must accurately reflect actual professional services performed. Padding hours, billing multiple clients for simultaneous travel, or fabricating timesheet narratives is strictly prohibited. Staff must disclose any personal, financial, or familial relationships with clients or competing parties immediately.",
         "enforcementProtocol": "Quarterly billing realization audits. Willful fraudulent time entry results in immediate termination of employment for gross ethical misconduct.",
         "statutoryLegalReference": "AICPA Integrity and Objectivity Rule 1.100; State Licensing Ethics"},
        {"code": f"POL-{slug[:3].upper()}-04", "name": "Workplace Punctuality, Hybrid Schedule & Client SLA Standards", "category": "Operational Attendance",
         "purpose": f"To maintain high-availability client support and meet statutory tax filing and design submission deadlines at {name}.",
         "policyStatement": f"Employees at {name} must observe designated office hours and core hybrid availability windows. Professional staff are expected to respond to client inquiries within established firm SLAs. Unplanned absences during peak statutory filing seasons (e.g. tax season, design milestone sprints) must be reported directly to Managing Partner.",
         "enforcementProtocol": "Documented attendance tracking: unexcused absence during critical filing deadlines leads to progressive performance counseling.",
         "statutoryLegalReference": "FLSA 29 U.S.C. § 201; Uniform Labor Standards"},
        {"code": f"POL-{slug[:3].upper()}-05", "name": "Equal Opportunity, Anti-Harassment & Civil Rights Protection", "category": "Workplace Conduct & Civil Rights",
         "purpose": f"To provide a dignified, merit-based, and harassment-free working environment for all employees at {name}.",
         "policyStatement": f"{name} prohibits discrimination and harassment based on race, gender, sexual orientation, disability, age, or religion. Unprofessional remarks, unwelcome romantic advances, bullying, or retaliation against employees raising ethical or safety concerns will not be tolerated under any circumstance.",
         "enforcementProtocol": "Confidential investigation conducted within 48 hours of complaint. Substantiated misconduct results in immediate employment termination.",
         "statutoryLegalReference": "Title VII Civil Rights Act 1964; EEOC Regulations"},
        {"code": f"POL-{slug[:3].upper()}-06", "name": "At-Will Employment, Non-Solicitation & Workpaper Ownership Doctrine", "category": "Employment Governance & Property",
         "purpose": f"To affirm at-will employment while establishing firm ownership over all professional workpapers and client relationships at {name}.",
         "policyStatement": f"Employment at {name} is at-will. All analytical spreadsheets, CAD files, tax workpapers, client lists, and research memos prepared by employees belong exclusively to {name}. Departing employees agree that for a period of 12 months, they will not directly solicit or induce firm clients to transfer their business to another firm.",
         "enforcementProtocol": "Intentional theft of firm workpapers or client solicitation triggers immediate legal injunction, damages, and board complaints.",
         "statutoryLegalReference": "Uniform Trade Secrets Act; AICPA Ownership of Workpapers Rule; At-Will Doctrine"}
    ]

    sops = []
    for idx, (title, dept, freq, resp, prereqs, steps, verif, reg) in enumerate(sop_titles):
        sops.append({
            "code": f"SOP-{slug[:3].upper()}-0{idx+1}",
            "title": f"{name} — {title}",
            "department": dept,
            "frequency": freq,
            "responsibility": resp,
            "objective": f"To standardize and guarantee high-reliability execution of {title.lower()} under professional licensing ethics.",
            "prerequisites": prereqs,
            "executionSteps": steps,
            "verificationStandard": verif,
            "regulatoryStandard": reg
        })

    return policies, sops
