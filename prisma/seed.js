const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.customer.createMany({
    data: [
      { first_name: 'John', last_name: 'Doe', email: 'johndoe@example.com' },
      { first_name: 'Jane', last_name: 'Smith', email: 'janesmith@example.com' },
      { first_name: 'Alice', last_name: 'Johnson', email: 'alicejohnson@example.com' },
      { first_name: 'Bob', last_name: 'Brown', email: 'bobbrown@example.com' },
      { first_name: 'Carol', last_name: 'White', email: 'carolwhite@example.com' },
    ],
  });
}

main()
  .then(() => console.log('Data seeded'))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
