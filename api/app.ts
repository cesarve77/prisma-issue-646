import { settings, use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'

// Enables the Prisma plugin
use(prisma())


settings.change({
  server: {
    port: 4040,
  },
})
