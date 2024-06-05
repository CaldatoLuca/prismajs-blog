const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCategory = (data, cf) => {
  prisma.category
    .create({
      data,
    })
    .then((c) => cf(c))
    .catch((e) => console.log(e));
};

module.exports = {
  createCategory,
};

//versione estesa
// prisma.category
//   .create({
//     data: {
//       name: "test",
//     },
//   })
//   .then((newCategory) => console.log(newCategory))
//   .catch((e) => console.log(e));
