const Stack = require("../Stack");

describe("adding a new item to stack", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  it("should be added on top of stack", () => {
    const new_element = 9;
    stack.push(new_element);
    expect(stack.items[stack.items.length - 1]).toBe(9);
  });
});
