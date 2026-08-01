export type DocumentType = "PDF" | "XLSX" | "DOCX";

export interface DataRoomDocument {
  title: string;
  category: string;
  description: string;
  filename: string;
  type: DocumentType;
  /** Rendered as the featured document above the library instead of in the grid. */
  featured?: boolean;
}

export interface DocumentGroup {
  category: string;
  eyebrow: string;
  documents: DataRoomDocument[];
}

const documentPath = (filename: string) =>
  `/documents/${encodeURIComponent(filename)}`;

export const getDocumentUrl = (document: DataRoomDocument) =>
  documentPath(document.filename);

export const documentGroups: DocumentGroup[] = [
  {
    category: "Company Overview",
    eyebrow: "Orientation",
    documents: [
      {
        title: "Pitch Deck",
        category: "Company Overview",
        description:
          "The 11-slide investor deck — problem, solution, team, market sizing, product, traction, go-to-market, business model, and competition & moat.",
        filename: "CompliVibe_Pitch_Deck.pdf",
        type: "PDF",
        featured: true,
      },
      {
        title: "One-Pager",
        category: "Company Overview",
        description:
          "High-level company overview, vision, customer pain, platform, business model, and current traction.",
        filename: "One-pager.pdf",
        type: "PDF",
      },
      {
        title: "Company & Product Report",
        category: "Company Overview",
        description:
          "The consolidated picture — positioning, product, traction, market, model, forward plans, and team.",
        filename: "CompliVibe_Company_Report.pdf",
        type: "PDF",
      },
      {
        title: "Startup Thesis",
        category: "Company Overview",
        description:
          "Why CompliVibe can become the AI-native trust infrastructure layer.",
        filename: "CompliVibe_Startup_Thesis.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Investment Materials",
    eyebrow: "Core diligence",
    documents: [
      {
        title: "Investment Document",
        category: "Investment Materials",
        description:
          "Full investor memo covering market, product, traction, GTM, competition, team, risks, and financing.",
        filename: "CompliVibe_Investment_Document.pdf",
        type: "PDF",
      },
      {
        title: "Business Model",
        category: "Investment Materials",
        description:
          "Revenue streams, subscription tiers, risk-based pricing, and the expansion mechanics behind recurring revenue.",
        filename: "CompliVibe_Business_Model.pdf",
        type: "PDF",
      },
      {
        title: "Investor FAQ",
        category: "Investment Materials",
        description:
          "Investor-safe answers for company, product, traction, competition, financing, legal, and risk questions.",
        filename: "CompliVibe_Data_Room_FAQ.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Traction & Proof",
    eyebrow: "Commercial signal",
    documents: [
      {
        title: "Traction",
        category: "Traction & Proof",
        description:
          "Current proof, data-room readiness, next 90-day plan, and investor takeaway.",
        filename: "CompliVibe_Traction.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Financials",
    eyebrow: "Ownership & planning",
    documents: [
      {
        title: "Cap Table",
        category: "Financials",
        description: "Current and pro-forma ownership model.",
        filename: "CompliVibe_Cap_Table.xlsx",
        type: "XLSX",
      },
      {
        title: "Unit Economics",
        category: "Financials",
        description:
          "LTV:CAC, payback period, gross margin, and retention per tier — blended and stress-tested.",
        filename: "CompliVibe_Unit_Economics.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Use of Funds",
    eyebrow: "Capital plan",
    documents: [
      {
        title: "Use of Funds",
        category: "Use of Funds",
        description:
          "Capital allocation, hiring plan, runway, and funded milestones.",
        filename: "Use-of-Fund.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Product & Technical",
    eyebrow: "Platform depth",
    documents: [
      {
        title: "Verified Feature Catalog",
        category: "Product & Technical",
        description:
          "249 test-backed, fully operational capabilities across 19 product domains, in plain language.",
        filename: "CompliVibe_Verified_Feature_Catalog.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Strategy & Planning",
    eyebrow: "Direction",
    documents: [
      {
        title: "Two-Year Strategic Plan",
        category: "Strategy & Planning",
        description:
          "A 24-month phased plan to define and own the AI Trust category, with operating principles and milestones.",
        filename: "CompliVibe_TwoYear_Plan.pdf",
        type: "PDF",
      },
      {
        title: "Five-Year Vision",
        category: "Strategy & Planning",
        description:
          "The long-horizon thesis for becoming foundational AI trust infrastructure — the bets, pillars, and end state.",
        filename: "CompliVibe_FiveYear_Vision.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Team",
    eyebrow: "People",
    documents: [
      {
        title: "Team Bios",
        category: "Team",
        description: "Founder, COO/CFO, and early team background.",
        filename: "CompliVibe_Team_Bios.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Governance & Operations",
    eyebrow: "How the company runs",
    documents: [
      {
        title: "Operations Manual",
        category: "Governance & Operations",
        description:
          "The platform, customer, and business operating layers — who owns what, the metrics, and the review cadence.",
        filename: "CompliVibe_Operations_Manual.pdf",
        type: "PDF",
      },
      {
        title: "Policy Manual",
        category: "Governance & Operations",
        description:
          "Company-wide governance, security, privacy, and conduct policies with named owners and annual review.",
        filename: "CompliVibe_Policy_Manual.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Legal / Advisory",
    eyebrow: "Governance",
    documents: [
      {
        title: "Advisor Agreement",
        category: "Legal / Advisory",
        description: "Advisor relationship and confidentiality agreement.",
        filename: "Advisor_Agreement_Shubham_Raj.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "Founder IP Assignment",
    eyebrow: "Legal ownership",
    documents: [
      {
        title: "Founder IP Assignment — Adarsh Kumar Sharma",
        category: "Legal / Founder IP",
        description:
          "Founder intellectual property assignment document for Adarsh Kumar Sharma.",
        filename: "Founder_IP_Assignment_Adarsh.pdf",
        type: "PDF",
      },
      {
        title: "Founder IP Assignment — Saransh Jha",
        category: "Legal / Founder IP",
        description:
          "Founder intellectual property assignment document for Saransh Jha.",
        filename: "Founder_IP_Assignment_Saransh_Jha.pdf",
        type: "PDF",
      },
    ],
  },
];

export const allDocuments = documentGroups.flatMap(
  (group) => group.documents,
);

export const featuredDocument =
  allDocuments.find((document) => document.featured) ?? null;
