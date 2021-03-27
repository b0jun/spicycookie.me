---
title: '연결 리스트(LinkedList) 다루기'
subtitle: '자바스크립트 코드를 통해 LinkedList 자료구조를 분석해보자.'
date: '2020-07-25'
category: 'DataStructure'
cover: '../images/linkedlist.png'
private: false
---

## 🧵 연결 리스트(LinkedList)의 정의

연결 리스트는 크기가 동적인 자료구조로, 이 자료구조를 구성하는 요소를 노드(Node)라고 부른다. 즉 노드-노드 간의 연결로 이루어진 구조이다.

<img src="https://i.ibb.co/fpGP2pv/linkedlist.gif" alt="linkedlist">

## 배열과 연결리스트의 비교

배열은 인덱스 주소만 알고 있다면, 시간 복잡도 O(1)만에 해당 원소를 조회할 수 있다. 하지만 삽입과 삭제의 경우에는 삭제 후 원소들을 하나하나 옮겨줘야 하기때문에 O(n)의 시간복잡도가 걸린다.

연결 리스트는 삽입과 삭제에 대해서 단순히 O(1)의 시간복잡도를 갖지만, 조회에 대해서 연결리스트의 각 노드는 인덱스 값을 갖지 않기때문에, 처음부터 전체 연결 리스트를 훑어야 되므로 O(n)의 시간복잡도를 가진다.

정리하자면, 연결리스트는 데이터의 조회보다 삽입 삭제가 많은 구조에서 유리하고, 배열은 그 반대의 경우에 유리하다.

| 자료구조    | 조회 | 삽입 | 삭제 |
| ----------- | ---- | ---- | ---- |
| Array       | O(1) | O(n) | O(n) |
| Linked List | O(n) | O(1) | O(1) |

## 🎨 연결 리스트의 ADT

- addTotail(data): 리스트의 마지막에 데이터를 추가한다.
- insertAt(data, index): 특정 부분에 데이터를 추가한다.
- remove(data): 해당 데이터를 삭제한다.
- indexOf(data): 해당 데이터의 인덱스 값을 반환하며, 없을 시 -1로 반환한다.
- getNodeAt(index): 해당 인덱스가 가지고 있는 데이터를 반환한다.
- size(): 리스트의 사이즈를 반환한다.

## 💻 연결 리스트의 구현

연결 리스트 종류는 대표적으로 단방향 연결 리스트, 이중 연결 리스트 등이 있다. 단방향 리스트에 비해 이중 연결 리스트는 처음에서 끝, 끝에서 처음으로 양방향으로 리스트 순회가 가능하다는 장점이 있다.

### 단방향 연결 리스트(Singly Linked List)

```
class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addToTail(data){
    const newNode = new Node(data);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size ++;
  }

  insertAt(data, index) {
    if(index > 0 && index > this._size){
      console.log('Out of Range!');
      return;
    }
    if(index === 0){
      this.head = new Node(data, this.head);
      return;
    }
    const newNode = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;
    while(count < index){
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    newNode.next = current;
    previous.next = newNode;
    this._size++;
  }

  indexOf(data) {
    let index = 0;
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.data === data){
        return index;
      }
      index += 1;
      currentNode = currentNode.next;
    }
    return -1;
  }

  remove(data) {
    const index = this.indexOf(data);
    if(index === -1){
      console.log('No Data!');
      return;
    }

    if (index === 0) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this._size = 0;
      } else {
        this.head = this.head.next;
        this._size--;
      }
      return;
    }
    const prevNode = this.getNodeAt(index - 1);
    const removedNode = prevNode.next;

    if (removedNode === this.tail) {
      prevNode.next = null;
      this.tail = prevNode;
      this._size--;
      return;
    }

    prevNode.next = removedNode.next;
    this._size--;
  }

  getNodeAt(index) {
    let counter = -1;

    let currentNode = this.head;
    while (currentNode) {
      counter += 1;
      if (index === counter) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return undefined;
  }

  size() {
    return this._size;
  }
}
```

## 🔍 Reference

- [visualgo gif](https://visualgo.net/)
- [Traversty Media](https://www.youtube.com/watch?v=ZBdE8DElQQU&ab_channel=TraversyMedia)
