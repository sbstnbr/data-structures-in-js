import { expect } from "chai";
import HashMap from "./HashMap";

describe("HashMap", () => {
  let map = {};
  beforeEach(() => {
    map = new HashMap();
  });
  it("should have a constructor", () => {
    expect(map.data).to.be.an("array");
  });
  it("should have a hash method which returns a number", () => {
    expect(map.hash("ABC")).to.be.an("number");
  });
  describe("get", () => {
    it("should return undefined if the key is not found", () => {
      expect(map.get("foo")).to.be.an("undefined");
    });
    it("should return a value given a key", () => {
      map.set("foo", "bar");
      expect(map.get("foo")).to.equal("bar");
    });
    it("should get a value if 2 keys have the same hash", () => {
      map.set("foo", "bar");
      map.set("fee", "bat");
      expect(map.get("foo")).to.equal("bar");
      expect(map.get("fee")).to.equal("bat");
    });
  });
});
