const assert = require('assert');

const { twoSumA, twoSumB } = require('.');


const equal = (a, b) => (a.length === b.length) && a.every((x, xi) => b[xi] === x);

describe('two-sum', () => {
  const testCases = [
    {
      label: 'test 1',
      args: [[2, 7, 11, 15], 9],
      expected: [0, 1],
    },
    {
      label: 'test 2',
      args: [[2, 7, 11, 15], 22],
      expected: [1, 3],
    },
    {
      label: 'test 3',
      args: [[2, 7, 11, 15], 13],
      expected: [0, 2],
    },
    {
      label: 'test 4',
      args: [[2, 7, 11, 15], 99],
      expected: [],
    },
    {
      label: 'test 5',
      args: [[1, 5, 5, 5, 5, 2], 3],
      expected: [0, 5],
    },
  ];

  describe('twoSumA', () => {
    testCases.forEach(({ label, args, expected }) => {
      it(label, () => {
        assert(equal(twoSumA(...args), expected));
      });
    });
  });

  describe('twoSumB', () => {
    testCases.forEach(({ label, args, expected }) => {
      it(label, () => {
        assert(equal(twoSumB(...args), expected));
      });
    });
  });
});
