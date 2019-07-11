import { getConsoleOutput } from "@jest/console";

/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  // let result = [];
  // nums.map((item, index) => {
  //   for (let i = index + 1; i < nums.length; i++) {
  //     if (target - item === nums[i]) {
  //       result = [index, i];
  //     }
  //   }
  // });
  // return result;
  const result = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (result.has(num)) {
      return [result.get(num), i];
    } else {
      result.set(nums[i], i);
    }
  }
};
export default twoSum;

