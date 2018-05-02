'use strict';

class AnimalShelter {
  constructor() {
    this.storage = [];
  }

  enqueue(animal) {
    this.storage.push(animal);
  }

  dequeue(pref) {
    if (pref) {
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[i].type === pref) {
          return this.storage.splice(i, 1);
        }
      }
    }
    return this.storage.shift();
  }
}

export default AnimalShelter;
