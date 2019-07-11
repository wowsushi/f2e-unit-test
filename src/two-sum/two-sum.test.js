import twoSum from "./two-sum.js";

/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

describe("Two Sum", () => {
  test("[1, 2, 3], target=4", () => {
    const data = [1, 2, 3];
    expect(twoSum(data, 4)).toEqual([0, 2]);
  });

  test("[1234, 5678, 9012], target=14690", () => {
    const data = [1234, 5678, 9012];
    expect(twoSum(data, 14690)).toEqual([1, 2]);
  });

  test("[-1, 0, 10, 30], target=9", () => {
    const data = [-1, 0, 10, 30];
    expect(twoSum(data, 9)).toEqual([0, 2]);
  });

  test("[2, 2, 3], target=4", () => {
    const data = [2, 2, 3];
    expect(twoSum(data, 4)).toEqual([0, 1]);
  });
});
