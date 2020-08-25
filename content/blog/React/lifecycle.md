---
title: '리액트 LifeCycle API'
date: '2020-08-24'
category: 'React'
cover: './images/lifecycle_cover.png'
private: false
---

# 🍪 리액트에서 LifeCycle 이란?

<center><img src="https://pbs.twimg.com/media/DZ-97vzW4AAbcZj?format=jpg&name=large"/></center>

<center><h4>📷 https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</h3></center>

React에서 LifeCycle은 말그대로 생명주기이다. 컴포넌트가 브라우저 상에서 나타날때, 업데이트 될 때, 사라질 때의 중간 과정에서 어떠한 작업을 행하려고 할때, LifeCycle API를 사용하면 된다.
여기엔 다양한 메서드들이 컴포넌트 생명주기동안 특정 시점에 실행된다. 이들 메서드는 컴포넌트의 생성과 소멸동안 다른 시점에서 개발자가 지정한 동작을 수행하기 때문에 작동 방식을 이해하는 것은 중요하다.

예를 들어, API를 호출해서 데이터를 받아야 되는 상황이라고 가정해보자. 이때 우리는 컴포넌트가 가져온 데이터를 이용해서 렌더링할 준비가 되었는지 확인하고 싶을 때, componentDidMount()를 사용할 수 있다. componentDidMount()는 컴포넌트가 DOM에 렌더링 된 후 실행되어서 데이터를 받아오기에 가장 최적의 위치이다.

# 🍪 LifeCycle 메서드

리액트 컴포넌트의 생명주기는 Mount(생성), Update(갱신), Unmount(파기) 이 세가지 시기로 나눌 수 있다.

### 👶 Mount

