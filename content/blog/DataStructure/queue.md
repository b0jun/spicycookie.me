---
title: 'Queue 자료구조 다루기'
date: '2020-07-24'
category: 'DataStructure'
cover: '../images/queue.png'
private: true
---

## 🧵 큐의 정의

스택은 한쪽 끝에서만 데이터를 넣고 뺄 수 있기 때문에 LIFO(Last-In, First-Out), 즉 후입선출 형식을 가진 자료구조이다.

큐는 먼저 들어간 데이터가 먼저 나오는 FIFO(First-In, First-Out), 즉 선입선출 형식을 가진 자료구조이다. 

## 🎨 큐의 ADT

- enqueue(data): 큐의 가장 앞부분에 데이터를 추가한다.
- dequeue(): 큐에서 가장 앞선 데이터를 제거한다. (삭제된 데이터 반환)
- peek(): 큐에서 가장 앞선 데이터를 반환한다. (삭제 X)
- isEmpty(): 큐가 빈 경우 true, 그렇지 않은 경우 false를 반환한다.

## 🧪 큐의 활용 예시

- 너비 우선 탐색(BFS, Breadth-First Search)
- 캐시(Cache)
- 프로세스
- 프린터 출력 순서
- 커피 주문 대기줄
  

## 💻 큐의 구현

스택은 배열을 통해서도 구현도 가능하고, 연결 리스트를 통해서도 구현이 가능하다. 

### 배열을 통한 구현

### 연결 리스트를 통한 구현

## 🔍 Reference