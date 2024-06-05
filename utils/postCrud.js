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
        category: {
          connect: { id: data.categoryId },
        },
        tags: {
          connect: data.tagsIds.map((tagId) => ({ id: tagId })),
        },
      },
    })
    .then((c) => cf(c))
    .catch((e) => console.log(e));
};

const readPostById = (slug, cf) => {
  prisma.post
    .findUnique({
      where: { slug: slug },
      include: {
        category: { select: { name: true } },
        tags: { select: { name: true } },
      },
    })
    .then((p) => cf(p))
    .catch((e) => console.log(e));
};

module.exports = {
  createPost,
  readPostById,
};
