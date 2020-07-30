---
title: '배열과 객체의 개념과 차이 (Array vs Object)'
date: '2020-06-17'
category: 'JavaScript'
cover: '../images/js.png'
private: false
---

# 🍪 배열과 객체의 정의

## 배열의 선언방법

> let arr = [];

```
let arr = [];          // 빈 배열 선언
arr = [1, 3, 5, 7, 9]; // 배열에 값 할당
console.log(arr);      // [1, 3, 5, 7, 9]
```

- 배열은 순서가 있는 값으로, 그 순서는 인덱스로 구성이 되어있습니다. (번호는 0부터 매김)
- 그 값들은 요소(element)라고 부르며, 각각의 요소들은 쉼표(comma)로 구분해줍니다.
- 대괄호'[ ]'를 통해 배열을 만듭니다.

## 객체의 선언방법

> let user = {};

```
let user = {};     // 빈 객체 선언
user = {
  name: "Jun",
  email: "jun@gmail.com",
  city: "Busan"
}                  // 객체에 값 할당
console.log(user);
// {name: "Jun", email: "jun@gmail.com", city: "Busan"}
```

- 항상 키와 값(key-value pair)으로 값을 넣어야합니다.

* 그 값들은 속성(Property)라고 부르며, 한 쌍당 구분은 쉼표(comma)로 구분해줍니다.

- 중괄호'{ }'를 통해 객체를 만듭니다.

# 🍪 값을 접근하는 방법

## 배열의 값 접근

> arr[index];

```
let fruit = ["apple", "banana", "cherry"];
console.log(fruit[0]); // "apple"
console.log(fruit[2]); // "cherry"
fruit[2] = "corn";
console.log(fruit[2]); // "corn"
```

## 객체의 값 접근

### 1. Dot notation

> obj.key

### 2. Bracket notation

> obj['key']

```
let user = {
  name: "Jun",
  email: "jun@gmail.com",
  city: "Busan"
}

/*Dot notation*/
console.log(user.name);  // "Jun"
console.log(user.email); // "jun@gmail.com"

/*Bracket notation*/
console.log(user['email']); // "jun@gmail.com"
console.log(user['city']);  // "Busan

user.email === user['email'] // true

/*값 변경*/
user.name = "Bob";
console.log(user.name); // "Bob"
```

# 🍪 값의 추가, 삭제와 각종 메서드

## 배열의 값 추가와 삭제(push, pop, shift, unshif, concat)

```
let num = [1, 2, 3, 4, 5];

/* push(): 마지막 index에 배열 추가 */
num.push(100); // --> [1, 2, 3, 4, 5, 100]

/* pop(): 마지막 index의 배열 삭제*/
num.pop(); // --> [1, 2, 3, 4, 5]

/* shift(): 첫번째 index의 배열 삭제 */
num.shift(); // --> [2, 3, 4, 5]

/* unshift(): 첫번째 index에 배열 추가 */
num.unshift(500); // --> [500, 2, 3, 4, 5]

/* concat(): 배열을 병합, push()와 유사*/
let newNum = num.concat(300);
console.log(num);    // --> [500, 2, 3, 4, 5]
console.log(newNum); // --> [500, 2, 3, 4, 5, 300]
```

### 📌 push와 concat의 차이 (불변성의 차이, Immutable)

- push: 원본을 바꾸며, 배열의 끝에 요소를 추가하고 그 배열의 길이를 반환
- concat: 원본을 바꾸지 않으며, 새로 만든 배열을 반환

## 객체의 값 추가와 삭제(notation, delete, key in obj)

```
let user = {
  name: "Jun",
  city: "Busan",
  email: "jun@gmail.com",
}

/* 값을 추가하기 */

user.isStudent = true;
user['hobby'] = ['축구', '야구'];
/**
 *{
 *  name: "Jun",
 *  city: "Busan",
 *  email: "jun@gmail.com",
 *  isStudent: true,
 *  hobby: ["축구", "야구"]
 *}
 */

/* delete: 값을 삭제하기*/
delete user.email;
/**
*{
*  name: "Jun",
*  city: "Busan",
*  isStudent: true,
*  hobby: ["축구", "야구"]
*}
*/

/* 키 확인하기 */
'city' in user; // true
'email' in user; // false
}
```

## 배열과 객체의 차이를 확인할 수 있는 메서드 (Array.isArray, length)

```
let arr = []; // Array
let obj = {}; // Object

/* typeof는 배열인지 객체인지 구분 불가 */
typeof(arr) // "object"
typeof(obj) // "object"
typeof(arr) === type(obj) // true

/* Array.isArray()를 통한 분별 */
Array.isArray(arr); // true
Array.isArray(obj); // false

/* 객체는 length 사용 불가*/
arr.length // 0
obj.length // undefined
```
