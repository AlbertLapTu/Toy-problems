//O(n)
const hash = (key, length) => {
  let total = 0;
  for (letter of key) {
    let value = letter.charCodeAt(0) - 96;
    total = (total + value) % length;
  }
  return total;
};

//O(1)
const hash = (key, length) => {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % length;
  }
  return total;
};

class HashTable {
  constructor() {}

  hash(key, length) {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % length;
    }
    return total;
  }
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  //Current implementation doesn't account for duplicate key values when pushed in.
  //In reality, it should be updating the value, while retaining the same key
  set(key, value) {
    let hashed = this._hash(key);
    if (!this.keyMap[hashed]) {
      this.keyMap[hashed] = [];
    } else {
      this.keyMap[hashed].push([key, value]);
    }
  }

  get(key) {
    let hashed = this._hash(key);
    //Take the key and hash it.
    if (!this.keyMap[hashed]) {
      return undefined;
    } else {
      for (let i = 0; i < this.keyMap[hashed].length; i++) {
        if (this.keyMap[hashed][i][0] === key) {
          return this.keyMap[hashed][i][1];
        }
      }
    }
  }

  keys() {
    let results = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!results.includes(this.keyMap[i][j][0]))
            results.push(this.keyMap[i][j][0]);
        }
      }
    }
    return results;
  }

  values() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!results.includes(this.keyMap[i][j][1]))
            results.push(this.keyMap[i][j][1]);
        }
      }
    }
    return results;
  }
}

/*
Insertion/Deletion/Access - O(1)
Worst case scenario (i.e - Worst hashing function ever places everything into one bucket) -
operation will be linear
*/
