---
title: '재귀 없이 나타내는 피보나치'
date: '2020-08-06'
category: 'Algorithm'
private: false
---

## 📖 문제 설명

재귀를 사용하지않고 iterative하게 함수를 작성하라.

#### 피보나치 규칙

<pre>
  <code>
    1 1 2 3 5 8 13...
  </code>
</pre>

## 🧪 입출력 예시

```
nthFibonacci(2); // => 1
nthFibonacci(3); // => 2
nthFibonacci(4); // => 3
```

## 💡 문제 풀이

#### \*예시) n이 5일때

| n   | fibs   | fibs.shift() | fibs[0] | fibs.push() |
| --- | ------ | ------------ | ------- | ----------- |
| 5   | [0, 1] | 0            | 1       | 1           |
| 4   | [1, 1] | 1            | 1       | 2           |
| 3   | [1, 2] | 1            | 2       | 3           |
| 2   | [2, 3] | 2            | 3       | 5           |

```
const nthFibonacci = function (n) {
  let fibs = [0, 1];
  while(n > 1){
    fibs.push(fibs.shift() + fibs[0]);
    n--;
  }
  return fibs[n];
};
```
