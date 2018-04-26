'use strict';

module.exports = function merge(List1, List2) {
  if (!List1.head && !List2.head) throw new Error('Lists are invalid');
  if (!List1.head) return List2;
  if (!List2.head) return List1;
  
  let prev1 = List1.head;
  let curr1 = prev1.next;
  let temp1;
  
  const prev2 = List2;
  let curr2 = List2.head;
  let temp2;
  
  while (curr1.next) {
    if (curr2) {
      temp2 = curr2;
      prev2.next = curr2.next;
      curr2 = curr2.next;
        
      temp2.next = curr1;
      prev1.next = temp2;
    } else {
      return List1;
    }
    temp1 = curr1;
    prev1 = curr1;
    curr1 = temp1.next;
  }
  if (curr2) {
    curr1.next = curr2;
    prev2.next = null;
  }
  return List1;
};

// -----Attempt to simplify------------

//   let curr1 = List1.head;
//   const curr2 = List2.head;
//   let temp1;
//   // let temp2;

//   while (curr1) {
//     if (curr1.next) {
//       temp1 = curr1.next;
//       if (curr2.next) {
//         curr1.next = curr2;
//         curr2.next = temp1;
//       } else return List1;
//     } else if (curr2) {
//       curr1.next = curr2;
//       return List1;
//     }
//     curr1 = curr1.next;
//   }
//   return List1;
// };


// ---Attempt to just make it work by checking the lengths 
// ---and using the longer to be the returned list 

//   let prev1 = List1.head;
//   let prev2 = List2;

//   let length1 = List1.head;
//   let length2 = List2.head;
//   let startTemp;

//   while (length2.next) {
//     length1 = length1.next;
//     length2 = length2.next;
//     if (!length1 || !length1.next) {
//       startTemp = prev1;
//       prev1 = prev2;
//       prev2 = startTemp;
//       break;
//     }
//   }
 
//   let curr1 = prev1.next;
//   let temp1;

//   let curr2 = prev2.head;
//   let temp2;
  
//   while (curr1.next) {
//     if (curr2) {
//       temp2 = curr2;
//       prev2.head = curr2.next;
//       curr2 = curr2.next;
//       temp2.next = curr1;
//       prev1.next = temp2;
//     } else {
//       return List1;
//     }
//     temp1 = curr1;
//     prev1 = curr1;
//     curr1 = temp1.next;
//   }
//   if (curr2) {
//     temp2.next = curr2;
//     prev2.next = null;
//   }
//   return List1;
// };
