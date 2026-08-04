// Implement Linked List Operations
function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;

  while (current !== null) {
    if (current.element === element) {
      return true;
    }
    current = current.next;
  }
  return false;
}

function getAt(list, index) {
  let current = list.head;
  let currentIndex = 0;
  while (current !== null) {
    if (currentIndex === index) {
      return current.element;
    }
    currentIndex++;
    current = current.next;
  }
  return undefined;
}

function insertAt(list, index, element) {
  if (index < 0) return false;

  const node = { element, next: null };

  if (index === 0) {
    node.next = list.head;
    list.head = node;
    list.length++;
    return true;
  }

  let current = list.head;
  let previous = null;
  let currentIndex = 0;

  while (currentIndex < index && current !== null) {
    previous = current;
    current = current.next;
    currentIndex++;
  }

  if (currentIndex === index) {
    previous.next = node;
    node.next = current;
    list.length++;
    return true;
  }

  return false;
}

function removeAt(list, index) {

  if (!list || list.head === null || index < 0) {
    return null;
  }

  let current = list.head;

  if (index === 0) {
    list.head = current.next;

    if (list.length !== undefined) list.length--;

    return current.element ?? current.value ?? current;
  }

  let previous = null;
  let currentIndex = 0;


  while (currentIndex < index && current !== null) {
    previous = current;
    current = current.next;
    currentIndex++;
  }

  if (current !== null) {
    previous.next = current.next;

    if (list.length !== undefined) list.length--;

    return current.element ?? current.value ?? current;
  }

  return null;
}

function clear(list) {
  list.head = null;
  list.length = 0;
}

const myList = initList();
console.log(isEmpty(myList));
add(myList, 42);
add(myList, 43);
add(myList, 44);
console.log(myList);
console.log(isEmpty(myList));
remove(myList, 42)
console.log(JSON.stringify(myList, null, 2))



//Implement a Stack
function initStack() {
  return { collection: [] };
}

function push(pilha, element){
  pilha.collection.push(element)
}

function pop(pilha){
  return pilha.collection.pop()
}

function peek(pilha){
  return pilha.collection.length === 0 ? undefined : pilha.collection[pilha.collection.length - 1] ;
}

function isEmpty(pilha){
  return pilha.collection.length === 0;
}

function clear(pilha){
  pilha.collection = [];

}

