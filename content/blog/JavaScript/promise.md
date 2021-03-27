---
title: '비동기 처리를 위한 Promise 객체'
subtitle: '비동기를 간편하게 처리할 수 있는 Promise를 분석해봅시다.'
date: '2020-08-14'
category: 'JavaScript'
cover: './images/promise_cover.png'
private: false
---

# 🍪 Promise란 무엇인가?

`Promise`는 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있게 도와주는 객체이다. Promise 이전에 비동기 처리로 콜백 패턴을 주로 사용했었다. 그러나 `콜백 지옥(Callback Hell)`으로 인해 가독성도 나쁘고, 비동기 처리 중에 발생한 에러의 처리가 까다로웠다. Promise는 이러한 단점을 보완하기 위해 나온 대안이라고 봐도 무방하다.

## 👻 끔찍한 Callback에서 벗어나 Promise 적용하기

Promise를 설명하기에 앞서, Callback과 Promise를 통해 짜진 두 코드를 보자.

```
/* callback */
function add10(a, callback){
   setTimeout(() => callback(a + 10), 100);
}

add10(5, res => {
   console.log(res); // 15
});
```

```
/* promise */
function add20(a){
   return new Promise(resolve => setTimeout(() => resolve(a + 20), 100));
}

add20(5)
   .then(console.log); // 25
```

가장 명확하게 보이는 차이는 Promise가 Callback과 달리 `결과를 값으로 받아서 저장`할 수 있다는 것이다. 즉, Promise는 반환만 하면 되어, 따로 Callback함수를 따로 받을 필요가 없다.
그래서 Promise는 결과 그 자체를 값으로 받기 때문에, 연속으로 실행하는 코드에선 (`then()` 이용) Callback보다 더 가독성 있는 코드가 된다.

```
/* callback */
add10(5, res => {
   add10(res, res => {
      add10(res, res => {
         console.log(res); //35
      }); // Callback Hell...
   });
});
```

```
/* promise */
add20(5)
   .then(add20)
   .then(add20)
   .then(console.log); //65
```

# 🍪 어떻게 구성되어있나?

## 🔸 프로미스(Promise)의 생성

기본적으로 Promise 객체 생성하기 위한 간단한 코드를 아래처럼 작성 할 수 있다.

```
// Promise 객체의 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행

  if (/* 비동기 작업 수행 성공 */) {
    resolve('Success');
  }
  else { /* 비동기 작업 수행 실패 */
    reject('Failed');
  }
});
```

그리고, Promise로 구현된 비동기 함수는 Promise 객체를 반환하며, 이로 구현된 비동기 함수를 호출하는 측에서 Promise 객체의 후속 처리 메서드(then, catch)를 통해 비동기 처리 결과 또는 에러메세지를 전달받아 처리한다. 이를 통해 후속 처리 메서드를 체이닝 방식으로 호출이 가능하다.

- then: 두 개의 콜백 함수를 인자로 받으며, 첫번째 함수는 성공 시, 두번째 함수는 실패시 호출 된다. then은 Promise를 반환한다.
- catch: 에러가 발생하면 호출되며, then의 두번째 인자와 같은 역할을 한다. catch는 Promise를 반환한다.

> ※ 첫번째 콜백 함수 내부에서 오류가 날경우, 오류를 제대로 잡지 못하는 경우도 있으므로, 가급적 에러처리는 catch()통해 하는게 좋다.

## 🔸 프로미스(Promise)의 상태

Promise는 대표적으로 다음과 같은 3가지 상태를 가진다.

- Pending(대기): 비동기 처리 로직이 아직 미완료인 상태
- Fulfilled(이행): 비동기 처리가 완료되어 promise가 결과 값을 반환해준 상태
- Rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태

### ◾ Pending 상태

아래와 같이 Promise를 호출하면 Pending 상태가 된다. 이때 콜백 함수의 인자로 resolve, reject에 접근할 수 있다.

```
new Promise(function(resolve, reject){
    // ...
});
```

### ◾ Fulfilled 상태

콜백 함수의 인자 `resolve`를 실행하면 Fulfilled 상태가 된다. (완료 상태)

```
new Promise(function (resolve, reject) {
   resolve();
});
```

이후 이행 상태가 되면 `then()`을 이용해 처리 결과 값을 받을 수 있다.

### ◾ Rejected 상태

콜백 함수의 인자 `reject`를 실행하면 Rejected 상태가 된다. (실패 상태)

```
new Promise(function(resolve, reject) {
  reject();
});
```

이후 실패 상태가 되면 `catch()`를 이용해 error를 다룰 수 있다.

프로미스 처리 흐름을 그림으로보면 다음과 같다.

<center><img src="./images/promise_1.png" alt="promise_1"/></center>

정리하자면, Promise는 정해진 기능을 수행했을때, 정상적으로 이루어지면 성공, 예상치 못한 문제가 발생하면 에러를 전달해준다. 또 비동기 작업을 하는 함수의 리턴타입으로 쓰이며, 어떤 함수가 비동기적인 작업을 한다고 하면, 그 함수는 프로미스를 반환한다.

# 🍪 어떻게 사용할까?

