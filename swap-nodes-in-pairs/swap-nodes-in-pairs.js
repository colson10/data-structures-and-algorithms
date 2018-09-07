'use strict';

const swapPairs = (head) => {
  let theHead = head;
  let first = null;
  let prev = head;
  if (!head) return null;
  if (!head.next) return head;
  
  let curr = head.next;
  
  if (!curr.next) {
    prev.next = null;
    curr.next = prev;
    theHead = curr;
    return theHead;
  }
  
  let { next } = curr;
  
  while (curr) {
    let temp = null;
    if (next && next.next) {
      temp = next.next;         
    }

    curr.next = prev;
    prev.next = next;
    if (prev === head) {
      theHead = curr;
    } else {
      first.next = curr;
    }
    first = prev;
    if (next) {
      temp = next.next;
      prev = next;
      curr = temp;
      if (temp) next = temp.next;
    } else {
      curr = null;
    }
  }
  
  return theHead;
};

export default swapPairs;
