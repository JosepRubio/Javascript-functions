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
function getTotalWordsFromString(sentence) {
  let words = sentence.split(/\s+/);
  let wordFilter = words.filter((word) => word.length > 0);
  return wordFilter.length;
}

export default getTotalWordsFromString;
