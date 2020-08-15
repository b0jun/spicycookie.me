---
title: '[JS] Object 관련 메서드'
date: '2020-06-18'
category: 'JavaScript'
cover: './images/objmethod_cover.png'
private: false
---

## Object.assign() - 객체를 병합하는 메서드

> Object.assign(target, ...sources)

해당 메서드는 하나 이상의 원본 객체들로부터 모든 속성들을 대상 객체로 복사한다.

첫번째 인자는 타겟으로, 그 뒤 인자부터는 타겟오브젝트에 병합될 객체이다.

```
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };

var newObj = Object.assign(obj1, obj2, obj3);
console.log(obj1);   // { a: 1, b: 2, c: 3 }
console.log(newObj); // { a: 1, b: 2, c: 3 }
```

위 예제에서는 obj1값 자체가 변경이되어, obj1과 newObj가 같아졌다. 그래서 항상 값을 보존하면서, 새로운 객체를 반환해야한다면, 항상 아래와 같이 첫번째 인자로 빈 객체를 줘야한다.

```
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };

var newObj = Object.assign({}, obj1, obj2, obj3);
console.log(obj1);   // { a: 1 }
console.log(newObj); // { a: 1, b: 2, c: 3 }
```

또 Object.assign()는 열거할 수 있는 출처 객체의 속성만 대상 객체로 복사한다.

> Object.assign() `null` 또는 `undefined`값에 대해서는 오류를 던지지 않음.

```
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);

/* 원시 자료형은 래핑되지만, null 과 undefined 는 무시됨 */
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

## Object.keys(), Object.values(), Object.entries()

해당 메서드들은 각각 키, 값, 키-값 배열을 반환한다.

> Object.keys(obj), Object.values(obj), Object.entries(obj)

```
let score = {
   science: 80,
   math: 90,
   coding: 100
}

/* 키를 반환 */
console.log(Object.keys(score));
// ["science", "math", "coding"]

/* 값을 반환 */
console.log(Object.values(score));
// [80, 90, 100]

/* 키-값 쌍을 반환 */
console.log(Object.entries(score));
// [["science", 80], ["math", 90], ["coding", 100]]
```

## Object.prototype.hasOwnProperty()

해당 프로토타입 메서드는 객체가 특정 프로퍼티에 대한 소유여부 반환한다.

> obj.hasOwnProperty(prop)

```
let obj = {
   a: "one",
   b: "two",
   c: "three",
   d: "four"
};

obj.hasOwnProperty("a"); // true
obj.hasOwnProperty("b"); // true
obj.hasOwnProperty("e"); // false
```
