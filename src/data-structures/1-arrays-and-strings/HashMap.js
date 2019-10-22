import LinkedList from "../2-linked-lists/LinkedList";

export default class Hashmap {
  constructor() {
    this.data = new Array(1000);
  }

  hash(string) {
    return string.length;
  }

  set(key, value) {
    const mapKey = this.hash(key) % this.data.length;
    if (this.data[mapKey]) {
      this.data[mapKey].append({ key, value });
    } else {
      this.data[mapKey] = new LinkedList({ key, value });
    }
    return this.data;
  }

  get(key) {
    let node = this.data[this.hash(key) % this.data.length];
    let result;
    while (node) {
      if (node.data.key === key) {
        result = node.data.value;
        break;
      }
      node = node.next;
    }
    return result;
  }
}
