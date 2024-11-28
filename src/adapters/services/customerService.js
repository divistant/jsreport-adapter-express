const customerRepository = require('../repositories/customerRepository');
const Customer = require('../../entities/customer');

const customerService = {
  getCustomersWithFullNameAndEmail: async () => {
    const customersData = await customerRepository.getAll();

    return customersData.map(data => ({
      fullName: `${data.first_name} ${data.last_name}`,
      email: data.email,
    }));
  },

};

module.exports = customerService;