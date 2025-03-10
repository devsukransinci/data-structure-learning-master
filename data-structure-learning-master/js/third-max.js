/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function (nums) {
  nums.sort((a, b) => b - a);
  let set = new Set(nums);
  let distinct = set.values();
  if (set.size < 3) return distinct.next().value;
  else {
    distinct.next();
    distinct.next();
    return distinct.next().value;
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMaxOptimised = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
    if (nums[i] > first) {
      [first, second, third] = [nums[i], first, second];
    } else if (nums[i] > second) {
      [second, third] = [nums[i], second];
    } else if (nums[i] > third) {
      third = nums[i];
    }
  }
  return third === -Infinity ? first : third;
};
console.log(thirdMax([1, 2]));
