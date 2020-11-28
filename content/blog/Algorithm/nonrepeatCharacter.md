---
title: '최초로 반복하지 않는 문자열'
date: '2020-08-03'
category: 'Algorithm'
private: false
---

## 📖 문제 설명

임의의 문자열이 주어졌을 때, 문자열 내에서 최초로 반복하지 않는 문자를 반환하는 함수를 작성하라.

## 🧪 입출력 예시

```
firstNonRepeatedChar('ABA'); // => 'B'
firstNonRepeatedChar('AACBDB'); // => 'C'
firstNonRepeatedChar('AAABXBX'); // => null
```

## 💡 문제 풀이

```
const firstNonRepeatedChar = function (string) {
  let temp = {};
  let char;
  for (var i = 0; i < string.length; i++) {
    char = string[i];
    if (!temp[char]) temp[char] = 1;
    else temp[char]++;
  }
  for (i = 0; i < string.length; i++) {
    char = string[i];
    if (temp[char] === 1) return char;
  }
  return null;
};
```

```
/* indexOf 이용 */
const firstNonRepeatedChar = function(string) {
  // TODO: Your code here!
  for(let i = 0; i< string.length; i++){
    let target = string.slice(0, i) + string.slice(i + 1);
    if(target.indexOf(string[i]) === -1){
      return string[i];
    }
  }
  return null;
};
```
