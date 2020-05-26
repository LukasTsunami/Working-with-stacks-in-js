const Stack = (function () {
  const items = new WeakMap();
  class Stack {
    constructor() {
      items.set(this, []);
    }

    clear() {
      return items.set(this, []);
    }

    count() {
      return items.get(this).length;
    }

    isEmpty() {
      return items.get(this).length === 0;
    }

    peek() {
      return items.get(this)[items.get(this).length - 1];
    }

    pop() {
      return items.get(this).pop();
    }

    push(item) {
      return items.get(this).push(item);
    }

    toString() {
      const strArray = items
        .get(this)
        .reverse()
        .map((item) => {
          if (!item) return "false";

          if (typeof item == "object") {
            const auxStr = item.toString();
            if (auxStr != "[object Object]") return auxStr;

            return JSON.stringify(item);
          }

          return item.toString();
        });

      return strArray.toString();
    }
  }

  return Stack;
})();

module.exports = Stack;
