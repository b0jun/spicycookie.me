---
title: '프론트엔드 라이브러리 React'
subtitle: 'React란 무엇인지, 특징 대해서 알아봅시다.'
date: '2020-08-20'
category: 'React'
cover: './images/reactintro_cover.png'
private: false
---

<center><img src="./images/reactintro_1.png" alt="reactintro_1"/></center>

React를 이해하기 앞서 프론트엔드 라이브러리에 대해서 알아보자.

# 🍪 프론트엔드 라이브러리란 무엇인가?

웹사이트를 만들기 위해서는, React나 Vue같은 프론트엔드 라이브러리의 도움없이도 HTML, CSS, JavaScript를 통해서 충분히 만들 수 있다. 그러나 요즘은 단순히 웹사이트가 아닌, 웹어플리케이션으로 브라우저 상으로도 자연스러운 흐름으로 매우 많은 것들을 할 수 있다. 그래서 어떠한 유저 인터페이스를 동적으로 나타내기 위해서는 정말 수많은 상태들을 관리해줘야한다. 프론트엔드 라이브러리는 앞에서 말한 수많은 상태, 즉 다양한 유저 인터페이스와 인터랙션을 제공할 때 이를 수월하게 해준다.

정리하자면, 웹 개발을 하게될때 귀찮은 DOM 관리와 상태값 업데이트 관리를 최소화하고 오로지 `기능 개발`과 `사용자 인터페이스를 구현`하는 것에 집중할 수 있도록 해준다.

## 프론트엔드 라이브러리의 종류

일단, React 말고도 대표적으로 Angular, Vue 와 같은 여러가지 프론트엔드 라이브러리가 있다. 이것들에 대한 간단한 특징을 보자.

### 🔖 Angular

Angular는 Router, HTTP, 다국어 지원 등 다양한 기능들이 이미 내장되어있다. 마치 `모든 것이 준비되어 있는 주방`으로 app 개발에 필요한 모든 재료들을 가지고 있다. TypeScript를 주력으로 채택하여 정적 타입을 제공한다.

### 🔖 React

React는 Angular와 달리 가상 DOM을 이용하며 컴포넌트 기반 개발을 한다. 또한 사용자에게 전달되는 View만 신경쓰고 나머지 개발에 필요한 모듈들은 서드파티(Third party) 라이브러리에 의존한다. 마치 `피자에 원하는 토핑을 넣듯이` 사용자가 자유롭게 개발에 필요한 모듈을 결정하고 선택할 수 있다.

### 🔖 Vue

Vue는 React와 마찬가지로 가상 DOM을 사용해 컴포넌트 기반 개발을 중심으로한다. 그렇지만 React와 달리 공식 Router와 상태관리 라이브러리가 존재하며, HTML 마크업 기반의 템플릿 문법을 사용한다. 컴포넌트 구성요소와 구조를 쉽게 이해할 수 있는 장점이 있다.

# 🍪 리액트에 특징

## 📖 One-Way Data Flow (단방향 데이터 흐름)

React에서는 `props`를 통해 부모 컴포넌트와 자식 컴포넌트간에 데이터를 전달할수 있는데, 데이터를 전달할 때 부모에서 자식에게로만 데이터 전달이 가능하다.

## 📖 JSX 문법 사용

자바스크립트를 확장한 문법으로, React.createElement() 호출을 반복해야 하는 불편을 해소한다.

기본 문법에 대해서는 여기서 더 자세히 볼 수 있다. 📚 [JSX 기본 문법](https://react-anyone.vlpt.us/03.html)

### JSX 사용 (O)

```
const element = <h1>I Love JSX!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### JSX 사용 (X)

```
const element = React.createElement('h1', {}, 'I do not use JSX!');
ReactDOM.render(myelement, document.getElementById('root'));
```

## 📖 Component 기반

웹 페이지를 작성할때 하나의 HTML 코드를 집어넣는 것이 아니라, 여러 부분을 분할해서 코드의 `재사용성`과 `유지보수성`을 증가시켜준다.

## 📖 Virtual DOM

React에선 메모리 데이터 구조 캐시를 만들고, 변화된 부분을 계산하고 DOM을 업데이트 한다. 마치 모든 페이지가 변경될 때마다 렌더링되는 것처럼 보이게 한다.

### 🤔 Virtual DOM을 왜 사용하는 것일까?

실제로 DOM 조작에서 각 조작이 레이아웃 변화, 트리 변화와 렌더링을 일으킨다. 예를 들어 우리가 30개의 노드를 하나 하나 수정하면, 그 뜻은 30번의 (잠재적인) 레이아웃 재계산과 30번의 (잠재적인) 리렌더링을 초래한다는 것이다. 이러한 작업은 많은 연산을 해야되어서, 전체적인 프로세스를 비효율 적으로 만든다.

Virtual DOM을 이용해서 Real DOM을 직접수정 하는 것이 아니라, View에 변화가 있다면, 그 변화를 실제 돔(Real DOM)에 적용시키기 전 가상 돔(Virtual DOM)에 적용시키고, 바뀐 부분을 탐지하고 업데이트해야할 최소한의 부분인 최종적인 결과를 리렌더링해서 실제 돔에 전달해준다.

해당 영상을 보면 좀 더 이해가 잘 될 것이다. 🎥 [Virtual DOM 동작 예시 | Youtube](https://www.youtube.com/watch?v=muc2ZF0QIO4&feature=youtu.be)

## 🔍 Reference

- [공식문서 | ReactJS](https://ko.reactjs.org/docs/)
- [velopert | 왜 Virtual DOM 인가?](https://velopert.com/3236)
