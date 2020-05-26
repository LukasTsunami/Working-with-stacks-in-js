const Stack = require("../Stack");

describe("requesting for the stack's head", () => {
  beforeEach(() => {
    stack = new Stack();

    Object.defineProperty(stack, "items", {
      get: jest.fn(() => [1, 2, 8]),
    });
  });

  it("should get it", () => {
    expect(stack.peek()).toBe(8);
  });
});

describe("adding a new item to stack", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  it("should be added on stack's head", () => {
    const new_element = 9;
    stack.push(new_element);
    expect(stack.peek()).toBe(9);
  });
});
