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
  if (listA.length !== listB.length) return false;
  
  const numA = listA.toNumber();
  const numB = listB.toNumber();
  
  return numA === numB;
};


const printResults = (name, list1, list2, expected, list) => {
  const num1 = list1.toNumber();
  const num2 = list2.toNumber();
  const exp = expected.toNumber();
  const result = list.toNumber();

  console.log(`${name} (LL)`, `${list1}`, '+', `${list2}`, '=', `${list}`, '(expected:', `${expected}`, '):', equal(list, expected));
  console.log(`${name} (10)`, num1, '+', num2, '=', result, '(expected:', exp, '):', result === exp);
};

// Test Case A
(function(name) {
  const list1 = LinkedList.CreateFrom([2, 4, 3]);
  const list2 = LinkedList.CreateFrom([5, 6, 4]);
  const expected = LinkedList.CreateFrom([7, 0, 8]);
  const list = addTwo(list1, list2);

  printResults(name, list1, list2, expected, list);
})('Test Case A');

console.log('---------------');

// Test Case B
(function(name) {
  const list1 = LinkedList.CreateFrom([9, 9, 9]);
  const list2 = LinkedList.CreateFrom([0, 0, 1]);
  const expected = LinkedList.CreateFrom([9, 9, 0, 1]);
  const list = addTwo(list1, list2);

  printResults(name, list1, list2, expected, list);
})('Test Case B');

console.log('---------------');

// Test Case C
(function(name) {
  const list1 = LinkedList.CreateFrom([4]);
  const list2 = LinkedList.CreateFrom([1]);
  const expected = LinkedList.CreateFrom([5]);
  const list = addTwo(list1, list2);

  printResults(name, list1, list2, expected, list);
})('Test Case C');

console.log('---------------');

// Test Case D
(function(name) {
  const list1 = LinkedList.CreateFrom([9, 8, 7, 6]);
  const list2 = LinkedList.CreateFrom([1, 2]);
  const expected = LinkedList.CreateFrom([0, 1, 8, 6]);
  const list = addTwo(list1, list2);

  printResults(name, list1, list2, expected, list);
})('Test Case D');

console.log('---------------');

// Test Case E
(function(name) {
  const list1 = LinkedList.CreateFrom([2, 4]);
  const list2 = LinkedList.CreateFrom([9, 6]);
  const expected = LinkedList.CreateFrom([1, 1, 1]);
  const list = addTwo(list1, list2);

  printResults(name, list1, list2, expected, list);
})('Test Case E');
