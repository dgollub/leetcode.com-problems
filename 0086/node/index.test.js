const assert = require('assert');

const { ListNode } = require('./ListNode');
const { partition } = require('.');


describe.only('partition', () => {
  const testCases = [
    {
      label: 'test 1',
      list: [1,4,3,2,5,2],
      x: 3,
      expected: [1,2,2,4,3,5],
    },
    {
      label: 'test 2',
      list: [2, 1],
      x: 2,
      expected: [1, 2],
    },
  ];

  testCases.forEach(({ label, list, x, expected }) => {
    it(label, () => {
      const ll = ListNode.createFrom(list);
      const result = partition(ll, x);
      const expectedList = ListNode.createFrom(expected);

      assert(result.toString(), expectedList.toString());
    });
  });
});
