/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} array of indicies for nums array that sum up to target
 */
const twoSumA = (nums, target) => {
  const size = nums.length;

  // eslint-disable-next-line no-plusplus
  for (let k = 0; k < size; k++) {
    const num = nums[k];
    // filter all numbers that are already greater than the target value
    // eslint-disable-next-line no-continue
    if (num > target) { continue; }

    // eslint-disable-next-line no-plusplus
    for (let i = k + 1; i < size; i++) {
      if (num + nums[i] === target) {
        return [k, i];
      }
    }
  }

  return [];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} array of indicies for nums array that sum up to target
 */
const twoSumB = (nums, target) => {
  const size = nums.length;
  const map = new Map();

  // eslint-disable-next-line no-plusplus
  for (let k = 0; k < size; k++) {
    const num = nums[k];
    const complement = target - num;

    if (map.has(complement)) { return [map.get(complement), k]; }

    map.set(num, k);
  }

  return [];
};


module.exports = {
  twoSumA,
  twoSumB,
};
