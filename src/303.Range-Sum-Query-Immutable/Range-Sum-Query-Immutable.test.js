import NumArray from './Range-Sum-Query-Immutable.js'

/* 

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

Note:
You may assume that the array does not change.
There are many calls to sumRange function.

*/

describe('NumArray', () => {
    test('a is "1" and b is "0" should return "1"', () => {
        let obj = new NumArray([-2, 0, 3, -5, 2, -1])
        let param_1 = obj.sumRange(0,2)
        expect(param_1).toEqual(1)
    })
})
