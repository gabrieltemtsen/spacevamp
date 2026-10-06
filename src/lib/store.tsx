"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface InquiryRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  clientType: string;
  serviceRequested: string;
  location: string;
  projectScope: string;
  budgetRange?: string;
  targetTimeline?: string;
  estimatedCost?: number;
  selectedItems?: string[];
  notes?: string;
  status: "new" | "contacted" | "quote_sent" | "closed";
  createdAt: number;
}

export interface ConsultationRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTimeSlot: string;
  consultationMode: string;
  spaceType: string;
  propertyLocation: string;
  notes?: string;
  status: "pending" | "confirmed" | "completed";
  createdAt: number;
}

interface AppContextType {
  inquiries: InquiryRecord[];
  consultations: ConsultationRecord[];
  addInquiry: (inquiry: Omit<InquiryRecord, "id" | "status" | "createdAt">) => Promise<string>;
  addConsultation: (consultation: Omit<ConsultationRecord, "id" | "status" | "createdAt">) => Promise<string>;
  updateInquiryStatus: (id: string, status: InquiryRecord["status"]) => void;
  updateConsultationStatus: (id: string, status: ConsultationRecord["status"]) => void;
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  isConsultationModalOpen: boolean;
  setIsConsultationModalOpen: (open: boolean) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  selectedProjectForModal: any | null;
  setSelectedProjectForModal: (project: any | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_INQUIRIES: InquiryRecord[] = [
  {
    id: "inq-1",
    fullName: "Chief Emeka Nwosu",
    email: "e.nwosu@horizonenergy.ng",
    phone: "+234 802 334 1190",
    clientType: "corporate",
    serviceRequested: "turnkey_fitout",
    location: "Maitama, Abuja",
    projectScope: "New corporate headquarters - 18 person boardroom, 4 executive suites, reception desk",
    budgetRange: "₦15,000,000 - ₦25,000,000",
    targetTimeline: "4 - 6 Weeks",
    estimatedCost: 19500000,
    selectedItems: ["Executive Boardroom Table", "Fluted Reception Desk", "4x Executive Desks & Credenzas"],
    notes: "Prefers dark walnut with brushed brass accents. Requires site inspection by Thursday.",
    status: "new",
    createdAt: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
  },
  {
    id: "inq-2",
    fullName: "Hajiya Maryam Sani",
    email: "m.sani@casaliving.com",
    phone: "+234 809 778 2210",
    clientType: "residential",
    serviceRequested: "bespoke_furniture",
    location: "Guzape, Abuja",
    projectScope: "Bespoke walk-in wardrobe and 12-seater solid Iroko dining suite for new villa",
    budgetRange: "₦5,000,000 - ₦10,000,000",
    targetTimeline: "2 - 4 Weeks",
    estimatedCost: 7800000,
    selectedItems: ["Solid Iroko Dining Suite", "Master Walk-in Wardrobe System"],
    notes: "Saw your Guzape Hill Villa project, loved the fluted wood details.",
    status: "quote_sent",
    createdAt: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
  }
];

const INITIAL_CONSULTATIONS: ConsultationRecord[] = [
  {
    id: "cons-1",
    fullName: "Arc. Folake Adeleke",
    email: "fadeleke@archstudio.ng",
    phone: "+234 813 550 4911",
    preferredDate: "2026-10-12",
    preferredTimeSlot: "11:00 AM",
    consultationMode: "abuja_studio",
    spaceType: "Boutique Serviced Apartments",
    propertyLocation: "Jabi Lake, Abuja",
    notes: "Looking to partner on 12 units of bespoke kitchenettes and bedroom headboard joinery.",
    status: "pending",
    createdAt: Date.now() - 1000 * 60 * 60 * 5,
  }
];

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(INITIAL_INQUIRIES);
  const [consultations, setConsultations] = useState<ConsultationRecord[]>(INITIAL_CONSULTATIONS);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<any | null>(null);

  // Hydrate from localStorage if present
  useEffect(() => {
    try {
      const savedInquiries = localStorage.getItem("spacevamp_inquiries");
      if (savedInquiries) {
        setInquiries(JSON.parse(savedInquiries));
      }
      const savedConsultations = localStorage.getItem("spacevamp_consultations");
      if (savedConsultations) {
        setConsultations(JSON.parse(savedConsultations));
      }
    } catch (e) {
      console.warn("Storage hydration", e);
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    try {
      localStorage.setItem("spacevamp_inquiries", JSON.stringify(inquiries));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem("spacevamp_consultations", JSON.stringify(consultations));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [consultations]);

  const addInquiry = async (data: Omit<InquiryRecord, "id" | "status" | "createdAt">): Promise<string> => {
    const newRecord: InquiryRecord = {
      ...data,
      id: "inq-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
      status: "new",
      createdAt: Date.now(),
    };
    setInquiries((prev) => [newRecord, ...prev]);

    // Optional Convex sync if live
    if (process.env.NEXT_PUBLIC_CONVEX_URL) {
      try {
        // dynamic import or fetch convex mutation
      } catch (err) {
        console.error("Convex sync skipped", err);
      }
    }

    return newRecord.id;
  };

  const addConsultation = async (data: Omit<ConsultationRecord, "id" | "status" | "createdAt">): Promise<string> => {
    const newRecord: ConsultationRecord = {
      ...data,
      id: "cons-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
      status: "pending",
      createdAt: Date.now(),
    };
    setConsultations((prev) => [newRecord, ...prev]);
    return newRecord.id;
  };

  const updateInquiryStatus = (id: string, status: InquiryRecord["status"]) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const updateConsultationStatus = (id: string, status: ConsultationRecord["status"]) => {
    setConsultations((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  return (
    <AppContext.Provider
      value={{
        inquiries,
        consultations,
        addInquiry,
        addConsultation,
        updateInquiryStatus,
        updateConsultationStatus,
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        isConsultationModalOpen,
        setIsConsultationModalOpen,
        isAdminOpen,
        setIsAdminOpen,
        selectedProjectForModal,
        setSelectedProjectForModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
