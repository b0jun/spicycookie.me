---
title: '회전된 배열에서 이진검색'
date: '2020-08-14'
category: 'Algorithm'
cover: '../images/default.jpg'
private: false
---

## 📖 문제 설명
정렬되어 있는 배열 중 일부를 왼쪽 혹은 오른쪽으로 회전시킨 배열이 주어졌을때, 어떻게 하면 특정 값을 효율적으로 찾을 수 있을까?

- target의 index값을 리턴한다.
- 만약 값이 없으면 null을 리턴한다.

## 🧪 입출력 예시

```
rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5;
rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null;
```

## 💡 문제 풀이

```
const rotatedArraySearch = function (rotated, target) {
  let left = 0, right = rotated.length - 1;
  
  // left 와 right가 같아지는 시점은 모든 검사가 종료되는 시점
  while(left <= right){
    let mid = Math.floor((left + right) / 2);

    if(rotated[mid] === target){
      return mid;
    }

    if(rotated[left] <= rotated[mid]){
      if(rotated[left] <= target && target < rotated[mid]){
        right = mid - 1; //이후 중간값들을 비교할 필요가 없어져서
      } else {
        left = mid + 1;
      }
    }
    
    else if(rotated[left] > rotated[mid]){
      if(rotated[mid] < target && target <= rotated[right]){
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  };
  return null;
};
```
