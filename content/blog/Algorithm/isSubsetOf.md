---
title: '두 배열 부분집합 여부 체크'
date: '2020-08-04'
category: 'Algorithm'
private: false
---

## 📖 문제 설명

특정 배열이 매개변수로 전달되는 배열의 부분집합인지를 판단하는 메서드를 작성하라. 비교 대상인 두 배열이 모두 문자열로 이루어졌다고 가정한다.

## 🧪 입출력 예시

```
let a = ['apple', 'banana'];
a.isSubsetOf(['apple', 'banana', 'kiwi', 'grape']); // true
```

❗배열 내의 중복값은 무시한다.

```
let b = ['apple', 'banana', 'banana'];
b.isSubsetOf(['banana', 'apple', 'grape', 'kiwi']); // true
```

## 💡 문제 풀이

```
Array.prototype.isSubsetOf = function(array) {
  const isContain = (array, value) => {
    for(let i = 0; i < array.length; i++){
      if(array[i] === value) {
        return true;
      }
    }
    return false;
  }
  for(let i = 0; i < this.length; i++){
    if(!isContain(array, this[i])){
       return false
    };
  }
  return true;
};
```
