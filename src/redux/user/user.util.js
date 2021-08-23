import faker from 'faker';

export const generateNewMonster = () => ({
  id: faker.datatype.number(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: {
    street: faker.address.streetName(),
    suite: faker.address.streetAddress(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode()
  },
  phone: faker.phone.phoneNumber(),
  website: "hildegard.org",
  company: {
    name: faker.company.companyName(),
    bs: faker.company.bs()
  }
})