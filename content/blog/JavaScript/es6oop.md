---
title: '[JS] ES6 클래스와 상속'
date: '2020-07-30'
category: 'JavaScript'
cover: '../images/es6.png'
private: false
---

자바스크립트의 `클래스(Class)`는 ECMAScript 6를 통해 소개되었다. ES6 이전에 프로토타입 기반(prototype-based) 상속을 다루는 것보다 더 명료하게 사용할 수 있도록 문법을 제공한다.

## 클래스 정의

ES6 클래스는 `class 키워드`를 사용하여 정의를 한다. 자바스크립트에서 Class는 함수여서, 함수와 마찬가지로 `class 선언식`, `class 표현식` 이 두가지 방법으로 정의가 가능하다.

### Class 선언식

```
class Person{
    constructor(name){
        this.name = name;
    }
}
```

### Class 표현식

```
const Person1 = class Person{
    constructor(name){
        this.name = name;
    }
}

/* class 이름 생략 가능 */
const Person2 = class {
    constructor(name){
        this.name = name;
    }
}
```

## 인스턴스 생성

생성자 함수와 같이 new 연산자를 통해 클래스 이름을 호출하면 클래스의 인스턴스가 생성된다. new 연산자없이 constructor를 호출하면 TypeError가 발생한다.

```
class Car {}
const car = new Car();
----------------------
class Car {}
const car = Car(); // TypeError
```

### constructor

constructor는 클래스 인스턴스를 생성하고 생성한 인스턴스 즉, `클래스 필드(클래스 내부의 캡슐화된 변수)`를 초기화하기 위한 메소드이다.

인스턴스를 생성할 때 new 연산자와 함께 호출한 것이 바로 constructor이며, constructor의 파라미터에 전달한 값은 클래스 필드에 할당한다.
```
console.log(Object.getPrototypeOf(foo).constructor === Foo); // true
```

```
// 클래스 선언문
class Car{
    // 생성자
    constructor(name){
        this.name = name;
    }
    getName() {
        console.log(`This is ${this.name}`);
    }
}

const tesla = new Car('modelX');
tesla.getName(); // This is modelX

console.log(tesla instanceof Car); // true
```
