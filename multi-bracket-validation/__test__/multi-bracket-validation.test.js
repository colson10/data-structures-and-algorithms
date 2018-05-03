'use strict';

import validation from '../multi-bracket-validation';

describe('multi bracket validation function', () => {
  test('check strings that should return true', () => {
    expect(validation('({[]})')).toEqual(true);
    expect(validation('({[][]})')).toEqual(true);
    expect(validation('({[()()]})')).toEqual(true);
  });

  test('check strings that should return false', () => {
    expect(validation('({[})')).toEqual(false);
    expect(validation('{[}]')).toEqual(false);
    expect(validation('({[)')).toEqual(false);
  });
});
