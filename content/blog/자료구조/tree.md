---
title: 'Tree 자료구조 다루기'
date: '2020-07-27'
category: '자료구조'
cover: '../images/default.jpg'
private: false
---

- 각 구성요소를 노드(node)라고 부름
- 최상위 노드를 root라고 부름
- root를 기준으로 다른 노드로의 접근하기 위한 거리를 깊이(depth)라고 함
- 같은 depth에 존재하는 노드들은 sibling관계에 있음
- 노드와 노드를 잇는 선을 edge라고 함
- 자식이 없는 노드를 leaf라고 함.

height: 주어진 노드에서 가장 깊은 leaf를 기준으로 계산

depth: 루트에서 주어진 노드까지의 거리

그래프는 루트노드, 부모-자식 개념이 없으며, 노드들 사이에서 무방향, 양방향 경로를 가질 수있다.

트리는 두개의 정점 사이에 반드시 1개의 경로만을 가진다.
