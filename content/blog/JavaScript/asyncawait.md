---
title: '비동기를 더 쉽게 다루는 async / await'
date: '2020-08-17'
category: 'JavaScript'
cover: './images/asyncawait_cover.png'
private: false
---

# 🍪 async / await은 무엇인가?

`async/await`은 ECMAScript 2017(ES8)에 추가된 사항으로 기존 비동기 처리 함수들의 단점을 보완할 수 있다. 기초적인 사용방법은 function 자체를 `async` 키워드를 붙여 선언해주고, 비동기로 처리되는 부분 앞에 await 키워드를 붙이면 끝이다. 한가지 주의할 점은 async/await은 await을 붙인 부분이 promise를 반환하므로 이 역시 promise 방식을 이용한다는 것이다.

| keyword | description                                                                      |
| ------- | -------------------------------------------------------------------------------- |
| async   | function에 선언해서 비동기적으로 작동하는 함수로, Promise를 사용하여 결과를 반환 |
| await   | async function으로 선언된 코드 안에서 비동기 코드를 호출할 수 있게 해주는 함수   |

> await 키워드는 async 함수에서만 유효하다는 것을 기억해야한다. async 함수의 본문 외부에서 사용하면 SyntaxError가 발생한다.

# 🍪 어떻게 사용할까?

Promise를 then()과 catch()를 다뤘던 구문과 비교하면서 알아보자.

```
function test1() {
    fetch('...url...')
      .then(response => {
        //do something
      })
      .catch(error => {
        //handle error
      });
  }

async function test2() {
    try{
      const response = await fetch('...url...');
        // do something
    } catch (error) {
        // handle error
    }
}
```

함수 앞에 async를 선언하고 비동기 처리구문에 await를 처리해주면, then()처리 대신에 `await` 구문으로 대체가 가능하고, catch()처리는 `try...catch` 구문을 통해 대체가 가능하다.

### 🧪 async await 예제

Promise Part에서 다뤘던 예제를 async await으로 표현해보자.

```
const movieAPI = "https://movieapi.com/data";
const tvAPI =  "https://tvapi.com/data";

const getData = async () => {
   const movieData = await fetch.then(res => resp.json());
   const tvData =  await fetch.then(res => resp.json());
   return {
      movies: movieData,
      tvs: tvData
   }
}
```

# 🍪 async await이 왜 더 좋다고 하는가?

아래 코드는 각각 프로미스 체이닝과 async await으로 다룬 예제이다.

```
function test1() {
    return doSomethingAsync()
      .then(foo => doAsync1(foo))
      .then(bar => doAsync2(bar))
      .then(baz => doAsyncLast(baz))
}

async function test2() {
    const foo = await doSomethingAsync();
    const bar = await doAsync1(foo);
    const baz = await doAsync2(bar);
    await doAsyncLast(baz);
}
```

일단 흔히들 async await이 좋다고 하는 이유는 동기화 함수 작성하는 것처럼 친숙한 형태로 작성 할 수 있다는 것이다.

그러나 두 코드에서 foo를 기준으로 보자. then과 catch를 통해 다룬 위예제에서는 해당 구문이 끝나는 순간 생명주기가 끝이나지만, async await를 다룬 예제에서는 코드 어느 구문에서도 다시 사용(실제로 쓰일 경우가 전혀 없을때에도)되는게 가능해진다.

async await을 쓰면서 이미 사용이 끝난 변수를 다시 쓸 수도있는 위험부담을 가지게 된 관점에서는 `프로미스 체이닝`방식이 더 좋은 코드라고 말할 수 있다.

## 🤔 그렇다면 프로미스 체이닝 방식이 더 좋은 것 아닌가??

프로미스 체이닝방식과 async await방식의 프로그램 작성하는 구조는 위에서도 살펴보았듯이 완전 다르다. fetch API를 예시로 들어보자.

```
await fecth(url);
```

fetch API는 시스템적인 구현이 비동기이다. 이는 단순히 리소스 주소를 인자로 보내면, 그 주소에서 보내주는 데이터를 받아오는 함수이다. 비동기함수와 동기함수를 구분하는 기준이 논리적인 이유에서가 아니라 단순 시스템적인 이유로 코드스타일을 바꿔야한다면, 불편할 것이다. 🤢

정리하자면, 일반적으로 코드를 작성할때 비동기 함수를 맞이하게되는 상황으로 논리적인 이유보다 fetch와 같이 시스템적인 제약때문인 경우가 더 많다. 겨우 이런 시스템적인 이유때문에 코드스타일을 바꾸기 싫다는 것이다.

# 🍪 프로미스와 async await의 활용

프로미스와 async await을 같이 활용함으로써 비동기 개념을 확장할 수 있다.

아래 예제는 프로미스를 지원하지 않던 비동기함수를 프로미스를 지원하게끔 바꿔주는 코드이다.

```
function wait(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

async function run() {
  // do something
  await wait(1000); // wait 1000ms
  // do something
}
```

구현한 `wait함수`는 setTimeout을 프로미스로 감싸서 실제 사용할때에는 동기화처럼 이용할 수 있다. 이를 조금만 더 확장해서 생각해보면, setTimeout 같은 비동기함수 뿐만 아니라, 동기함수도 얼마든지 프로미스를 활용할 수 있다는 것이다.

대표적으로 동기적으로 동작하는 코드로 window API 중에`alert, confirm, prompt`가 있다. 이 세가지 전부 확인이나 취소같은 버튼으로 대화상자가 닫히기 전까지는 나머지 모든 인터페이스에 접근할 수 없다. 즉, 잠깐 다음 코드 실행을 멈추고 팝업을 보여준다는 것이다. 허나 위의 것들은 기본제공되는 디자인 이외에는 바꿀 수가 없다. 그래서 실제로 이와 같은 구현을 하는 코드를 짜므로써 새로운 디자인을 만들어야 하는데, 이러한 로직을 만드는 것은 여간 까다로운것이 아니다.

어떻게 구현할 수 있을까?? 팝업을 열고 닫는 동작 그 자체를 비동기작업이라 생각하고 구현하면 쉽다. 실제로 동작하는 코드를 만들어 보면 다음과 같다.

```
/* 생략 */

const asyncConfirm = (text) => {
  return new Promise(resolve => {
    /* 생략 */
    const okBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    okBtn.textContent = 'Ok';
    cancelBtn.textContent = 'Cancel';

    popup.appendChild(okBtn);
    popup.appendChild(cancelBtn);

    const onClick = pass => {
      resolve(pass);
      popup.remove();
    };

    okBtn.addEventListener('click', onClick.bind(null, true));
    cancelBtn.addEventListener('click', onClick.bind(null, false));
  })
};

const run = async () => {
  if (await asyncConfirm('Add Item?')) {
    addItem('💡Item'); // 요소 추가
  }
}
```

asyncConfirm을 호출하면 프로미스를 반환하고 resolve 호출 전까지 비동기 작업을 하는 코드이다. 그러한 비동기 작업이 유저가 팝업을 본 후, 버튼을 누르기 전까지 기다리는 일이다.

<iframe height="265" style="width: 100%;" scrolling="no" title="promise, async await modal" src="https://codepen.io/bjkim/embed/JjXKjvr?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bjkim/pen/JjXKjvr'>promise, async await modal</a> by bjkim
  (<a href='https://codepen.io/bjkim'>@bjkim</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 🔍 Reference

- [MDN | async await](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Taehoon | async await](https://www.youtube.com/watch?v=27hXXsT_S4U)
- [Taehoon | async await활용](https://www.youtube.com/watch?v=YJlGpxs72EQ)
