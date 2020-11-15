# Vue的响应式原理:
- 监听数据的改变，Object.defineProperty -> 监听对象属性改变
- 发布者订阅者模式//设计模式
[test](www.baidu.com)
---
## 监听数据改变

### Object.defineProperty()


  ```javascript
  Object.defineProperty(obj, key, {
    get( ) {

    };
    set( ) {

    };
  })

  let arr = new Array('asd')
  function test () {

  }
  ```
  ![asd](@assets/logo.png)