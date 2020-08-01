---
title: 'What is prototype, __proto__ ??'
date: '2020-07-30'
category: 'JavaScript'
cover: '../images/js.png'
private: true
---

자바스크립트에는 클래스라는 개념이 따로없어서, ES6 Class도 뭐시기뭐시기다.

즉, 자바스크립트는 기존의 객체를 복사해서 새로운 객체를 생성하는 프로토타입 기반의 언어이다.

객체 원형인 프로토타입을 이용해서 새로운 객체를 만들어내는데, 이렇게 생성된 객체 역시 또 다른 객체의 원형이 될 수도 있다.

자바스크립트에서 함수들은 객체이다. 그래서 함수역시 객체와 마찬가지로 프로퍼티를 가질 수 있다.
이 둘의 차이점을 이해하기 위해 객체의 내부적인 구조를 이해해야한다.

Person객체를 생성시 Person.prototype이 생성된다. 그리고 Person.prototype.constructor는 Person을 가리킨다. 그리고 Employee.prototype이 Person.prototype을 참조하게 한다면, 그의 constructor 또한 Person을 지칭하므로 자신을 지칭할 수 있도록 다시 Employee로 변경해준다. 그리고 새롭게 생성된 kim객체는 Employee.prototype를 가리킨다. 따라서 kim.proto 는 Employee.prototype를 가리킨다.

. Prototype chain

객체의 속성에 접근하려면 객체.프로퍼티이름으로 접근할 수 있었습니다.

그런데 객체에 해당 property가 없을 경우에는 부모 객체의 property를 참조하게 됩니다.
