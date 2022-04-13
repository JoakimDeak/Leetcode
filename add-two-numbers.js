class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  Runtime: 209 ms, faster than 14.10% of JavaScript online submissions for Add Two Numbers.
//  Memory Usage: 47.3 MB, less than 69.79% of JavaScript online submissions for Add Two Numbers.
const addTwoNumbers = (l1, l2) => {
  const calc = (l1, l2, sumNode, carry) => {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const subSum = val1 + val2 + (carry ? 1 : 0);
    const shouldCarry = subSum > 9;
    sumNode.val = Math.round((subSum / 10 - Math.floor(subSum / 10)) * 10);
    if ((l1 && l1.next) || (l2 && l2.next)) {
      sumNode.next = new ListNode();
      calc(
        l1 ? l1.next : undefined,
        l2 ? l2.next : undefined,
        sumNode.next,
        shouldCarry
      );
    } else if (shouldCarry) {
      sumNode.next = new ListNode(1);
    }
  };
  const head = new ListNode();
  calc(l1, l2, head, false);
  return head;
};
