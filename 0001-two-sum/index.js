/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} array of indicies for nums array that sum up to target
 */
const twoSumA = (nums, target) => {
  const size = nums.length;

  for (let k = 0; k < size; k++) {
    const num = nums[k];
    // filter all numbers that are already greater than the target value
    if (num > target) continue;

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

  for (let k = 0; k < size; k++) {
    const num = nums[k];
    const complement = target - num;

    if (map.has(complement))
      return [map.get(complement), k];

    map.set(num, k);
  }

  return [];
};


const equal = (a, b) => (a.length === b.length) && a.every((x, xi) => b[xi] === x);

[twoSumA, twoSumB].forEach(twoSum => {
  console.log('Testing function ', twoSum.name);

  const testA = twoSum([2, 7, 11, 15], 9);  // [0, 1]
  const testB = twoSum([2, 7, 11, 15], 22); // [1, 3]
  const testC = twoSum([2, 7, 11, 15], 13); // [0, 2]
  const testD = twoSum([2, 7, 11, 15], 99); // [] -> no solution
  const testE = twoSum([1, 5, 5, 5, 5, 2], 3); // [0, 5]

  const expectedA = [0, 1];
  const expectedB = [1, 3];
  const expectedC = [0, 2];
  const expectedD = [];
  const expectedE = [0, 5];

  console.log('Test Case A', testA, expectedA, equal(testA, expectedA));
  console.log('Test Case B', testB, expectedB, equal(testB, expectedB));
  console.log('Test Case C', testC, expectedC, equal(testC, expectedC));
  console.log('Test Case D', testD, expectedD, equal(testD, expectedD));
  console.log('Test Case E', testE, expectedE, equal(testE, expectedE));
});