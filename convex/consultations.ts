import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const bookConsultation = mutation({
  args: {
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    preferredDate: v.string(),
    preferredTimeSlot: v.string(),
    consultationMode: v.string(),
    spaceType: v.string(),
    propertyLocation: v.string(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const consultationId = await ctx.db.insert("consultations", {
      ...args,
      status: "pending",
      createdAt: Date.now(),
    });
    return consultationId;
  },
});

export const getConsultations = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50;
    return await ctx.db
      .query("consultations")
      .order("desc")
      .take(limit);
  },
});

export const updateConsultationStatus = mutation({
  args: {
    id: v.id("consultations"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});
