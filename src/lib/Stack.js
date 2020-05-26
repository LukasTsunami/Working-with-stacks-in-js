class Stack {
  constructor() {
    this.items = [];
  }

  clear = () => (this.items = []);
  count = () => this.items.length;
  isEmpty = () => this.items.length === 0;
  peek = () => this.items[this.items.length - 1];
  pop = () => this.items.pop();
  toString = () => {
    const strArray = this.items.reverse().map((item) => {
      if (!item) return "false";

      if (typeof item == "object") return JSON.stringify(item);

      return item.toString();
    });

    return strArray.toString();
  };
  push = (item) => this.items.push(item);
}

module.exports = Stack;
