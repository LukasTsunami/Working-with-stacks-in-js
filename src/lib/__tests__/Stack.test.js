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
  it("should be pushed on stack's head", () => {
    stack = new Stack();
    const new_element = 9;
    const old_count = stack.count();
    stack.push(new_element);
    expect(stack.peek()).toBe(9);
    expect(stack.count()).toBe(old_count + 1);
  });
});

describe("popping an item from stack", () => {
  it("should be returned", () => {
    stack = new Stack();
    stack.push(9);
    stack.push(2);
    stack.push(4);

    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(9);
    expect(stack.pop()).toBe(undefined);
  });
});
