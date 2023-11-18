/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {boolean} Returns true if the sum of two numbers is greater than 50, false otherwise
 */
function isAdditionGreaterThanFifty(number1, number2) {
  return number1 + number2 > 50;
}
export default isAdditionGreaterThanFifty;