import { expect } from "chai";
import { isPrime, primeList } from "./index";

describe("isPrime", () => {
  it("should return false for 1", () => {
    expect(isPrime(1)).to.be.false;
  });
  it("should return true for 2", () => {
    expect(isPrime(2)).to.be.true;
  });
  it("should return true for primes", () => {
    expect(isPrime(23)).to.be.true;
  });
  it("should return false for non primes", () => {
    expect(isPrime(49)).to.be.false;
  });
});

describe("primeList", () => {
  it("should return an empty list if max is too low", () => {
    expect(primeList(1)).to.deep.equal([]);
  });
  it("should return a list of primes until a max", () => {
    expect(primeList(20)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
