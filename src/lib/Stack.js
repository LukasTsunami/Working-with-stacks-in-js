class Stack {
  constructor() {
    this.items = [];
  }

  clear = () => (this.items = []);
  count = () => this.items.length;
  isEmpty = () => this.items.length === 0;
  peek = () => this.items[this.items.length - 1];
  pop = () => this.items.pop();
  toString = () => this.items.reverse().toString();
  push = (item) => this.items.push(item);
}

module.exports = Stack;
