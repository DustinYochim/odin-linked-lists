function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

function LinkedList() {
  return {
    head: null,
    tail: null,
    count: 0,
    append: function (value) {
      const node = Node(value);
      this.count++;
      if (this.head === null && this.tail === null) {
        this.head = node;
        this.tail = node;
        return;
      }
      let current = this.head;
      while (current) {
        if (current.nextNode === null) {
          current.nextNode = node;
          this.tail = node;
          return;
        }
        current = current.nextNode;
      }
    },
    prepend: function (value) {
      const node = Node(value);
      this.count++;
      if (this.head === null && this.tail === null) {
        this.head = node;
        this.tail = node;
        return;
      }
      let temp = this.head;
      this.head = node;
      node.nextNode = temp;
    },
    toString: function () {
      let current = this.head;
      let str = "";
      while (current) {
        str += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      str += "null";
      return str;
    },
    size: function () {
      return this.count;
    },
    getHead: function () {
      return this.head;
    },
    getTail: function () {
      return this.tail;
    },
    at: function (index) {
      let i = 0;
      let current = this.head;
      while (i < index) {
        current = current.nextNode;
        i++;
      }
      return current;
    },
    pop: function () {
      let current = this.head;
      this.count--;
      while (current) {
        if (current.nextNode === this.tail) {
          this.tail = current;
          current.nextNode = null;
        }
        current = current.nextNode;
      }
    },
    contains: function (value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }
      return false;
    },
    find: function (value) {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value === value) {
          return index;
        }
        current = current.nextNode;
        index++;
      }
      return null;
    },
    insertAt: function (value, index) {
      let current = this.head;
      let previous;
      let i = 0;
      while (current) {
        if (i === index) {
          let node = Node(value);
          previous.nextNode = node;
          node.nextNode = current;
        }
        previous = current;
        current = current.nextNode;
        i++;
      }
    },
    removeAt(index) {
      let current = this.head;
      let previous;
      let i = 0;
      while (current) {
        if (i === index) {
          previous.nextNode = current.nextNode;
          return;
        }
        previous = current;
        current = current.nextNode;
        i++;
      }
    },
  };
}

const newList = LinkedList();
newList.append(7);
newList.append(3);
newList.append(6);
newList.append(4);
newList.prepend(9);
console.log(newList.toString());
newList.insertAt(2, 1);
console.log(newList.toString());
newList.removeAt(2);
console.log(newList.toString());
