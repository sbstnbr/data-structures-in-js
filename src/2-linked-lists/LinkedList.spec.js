import { expect } from "chai";
import LinkedList from "./LinkedList";

describe("LinkedList", () => {
  it("should have a constructor", () => {
    const list = new LinkedList(1);
    expect(list.data).to.equal(1);
  });

  it("should append a value to its tail", () => {
    const list = new LinkedList();
    list.append(2);
    expect(list.next.data).to.equal(2);
    list.append(3);
    expect(list.next.next.data).to.equal(3);
  });

  it("should return the size of the list", () => {
    const list = new LinkedList();
    list.append();
    list.append();
    expect(list.size()).to.equal(3);
  });
});
