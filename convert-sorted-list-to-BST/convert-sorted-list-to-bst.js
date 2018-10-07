'use strict';

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const listLengthFinder = (head) => {
  if (!head) return null;
  let length = 0;
  let curr = head;
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  return length;
};

const sortedListToBST = (head) => {
  if (!head) return null;
  
  const len = listLengthFinder(head);
  
  if (len === 1) {
    const node = new TreeNode(head.val);
    return node;
  }
  
  if (len === 2) {
    const node = new TreeNode(head.val);
    const node2 = new TreeNode(head.next.val);
    node.right = node2;
    return node;
  }
  
  const mid = Math.floor(len / 2);
  let count = 1;
  let prev = head;
  let curr = prev.next;
  
  while (count < mid) {
    prev = curr;
    curr = curr.next;
    count += 1;
  }
  
  prev.next = null;
  const node = new TreeNode(curr.val);
  
  node.left = sortedListToBST(head);
  node.right = sortedListToBST(curr.next);
  
  return node;
};

export default sortedListToBST;
