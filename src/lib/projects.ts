export type ProjectImage = { src: string; alt: string; caption: string };
export type Project = {
  id: string; title: string; date: string; category: "Web" | "IoT";
  summary: string; tags: string[]; features: string[]; images: ProjectImage[];
  galleryNote?: string; demo?: string;
};

const gallery = (id: string, name: string, highlight: string): ProjectImage[] => [
  { src: `/assets/projects/${id}/login.webp`, alt: `${name} sign-in page`, caption: "Sign in" },
  { src: `/assets/projects/${id}/dashboard.webp`, alt: `${name} dashboard with fictional demonstration data`, caption: "Dashboard" },
  { src: `/assets/projects/${id}/highlight.webp`, alt: `${name}: ${highlight}, using fictional demonstration data`, caption: highlight },
];

export const projects: Project[] = [
  {
    id: "healthos", title: "HealthOS — Multi-Module Healthcare Operations System", date: "Sept 2026", category: "Web",
    summary: "A role-based, audit-logged platform connecting healthcare operations from patient management to insurance claims.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Playwright"],
    features: ["Patient management, appointment scheduling, and clinical records", "Billing, laboratory, pharmacy, and insurance claim workflows", "Role-based access and append-only audit logging", "Automated end-to-end testing with Playwright"],
    images: gallery("healthos", "HealthOS", "Patient management"),
  },
  {
    id: "student-alerts", title: "Student Arrival & Departure Notification System", date: "Sept 2026", category: "Web",
    summary: "Staff-recorded gate events derive real-time campus status and keep families informed through secure Web Push alerts.",
    tags: ["React", "TypeScript", "Node.js", "Web Push", "Playwright"],
    features: ["Authorized staff logging of arrival and departure gate events", "Real-time campus status derived from recorded events", "Role-based dashboards for admins, staff, parents, and students", "Secure Web Push alerts and Playwright end-to-end tests"],
    images: gallery("student-alerts", "SPCF Alerts", "Staff gate station"),
  },
  {
    id: "deatlas", title: "DE Atlas — Knowledge Base Platform", date: "Sept 2026", category: "Web",
    summary: "An isolated knowledge workspace with freshness-aware search and reviewed content changes for each organization.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Playwright"],
    features: ["Multi-tenant data isolation across knowledge workspaces", "Staleness-weighted search ranking", "Change Request review-and-merge workflow", "Living FAQ generation from search gaps and end-to-end tests"],
    images: gallery("deatlas", "DE Atlas", "Change Request review"),
  },
  {
    id: "kita", title: "KITA — Bookkeeping SaaS", date: "Aug 2026", category: "Web",
    summary: "A multi-tenant bookkeeping platform with a structured ledger, financial reporting, and traceable entries.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Playwright"],
    features: ["Three-tier role-based access and full per-tenant data isolation", "Postable and reversible ledger entries with an audit log", "Automated financial reports", "AI-assisted receipt scanning and Playwright end-to-end tests"],
    images: gallery("kita", "KITA", "Structured ledger"),
  },
  {
    id: "tala", title: "TALA — Job Application Pipeline Manager", date: "Apr 2026", category: "Web",
    summary: "A full-stack job application tracker bringing applications, interviews, and recruiter contacts into one workspace.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "JWT", "Playwright"],
    features: ["Drag-and-drop Kanban application pipeline", "Interview scheduling and recruiter contact management", "Application statistics dashboard", "JWT-based authentication and Playwright end-to-end tests"],
    images: gallery("tala", "TALA", "Kanban application pipeline"),
  },
  {
    id: "beehive", title: "IoT-Based Beehive Monitoring and Feedback System", date: "Oct 2025 – Mar 2026", category: "IoT",
    summary: "A Hostinger-deployed PHP and MySQL web application connecting ESP32 monitoring hardware with remote data management.",
    tags: ["PHP", "MySQL", "REST APIs", "ESP32", "IoT", "Solar-Battery Power"],
    features: ["Full-stack web application deployed on Hostinger", "REST APIs and CRUD operations", "ESP32 real-time data integration and IoT hardware assembly", "Solar-battery power supply"],
    images: [], galleryNote: "Project photos and dashboard screenshots are not available yet.",
  },
];
