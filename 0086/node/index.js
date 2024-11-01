const { ListNode } = require('./ListNode.js');

/**
 * @param {ListNode} head The ListNode that is to be partitioned by x
 * @param {number} x partioning value
 *
 * @return {ListNode} The partitioned ListNode
 */
const partition = (head, x) => {
  let front = new ListNode(0);
  let back = new ListNode(0);

  let frontTail = front;
  let backTail = back;

  while (head != null) {
    // Use x to partition the list into two
    if (head.val < x) {
      frontTail.next = head;
      frontTail = frontTail.next;
    } else {
      backTail.next = head;
      backTail = backTail.next;
    }
    head = head.next;
  };

  // Combine front and back into one list again
  backTail.next = null;
  frontTail.next = back.next;

  return front.next;
};


module.exports = {
  partition,
};
