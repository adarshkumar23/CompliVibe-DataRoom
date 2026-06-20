export type DocumentType = "PDF" | "XLSX";

export interface DataRoomDocument {
  title: string;
  category: string;
  description: string;
  filename: string;
  type: DocumentType;
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
    eyebrow: "Start here",
    documents: [
      {
        title: "One-Pager",
        category: "Company Overview",
        description:
          "High-level company overview, vision, customer pain, platform, business model, and current traction.",
        filename: "One-pager.pdf",
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
        title: "Financial Model",
        category: "Financials",
        description: "Runway, hiring, operating assumptions, and funding plan.",
        filename: "CompliVibe_Financial_Model.xlsx",
        type: "XLSX",
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
];

export const allDocuments = documentGroups.flatMap(
  (group) => group.documents,
);
