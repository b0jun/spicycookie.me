---
title: 'Stack 자료구조 다루기'
subtitle: '자바스크립트 코드를 통해 Stack 자료구조를 분석해보자.'
date: '2020-07-24'
category: 'DataStructure'
cover: '../images/stack.png'
private: false
---

## 🧵 스택(Stack)의 정의

스택은 한쪽 끝에서만 데이터를 넣고 뺄 수 있기 때문에 LIFO(Last-In, First-Out), 즉 후입선출 형식을 가진 자료구조이다.

<img src="https://i.ibb.co/9hW5F5p/stack.gif" alt="stack">

## 🎨 스택의 ADT

- push(data): 스택의 가장 윗부분에 데이터를 추가한다.
- pop(): 스택에서 가장 위에 있는 데이터를 제거한다. (삭제된 데이터 반환)
- peek(): 스택의 가장 위에 있는 데이터를 반환한다. (삭제 X)
- isEmpty(): 스택이 빈 경우 true, 그렇지 않은 경우 false를 반환한다.

## 🧪 스택의 활용 예시

- 웹 브라우저의 뒤로가기(back)
- 실행 취소(undo)
- 후위 표기법(postfix)

## 💻 스택의 구현

스택은 배열, 객체을 통해서도 구현도 가능하고, 연결 리스트를 통해서도 구현이 가능하다. 여기서는 배열, 객체를 통해 다루는 것만 해볼 것이다.

### 배열을 통한 구현

```
class Stack {
  constructor() {
    this.storage = [];
    this.topIndex = -1;
  }
  isEmpty(){
    return this.topIndex === -1 ? true : false
  }
  push(data) {
    this.topIndex += 1;
    this.storage[this.topIndex] = data;
  }

  pop() {
    if(this.isEmpty()) {
      console.log('Empty!');
      return;
    }
    const result = this.storage[this.topIndex];
    this.storage = this.storage.slice(0, this.topIndex);
    this.topIndex -= 1;
    return result;
  }

  peek() {
    if(this.isEmpty()){
      console.log('Empty!');
      return;
    }
    return this.storage[this.topIndex];
  }
}
```

### 객체를 통한 구현

```
class Stack {
  constructor() {
    this.storage = {};
    this.top = -1;
  }

  isEmpty() {
    return this.top === -1 ? true : false;
  }

  push(data) {
    this.top += 1;
    this.storage[this.top] = element;
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Empty!');
      return;
    }

    const result = this.storage[this.top];
    delete this.storage[this.top];
    this.top -= 1;

    return result;
  }
}
```

## 🔍 Reference

- 윤성우의 열혈 자료구조 (저자: 윤성우)
