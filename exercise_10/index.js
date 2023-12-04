import transformCollectionToString from "./transformCollectionToString.js";

const notEmptyCollection = ["supra", "rx7", "nissan gtr"];
console.log(transformCollectionToString(notEmptyCollection)); // supra | rx7 | nissan gtr

const emptyCollection = [];
console.log(transformCollectionToString(emptyCollection)); // " "
