export class BinaryTreeNode {
  constructor(name) {
    this.name = name;
    this.left = null;
    this.right = null;
  }

  appendLeft(name) {
    const n = new BinaryTreeNode(name);
    this.left = n;
  }

  appendRight(name) {
    const n = new BinaryTreeNode(name);
    this.right = n;
  }

  has(key, node = this) {
    let result = false;
    if (node) {
      result =
        this.has(key, node.left) ||
        node.name === key ||
        this.has(key, node.right);
    }
    return result;
  }
}

// Left then node then right
export function traverseInOrder(node) {
  let result = [];
  if (node) {
    result = [...result, ...traverseInOrder(node.left)];
    result.push(node.name);
    result = [...result, ...traverseInOrder(node.right)];
  }
  return result;
}
