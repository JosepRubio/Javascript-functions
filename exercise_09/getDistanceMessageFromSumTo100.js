import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";
import getDistanceFromThreshold from "../exercise_01/getDistanceFromThreshold.js";
/** 
 * Write JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

const getDistanceMessageFromSumTo100 = function (value) {
  const randomNumber = generateRandomNumberInRange(0, 100);
  console.log(randomNumber);
  const summedNumber = randomNumber + value;
  const greaterNumber = getDistanceFromThreshold(summedNumber, 100);
  const lowerNumber = getDistanceFromThreshold(100, summedNumber);

  const getDistance = getDistanceFromThreshold(value, 100);
  if (greaterNumber > 100) {
    return (
      "Sum with value " +
      summedNumber +
      " exceeds in " +
      greaterNumber +
      " from number 100"
    );
  }

  return (
    "Sum with value " +
    summedNumber +
    " is left in " +
    lowerNumber +
    " from number 100"
  );
};

export default getDistanceMessageFromSumTo100;
