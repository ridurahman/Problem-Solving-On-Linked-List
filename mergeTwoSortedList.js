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

function printLinkedList(head) {
  let current = head;
  let list = [];
  while (current != null) {
    list.push(current.value);
    current = current.next;
  }
  console.log(list);
}

function mergeTwoLists(llist1, llist2){
    let newList = new LinkedList();
    let current1 = llist1.head;
    let current2 = llist2.head;
    if(!current1){
        return llist2;
    }
    if(!current2){
        return llist1;
    }
    while(current1 || current2){
        if(!current1 || current1.value > current2.value){
            newList.add(current2.value);
            current2 = current2.next;
        } else {
            newList.add(current1.value);
            current1 = current1.next;
        }
    }
    return newList;
}

let llist1_1 = makeLinkedList([1,2,4]);
let llist1_2 = makeLinkedList([1,3,4]);
let newList1 = mergeTwoLists(llist1_1, llist1_2);
printLinkedList(newList1.head);

let llist2_1 = makeLinkedList([]);
let llist2_2 = makeLinkedList([]);
let newList2 = mergeTwoLists(llist2_1, llist2_2);
printLinkedList(newList2.head);

let llist3_1 = makeLinkedList([]);
let llist3_2 = makeLinkedList([0]);
let newList3 = mergeTwoLists(llist3_1, llist3_2);
printLinkedList(newList3.head);

// Time Complexity: O(n+m) where n and m are the sizes of two linked lists.
// Space Complexity: O(n+m)