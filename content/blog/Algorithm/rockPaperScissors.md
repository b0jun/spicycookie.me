---
title: '가위바위보 경우의 수'
date: '2020-08-02'
category: 'Algorithm'
private: false
---

## 📖 문제 설명

한 명이 `n 판`의 가위바위보를 진행하는 동안에 낼 수 있는 모든 경우의 수를 반환하는 함수를 작성하라.

## 🧪 입출력 예시

```
rockScissorsPaper(3);

[
  ['rock', 'rock', 'rock'],
  ['rock', 'rock', 'scissors'],
  ['rock', 'rock', 'paper'],
  ['rock', 'scissors', 'rock'],
  ["rock", "scissors", "scissors"],
  // ...etc ...
];
```

## 💡 문제 풀이

```
const rockScissorsPaper = function (round) {
  const result = [];
  const weapon = ['rock', 'scissors', 'paper'];

  const roundCheck = (round, temp = []) => {
    if(round === 0) {
      result.push(temp);
      return;
    }
    for(let i = 0; i < weapon.length; i++) {
      roundCheck(round - 1, temp.concat(weapon[i]));
    }
  };
  roundCheck(round);
  return result;
};
```
