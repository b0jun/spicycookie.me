---
title: '[JS] Object-Oriented Programming'
date: '2020-07-29'
category: 'JavaScript'
cover: '../images/js.png'
private: false
---

# 🍪 OOP(Object-Oriented Programming) ?

객체지향 프로그래밍은 기존의 프로그래밍언어와 다른 전혀 새로운 것이 아니라, 기존의 프로그래밍 언어에 몇 가지 새로운 규칙을 추가한 보다 발전된 형태이다. 이러한 규칙들을 이용해서 코드 간에 서로 관계를 맺어 줌으로써 보다 유기적으로 프로그램을 구성하는 것이 가능해졌다.

### 📝 OOP의 주요특징

1. 코드의 재사용성이 높다.
2. 코드의 관리가 쉽다.
3. 신뢰성이 높은 프로그래밍을 가능하게 한다.

# 🍪 ES6 이전의 OOP 구현

ES6의 class키워드를 이용하면 쉽게 구현이 가능하다. 하지만, ES6 이전의 자바스크립트에서는 다른 언어에서 사용하는 동일한 개념의 `class`가 존재하지 않았다. 그러나 자바스크립트는 프로토타입 기반(prototype-based) 객체지향 언어로 클래스가 필요없이(class-free) 객체지향 프로그래밍 스타일로 프로토타입 체인과 클로저 등으로 객체 지향 언어의 상속, 캡슐화 등의 개념을 구현할 수 있다.

> 모든 객체는 프로토타입(prototype)이라는 다른 객체를 가리키는 내부 링크를 가지고 있다. 즉, 프로토타입을 통해 직접 객체를 연결할 수 있는데, 이를 `프로토타입 체인`이라고 한다.

## [ES5] 프로토타입 체인을 통한 클래스 구조화

```
  var Student = (function () {
    //Constructor(생성자)
    function Student(name) {
      this.name = name;
    }

    // public method
    Student.prototype.setName = function (name) {
      this.name = name;
    };

    // public method
    Student.prototype.getName = function () {
      return this.name;
    };

    return Student;
  })();

  // 인스턴스 생성
  var student1 = new Student("Bob");
  var student2 = new Student("Kim");

  student1.getName(); // -> "Bob"
  student1.setName("Jun");
  student1.getName(); // -> "Jun"
  console.log(student2 instanceof Student); // true
```

## [ES5] 상속 구현

자바스크립트의 상속 구현방식은 크게 세가지로 구분할 수 있다.

<pre>
<code>
1. 의사 클래스 패턴 상속
2. 프로토타입 패턴 상속
3. 함수를 사용한 방식
</code>
</pre>

### 1. 의사 클래스 패턴 상속

의사 클래스 패턴 상속은 클래스 기반 언어의 상속 방식을 흉내 내는 패턴이라고 생각하면 된다.

```
// 부모 생성자 함수
var Parent = (function () {
  // Constructor (생성자)
  function Parent(name) {
    this.name = name;
  }

  // method
  Parent.prototype.sayHi = function () {
    console.log("Hi! " + this.name);
  };
  return Parent;
})();

// 자식 생성자 함수
var Child = (function () {
  // Constructor (생성자)
  function Child(name) {
    this.name = name;
  }

  // 자식 생성자 함수의 프로토타입 객체를 부모 생성자 함수의 인스턴스로 교체
  Child.prototype = new Parent();

  // 메소드 오버라이드
  Child.prototype.sayHi = function () {
    console.log("안녕! " + this.name);
  };

  // sayBye 메소드는 Parent 생성자함수의 인스턴스에 위치된다
  Child.prototype.sayBye = function () {
    console.log("잘가! " + this.name);
  };

  return Child;
})();

var child = new Child("Jun");
console.log(child); // Parent { name: 'Jun' }

console.log(Child.prototype); // Parent { name: undefined, sayHi: [Function], sayBye: [Function] }

child.sayHi(); // 안녕하세요! child
child.sayBye(); // 안녕히가세요! child

console.log(child instanceof Parent); // true
console.log(child instanceof Child); // true
```

의사 클래스 패턴을 사용했을 때 몇 가지의 단점이 있다.

1. constructor 링크 파괴
2. 다른 생성자 함수와의 new 연산자를 통해 객체를 생성해야만 하는 불필요한 과정
3. 객체 리터럴 방식으로 생성한 객체의 상속이 불가능한 단점

위 방법은 자바스크립트에 익숙하지 않은 프로그래머에게 편리함을 제공하지만 권장하지 않는 방법이다.

