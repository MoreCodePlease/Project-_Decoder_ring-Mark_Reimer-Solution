// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests", () => {
  describe("encoding a message", () => {
    it("process message correctly", () => {
        const message = "test";
        const actual = polybius(message);
        const expected = "44513444"
        expect(actual).to.equal(expected);
      });
      it("processes spaces and capitals correctly", () => {
        const message = "A test";
        const actual = polybius(message);
        const expected = "11 44513444"
        expect(actual).to.equal(expected);
      });
      it("processes i's and j's correctly", () => {
        const message = "ji";
        const actual = polybius(message);
        const expected = "4242"
        expect(actual).to.equal(expected);
      });

  });

  describe("decoding a message", () => {
    it("process message correctly", () => {
        const message = "44513444";
        const actual = polybius(message,false);
        const expected = "test"
        expect(actual).to.equal(expected);
      });
      it("processes spaces correctly and ignores capitals", () => {
        const message = "11 44513444";
        const actual = polybius(message,false);
        const expected = "a test"
        expect(actual).to.equal(expected);
      });
      it("processes i's and j's correctly as i/j", () => {
        const message = "4242";
        const actual = polybius(message,false);
        const expected = "i/ji/j"
        expect(actual).to.equal(expected);
      });

    it("should return false if the substitution alphabet is missing", () => {
        const message = "2223244";
        const actual = polybius(message, false);
        expect(actual).to.be.false;
      });
  });
});
