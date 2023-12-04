import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";
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

/**
 * CASE #3
 * @param {array} collection
 * @return {string} string
 */

const transformCollectionToString = function (collection) {
  const isArray = checkCollectionHasElements(collection);

  return isArray ? collection.join(" | ") : "";
};

export default transformCollectionToString;
