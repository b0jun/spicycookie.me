---
title: 'Queue 자료구조 다루기'
date: '2020-07-24'
category: 'DataStructure'
cover: '../images/queue.png'
private: false
---

## 🧵 큐(Queue)의 정의

스택은 한쪽 끝에서만 데이터를 넣고 뺄 수 있기 때문에 LIFO(Last-In, First-Out), 즉 후입선출 형식을 가진 자료구조이다.

큐는 먼저 들어간 데이터가 먼저 나오는 FIFO(First-In, First-Out), 즉 선입선출 형식을 가진 자료구조이다. 

## 🎨 큐의 ADT

- enqueue(data): 큐에 데이터를 추가한다.
- dequeue(): 큐에서 저장 순서가 가장 앞선 데이터를 제거한다. (삭제된 데이터 반환)
- peek(): 큐에서 저장 순서가 가장 앞선 데이터를 반환한다. (삭제 X)
- isEmpty(): 큐가 빈 경우 true, 그렇지 않은 경우 false를 반환한다.

## 🧪 큐의 활용 예시

- 너비 우선 탐색(BFS, Breadth-First Search)
- 캐시(Cache)
- 프로세스
- 프린터 출력 순서
- 커피 주문 대기줄
  

## 💻 큐의 구현

큐는 배열, 객체를 통해서도 구현도 가능하고, 연결 리스트를 통해서도 구현이 가능하다. 여기서는 객체를 통해 다루는 것만 해볼 것이다.

### 객체를 통한 구현

```
class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  enqueue(data) {
    this.storage[this.rear] = data;
    this.rear += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Empty!');
      return;
    }
    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    
    return result;
  }
  
  peek(){
    if (this.isEmpty()) {
      console.log('Empty!');
      return;
    }
    return this.storage[this.front];
  }
}
```


## 💡 자바스크립트에서 원형 큐

자바스크립트가 아닌 다른 언어에서 배열을 통해 다뤘을 때 주의할 점이 있다. 바로, 배열의 크기가 정해져있기 때문에, Rear가 더 이상 오른쪽으로 이동할 수 없는 상황이 올 수 있기 때문이다. 하지만, 자바스크립트에선 배열의 크기가 고정되어 있지 않으므로, 신경쓰지 않아도 된다. 실제론 다른 언어에서 이를 대비해 원형Queue로 구현해 공간낭비를 최소화 하는데, 자바스크립트에선 이 원형Queue의 효능이 살짝 떨어지는 편이다.

## 🔍 Reference

- 윤성우의 열혈 자료구조 (저자: 윤성우)
- [bbodela | JavaScript_ stack & queue](https://velog.io/@bbodela/data-structure)