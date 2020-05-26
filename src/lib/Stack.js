class Stack {
  constructor() {
    this.items = [];
  }

  peek = () => this.items[this.items.length - 1];
  push = (item) => this.items.push(item);
}

module.exports = Stack;
