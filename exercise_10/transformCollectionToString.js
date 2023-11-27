/**
 * Write JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";
/**
 * CASE #3
 * @param {array} collection
 * @return {string} string
 */

const transformCollectionToString = function (collection) {
  const arrayOnCollection = Array.isArray(collection);
  if (arrayOnCollection && collection.length > 0) {
    return collection.join(" | ");
  }
  return "";
};

export default transformCollectionToString;
