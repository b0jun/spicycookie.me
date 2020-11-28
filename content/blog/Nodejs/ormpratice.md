---
title: 'Sequelize'
date: '2020-09-13'
category: 'Node.js'
private: true
---

## ⚙ 프로젝트 초기 세팅

프로젝트를 시작하고자 하는 디렉터리에서 node를 initialize 하자.

```
$ npm init -y
```

기본적인 환경은 express를 통해 진행할 것이므로 `express`와 `body-parser`, `morgan`을 설치해주자.

- body-parser(request data의 body로부터 파라미터를 편리하게 추출가능)
- morgan(HTTP request logger middleware)

```
$ yarn add express body-parser morgan
```

app.js 파일을 만들어 기본적인 express를 구성해주자.

```
/* app.js */
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send("Test");
});

app.set("PORT", PORT);
app.listen(5000, () => {
  console.log(`listening on ${app.settings.PORT}`);
});
```
