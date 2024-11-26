const customerRepository = require('../repositories/customerRepository');
const Customer = require('../../entities/customer');

const customerService = {
  getCustomersWithFullNameAndEmail: async () => {
    const customersData = await customerRepository.getAll();

    return customersData.map(data => ({
      fullName: `${data.firstName} ${data.lastName}`,
      email: data.email,
    }));
  },

};

module.exports = customerService;