- [constructor()](#constructor)
- [static getDerivedStateFromProps()](#getDerivedStateFromProps)
- [render()](#render)
- [componentDidMount()](#componentDidMount)

### 🦸‍♂ Update

- [static getDerivedStateFromProps()](#getDerivedStateFromProps)
- [shouldComponentUpdate()](#shouldComponentUpdate)
- [render()](#render)
- [getSnapshotBeforeUpdate()](#getSnapshotBeforeUpdate)
- [componentDidUpdate()](#componentDidUpdate)

### 💀 Unmount

- [componentWillUnmount()](#componentWillUnmount)

## 👶 constructor() <a id="constructor"></a>

```
constructor(props) {
   super(props);
}
```

생성자 메서드로 컴포넌트가 Mounting될 때 단 한번만 실행된다. 즉, 해당 컴포넌트가 마운트 되기 전에 호출되며, 주로 `state값을 초기화` 하거나 `이벤트 처리 메서드를 바인딩`하는데 사용된다.

> constructor() 내부에서 setState()를 호출하면 안 된다. 컴포넌트에 지역 state가 필요하다면 생성자 내에서 this.state에 초기 state 값을 할당하면 된다.

## 👶🦸‍♂ render() <a id="render"></a>

```
render()
```

해당 메서드는 클래스 컴포넌트에서 반드시 구현되어야 하는 메서드이다. 여기에서 this.props와 this.state의 값을 활용할 수 있으며, 다음과 같은 요소를 반환할 수 있다. 한가지 주의할 점은 render() 내부에서는 setState를 통해 state 값을 변경해서는 절대 안된다.

- React 엘리먼트 (JSX)
- 배열과 Fragment
- [Portal](https://ko.reactjs.org/docs/portals.html)
- 문자열과 숫자
- Boolean
- null

> shouldComponentUpdate()가 false를 반환하면 render()는 호출되지 않는다.

## 👶 componentDidMount() <a id="componentDidMount"></a>

```
componentDidMount()
```

이 메서드는 컴포넌트가 렌더링된 직후, 즉 컴포넌트가 화면에 나타나게 되었을 때 호출된다. 그래서 외부 라이브러리 연동, 컴포넌트에 필요한 데이터 요청, DOM에 관련된 작업(스크롤 설정, 크기 읽어오기)을 할때 주로 사용된다. 우리가 만든 컴포넌트가 브라우저에 나타난 시점에 어떠한 작업을 행하고 싶을때 한다.

아래 예시는 5초뒤에 state가 변경되는 예시이다.

<iframe src="https://codesandbox.io/embed/infallible-lederberg-vxlic?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="componentDidmount"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

> componentDidMount()에서 즉시 setState()를 호출하는 경우, render()가 2번이나 호출되며, 사용자는 그 중간 과정을 볼 수도 없다. 그래서 오류는 아니나, 성능 문제로 인해 사용에 주의를 하는게 좋다. 그래서 렌더링 되기 전에 이미 결정되는 state는 렌더링 되기 전인 static state나 constructor에서 값을 지정하는게 바람직하다. 하지만 이에 대해 많은 토론이 있어서.. 좀 더 잘알아봐야겠다. [Why no setState in componentDidMount?](https://github.com/airbnb/javascript/issues/684)

## 🦸‍♂ componentDidUpdate() <a id="componentDidUpdate"></a>

```
componentDidUpdate(prevProps, prevState, snapshot)
```

DOM에서 컴포넌트가 업데이트 된 후, 즉 render()를 호출하고난 다음에 발생한다. 파라미터를 통해 이전의 값인 prevProps와 prevState를 조회할 수 있다. snapshot은 getSnapshotBeforeUpdate()에서 반환한 값으로 받아오는 파라미터이다.

이 메서드 예제에 대해서는 아래의 getSnapshotBeforeUpdate()에서 함께 확인해보자.

## 💀 componentWillUnmount() <a id="componentWillUnmount"></a>

```
componentWillUnmount()
```

컴포넌트가 사라지는 과정에서 호출되는 메서드로, 메서드 내에서 타이머 제거, 네트워크 요청 취소 같은 작업들을 수행할 수 있다. 즉 컴포넌트가 더이상 필요하지 않게되어 제거되기 직전에 호출된다.

> 컴포넌트는 다시 렌더링되지 않으므로, componentWillUnmount()내에서 setState()를 호출하면 안된다.

아래 예제는 Child 컴포넌트가 더이상 필요하지않을때, componentWillUnmount()가 호출되게 해주는 것이다.

<iframe src="https://codesandbox.io/embed/componentwillunmount-muc2y?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="componentWillUnmount"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<h3><i>아래 메서드부터는 잘사용하지않는 생명주기 메서드이다. 유용하게 사용되는 경우가 아주 가끔 있지만, 대부분의 컴포넌트에서는 필요하지 않다.</i></h3>

## 👶🦸‍♂ static getDerivedStateFromProps() <a id="getDerivedStateFromProps"></a>

```
static getDerivedStateFromProps(nextProps, prevState)
```

이 메서드는 최초 마운트 시와 갱신 시 모두에서 render() 메서드를 호출하기 직전에 호출된다. state를 갱신하기 위한 객체를 반환하거나, null을 반환하여 아무 것도 갱신하지 않을 수 있다. 즉, `props로 받아온 값을 state로 동기화 하는 작업`을 해줘야하는 경우 사용한다.

여기선 setState를 하는게 아니라 특정 Props가 바뀔 때 설정하고 그 설정하고 싶은 state값을 리턴하는 객체 형태로 사용된다. 여기서 파라미터로 nextProps와 prevState를 받는데, nextProps는 다음으로 받아 올 Props 값을 받아오고, prevState는 업데이트 되기 전의 상태를 받아온다.

아래 예시는 부모 state의 값이 바뀜에 따라, Counter.js에서 받아오는 props가 변경되고, 이 props가 바뀜에 따라 state가 변화되는 예제이다.

<iframe src="https://codesandbox.io/embed/getderivedstatefromprops-0obgi?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="getDerivedStateFromProps"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 🦸‍♂ shouldComponentUpdate() <a id="shouldComponentUpdate"></a>

```
shouldComponentUpdate(nextProps, nextState)
```

매 state의 변화마다 다시 렌더링이 수행되는 기본동작을 특정 로직을 통해 렌더링을 방지하는 목적으로 사용하는 메서드이다. 즉 불필요한 곳에서는 렌더를 하지않게끔 설정해주는 `성능 최적화`만을 위한 곳이다. 이를 적용하면 실제로 업데이트 된 것만 바뀌기 때문에 렌더링 과정이 더 빨라진다. shouldComponentUpdate()를 따로 구현하지 않으면 기본적으로 `true`를 하게 설정이 되고, 구현 시에는 특정 로직에 따라 `false`가 반환되게끔 해주기 때문에 특정상황에 따라 최적화를 시켜줄 수 있는 것이다. 파라미터로는 다음 받아올 props값과 다음 받아올 state값을 받아온다.

아래 예제는 state값이 짝수일때만 렌더링 되게끔 해주는 예제이다.

<iframe src="https://codesandbox.io/embed/shouldcomponentupdate-4wxdb?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="shouldComponentUpdate"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

...

## 🦸‍♂ getSnapshotBeforeUpdate() <a id="getSnapshotBeforeUpdate"></a>

```
getSnapshotBeforeUpdate(prevProps, prevState)
```

v16.3 이후에 등장한 메서드로, render()를 호출한 후 DOM 변화가 일어나기 직전의 DOM 상태를 가져오고, 여기서 리턴하는 값은 `componentDidUpdate()`에서 3번째 파라미터를 통해 받아올 수 있게 된다. 그래서 이 메서드가 있을 경우엔 반드시 componentDidUpdate() 메서드도 포함해줘야 한다. 채팅 화면 처럼 스크롤 위치를 따로 처리하는 작업이 필요한 UI에서 주로 사용된다.

아래 예제는 DOM에 추가되기 전에 현재 스크롤 위치를 받아와서, 스크롤 위치를 계속 유지시켜주는 예제이다. ScrollBox.js의 getSnapshotBeforeUpdate()와 componentDidUpdate()를 주석해서 비교해보자.

<iframe src="https://codesandbox.io/embed/getsnapshotbeforeupdate-yeje-forked-1fg03?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="getSnapshotBeforeUpdate 예제 (forked)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 🔍 Reference

- [velopert | LifeCycle API](https://react-anyone.vlpt.us/05.html)
- [공식문서 | React.Component](https://ko.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
