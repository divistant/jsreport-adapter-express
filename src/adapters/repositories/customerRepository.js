import prisma from '../../infrastructure/database/prismaClient.js'
const customerRepository = {
  getAll: async () => {
    return await prisma.customer.findMany()
  },
}
export default customerRepository
