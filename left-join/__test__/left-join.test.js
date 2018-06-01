'use strict';

import leftJoin from '../left-join';

describe('Testing the leftJoin function', () => {
  test('should return the expected results map with synonyms and antonyms connected with each key', () => {
    const hash1 = {
      fond: 'enamored',
      wrath: 'anger',
      outfil: 'garb',
    };
    const hash2 = {
      fond: 'averse',
      wrath: 'delight',
    };
    const results = leftJoin(hash1, hash2);
    console.log(results, 'this is the results');
    expect(results.fond.synonym).toEqual('enamored');
    expect(results.fond.antonym).toEqual('averse');
    expect(results.wrath.synonym).toEqual('anger');
    expect(results.wrath.antonym).toEqual('delight');
    expect(results.outfil.synonym).toEqual('garb');
    expect(results.outfil.antonym).toEqual(null);
  });

  test('should return results with all antonyms as null and no keys contained in hash2', () => {
    const hash1 = {
      fond: 'enamored',
      wrath: 'anger',
      outfil: 'garb',
    };
    const hash2 = {
      hard: 'soft',
      heavy: 'light',
    };
    const results = leftJoin(hash1, hash2);
    console.log(results, 'this is the results');
    expect(results.hard).toBeFalsy();
    expect(results.heavy).toBeFalsy();
    expect(results.fond.synonym).toEqual('enamored');
    expect(results.fond.antonym).toEqual(null);
    expect(results.wrath.synonym).toEqual('anger');
    expect(results.wrath.antonym).toEqual(null);
  });

  test('should return results with only values from hash1 and antonyms as null when given only one hashmap', () => {
    const hash1 = {
      fond: 'enamored',
      wrath: 'anger',
      outfil: 'garb',
    };
    const results = leftJoin(hash1);
    console.log(results, 'this is the results');
    expect(results.fond.synonym).toEqual('enamored');
    expect(results.fond.antonym).toEqual(null);
    expect(results.wrath.synonym).toEqual('anger');
    expect(results.wrath.antonym).toEqual(null);
    expect(results.outfil.synonym).toEqual('garb');
    expect(results.outfil.antonym).toEqual(null);
  });
});
