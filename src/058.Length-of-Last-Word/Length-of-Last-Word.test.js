import lengthOfLastWord from "./Length-of-Last-Word.js";

/* 

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5

*/

describe("Length of Last Word", () => {
  test("s is '' should return 0", () => {
    const s = "";
    expect(lengthOfLastWord(s)).toEqual(0);
  });

  test("s is 'ab' should return 2", () => {
    const s = "ab";
    expect(lengthOfLastWord(s)).toEqual(2);
  });

  test("s is '  abc    ' should return 3", () => {
    const s = "  abc    ";
    expect(lengthOfLastWord(s)).toEqual(3);
  });

  test("s is 'abc xy' should return 2", () => {
    const s = "abc xy";
    expect(lengthOfLastWord(s)).toEqual(2);
  });

  test("s is 'a a a a a  a abcd' should return 4", () => {
    const s = "a a a a a  a abcd";
    expect(lengthOfLastWord(s)).toEqual(4);
  });
});
