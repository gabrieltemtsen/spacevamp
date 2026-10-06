import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Lead Generation and Bespoke Quotes
  inquiries: defineTable({
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    clientType: v.string(), // "residential" | "corporate" | "developer" | "hospitality" | "architect"
    serviceRequested: v.string(), // "interior_design" | "bespoke_furniture" | "turnkey_fitout" | "developer_package"
    location: v.string(), // "Abuja" | "Lagos" | "Port Harcourt" | "Other"
    projectScope: v.string(),
    budgetRange: v.optional(v.string()),
    targetTimeline: v.optional(v.string()),
    estimatedCost: v.optional(v.number()),
    selectedItems: v.optional(v.array(v.string())),
    notes: v.optional(v.string()),
    status: v.string(), // "new" | "contacted" | "quote_sent" | "closed"
    createdAt: v.number(),
  }),

  // Consultation Bookings
  consultations: defineTable({
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    preferredDate: v.string(),
    preferredTimeSlot: v.string(),
    consultationMode: v.string(), // "on_site" | "abuja_studio" | "virtual_video"
    spaceType: v.string(),
    propertyLocation: v.string(),
    notes: v.optional(v.string()),
    status: v.string(), // "pending" | "confirmed" | "completed" | "rescheduled"
    createdAt: v.number(),
  }),

  // Project Portfolio Items
  projects: defineTable({
    title: v.string(),
    slug: v.string(),
    category: v.string(), // "residential" | "corporate" | "hospitality" | "bespoke_furniture"
    clientType: v.string(),
    location: v.string(),
    completionYear: v.string(),
    heroImage: v.string(),
    galleryImages: v.array(v.string()),
    tagline: v.string(),
    description: v.string(),
    scope: v.array(v.string()),
    materialsUsed: v.array(v.string()),
    featured: v.boolean(),
  }),

  // Newsletter & Trade Partner Subscriptions
  subscriptions: defineTable({
    email: v.string(),
    interestType: v.string(), // "general" | "trade_architect" | "developer"
    createdAt: v.number(),
  }),
});
