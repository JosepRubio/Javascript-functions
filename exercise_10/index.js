import transformCollectionToString from "./transformCollectionToString.js";

const notEmptyCollection = ["supra", "rx7", "nissan gtr"];
console.log(transformCollectionToString(notEmptyCollection)); // Totodile | Charizard | Wingardium Leviosaa

const emptyCollection = [];
console.log(transformCollectionToString(emptyCollection)); // " "
