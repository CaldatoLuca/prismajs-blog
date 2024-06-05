const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTag = (data, cf) => {
  prisma.tag
    .create({
      data,
    })
    .then((t) => cf(t))
    .catch((e) => console.log(e));
};

module.exports = {
  createTag,
};

//versione estesa
// prisma.tag
//   .create({
//     data: {
//       name: "test",
//     },
//   })
//   .then((newTag) => console.log(newTag))
//   .catch((e) => console.log(e));
