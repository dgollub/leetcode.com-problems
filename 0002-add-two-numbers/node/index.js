class LinkedList {
  constructor(num, next = null) {
    this.num = num;
    this.next = next;
  }

  toString() {
    let s = 'LL:';
    let node = this;
    do {
      s = `${s} ${node.num}`;
    } while (node = node.next); // eslint-disable-line no-cond-assign
    return s;
  }

  toNumber() {
    let place = 1;
    let result = 0;
    let node = this;

    do {
      result += (place * node.num);
      place *= 10;
    } while (node = node.next); // eslint-disable-line no-cond-assign

    return result;
  }

  get length() {
    let size = 0;

    let node = this;
    do {
      // eslint-disable-next-line no-plusplus
      size++;
    } while (node = node.next); // eslint-disable-line no-cond-assign

    return size;
  }

  static CreateFrom(numbers) {
    let node = new LinkedList(numbers.pop());

    while (numbers.length) {
      node = new LinkedList(numbers.pop(), node);
    }

    return node;
  }
}


/**
 * @param {LinkedList} listA contains digits of a number in reverse order
 * @param {LinkedList} listB contains digits of a number in reverse order
 *
 * @return {LinkedList} Linked list with sum of numbers in list a and b in reverse order
 */
const addTwo = (listA, listB) => {
  const numA = listA.toNumber();
  const numB = listB.toNumber();
  const sum = numA + numB;
  const list = `${sum}`.split('').reverse();

  return LinkedList.CreateFrom(list);
};

/**
 * @param {LinkedList} listA
 * @param {LinkedList} listB
 *
 * @return {boolean} true if both lists have the same data and are therefore equal
 */
const equal = (listA, listB) => {
  if (listA.length !== listB.length) { return false; }

  const numA = listA.toNumber();
  const numB = listB.toNumber();

  return numA === numB;
};


module.exports = {
  equal,
  addTwo,
  LinkedList,
};
