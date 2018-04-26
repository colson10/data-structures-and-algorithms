'use strict';

const merge = require('../merge-ll');

const List1 = { 
  head: { 
    value: 1,
    next: {
      value: 3,
      next: {
        value: 5,
        next: {
          value: 7,
          next: {
            value: 9,
            next: null,
          },
        },
      },
    },
  },
};

const List2 = { 
  head: { 
    value: 2,
    next: {
      value: 4,
      next: {
        value: 6,
        next: null,
      },
    },
  },
};

const Output = { 
  head: { 
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: {
              value: 6,
              next: {
                value: 7,
                next: {
                  value: 9,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  },
};

const Output2 = { 
  head: { 
    value: 2,
    next: {
      value: 1,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 6,
            next: {
              value: 5,
              next: {
                value: 7,
                next: {
                  value: 9,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  },
};

describe('merge linked lists', () => {
  test('should merge longer List1 and shorter List2 to be Output', () => {
    const List1Longer = merge(List1, List2);
    expect(List1Longer).toEqual(Output);
  });

  // test('should merge shorter List2 and longer List1 to equal Output2', () => {
  //   const List2Longer = merge(List2, List1);
  //   expect(List2Longer).toEqual(Output2);
  // });
});
