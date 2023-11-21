/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */
/**
 *
 * @param {number} limit
 * @returns {number} Returns a random number
 */
function generateRandomNumberInRange(limit) {
  let randomNumber = Math.round(Math.random() * limit);
  return randomNumber;
}
export default generateRandomNumberInRange;
