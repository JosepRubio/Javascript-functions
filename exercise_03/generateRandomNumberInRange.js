/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */
/**
 *
 * @param {number} number Min limit to generate
 * @param {number} numberLimit Max limit to generate
 * @returns {number}
 */
function generateRandomNumberInRange(number, numberLimit) {
  const randomNumber = Math.random() * (numberLimit - number) + number;
  return randomNumber;
}
export default generateRandomNumberInRange;
