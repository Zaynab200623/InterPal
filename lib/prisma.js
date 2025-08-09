import { PrismaClient } from "@prisma/client";

// Create a global variable to store the Prisma client
const globalForPrisma = globalThis;

// Create or reuse the Prisma client
export const db = globalForPrisma.prisma || new PrismaClient({
  log: ['query'], // Optional: Add logging for debugging
});

// In development, store the client globally to prevent multiple instances
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}