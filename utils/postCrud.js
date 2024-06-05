const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPost = (data, cf) => {
  prisma.post
    .create({
      data: {
        title: data.title,
        slug: data.slug,
        image: data.image,
        content: data.content,
        published: data.published,
        Category: {
          connect: { id: data.categoryId },
        },
        Tags: {
          connect: data.tagsIds.map((tagId) => ({ id: tagId })),
        },
      },
    })
    .then((c) => cf(c))
    .catch((e) => console.log(e));
};

module.exports = {
  createPost,
};
