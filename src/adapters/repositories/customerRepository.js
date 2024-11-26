const { prisma } = require('../../config/config');

const customerRepository = {

  getAll: async () => {
    return await prisma.customer.findMany();
  },
};

module.exports = customerRepository;
