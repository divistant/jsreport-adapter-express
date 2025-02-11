import customerRepository from '../repositories/customerRepository.js'

const customerService = {
  getCustomersWithFullNameAndEmail: async () => {
    const customersData = await customerRepository.getAll()
    return customersData.map(data => ({
      fullName: `${data.first_name} ${data.last_name}`,
      email: data.email,
    }))
  },
}

export default customerService
