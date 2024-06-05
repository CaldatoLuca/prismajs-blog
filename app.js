const categoryCrud = require("./utils/categoryCrud");
const tagCrud = require("./utils/tagCrud");

// categoryCrud.createCategory({ name: "categoryTest" }, (c) => console.log(c));
// tagCrud.createTag({ name: "tagTest" }, (t) => console.log(t));

// const categories = ["categoryTest1", "categoryTest2", "categoryTest3"];
// categoryCrud.createCategories(categories, (c) => console.log(c));

const tags = ["tagTest1", "tagTest2", "tagTest3", "tagTest4"];
tagCrud.createTags(tags, (t) => console.log(t));
