const assert = require('assert');

const { equal, addTwo, LinkedList } = require('.');


describe('add-two-numbers', () => {
  const testCases = [
    {
      label: 'test 1',
      listA: [2, 4, 3],
      listB: [5, 6, 4],
      expected: [7, 0, 8],
    },
    {
      label: 'test 2',
      listA: [9, 9, 9],
      listB: [0, 0, 1],
      expected: [9, 9, 0, 1],
    },
    {
      label: 'test 3',
      listA: [4],
      listB: [1],
      expected: [5],
    },
    {
      label: 'test 4',
      listA: [9, 8, 7, 6],
      listB: [1, 2],
      expected: [0, 1, 8, 6],
    },
    {
      label: 'test 5',
      listA: [2, 4],
      listB: [9, 6],
      expected: [1, 1, 1],
    },
  ];

  describe('addTwo', () => {
    testCases.forEach(({ label, listA, listB, expected }) => {
      it(label, () => {
        const llA = LinkedList.CreateFrom(listA);
        const llB = LinkedList.CreateFrom(listB);
        const llE = LinkedList.CreateFrom(expected);

        const result = addTwo(llA, llB);

        assert(equal(result, llE));
      });
    });
  });
});