## 🔸 기본적인 프로미스(Promise) 사용 방법

기본적으로 어떻게 동작하는지 되새겨보자. 아래 코드는 비동기적으로 동작하진 않지만, 동작 이해를 위해서 작성했다.

```
const devide = (num1, num2) => {
   return new Promise((resolve, reject) => {
      if (num2 !== 0) {
         resolve(num1 / num2);
      } else {
         reject(new Error("0으로 나눌 수 없습니다."));
      }
   })
}
```

위 함수는 나눌때 두번째 인자가 0이 아니면 `정상적인 값`을, 0이면 `에러`를 출력하는 Promise이다.

```
/* Success: 두번째 인자가 0이 아닐 경우*/
devide(10, 5)
   .then((value) => console.log("성공:", value))
   .catch((error) => console.log("실패:", error))
// 성공: 2

/* Failed: 두번째 인자가 0일 경우*/
devide(10, 0)
   .then((value) => console.log("성공:", value))
   .catch((error) => console.log("실패:", error))
// 실패: Error: 0으로 나눌 수 없습니다.
//  at <anonymous>:6:17
//  at new Promise (<anonymous>)
//  at devide (<anonymous>:2:11)
//  at <anonymous>:16:1
```

즉, 출력 결과를 통해 정상적인 인자를 넘긴 경우엔 `then()`이 호출되고, 비정상적인 인자를 넘긴 경우엔 `catch()`가 호출됨을 알 수 있다.

하지만 주로 코딩을 할 때는 위와 같이 Promise를 직접 생성해서 리턴해주는 코드 보다는 어떤 API를 호출해서 리턴 받은 Promise 객체를 사용하는 경우가 더 많을 것이다. 대표적 예시로 `fetch API`가 있다. 이는 브라우저 내장함수로 네트워크 요청을 날리기 위한 API이다. 요청을 보내고 응답을 받는 과정에는 불가피하게 딜레이가 발생할 수밖에 없다.

fetch 함수 역시 Prmoise 객체를 반환한다.

```
fetch("요청할 URL")
   .then((res) => console.log(res)) //정상 응답 시 resolve() 호출
   .catch(err) => console.log(err)) //비정상 응답 시 reject() 호출
```

## ⛓ 프로미스 체이닝(Promise Chaining)으로 여러개 연결하기

위에서 언급했던 후속 처리 메서드(then, catch)를 통해 반환되는 Promise를 체이닝하면, 여러 개의 Promise를 연결해서 사용 가능하다.

기본적인 Promise 체이닝의 예시를 보면 다음과 같다.

```
const promise = doSomethingAsync();
// promise는 Promise 인스턴스

promise
   .then(doSomething1)
   .then(doSomething2)
   .catch(handleError)
   .then(doSomething3)
   ...
   .finally(finishLine)
```

이 구조를 잘 파악해보면, 2개의 API를 연결해서 하나의 데이터로 받아오는 것도 가능하다.

```
const movieAPI = "https://movieapi.com/data";
const tvAPI =  "https://tvapi.com/data";

const getData = () => {
   return fetch(movieAPI)
      .then(res => res.json())
      .then(movieJson => {
         return fetch(tvAPI)
            .then(res => res.json())
            .then(tvJson => {
               return {
                  movies: movieJson,
                  tvs: tvJson
               }
            })
      })
}
```

## 🔸 이터러블을 전달받는 Promise.all

Promise.all 메서드는 프로미스가 담겨있는 Array와 같이 순회 가능한 `이터러블`을 인자로 받는다. 그리고 전달받은 모든 Promise를 병렬로 처리하고 그 결과를 resolve하는 새로운 Promise를 반환한다.

> Promise.all()은 배열 내 요소 중 어느 하나라도 reject되면 다른 프로미스의 이행 여부와 상관없이 즉시 reject한다.

### 🧪 Promise.all 예제

아래는 3개의 프로미스를 Promise.all을 통해 이터러블로 받아서, 이행 결과값들을 배열에 담아서 반환한다.

```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'bar');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'baz');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // ["foo", "bar", "baz"]
});

```

이번엔 위에서 다뤘던 Promise 체이닝 예제를 Promise.all로 표현해보자.

```
const movieAPI = "https://movieapi.com/data";
const tvAPI =  "https://tvapi.com/data";

const getData = () => {
   return Promise.all([
      fetch(movieAPI),
      fetch(tvAPI)
   ])
   .then(([movieRes, tvRes]) => {
      return Promise.all([movieRes.json(), tvRes.json()])
   })
   .then(([movieJson, tvJson]) => {
      return {
         movies: movieJson,
         tvs: tvJson
      }
   })
}
```

### 🧬 연관 포스트

- [Part1. 자바스크립트 비동기 Call Stack](https://spicycookie.me/JavaScript/callstack/)
- [Part3. 비동기를 더 쉽게 다루는 async/await](https://spicycookie.me/JavaScript/asyncawait/)

## 🔍 Reference

- [MDN | Promise.all](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Poiemaweb | Promise](https://poiemaweb.com/es6-promise)
- [javascript.info | promise basics](https://javascript.info/promise-basics)
