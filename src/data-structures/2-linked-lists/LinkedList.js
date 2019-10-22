export default class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  append(data) {
    const next = new LinkedList(data);
    let node = this;
    while (node) {
      if (!node.next) {
        break;
      }
      node = node.next;
    }
    node.next = next;
  }

  size() {
    let node = this;
    let counter = 0;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
}
