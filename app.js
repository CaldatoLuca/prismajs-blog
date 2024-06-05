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
//   title: "postTest1",
//   slug: "post-test1",
//   image: "postTestImage1",
//   content: "postTestContent1",
//   published: true,
//   categoryId: 3,
//   tagsIds: [3, 4],
// };
// postCrud.createPost(postData, (p) => console.log(p));

// postCrud.readPostBySlug("post-test", (p) => console.log(p));

// postCrud.readPosts((posts) => console.log(posts));

// const updatedPost = {
//   title: "postTestUpdate",
//   slug: "post-test-update",
//   image: "postTestImageUpdate",
//   content: "postTestContentUpdate",
//   published: true,
//   categoryId: 2,
//   tagsIds: [1],
// };

// postCrud.updatePost(2, updatedPost, (p) => console.log(p));

// postCrud.deletePost(1, (p) => console.log(p));
