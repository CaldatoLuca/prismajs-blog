const categoryCrud = require("./utils/categoryCrud");
const tagCrud = require("./utils/tagCrud");

categoryCrud.createCategory({ name: "categoryTest" }, (c) => console.log(c));
tagCrud.createTag({ name: "tagTest" }, (t) => console.log(t));
