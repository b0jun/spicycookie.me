---
title: '같은 문자열 빈도수별로 매핑하기'
date: '2020-09-21'
category: 'Algorithm'
cover: '../images/default.jpg'
private: false
---

## 📖 문제 설명

문자열을 받아서 그 문자열 안의 문자들을 똑같은 문자가 나오는 빈도수에 따라 ["문자", "빈도수"] 형태로 원소를 만들어서, 그것들을 내림차순으로 순서대로 정렬하라.

(같은 빈도수일 경우, 사전순으로 정렬)

## 🧪 입출력 예시

```
characterFrequency('mississippi');
/*
  [
    ["i", 4],
    ["s", 4],
    ["p", 2],
    ["m", 1]
  ];
*/

characterFrequency('miaaiaaippi');
/*
  [
    ["a", 4],
    ["i", 4],
    ["p", 2],
    ["m", 1]
  ];
*/
```

❗빈도수가 같을 경우 사전순으로

```
characterFrequency('mmmaaaiiibbb');
/*
  [
    ["a", 3],
    ["b", 3],
    ["i", 3],
    ["m", 3]
  ];
*/
```



## 💡 문제 풀이

```
const characterFrequency = function (string) {
  const countTheObj = string
    .split("")
    .sort()
    .reduce((acc, cur) => {
      if (cur in acc) {
        acc[cur]++;
      } else {
        acc[cur] = 1;
      }
      return acc;
    },{});
  return objToArray(countTheObj)
    .sort((a, b) => b[1] - a[1]);
};

const objToArray = (obj) => {
  const array = [];
  for(let key in obj){
    array.push([key, obj[key]]);
  }
  return array;
};
```

## 🧠 후기
문자열을 받아서 이를 빈도수별로 된 배열의 형태로 나타내는 문제였다. 나는 카운트를 좀 더 쉽게 하기 위해서, 객체의 이미 만들어진 키값은 중복생성하지 않는 성질을 이용하기로 했다. 그리고 빈도수가 같을 경우 사전순으로 정렬해야됬는데, 객체로 변환하기 전에 sort함수를 통해 미리 정렬을 하니 좀 더 편해졌다. 이후 생성된 객체를 통해 이를 원하는 형태의 배열로 변환한 후 단순히 빈도수 별로 sort해주면 끝이였다.