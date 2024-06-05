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

const createTags = (tagNames, cf) => {
  prisma.tag
    .createMany({
      data: tagNames.map((name) => ({ name: name })),
    })
    .then((tags) => cf(tags))
    .catch((e) => console.log(e));
};

module.exports = {
  createTag,
  createTags,
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
