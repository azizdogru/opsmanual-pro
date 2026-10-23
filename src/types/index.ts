export interface DetailedPolicy {
  code: string;
  name: string;
  category: string;
  purpose: string;
  policyStatement: string;
  enforcementProtocol: string;
  statutoryLegalReference?: string; // e.g. "FLSA 29 U.S.C. § 201; Title VII Civil Rights Act"
}

export interface DetailedSopProcedure {
  code: string;
  title: string;
  department: string;
  frequency: 'Daily' | 'Weekly' | 'Per Shift' | 'Monthly' | 'Incident-Driven';
  responsibility: string;
  objective: string;
  prerequisites: string[];
  executionSteps: string[];
  verificationStandard: string;
  regulatoryStandard: string; // e.g. "OSHA 29 CFR 1910.1200 / FDA Food Code 3-501"
}

export interface OnboardingMilestone {
  dayWindow: string; // e.g. "Day 1", "Week 1", "Day 30", "Day 60", "Day 90"
  learningObjective: string;
  deliverables: string[];
  evaluationCriterion: string;
}

export interface IndustrySopKit {
  slug: string;
  name: string;
  industry: string;
  tagline: string;
  heroSubtitle: string;
  standardBadge: string;
  verifiedPageCount: number; // The actual, true page count!
  sopProcedureCount: number;
  checklistCount: number;
  averageOnboardingReductionDays: number;
  metaTitle?: string;
  metaDescription?: string;
  companyPolicies: DetailedPolicy[];
  comprehensiveSops: DetailedSopProcedure[];
  onboardingRoadmap: OnboardingMilestone[];
  dailyChecklists: Array<{
    name: string;
    shiftTime: string;
    responsibleRole: string;
    tasks: string[];
  }>;
  notionHubArchitecture: {
    workspaceName: string;
    databases: string[];
    dashboardViews: string[];
  };
}