### 2. 프로토타입 패턴 상속 (Prototypal Inheritance)

프로토타입 패턴 상속은 `Object.create` 함수를 사용해서 객체에서 다른 객체로 직접 상속을 구현하는 방식이다. 의사 클래스 패턴의 단점인 new 연산자가 필요없으며, 생성자 링크도 파괴되지않고, 객체 리터럴에도 사용이 가능하다.

> `Object.create` 함수는 지정된 프로토타입 객체 및 속성을 갖는 새 객체를 만든다. 즉, 매개견수에 프로토타입으로 설정할 객체 또는 인스턴스를 전달하고 이를 상속하는 새로운 객체를 생성한다.

Object.create 함수를 이용한 상속 패턴을 코드로 보자.

```
// 부모 생성자 함수
var Parent = (function () {
  // Constructor
  function Parent(name) {
    this.name = name;
  }

  // method
  Parent.prototype.sayName = function () {
    console.log('Hello, I am ' + this.name);
  };

  return Parent;
}());

// create 함수의 인수는 프로토타입이다.
var child = Object.create(Parent.prototype);
child.name = 'Jun';

child.sayName();  // "Hello, I am Jun"
console.log(child instanceof Parent); // true
```

위에서 언급했던 대로 객체리터럴 패턴으로 생성한 객체에서도 프로토타입 패턴 상속을 할 수 있다.

```
var parent = {
  name: "Bob",
  sayName: function () {
    console.log("Hello, I am " + this.name);
  },
};

// create 함수의 인자는 객체이다
var child = Object.create(parent);
child.name = "Jun";

parent.sayName(); // Hello, I am Bob
child.sayName(); // Hello, I am Jun

console.log(parent.isPrototypeOf(child)); // true
```

이 방법에서 사용된 Object.create 함수는 new를 사용한 객체의 생성이 '자바스크립트스럽지 못하다'라는 의견과 new 연산자 사용을 자제를 위해 고안된 것이다. Object.create 함수의 폴리필을 보면 다음과 같다.

```
if (typeof Object.create != 'function') {
  Object.create = function (obj) {
    function F(){}; // 비어있는 생성자 함수 F 생성
    F.prototype = obj; // F의 prototype 프로퍼티에 매개변수로 전달받은 객체를 할당
    return new F(); // F를 생성자로 하여 새로운 객체를 생성하고 반환
    }
}
```

### 3. 함수를 사용한 방식

프로토타입 패턴 상속은 자바스크립트의 특성을 잘 반영한 방법이지만, 모든 속성이 `Private`을 가질 수 없어, 모두 `Public` 하다는 단점이 있다.

함수를 사용한 방식은 함수객체에서 함수를 상속하는 방법입니다. 이는 프로토타입 패턴이 Private속성을 가질 수 없는 것에 대해 좀 더 나은 대안이다. 함수를 사용한 상속 구현 패턴은 다음과 같다.

```
var parent = fucntion(spec){

  // ① 필요한 prviate 변수들
  var that = {};

  // ② 상속하려는 메소드를 추가합니다
  that.get_name = function(){
    return spec.name;     // <-- private 속성
  }
  that.get_ability = function(){
    return spec.ability;  // <-- private 속성
  }

  // ③새로운 객체 반환
  return that;
};

var myParent = parent({'name':'Bob', 'ability':'swimming'})
console.log(myParent.get_name()); // "Bob"
```

부모를 정의하고 부모 메서드에 접근하기 위해서는 다음과 같이 하면된다.

```
var child = function(spec){
  spec.ability = spec.ability || 'cooking';

  //parent 생성자 호출
  var that = parent(spec);

  // parent로 부터 ability에 대한 호출 값을 가져와서 저장한다
  super_get_ability = that.get_ability();

  //get_ability 함수를 재정의 한다
  that.get_ability = function(){
    return 'new ability '+ super_get_ability
  }
  return that;
}

var myChild = child({'name': 'Jun'})
console.log(myChild.get_name());    // "Jun"
console.log(myChild.get_ability()); // "new ability cooking"
```

함수형 패턴을 이용하면서 얻는 이점은 다음과 같다.

<pre>
<code>
1. 유연성이 좋다.
2. 캡슐화와 정보은닉이 가능하다.
3. super메서드에 접근할 수 있는 방법을 제공한다.
</code>
</pre>

## 🔍 Reference

- [Poiemaweb OOP](https://poiemaweb.com/js-object-oriented-programming)
- 더글라스 크락포드의 핵심가이드 (저자: Douglas Crockford)
