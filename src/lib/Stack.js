class Stack {
  constructor() {
    this.items = [];
  }
  count = () => this.items.length;
  peek = () => this.items[this.items.length - 1];
  pop = () => this.items.pop();
  push = (item) => this.items.push(item);
}

module.exports = Stack;
