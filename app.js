const categoryCrud = require("./utils/categoryCrud");
const tagCrud = require("./utils/tagCrud");
const postCrud = require("./utils/postCrud");

// categoryCrud.createCategory({ name: "categoryTest" }, (c) => console.log(c));
// tagCrud.createTag({ name: "tagTest" }, (t) => console.log(t));

// const categories = ["categoryTest1", "categoryTest2", "categoryTest3"];
// categoryCrud.createCategories(categories, (c) => console.log(c));

// const tags = ["tagTest1", "tagTest2", "tagTest3", "tagTest4"];
// tagCrud.createTags(tags, (t) => console.log(t));

// const postData = {
//   title: "postTest",
//   slug: "post-test",
//   image: "postTestImage",
//   content: "postTestContent",
//   published: true,
//   categoryId: 1,
//   tagsIds: [1, 2],
// };
// postCrud.createPost(postData, (p) => console.log(p));

// postCrud.readPostBySlug("post-test", (p) => console.log(p));

postCrud.readPosts((posts) => console.log(posts));
