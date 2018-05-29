'use strict';

import repeatedWord from '../repeated-word';

describe('Test the repeatedWord function', () => {
  test('Should return the first repeated word in the given string', () => {
    const aString = 'Once upon a time there was a brave princess';
    expect(repeatedWord(aString)).toEqual('a');
  });

  test('Should return the first repeated word when there are multiple repeates', () => {
    const aString = 'react is a library, react is not a framework';
    expect(repeatedWord(aString)).toEqual('react');
  });

  test('Should return the first repeated word disregarding upper/lower case', () => {
    const aString = 'React is a library, react is not a framework';
    expect(repeatedWord(aString)).toEqual('react');
  });

  test('Should return the first repeated word, even if one of the instances is adject to a comma', () => {
    const aString = 'React is a library, not framework, library I said!.';
    expect(repeatedWord(aString)).toEqual('library');
  });

  test('Should return the a string indicating no duplicates if there are no repeated words', () => {
    const aString = 'Once upon a time there were many princesses';
    expect(repeatedWord(aString)).toEqual('No duplicates');
  });
});
