import { BinaryTreeNode, traverseInOrder } from "./BinaryTree";
import { expect } from "chai";

describe("Tree", () => {
  it("should have a constructor", () => {
    const tree = new BinaryTreeNode(1);
    expect(tree.name).to.equal(1);
  });

  it("should append a left child", () => {
    const tree = new BinaryTreeNode();
    tree.appendLeft(2);
    expect(tree.left.name).to.equal(2);
  });

  it("should append a right child", () => {
    const tree = new BinaryTreeNode();
    tree.appendRight(3);
    expect(tree.right.name).to.equal(3);
  });

  it("should traverse the tree in-order", () => {
    const tree = new BinaryTreeNode(4);
    tree.appendLeft(2);
    tree.appendRight(5);
    tree.left.appendLeft(1);
    tree.left.appendRight(3);
    expect(traverseInOrder(tree)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  describe("has", () => {
    it("should return false if the value is not found", () => {
      const tree = new BinaryTreeNode();
      expect(tree.has(42)).to.be.false;
    });
    it("should return true if the value is found", () => {
      const tree = new BinaryTreeNode(21);
      tree.appendRight(22);
      tree.right.appendLeft(42);
      expect(tree.has(42)).to.be.true;
    });
  });
});
