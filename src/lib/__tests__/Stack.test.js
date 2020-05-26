const Stack = require("../Stack");

describe("#stack_encapsulation", () => {
  describe("trying to access private members", () => {
    it("should not be able to access them", () => {
      stack = new Stack();
      expect(stack.items).toBe(undefined);
    });
  });
});

describe("#stack_methods", () => {
  describe("requesting for see stack's head", () => {
    beforeEach(() => {
      stack = new Stack();
      stack.push(8);
    });

    it("should see it without changing stack", () => {
      expect(stack.count()).toBe(1);
      expect(stack.peek()).toBe(8);
      expect(stack.count()).toBe(1);
    });
  });

  describe("counting how much items are on stack", () => {
    beforeEach(() => {
      stack = new Stack();
      stack.push(1);
      stack.push({});
      stack.push("5");
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
    });

    describe("with numbers", () => {
      it("should return a string with all items from last to first", () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.toString()).toBe("4,3,2,1");
      });
    });

    describe("with strings", () => {
      it("should return a string with all items from last to first", () => {
        stack.push(1);
        stack.push("b");
        stack.push(3);
        stack.push("d");
        expect(stack.toString()).toBe("d,3,b,1");
      });
    });

    describe("with objects", () => {
      it("should print their assignature inside returned string", () => {
        const person = {
          name: "Lucas",
          age: 23,
        };

        stack.push(1);
        stack.push(person);
        stack.push("4");
        expect(stack.toString()).toBe('4,{"name":"Lucas","age":23},1');
      });
    });

    describe("with class objects", () => {
      class SomeClass {
        constructor() {}

        toString() {
          return "I'm some class return string";
        }
      }

      it("should print their assignature inside returned string", () => {
        const someClassObject = new SomeClass();

        stack.push(1);
        stack.push(someClassObject);
        stack.push("4");
        expect(stack.toString()).toBe("4,I'm some class return string,1");
      });
    });
  });
});
