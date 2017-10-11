# JavaScript深入系列之this
>  需要从规范说起 [ECMAScript5.1规范](http://yanhaijing.com/es5/#null)
> 还有[es6入门](http://es6.ruanyifeng.com/)

# ECMAScript语言概述

> &nbsp; &nbsp;ECMAScript是基于对象的：基本语言和宿主设施都由对象提供，ECMAScript程序是一组可通信的对象，是属性(properties)的集合，每个属性有零个或多个特性(attributes).

ECMAScript 定义一组内置对象（built-in object ）勾勒出ECMAScript实体的定义。

>  全局对象 (global object) ，Object 对象 ，Function 对象 ，Array 对象 ，String 对象 ，Boolean 对象 ，Number 对象 ，Math 对象 ，Date 对象 ，RegExp 对象 ，JSON 对象，
  和 Error 对象： Error ，EvalError ，RangeError ，ReferenceError ，SyntaxError ，TypeError ，URIError 。

# ECMAScript 的类型分为语言类型和规范类型。

>  ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的。
>  其实就是我们常说的Undefined, Null,Boolean, String, Number, 和 Object。

>   而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。
>   规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 
>   和 Environment Record。

# Reference
>  Reference 类型就是用来解释诸如 delete、typeof 以及赋值等操作行为的。
>  
# Reference 的构成，由三个组成部分，分别是：

    * base value
    * referenced name
    * strict reference

>  base value 就是属性所在的对象或者就是 EnvironmentRecord，它的值只可能是 undefined, an Object, a Boolean, a String, a 
>  Number, or an environment record 其中的一种。

>  referenced name 就是属性的名称。

```js
var foo = 1;
// 对应的Reference是：
var fooReference = {
    base: EnvironmentRecord,
    name: 'foo',
    strict: false
};
```

```js
var foo = {
    bar: function () {
        return this;
    }
};
 
foo.bar(); // foo

// bar对应的Reference是：
var BarReference = {
    base: foo,
    propertyName: 'bar',
    strict: false
};
```
# 规范中还提供了获取 Reference 组成部分的方法，比如 GetBase 和 IsPropertyReference。

1.GetBase
>  返回 reference 的 base value。

2.IsPropertyReference
>  简单的理解：如果 base value 是一个对象，就返回true。

# GetValue
```js
var foo = 1;

var fooReference = {
    base: EnvironmentRecord,
    name: 'foo',
    strict: false
};

GetValue(fooReference) // 1;
```
> GetValue 返回对象属性真正的值，但是要注意：
> 调用 GetValue，返回的将是具体的值，而不再是一个 Reference

