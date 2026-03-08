export type Platform = "IRIS" | "ASSAN";
export type WorkType = "OPERATION" | "OPTIMIZATION";

export type CaseStudy = {
  slug: string;
  operationName: string;
  platform: Platform;
  workType: WorkType;
  category: string[];
  timeline: string;
  location: string;
  clientIndustry: string;
  overview: string;
  problem: string;
  approach: string;
  executionScope: string[];
  outcomes: string[];
  lessons: string;
  metrics: { value: string; label: string }[];
  gallery: string[];
  videoUrl?: string;
  liveUrl?: string;
  status: "published" | "draft";
};

export type Stat = {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
};

export type TimelineEvent = {
  id: string;
  title: string;
  description: string;
  period?: string;
};

export type NavItem = {
  label: string;
  href: string;
};
