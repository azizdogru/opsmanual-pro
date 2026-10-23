export interface SopProcedure {
  code: string;
  title: string;
  department: string;
  frequency: 'Daily' | 'Weekly' | 'Per Shift' | 'Onboarding' | 'Incident-Driven';
  responsibility: string;
  objective: string;
  steps: string[];
  safetyOrComplianceNote?: string;
}

export interface HandbookSection {
  title: string;
  summary: string;
  policies: Array<{
    name: string;
    description: string;
    rule: string;
  }>;
}

export interface IndustrySopKit {
  slug: string;
  name: string;
  industry: string;
  tagline: string;
  heroSubtitle: string;
  standardBadge: string; // e.g. "OSHA 1910 & At-Will Employment Ready"
  docPageCount: number;
  sopProcedureCount: number;
  checklistCount: number;
  averageOnboardingReductionDays: number;
  metaTitle?: string;
  metaDescription?: string;
  handbookSections: HandbookSection[];
  featuredSops: SopProcedure[];
  dailyChecklists: Array<{
    name: string;
    timeframe: string;
    items: string[];
  }>;
  notionTemplateUrl?: string;
}
