let db: any = null

try {
  const { PrismaClient } = require('@prisma/client')
  const globalForPrisma = globalThis as unknown as {
    prisma: any
  }
  db = globalForPrisma.prisma ?? new PrismaClient({ log: ['query'] })
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
} catch {
  // Graceful fallback for builds without active Prisma schema
  db = {
    newsletterSubscription: {
      create: async ({ data }: { data: any }) => {
        console.log('[Newsletter Subscription Received]', data)
        return { id: 'mock-id', ...data }
      },
    },
    contactSubmission: {
      create: async ({ data }: { data: any }) => {
        console.log('[Contact Submission Received]', data)
        return { id: 'mock-id', ...data }
      },
    },
  }
}

export { db }