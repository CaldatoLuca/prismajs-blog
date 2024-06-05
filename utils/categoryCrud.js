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

const createCategories = (categoryNames, cf) => {
  prisma.category
    .createMany({
      data: categoryNames.map((name) => ({ name: name })),
    })
    .then((categories) => cf(categories))
    .catch((e) => console.log(e));
};

module.exports = {
  createCategory,
  createCategories,
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
