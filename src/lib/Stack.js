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
          const formatedCauseNullOrFalsy = formatStringWhenNullOrFalsy(item);
          if (formatedCauseNullOrFalsy) return formatedCauseNullOrFalsy;

          const formatedCauseObject = formatStringWhenObject(item);
          if (formatedCauseObject) return formatedCauseObject;

          const formatedCauseFunction = formatStringWhenFunction(item);
          if (formatedCauseFunction) return formatedCauseFunction;

          return item.toString();
        });

      return strArray.toString();
    }
  }

  //Private functions
  const isPrimitiveObject = function (item) {
    return item.toString() !== "[object Object]";
  };

  const formatStringWhenObject = function (item) {
    if (typeof item == "object") {
      if (isPrimitiveObject(item)) return item.toString();

      return JSON.stringify(item);
    }

    return false;
  };

  const formatStringWhenNullOrFalsy = function (item) {
    if (!item) return "false";
  };

  const formatStringWhenFunction = function (item) {
    if (typeof item == "function") return `[function ${item.name}]`;
  };

  return Stack;
})();

module.exports = Stack;
