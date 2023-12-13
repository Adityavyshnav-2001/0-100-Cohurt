/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str) {
  let str1 = str.toLowerCase().replace(/[^\w]/g,'');
  let start = 0;
  let end = str1.length - 1;
  let ans = true;
  
  while (start < end) {
    if (str1[start] !== str1[end]) {
      ans = false;
      break;
    }
    start++;
    end--;
  }
  return ans;
}

module.exports = isPalindrome;
