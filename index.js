class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    const initialValue = 0;
    if (this.items.length === 0) {
      return initialValue;
    } else {
      return this.items.reduce((a, b) => a + b, initialValue);
    }
  }

  avg() {
    if (this.items.length === 0) {
      return initialValue;
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
