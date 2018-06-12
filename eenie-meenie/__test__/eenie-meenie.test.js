'use strict';

import eenieMeenie from '../eenie-meenie';
import eenie2 from '../eenie2';

describe('Testing the eenieMeenie function', () => {
  test('should return the expected element', () => {
    const testArray = ['A', 'B', 'C', 'D', 'E'];
    const number = 3;

    // expect(eenieMeenie(testArray, number)).toEqual('D');
    expect(eenie2(testArray, number)).toEqual('D');
  });
});
