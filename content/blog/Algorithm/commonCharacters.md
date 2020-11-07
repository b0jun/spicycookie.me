---
title: '공통으로 가지고 있는 문자열을 찾기'
date: '2020-08-10'
category: 'Algorithm'
cover: '../images/default.jpg'
private: false
---

## 📖 문제 설명

n개의 문자열을 매개변수로 받아 공통으로 가지고 있는 문자를 순서대로 return하는 함수를 작성하라. (공백, 중복은 제외한다)

## 🧪 입출력 예시

```
let a = ['apple', 'banana'];
a.isSubsetOf(['apple', 'banana', 'kiwi', 'grape']); // true
```

❗배열 내의 중복값은 무시한다.

```
commonCharacters('acsdwz', 'aegizdcx');    // 'acdz'
commonCharacters('zxacb', 'bzxa', 'zawy'); // 'za'
```

## 💡 문제 풀이

```
const commonPart = (string1, string2) => {
  let array1 = string1.split("");
  let array2 = string2.split("");

  return array1.reduce((acc, cur) => {
    if(array2.includes(cur) && !acc.includes(cur) && cur !== " "){
      acc.push(cur);
    }
    return acc;
  }, []).join("");
};

const commonCharacters = function() {
  let args = Array.prototype.slice.call(arguments);
  return args.reduce((acc, cur) => {
    return commonPart(acc, cur);
  }, arguments[0])
};

```
