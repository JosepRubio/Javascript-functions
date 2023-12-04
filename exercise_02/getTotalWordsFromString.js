/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 *
 * @param {string} sentence
 * @returns {number} Returns the total number of words
 */
const getTotalWordsFromString = function (sentence) {
  const words = sentence.split(/\s+/);
  let filteredWords = words.filter((word) => word.length > 0);
  return filteredWords.length;
};

export default getTotalWordsFromString;
