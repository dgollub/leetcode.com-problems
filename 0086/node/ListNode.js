class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  toString() {
    let s = 'LL:';
    let node = this;
    do {
      s = `${s} ${node.val}`;
    } while (node = node.next); // eslint-disable-line no-cond-assign
    return s;
  }

  toNumber() {
    let place = 1;
    let result = 0;
    let node = this;

    do {
      result += (place * node.val);
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

  static createFrom(numbers) {
    let node = new ListNode(numbers.pop());

    while (numbers.length) {
      node = new ListNode(numbers.pop(), node);
    }

    return node;
  }
}

module.exports = {
  ListNode,
}