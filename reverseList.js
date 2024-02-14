class Node {
  constructor(value) {
    this.value = Number(value);
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let node = new Node(value);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

function makeLinkedList(head) {
  let llist = new LinkedList();
  for (let i = 0; i < head.length; i++) {
    llist.add(head[i]);
  }
  return llist;
}

function reverse(head) {
  if (head === null) return;
  let currentNode = head;
  let prevNode = null;
  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  head = prevNode; 
  return head;
}
function printLinkedList(head) {
  let current = head;
  let list = [];
  while (current != null) {
    list.push(current.value);
    current = current.next;
  }
  console.log(list);
}

let head = [1, 2, 3, 4, 5];
let llist = makeLinkedList(head);
let lhead = llist.head;
lhead = reverse(lhead);
printLinkedList(lhead);

let head2 = [1,2];
let llist2 = makeLinkedList(head2);
lhead = llist2.head;
lhead = reverse(lhead);
printLinkedList(lhead);

let head3 = [];
let llist3 = makeLinkedList(head3);
lhead = llist3.head;
lhead = reverse(lhead);
printLinkedList(lhead);

// Time Complexity: O(n) where n is the size of the linked list.
// Space Complexity: O(1)