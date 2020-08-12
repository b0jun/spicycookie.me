---
title: '자바스크립트 비동기 Call Stack'
date: '2020-08-10'
category: 'JavaScript'
cover: '../images/js.png'
private: false
---

# 🍪 호출 스택(Call Stack)

호출 스택(Call Stack)은 함수의 호출을 스택 방식으로 기록하는 자료구조이다. 프로그램에서 요청이 들어올 때마다 순차적으로 호출 스택에 담아 처리한다. 그러나 자바스크립트는 단일 쓰레드(Single Thread) 프로그래밍 언어이다.
즉, 한번에 하나의 단일 호출 스택(Single Call Stack)을 가지고 있어서, 하나의 작업(Task)만 처리할 수 있다는 뜻이다.

아래 코드는 다음과 같은 Call Stack 순서를 가진다.

```
function func1() {
  console.log('func1');
  func2();
}

function func2() {
  console.log('func2');
  func3();
}

function func3() {
  console.log('func3');
}

func1();
```

<center><img src="https://i.ibb.co/kJN5TMM/callstack-1.gif" alt="callstack-1" border="0"></center>

## 단일 호출 스택(Single Call Stack)의 문제점

싱글 쓰레드 환경에서 호출된 하나의 함수의 처리가 매우 느려져서 다른 함수 실행에 지장을 준다면 아주 큰 문제가 생길 것이다. 이러한 것을 `블로킹(Blocking)` 상태라 일컫는다.

> 블로킹(Block): 프로그램 한 동작에서 요청이 발생하고 완료될 때 까지 모든 일을 중단한 상태로 대기해야 하는 것

간단한 예로, 브라우저에서 용량이 큰 이미지를 받아오는 상황이 있다. 이러한 이미지를 받아오는 동안엔 이미지 처리 작업 스택을 계속 차지하고 있으므로, 브라우저에서 다른 작업들을 처리할 수 없으므로, 다른 동작은 멈출 것이다.

위와 같은 문제점을 해결할 수 있는 하나의 방법은 비동기 콜백을 사용하는 것이다.

# 🍪 비동기 콜백을 통한 처리

자바스크립트 런타임은 한번에 하나만 실행가능하다. 하지만 브라우저가 자바스크립트에서 호출할 수 있는 쓰레드(WebAPI)를 지원한다. 자바스크립트에서 비동기 처리의 대표적인 예로 setTimeout()이 있다. 아래 코드를 보자.

```
console.log('A'); //①
setTimeout(function(){
    console.log('B'); //②
}, 3000);
console.log('C'); //③
```

setTimeout() 메소드를 위임받아 처리한 프로그램은 비동기적 API를 제외한 모든 코드가 실행된 이후에 결과값이 나오므로 실제 결과값은 다음과 같다.

1. 'A' 출력
2. 'C' 출력
3. 3초뒤 'B' 출력

> setTimeout 메소드에 인터벌을 0초로 설정하여도 호출 순서가 ① - ③ - ② 인것은 변함 없다.

<center><img src="https://i.ibb.co/yS3PXSj/callstack-2.gif" alt="callstack-2" border="0"></center>

이러한 비동기가 처리되는 과정을 살펴보자.

1. setTimeout과 같은 비동기 함수는 web API를 호출한다.
2. web API는 콜백 함수를 콜백 큐(Callback Queue)에 밀어넣는다.
3. 콜백 큐는 대기하다가 스택이 비는 시점에 이벤트 루프를 돌려 스택에 넣는다.

즉, `이벤트 루프(Event loop)`는 큐와 스택 이 둘을 지켜보다가 스택이 비는 시점에 콜백을 실행시켜 주는 역할을 한다. 또 이를 통해 WebAPI가 실행되는 동안에는 다른 코드가 정상적으로 실행 될 수 있다.
