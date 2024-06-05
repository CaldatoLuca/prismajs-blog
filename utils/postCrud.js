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

const readPostBySlug = (slug, cf) => {
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

const readPosts = (cf) => {
  prisma.post
    .findMany({
      include: {
        category: { select: { name: true } },
        tags: { select: { name: true } },
      },
    })
    .then((p) => cf(p))
    .catch((e) => console.log(e));
};

const updatePost = (id, data, cf) => {
  prisma.post
    .update({
      where: { id: id },
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
          set: data.tagsIds.map((tagId) => ({ id: tagId })),
        },
      },
    })
    .then((c) => cf(c))
    .catch((e) => console.log(e));
};

const deletePost = (id, cf) => {
  prisma.post
    .delete({
      where: { id: id },
    })
    .then((p) => cf(p))
    .catch((e) => console.log(e));
};

const publishedPosts = (cf) => {
  prisma.post
    .findMany({
      where: { published: true },
    })
    .then((posts) => cf(posts))
    .catch((e) => console.log(e));
};

const filterPostContentByString = (str, cf) => {
  prisma.post
    .findMany({
      where: {
        content: { contains: str },
      },
    })
    .then((p) => cf(p))
    .catch((e) => console.log(e));
};

module.exports = {
  createPost,
  readPostBySlug,
  readPosts,
  updatePost,
  deletePost,
  publishedPosts,
  filterPostContentByString,
};

// Se non passo una delle proprietà, dà errore o semplicemente non la modifica?
// Se non passi una proprietà, Prisma non la modifica. Solo le proprietà incluse nell'oggetto data verranno aggiornate. Le altre rimarranno inalterate.

// Se uso connect aggiunge alle relazioni esistenti quelle che passo?
// Sì, se usi connect, Prisma aggiunge le nuove relazioni alle relazioni esistenti.

// Se voglio che le relazioni vengano sovrascritte con quelle che passo devo usare set?
// Esatto, se vuoi sovrascrivere le relazioni esistenti con quelle nuove, devi usare set.

//se elimino un post con id cancella anche le sue relazioni?
//si
