// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar cypher:",() => {
    describe("error checks:",() => {
        it("Is the shift out of bounds?", () => {
            const message = "test";
            const shift = 0;
            const actual = caesar(message, shift);
            const expected = "whvw";
      
            expect(actual).to.be.false;
          });
          it("Is the shift out of bounds?", () => {
            const message = "test";
            const shift = 26;
            const actual = caesar(message, shift);
            const expected = "whvw";
      
            expect(actual).to.be.false;
          });
          it("Is the shift out of bounds?", () => {
            const message = "test";
            const shift = -26;
            const actual = caesar(message, shift);
            const expected = "whvw";
      
            expect(actual).to.be.false;
          });
    });
    describe("caesar encoding?", () => {
    it("Is the message shifted?", () => {
      const message = "test";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "whvw";

      expect(actual).to.equal(expected);
    });
    it("Are spaces perserved?", () => {
        const message = "a test";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d whvw";
  
        expect(actual).to.equal(expected);
      });
      it("Ares symbols perserved?", () => {
        const message = "test.*#!";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "whvw.*#!";
  
        expect(actual).to.equal(expected);
      });
      it("Is a negative shift correct?", () => {
        const message = "test";
        const shift = -16;
        const actual = caesar(message, shift);
        const expected = "docd";
  
        expect(actual).to.equal(expected);
      });
});
    describe("caesar decoding?", () => {

        it("Is the message shifted?", () => {
            const message = "whvw";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "test";
      
            expect(actual).to.equal(expected);
          });
          it("Are spaces perserved?", () => {
              const message = "d whvw";
              const shift = 3;
              const actual = caesar(message, shift, false);
              const expected = "a test";
        
              expect(actual).to.equal(expected);
            });
            it("Ares symbols perserved?", () => {
              const message = "whvw!";
              const shift = 3;
              const actual = caesar(message, shift, false);
              const expected = "test!";
        
              expect(actual).to.equal(expected);
            });
            it("Is a negative shift correct?", () => {
              const message = "qbpq";
              const shift = -3;
              const actual = caesar(message, shift, false);
              const expected = "test";
        
              expect(actual).to.equal(expected);
            });
});
});