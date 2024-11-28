class Customer {
    constructor({ id, first_name, last_name, email, createdAt, updatedAt }) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
  
module.exports = Customer;
  