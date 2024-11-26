const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.customer.createMany({
    data: [
      { firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
      { firstName: 'Jane', lastName: 'Smith', email: 'janesmith@example.com' },
      { firstName: 'Alice', lastName: 'Johnson', email: 'alicejohnson@example.com' },
      { firstName: 'Bob', lastName: 'Brown', email: 'bobbrown@example.com' },
      { firstName: 'Carol', lastName: 'White', email: 'carolwhite@example.com' },
    ],
  });
}

main()
  .then(() => console.log('Data seeded'))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
