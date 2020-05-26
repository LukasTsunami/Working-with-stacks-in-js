const Stack = require("../Stack");

describe("requesting for see stack's head", () => {
  beforeEach(() => {
    stack = new Stack();

    Object.defineProperty(stack, "items", {
      get: jest.fn(() => [1, 2, 8]),
    });
  });

  it("should see it", () => {
    expect(stack.peek()).toBe(8);
  });
});

describe("counting how much items are on stack", () => {
  beforeEach(() => {
    stack = new Stack();

    Object.defineProperty(stack, "items", {
      get: jest.fn(() => [2, 2, 8]),
    });
  });

  it("should get it", () => {
    expect(stack.count()).toBe(3);
  });
});

describe("pushing a new item to stack", () => {
  beforeEach(() => {
    stack = new Stack();
  });

  it("should be pushed on stack's head", () => {
    const new_element = 9;
    stack.push(new_element);
    expect(stack.peek()).toBe(9);
  });
});
