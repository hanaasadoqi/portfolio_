// // import { PrismaClient } from '@prisma/client'

// // const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }

// // let prisma: PrismaClient

// // prisma = globalForPrisma.prisma ?? new PrismaClient({
// //   log: ['query', 'info', 'warn', 'error'],
// // })

// // if (process.env.NODE_ENV === 'production') {
// //   prisma = new PrismaClient({
// //     log: ['warn', 'error'],
// //     datasources: {
// //       db: {
// //         url: process.env.DATABASE_URL,
// //       },
// //     },
// //   })
// // } else {
// //   if (!global.prisma) {
// //     global.prisma = new PrismaClient({
// //       log: ['query', 'warn', 'error'],
// //       datasources: {
// //         db: {
// //           url: process.env.DATABASE_URL,
// //         },
// //       },
// //     })
// //   }
// //   prisma = global.prisma
// // }

// // export default prisma

// import { PrismaClient } from '@prisma/client'

// /**
//  * Extending the global object to include a type for the PrismaClient instance.
//  * This ensures TypeScript recognizes our global prisma property.
//  */
// declare global {
//   // `global` object will hold an instance of PrismaClient in development
//   var prisma: PrismaClient | undefined
// }

// // Declare the prisma client
// let prisma: PrismaClient

// if (process.env.NODE_ENV === 'production') {
//   // In production, we want to create a new PrismaClient instance for every usage.
//   prisma = new PrismaClient({
//     log: ['warn', 'error'],
//     datasources: {
//       db: {
//         url: process.env.DATABASE_URL, // Explicitly setting the URL for clarity.
//       },
//     },
//   })
// } else {
//   // In development, add PrismaClient to the `global` object to prevent multiple instances
//   if (!global.prisma) {
//     global.prisma = new PrismaClient({
//       log: ['query', 'info', 'warn', 'error'], // More extensive logging in development
//       datasources: {
//         db: {
//           url: process.env.DATABASE_URL,
//         },
//       },
//     })
//   }

//   prisma = global.prisma
// }

// export default prisma



import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['warn', 'error'],
  })
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    })
  }
  prisma = global.prisma
}

export default prisma
