const prisma = require("../../infrastructure/database/prismaClient");

const customerRepository = {

  getAll: async () => {
    return await prisma.customer.findMany();
  },
};

module.exports = customerRepository;
