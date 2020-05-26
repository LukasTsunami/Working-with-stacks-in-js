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

test("if stack is empty", () => {
  stack = new Stack();

  expect(stack.isEmpty()).toBeTruthy();

  stack.push(9);

  expect(stack.isEmpty()).toBeFalsy();
});

describe("clearing the stack", () => {
  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
  });

  it("should be empty", () => {
    expect(stack.count()).toBe(4);
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.count()).toBe(0);
  });
});

describe("printing the stack", () => {
  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
  });

  it("should return a string with all items from last to first", () => {
    expect(stack.toString()).toBe("4,3,2,1");
  });
});
