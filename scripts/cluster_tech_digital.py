# Technology, Software, Agencies & Digital Cluster Generator

def generate_tech_digital(meta):
    name = meta["name"]
    slug = meta["slug"]
    role = meta["role"]
    badge = meta["badge"]

    sop_titles = [
        ("Secure Employee Onboarding, Hardware MDM Enrollment & FIDO2 MFA Provisioning", "IT Security & People Ops", "Per Shift", "IT Security Administrator",
         ["Company-managed encrypted laptop (FileVault/BitLocker enabled)", "Hardware security key (YubiKey) or enterprise authenticator", "Signed PIIA (Proprietary Info & Inventions Agreement)"],
         ["Enroll new hire device into Mobile Device Management (MDM - Jamf/Kandji); enforce automatic OS patching and screen lock after 5 minutes.",
          "Create centralized SSO identity (Okta/Google Workspace) using role-based access control (RBAC) under least-privilege principles.",
          "Mandate hardware security key (FIDO2) or biometric MFA setup prior to granting access to internal code repositories or production environments.",
          "Invite employee to enterprise password manager (1Password); verify generation of unique 24-character master passphrase.",
          "Conduct mandatory security briefing covering phishing simulations, prompt injection defenses, and zero-trust remote work rules.",
          "Obtain digital signature on Acceptable Use Policy and close onboarding IT ticket in Jira/Linear."],
         "MDM Enrollment Confirmation & SSO Security Audit Log", "SOC 2 Type II CC6.1 & CIS Critical Security Controls"),

        ("Git Pull Request Review, Automated CI/CD Gates & Static Code Analysis", "Engineering Operations", "Daily", "Senior Software Engineer / Tech Lead",
         ["Authorized GitHub/GitLab repository branch access", "Automated CI pipeline (GitHub Actions/CircleCI)", "Static application security testing (SAST - Snyk/SonarQube)"],
         ["Enforce branch protection rules on 'main' and 'production' branches requiring at least one independent senior peer review approval.",
          "Verify all automated CI test suites (unit, integration, and end-to-end) pass with 100% success rate prior to review.",
          "Inspect pull request diff against OWASP Top 10 vulnerabilities (SQL injection, XSS, insecure deserialization, broken auth).",
          "Verify zero plain-text API secrets or private keys are committed in code; run automated secret scanning (TruffleHog/GitGuardian).",
          "Ensure PR includes database schema migrations with safe backward compatibility and zero downtime locks.",
          "Approve PR and trigger squash-and-merge to staging branch for automated canary deployment testing."],
         "GitHub Pull Request Approval & Green CI/CD Pipeline Build Log", "SOC 2 CC7.1 / CC7.2 & ISO 27001 Annex A.14"),

        ("Production Incident Severity Classification, On-Call Escalation & Post-Mortem", "Site Reliability Engineering (SRE)", "Incident-Driven", "On-Call Incident Commander",
         ["PagerDuty / Opsgenie on-call alert console", "Dedicated incident Slack war room (#incident-live)", "APM dashboards (Datadog/New Relic/Sentry)"],
         ["Acknowledge on-call alert within 5 minutes; classify incident severity (Sev-1 Critical Outage, Sev-2 Degraded Service, Sev-3 Minor Defect).",
          "For Sev-1/2: open dedicated Slack war room, initiate incident bridge call, and assign Incident Commander and Communications Lead.",
          "Post external customer status update to official status page within 15 minutes of Sev-1 confirmation.",
          "Execute targeted mitigation: rollback recent deployment release, spin up emergency container capacity, or enable read-only database failover.",
          "Verify service recovery: monitor error rate (5xx errors <0.05%) and p95 API latency returning to nominal baseline for 30 minutes.",
          "Schedule blameless post-mortem retrospective within 48 hours; document root-cause analysis (RCA) and assign remediation Jira tickets."],
         "Jira Incident Post-Mortem Ticket & Five-Whys Root Cause Analysis", "SOC 2 CC7.3 Incident Management Standard"),

        ("Data Privacy Compliance, Customer PII De-Identification & Subject Access Requests (DSAR)", "Data Governance & Legal", "Incident-Driven", "Data Protection Officer (DPO)",
         ["Customer Data Platform / Database administration console", "DSAR verification workflow system", "256-bit AES database encryption audit tool"],
         ["Authenticate customer identity requesting data deletion or export (GDPR / CCPA / CPRA) using secure email token challenge.",
          "Query customer master UUID across production databases, analytics warehouses (Snowflake/BigQuery), and third-party SaaS vendors (Stripe/Intercom).",
          "Execute automated data export script compiling all customer personal data into encrypted JSON/CSV deliverable within 30 days.",
          "For Right-to-be-Forgotten requests: trigger cryptographic erasure / pseudonymization script replacing PII with irreversible hash values.",
          "Retain required statutory financial transaction records (invoices, tax logs) in locked archive under statutory 7-year legal exemption.",
          "Send formal statutory completion confirmation to consumer and file audit trail in privacy compliance repository."],
         "DSAR Fulfillment Audit Certificate Signed by DPO", "GDPR Article 17 (Right to Erasure) & CCPA/CPRA § 1798.105"),

        ("Third-Party Vendor Risk Assessment, SOC 2 Review & API Token Rotation", "IT Governance & Security", "Monthly", "Security & Compliance Lead",
         ["Vendor risk tier assessment matrix", "SOC 2 Type II audit report archive", "Cloud IAM secret management vault (AWS KMS/Vault)"],
         ["Conduct formal vendor security evaluation before subscribing to any new SaaS tool handling company or customer data.",
          "Review vendor's SOC 2 Type II report, ISO 27001 certification, and Data Processing Agreement (DPA) containing Standard Contractual Clauses.",
          "Classify vendor risk tier: Tier 1 (Hosts Customer PII / Production Systems), Tier 2 (Internal Business Data), Tier 3 (Public Marketing).",
          "Execute monthly scheduled rotation of all production API tokens, database passwords, and third-party webhook signing secrets.",
          "De-provision obsolete API tokens immediately and verify zero broken integrations in staging environment.",
          "Log vendor security reviews and token rotation timestamps in SOC 2 compliance evidence vault."],
         "Vendor Risk Assessment Scorecard & Secret Rotation Ledger", "SOC 2 CC6.4 / CC6.8 & ISO 27001 Annex A.15"),

        ("Customer Support Ticket Triaging, Bug Verification & Enterprise SLA Cadence", "Customer Success & Support", "Daily", "Support Operations Manager",
         ["Zendesk / Intercom support ticketing desk", "Internal Jira bug escalation queue", "Contractual SLA tracking dashboard"],
         ["Monitor incoming customer tickets against contractual SLA tiers: Enterprise (1-hour first response), Pro (4 hours), Basic (12 hours).",
          "Reproduce customer-reported software issues in staging environment; gather user session logs, browser console errors, and device specs.",
          "If bug is confirmed: file standardized Jira defect ticket including reproduction steps, expected vs actual behavior, and severity rating.",
          "Tag ticket with engineering sprint label; communicate temporary workaround to customer within established SLA response window.",
          "Conduct daily morning triage standup with engineering lead to prioritize customer-blocking defects.",
          "Notify customer upon production hotfix deployment and request customer confirmation before closing support ticket."],
         "Zendesk SLA Compliance Dashboard (Target >98%)", "Contractual Service Level Agreements (SLA)"),

        ("Quarterly Disaster Recovery Simulation, Database Snapshot & Region Failover Test", "Infrastructure & DevOps", "Weekly", "Lead DevOps Engineer",
         ["Multi-region cloud infrastructure (AWS/GCP)", "Point-in-time recovery (PITR) automated snapshot console", "Simulated DR testing runbook"],
         ["Verify automated daily database backups and transactional WAL logs are replicating to secondary geographic cloud region.",
          "Conduct quarterly scheduled simulated region outage: spin up staging database cluster from secondary region snapshot.",
          "Measure Recovery Time Objective (RTO): verify database restore completes in <30 minutes (contractual limit).",
          "Measure Recovery Point Objective (RPO): verify transactional data loss is <5 minutes of simulated disaster timestamp.",
          "Execute automated synthetic test suite against restored secondary database cluster to verify data integrity and schema validity.",
          "Document DR test results, RTO/RPO timings, and engineering takeaways in annual SOC 2 business continuity binder."],
         "Annual Disaster Recovery Exercise Verification Report", "SOC 2 CC9.1 Business Continuity & ISO 22301"),

        ("Employee Offboarding, Immediate Credential Revocation & Secure Remote Device Wipe", "People Operations & IT", "Incident-Driven", "People Ops / IT Director",
         ["Centralized SSO admin console (Google/Okta)", "MDM remote lock & wipe utility", "Exit interview & asset return form"],
         ["Upon formal separation notification: coordinate exact termination timestamp with HR and departing employee's direct manager.",
          "Execute automated offboarding script in SSO at designated minute: instantly revoke active browser sessions and reset master passwords.",
          "Deprovision access across GitHub repositories, AWS IAM accounts, cloud databases, Slack, Google Drive, and password managers.",
          "Trigger MDM remote enterprise wipe on company-issued laptop to erase all local source code and customer data caches.",
          "Provide prepaid insured return packaging for hardware retrieval; log asset serial number upon physical receipt.",
          "Archive employee email mailbox and redirect critical communications to designated department supervisor for 60 days."],
         "Offboarding IT Audit Checklist Signed by Security Officer", "SOC 2 CC6.3 & ISO 27001 Annex A.8")
    ]

    policies = [
        {"code": f"POL-{slug[:3].upper()}-01", "name": "Information Security, Access Control & Password Management Policy", "category": "Information Security & Data Protection",
         "purpose": f"To establish robust administrative, technical, and physical safeguards for {name}'s technology infrastructure and client data.",
         "policyStatement": f"All employees, contractors, and technical personnel operating at {name} must utilize unique enterprise single-sign-on credentials protected by mandatory multi-factor authentication (MFA). Passwords must meet minimum complexity standards (minimum 16 characters or passphrases). Sharing credentials, writing down access keys, or disabling security agent software on company machines is strictly prohibited.",
         "enforcementProtocol": "Continuous security logging. Credential sharing or intentional security agent bypass triggers immediate session termination, formal written counseling, and mandatory security retraining under SOC 2 CC6.1 up to termination for cause.",
         "statutoryLegalReference": "SOC 2 Trust Services Criteria CC6.1; ISO/IEC 27001 Annex A.9; NIST SP 800-63B"},
        {"code": f"POL-{slug[:3].upper()}-02", "name": "Acceptable Use of Company Assets, Remote Work & BYOD Governance", "category": "IT & Operational Governance",
         "purpose": f"To protect company intellectual property, customer databases, and hardware assets across remote and hybrid working environments at {name}.",
         "policyStatement": f"Company-issued workstations and cloud accounts provided by {name} are strictly for authorized business operations. Personal browsing of high-risk websites, installing unapproved third-party software, or transferring company source code to personal cloud storage (Google Drive, Dropbox) is strictly forbidden. Remote workers must connect via encrypted home Wi-Fi and never use open public networks without VPN.",
         "enforcementProtocol": "Automated MDM threat alerts. Exfiltration of company data or unapproved software installation mandates immediate hardware isolation, data audit, and disciplinary separation.",
         "statutoryLegalReference": "Computer Fraud and Abuse Act (CFAA) 18 U.S.C. § 1030; Defend Trade Secrets Act"},
        {"code": f"POL-{slug[:3].upper()}-03", "name": "Customer Data Privacy, Confidentiality & Non-Disclosure Code", "category": "Data Privacy & Confidentiality",
         "purpose": f"To safeguard customer confidential records, trade secrets, and ensure strict compliance with global privacy regulations at {name}.",
         "policyStatement": f"All customer data processed or stored by {name} is proprietary and confidential. Employees must never access production customer accounts or customer database records without a logged customer support ticket or explicit engineering authorization. Customer PII must never be downloaded to local desktop drives or exported into unencrypted spreadsheets.",
         "enforcementProtocol": "Automated database query monitoring. Unauthorized inspection or export of customer data constitutes gross misconduct and results in immediate termination and potential civil litigation.",
         "statutoryLegalReference": "GDPR (EU) 2016/679; CCPA/CPRA Cal. Civ. Code § 1798.100; FTC Act Section 5"},
        {"code": f"POL-{slug[:3].upper()}-04", "name": "Core Collaboration Hours, Remote Punctuality & Communication SLAs", "category": "Operational Attendance",
         "purpose": f"To foster high-velocity collaboration, team accountability, and predictable customer support responsiveness at {name}.",
         "policyStatement": f"Employees at {name} must observe established team core collaboration hours (e.g. 10:00 AM - 3:00 PM in local team timezone). Remote team members are expected to maintain active presence on internal communication channels (Slack/Teams) during scheduled hours and respond to internal mentions within 2 business hours. Scheduled sprint ceremonies and customer meetings are mandatory.",
         "enforcementProtocol": "Progressive performance counseling: 1st unexcused missed sprint ceremony verbal reminder; 2nd notice written performance improvement plan (PIP); continued unavailability results in separation.",
         "statutoryLegalReference": "FLSA 29 U.S.C. § 201; Uniform Labor Standards"},
        {"code": f"POL-{slug[:3].upper()}-05", "name": "Equal Opportunity, Anti-Harassment & Inclusive Culture Code", "category": "Workplace Conduct & Civil Rights",
         "purpose": f"To guarantee a safe, equitable, and psychologically secure working environment across remote, hybrid, and physical spaces at {name}.",
         "policyStatement": f"{name} provides equal employment opportunities to all individuals without regard to race, gender, sexual orientation, disability, age, or religion. Harassment, cyber-bullying, micro-aggressions, or discriminatory remarks in Slack, email, video calls, or code review comments will not be tolerated. Retaliation against any employee voicing concerns is strictly prohibited.",
         "enforcementProtocol": "Confidential investigation conducted by People Ops within 48 hours. Substantiated harassment results in immediate disciplinary action up to and including termination.",
         "statutoryLegalReference": "Title VII Civil Rights Act 1964; ADEA; ADA Title I; EEOC Regulations"},
        {"code": f"POL-{slug[:3].upper()}-06", "name": "At-Will Employment, Intellectual Property Assignment & Progressive Discipline", "category": "Employment Governance & IP",
         "purpose": f"To define clear performance expectations while ensuring all software code, inventions, and patents belong exclusively to {name}.",
         "policyStatement": f"Employment at {name} is strictly at-will. All software source code, algorithms, architectural designs, product documentation, and technical inventions conceived during employment belong solely and exclusively to {name} under the signed Proprietary Information and Inventions Agreement (PIIA). Standard performance issues are addressed via progressive coaching and formal 30-day PIP.",
         "enforcementProtocol": "Failure to attain PIP benchmarks results in at-will employment separation. IP infringement or withholding code repositories triggers immediate legal injunctive relief.",
         "statutoryLegalReference": "U.S. Copyright Act 17 U.S.C. § 101 (Work for Hire Doctrine); Uniform Trade Secrets Act"}
    ]

    sops = []
    for idx, (title, dept, freq, resp, prereqs, steps, verif, reg) in enumerate(sop_titles):
        sops.append({
            "code": f"SOP-{slug[:3].upper()}-0{idx+1}",
            "title": f"{name} — {title}",
            "department": dept,
            "frequency": freq,
            "responsibility": resp,
            "objective": f"To standardize and guarantee high-reliability execution of {title.lower()} under SOC 2 and security best practices.",
            "prerequisites": prereqs,
            "executionSteps": steps,
            "verificationStandard": verif,
            "regulatoryStandard": reg
        })

    return policies, sops
