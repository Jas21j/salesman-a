import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "operation-first-mile",
    operationName: "Operation First Mile",
    platform: "ASSAN",
    workType: "OPERATION",
    category: ["Property Operations", "Furniture Logistics"],
    timeline: "2021–2022",
    location: "Tallahassee, FL",
    clientIndustry: "Residential Property / Retail Furniture Partners",
    overview:
      "Operation First Mile was the foundational project that established Salesman Solutions' core operational model. Starting with a handyman and furniture delivery/installation service in Tallahassee, the operation scaled to serve 150+ homes and job sites across the city, working directly with local furniture retail partners.",
    problem:
      "Furniture stores needed reliable last-mile delivery and installation partners. Homeowners needed dependable, professional setup services. The existing market was fragmented — unreliable contractors, poor communication, no standardized process, and high re-delivery rates due to errors and damage.",
    approach:
      "Salesman Solutions developed a simple logistics and operations model: Pre-job client communication protocol (confirmation, timing, access notes), standardized job documentation (before/after photo records), route batching to maximize daily job capacity, and a post-job quality review process.",
    executionScope: [
      "Furniture delivery and assembly: beds, dressers, sofas, dining sets",
      "Appliance placement and basic connection",
      "Home repairs: drywall, fixtures, hardware",
      "TV mounting and AV placement",
      "General home setup and move-in preparation",
    ],
    outcomes: [
      "150+ jobs completed across Tallahassee",
      "On-time delivery rate improved from ~60% to 90%+ after logistics system implementation",
      "Zero recorded re-delivery incidents in final operational quarter",
      "Established repeat referral pipeline with 3 local furniture retail partners",
      "Built the template operational playbook used across all subsequent projects",
    ],
    lessons:
      "Standardizing job intake and communication before deployment eliminates the majority of friction in field operations. Documentation creates accountability and enables improvement between jobs.",
    metrics: [
      { value: "150+", label: "Jobs Completed" },
      { value: "90%", label: "On-Time Rate" },
      { value: "0", label: "Re-Deliveries (Final Quarter)" },
    ],
    gallery: [],
    status: "published",
  },
  {
    slug: "operation-livebetter",
    operationName: "Operation LiveBetter",
    platform: "ASSAN",
    workType: "OPERATION",
    category: ["Property Operations", "Luxury Residential"],
    timeline: "2022–2023",
    location: "Tallahassee, FL",
    clientIndustry: "Luxury Student Living / Property Management",
    overview:
      "A nine-month embedded operational support engagement with Landmark Properties at their Metropolitan luxury student living complex during its early-stage launch phase. Salesman Solutions was deployed to manage, resolve, and optimize the maintenance and operational issues that emerged during initial occupancy.",
    problem:
      "Metropolitan opened with high occupancy and immediate operational demand. The property management team was overwhelmed with maintenance tickets, resident issues, and facility failures. Systems were reactive rather than structured, with washer/dryer failures at scale, wall damage from move-in, plumbing failures, junk accumulation, and slow response times eroding resident satisfaction.",
    approach:
      "Salesman Solutions implemented a prioritized response triage system: Tier 1 (critical, same-day) for plumbing and appliance failures affecting habitability; Tier 2 (standard, 48hr) for wall damage and general repairs; Tier 3 (scheduled, weekly) for common area maintenance and junk removal cycles. Weekly operations logs were submitted to property management.",
    executionScope: [
      "Washer/dryer assessment, repair coordination, and replacement support",
      "Drywall and wall damage repair across multiple units",
      "Plumbing issue identification and contractor coordination",
      "Junk and debris removal (units, hallways, loading zones)",
      "Common area inspection and reset protocols",
      "Resident-facing maintenance communication support",
    ],
    outcomes: [
      "9 months of continuous operational support during highest-risk phase",
      "Maintenance response time reduced from 5+ days to under 48 hours for Tier 1",
      "Common area cleanliness score improved significantly per management feedback",
      "Zero recurring critical failures in final 3 months of engagement",
      "Established as a trusted operational partner for Landmark Properties",
    ],
    lessons:
      "Embedding early in a property launch is where the most value is created. Reactive maintenance is 3–5x more expensive than structured triage. Tiered priority systems transform chaotic demand into manageable workflows.",
    metrics: [
      { value: "9", label: "Months Embedded" },
      { value: "48hr", label: "Tier 1 Response Time" },
      { value: "0", label: "Recurring Failures (Final 3 Mo.)" },
    ],
    gallery: [],
    status: "published",
  },
  {
    slug: "operation-saatva",
    operationName: "Operation Saatva",
    platform: "ASSAN",
    workType: "OPERATION",
    category: ["Hospitality Supply", "Renovation Support"],
    timeline: "2023",
    location: "Tallahassee, FL",
    clientIndustry: "Hospitality / Hotel & Motel Sector",
    overview:
      "Operation Saatva was Salesman Solutions' entry into the hospitality sector — combining renovation and construction support with luxury product supply. The operation involved active engagement with hotel and hospitality brands including Wyndham, Hilton, and Marriott-adjacent properties across Tallahassee.",
    problem:
      "Hotels undergoing renovation face two simultaneous challenges: construction and renovation support with reliable contractors who understand hospitality timelines, and sourcing premium products that improve guest satisfaction scores. Most local vendors couldn't deliver both. Product quality was inconsistent and renovation timelines were missed.",
    approach:
      "Salesman Solutions positioned as a dual-capability hospitality partner with a Supply Chain Arm (authorized Saatva luxury mattress supply) and a Renovation Support Arm (construction labor coordination and oversight). Included vendor vetting, documentation of all deliveries and installs for brand compliance.",
    executionScope: [
      "Luxury mattress procurement and delivery to hotels and motels (30+ units)",
      "Guest room setup: bed frames, bedding placement, mattress installation",
      "Renovation construction support: coordination of labor for room renovations",
      "Vendor sourcing and oversight for specialty hospitality furnishings",
      "Marketing support: hospitality outreach to identify upgrade opportunities",
    ],
    outcomes: [
      "30+ luxury Saatva units placed across Tallahassee hospitality market",
      "Established as a prestige hospitality supplier in the region",
      "Renovation projects delivered on timeline across all engagements",
      "Built vendor relationships enabling future hospitality supply at scale",
      "Demonstrated systems-first approach outperforms transactional competitors",
    ],
    lessons:
      "Hospitality clients value reliability and brand alignment above price. Positioning as a premium supplier with process documentation opens doors that a pure price-competition approach cannot.",
    metrics: [
      { value: "30+", label: "Luxury Units Placed" },
      { value: "100%", label: "On-Time Delivery" },
      { value: "3", label: "Hotel Brand Relationships" },
    ],
    gallery: [],
    status: "published",
  },
  {
    slug: "operation-miss-scholastic",
    operationName: "Operation Miss Scholastic",
    platform: "IRIS",
    workType: "OPTIMIZATION",
    category: ["Digital Infrastructure", "Web Systems"],
    timeline: "2023–2024",
    location: "Remote",
    clientIndustry: "Education / Pageant Organization",
    overview:
      "Operation Miss Scholastic was Salesman Solutions' first full-scope digital infrastructure engagement — designing and building the complete digital presence for Miss Scholastic America, a pageant organization focused on empowering girls to excel in academic achievement.",
    problem:
      "Miss Scholastic America had no functional digital infrastructure. The organization lacked a public-facing website, an application and registration system, an administrative backend for managing contestants, and any structured digital presence to attract participants and sponsors.",
    approach:
      "Salesman Solutions applied its 6-step operational doctrine to the digital domain: Identify gaps (no website, no admin system, no application flow), standardize (information architecture and user flows), build technology layer (full web system on modern stack), optimize (admin dashboard for efficient management), document (full system documentation), and package (reusable framework).",
    executionScope: [
      "Public-facing website: brand, design, content architecture",
      "Landing page system: event-specific conversion pages",
      "Application & registration system: contestant sign-up and management",
      "Admin dashboard: backend for organization staff",
      "Brand integration: aligned digital presence with mission and identity",
    ],
    outcomes: [
      "Full digital infrastructure built from zero",
      "Public website launched on schedule",
      "Admin system enables staff to manage full contestant lifecycle without technical support",
      "Landing page system increases event registration conversion",
      "Established capability as a digital systems operator",
    ],
    lessons:
      "Digital infrastructure follows the same systems logic as physical operations — identify the gaps, build the workflow, add technology, document for handoff. The methodology is domain-agnostic.",
    metrics: [
      { value: "1", label: "Complete Digital System Built" },
      { value: "100%", label: "On-Schedule Delivery" },
      { value: "4", label: "Core Systems Delivered" },
    ],
    gallery: [],
    liveUrl: "https://missscholasticamerica.com",
    status: "published",
  },
];
