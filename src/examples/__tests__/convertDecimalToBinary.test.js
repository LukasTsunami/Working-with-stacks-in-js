const Stack = require("../../lib/Stack");
const convertDecimalToBinary = require("../convertDecimalToBinary");

describe("when converting decimal to binary", () => {
  describe("with positive numbers", () => {
    it("should return correct binary number", () => {
      expect(convertDecimalToBinary(10)).toBe(0b1010);
    });
  });
});
