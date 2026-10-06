import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createInquiry = mutation({
  args: {
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    clientType: v.string(),
    serviceRequested: v.string(),
    location: v.string(),
    projectScope: v.string(),
    budgetRange: v.optional(v.string()),
    targetTimeline: v.optional(v.string()),
    estimatedCost: v.optional(v.number()),
    selectedItems: v.optional(v.array(v.string())),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const inquiryId = await ctx.db.insert("inquiries", {
      ...args,
      status: "new",
      createdAt: Date.now(),
    });
    return inquiryId;
  },
});

export const getInquiries = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50;
    const inquiries = await ctx.db
      .query("inquiries")
      .order("desc")
      .take(limit);
    return inquiries;
  },
});

export const updateInquiryStatus = mutation({
  args: {
    id: v.id("inquiries"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});
