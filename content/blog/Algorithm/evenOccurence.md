---
title: '짝수개인 원소값 한개 찾기'
date: '2020-09-18'
category: 'Algorithm'
cover: '../images/default.jpg'
private: false
---

## 📖 문제 설명

배열이 주어졌을 때, 값이 같은 원소가 짝수 개수만큼 나오는 첫번째 원소를 반환하라.

- 개수가 짝수인 원소들이 여러 개인 경우, 그 중 첫번째 원소를 반환
- 개수가 짝수인 원소가 없으면, null을 반환

## 🧪 입출력 예시

```
evenOccurrence(['meow', 2, 1, 'meow'])            // 'meow'
evenOccurrence(['cat', 'dog', 'dig', 'cat'])      // 'cat'
evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);   // 4
```

## 💡 문제 풀이

```
const evenOccurrence = function(arr) {
 const obj = 
    arr.reduce((acc, cur) => {
      if(cur in acc){
        acc[cur]++;
      } else{
        acc[cur] = 1;
      }
      return acc;
    }, {});

  for(let key in obj){
    if(obj[key] % 2 === 0){
      return isNaN(key) ? key : Number(key)
    }
  }
  return null;
};
```

## 🧠 후기
빈도수를 측정하기 위해서 내가 가장 편하게 애용하는 것은, 객체이다. 배열을 객체로 변환 시켜서, `key, value` 쌍으로 `원소값, 빈도수`로 쉽게 저장할 수 있다. 하지만, 원소값이 숫자일 경우에는 숫자가 반환되어야 하는데, 객체로 바꾸면서 문자열로 변환되어 리턴되버렸다. 

결국 리턴하기전에 key 값을 체크해서 그에 맞는 타입을 반환해주게 해야됬다. 이를 위해 [isNaN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN)을 사용해서 숫자와 문자열 타입을 체크해주었다.