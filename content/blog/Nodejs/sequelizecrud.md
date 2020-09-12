---
title: 'Sequelize에서 CRUD 다루기'
date: '2020-09-12'
category: 'Node.js'
cover: './images/sequelizecrud_cover.png'
private: false
---

# 🍪 Sequelize의 CRUD

시퀄라이즈에서 CRUD(Create, Read, Update, Delete) 작업은 sql문을 자바스크립트를 통해 만든다. SQL 쿼리와 비교하면서 시퀄라이즈 쿼리를 알아보자. 쿼리는 프로미스를 반환하므로 `then`이나 `async/await`문법으로 다룰 수 있다.

## 🦠 레코드(ROW) 생성

레코드를 생성하기 위해선 models에서 불러온 모델을 바탕으로, `create`메서드를 사용하면 된다.

```
/* SQL */
INSERT INTO users (name, age, married) VALUES('bob', 27, 0);

/* 시퀄라이즈 */
User.create({
  name: 'bob,
  age: 27,
  married: false
});
```

## 🔎 레코드(ROW) 조회

레코드를 조회하기 위해선, `findOne`, `findAll` 메서드를 사용한다.

### ◼ 모든 데이터 [findAll]

```
/* SQL */
SELECT * FROM users;

/* 시퀄라이즈 */
User.findAll({});
```

### ◼ 하나의 데이터 [findOne]

```
/* SQL */
SELECT * FROM users LIMIT 1;

/* 시퀄라이즈 */
User.findOne({});
```

### ◼ 특정 필드(Column) [attributes 옵션 사용]

```
/* SQL */
SELECT name, married FROM users;

/* 시퀄라이즈 */
User.findAll({
  attributes: ['name', 'married']
});
```

### ◼ 기본적인 조건부 조회 [where, Op 객체]

> 데이터를 쿼리할때 사용하는 연산자 [Op객체](https://sequelize.org/master/variable/index.html#static-variable-Op)

```
/* SQL */
SELECT name, age FROM users WHERE married = 1 AND age > 20;

/* 시퀄라이즈 */
User.findAll({
  attributes: ['name', 'age'],
  where: {
    married: 1,
    age: {[Op.gt]: 20}
  }
});
```

```
/* SQL */
SELECT id, name FROM users WHERE married = 0 OR age < 20;

/* 시퀄라이즈 */
User.findAll({
  attributes: ['name', 'age'],
  where: {
    [Op.or]: [{ married: 0 }, { age: {[Op.lt]: 40} }]
  }
});
```

#### 💡 자주 쓰이는 Op객체

| Op객체   | 설명                  |
| -------- | --------------------- |
| Op.gt    | 초과                  |
| Op.gte   | 이상                  |
| Op.lt    | 미만                  |
| Op.lte   | 이하                  |
| Op.ne    | 같지 않음             |
| Op.or    | 또는                  |
| Op.in    | 배열 요소 중 하나     |
| Op.notIn | 배열 요소와 모두 다름 |

### ◼ 정렬하기 [order]

```
/* SQL */
SELECT id, name FROM users ORDER BY age DESC;

/* 시퀄라이즈 */
User.findAll({
  attributes: ['name', 'age'],
  order: [['age', 'DESC']]
});
```

### ◼ 조회할 레코드 개수 설정 [limit, offset]

```
/* SQL */
SELECT id, name FROM users ORDER BY age DESC LIMIT 1;

/* 시퀄라이즈 */
User.findAll({
  attributes: ['name', 'age'],
  order: [['age', 'DESC']],
  limit: 1,
});
```

```
/* SQL */
SELECT id, name FROM users ORDER BY age DESC LIMIT 1 OFFSET 1;

/* 시퀄라이즈 */
User.findAll({
  attributes: ['name', 'age'],
  order: [['age', 'DESC']],
  limit: 1,
  offset: 1
});
```

## 🔧 레코드(ROW) 수정 [update]

```
/* SQL */
SELECT users SET comment = '수정할 내용' WHERE id = 3;

/* 시퀄라이즈 */
User.update({
  comment: '수정할 내용'
}, {
  where: { id: 3 }
});
```

## ✂ 레코드(ROW) 삭제 [destory]

```
/* SQL */
DELETE FROM users WHERE id = 4;

/* 시퀄라이즈 */
User.destory({
  where: { id: 4 }
});
```

## 👯 관계 쿼리(JOIN) [include]

User와 Comment가 hasMany-belongsTo(1:N)관계를 맺고 있다고 가정하자. 관계 쿼리를 사용하기 위해선 `include`를 사용하면 된다.

```
const user = await User.findOne({
    include: [{
        model: Comment
    }]
});
console.log(user.Comments); //사용자의 댓글
```

위와같이 user에 프로미스의 결과물을 넣었는데, 그 결과로 모델이 반환된다. 이 반환된 값을 결과물을 다룰 수 있다.

## 🔍 Reference

- Node.js 교과서 개정 2판 (저자: 조현영)
