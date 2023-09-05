// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests", () => {
    describe("error handling", () => {
        it("rejects incorrect key length", () => {
            const message = "test";
            const alphabet = "qwertyuiopasdfghjklzxcvbn";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false
          });
          it("undefined key", () => {
            const message = "test";
            const actual = substitution(message);
            expect(actual).to.be.false
          });
          it("rejects repeating characters in key", () => {
            const message = "test";
            const alphabet = "qwertyuiopasdfghjklzxcvbnn";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false
          });
    });
    describe("encoding", () => {
        it("encodes correctly", () => {
            const message = "test";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet);
            const expected = "ztlz";
            expect(actual).to.equal(expected);
          });
          it("accepts symbols", () => {
            const message = "test";
            const alphabet = "qwertyu$#pasdfghjkl!xcvbnm";
            const actual = substitution(message, alphabet);
            const expected = "!tl!";
            expect(actual).to.equal(expected);
          });
          it("encodes spaces correctly", () => {
            const message = "a test";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet);
            const expected = "q ztlz";
            expect(actual).to.equal(expected);
          });
    });
    describe("decoding", () => {
        it("decodes correctly", () => {
            const message = "ztlz";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet, false);
            const expected = "test";
            expect(actual).to.equal(expected);
        });
        it("accepts symbols", () => {
            const message = "!tl!";
            const alphabet = "qwertyu$#pasdfghjkl!xcvbnm";
            const actual = substitution(message, alphabet, false);
            const expected = "test";
            expect(actual).to.equal(expected);
        });
        it("decodes spaces correctly", () => {
            const message = "q ztlz";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet, false);
            const expected = "a test";
            expect(actual).to.equal(expected);
        });
    });
});