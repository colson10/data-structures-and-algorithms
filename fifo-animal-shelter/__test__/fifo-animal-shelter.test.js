'use strict';

import AnimalShelter from '../fifo-animal-shelfter';
import Animal from '../animals';

describe('testing class AnimalShelter', () => {
  test('#AnimalShelter', () => {
    const shelter = new AnimalShelter();
    expect(shelter.storage).toBeTruthy();
  });
  
  describe('AnimalShelter methods', () => {
    test('enqueue method should add an Animal to the AnimalShelter storage', () => {
      const shelter = new AnimalShelter();
      const cat1 = new Animal('cat');
      const cat2 = new Animal('cat');
      const dog1 = new Animal('dog');
      const dog2 = new Animal('dog');
      shelter.enqueue(cat1);
      shelter.enqueue(dog1);
      shelter.enqueue(cat2);
      shelter.enqueue(dog2);
      expect(shelter.storage[0]).toEqual(cat1);
      expect(shelter.storage[1]).toEqual(dog1);
      expect(shelter.storage[2]).toEqual(cat2);
      expect(shelter.storage[3]).toEqual(dog2);
    });
    test('dequeue method should remove an Animal in the FIFO order, and can specify if it should be of type cat or dog', () => {
      const shelter = new AnimalShelter();
      const cat1 = new Animal('cat');
      const dog1 = new Animal('dog');
      const cat2 = new Animal('cat');
      const dog2 = new Animal('dog');
      const cat3 = new Animal('cat');
      shelter.enqueue(cat1);
      shelter.enqueue(dog1);
      shelter.enqueue(cat2);
      shelter.enqueue(dog2);
      shelter.enqueue(cat3);
      expect(shelter.storage[0].type).toEqual('cat');
      expect(shelter.storage[1].type).toEqual('dog');
      expect(shelter.storage[2].type).toEqual('cat');
      expect(shelter.storage[3].type).toEqual('dog');
      expect(shelter.storage[4].type).toEqual('cat');
      shelter.dequeue('dog');
      expect(shelter.storage[0].type).toEqual('cat');
      expect(shelter.storage[1].type).toEqual('cat');
      expect(shelter.storage[2].type).toEqual('dog');
      expect(shelter.storage[3].type).toEqual('cat');
      expect(shelter.storage[4]).toBeFalsy();
      shelter.dequeue('cat');
      expect(shelter.storage[0].type).toEqual('cat');
      expect(shelter.storage[1].type).toEqual('dog');
      expect(shelter.storage[2].type).toEqual('cat');
      expect(shelter.storage[3]).toBeFalsy();
      shelter.dequeue('dog');
      expect(shelter.storage[0].type).toEqual('cat');
      expect(shelter.storage[1].type).toEqual('cat');
      expect(shelter.storage[2]).toBeFalsy();
      shelter.dequeue();
      expect(shelter.storage[0].type).toEqual('cat');
      expect(shelter.storage[1]).toBeFalsy();
    });
  });
});
