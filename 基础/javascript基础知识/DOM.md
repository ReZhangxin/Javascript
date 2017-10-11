# DOM

DOM 描绘了一个层次化的节点树，允许开发人员添加、移除和修改页面的某一部分。 

DOM技术：
	
- php里边有：php语言 与 xml/html标签之间沟通的一个桥梁。
- javascript里边有：js语言与html/xml标签之间沟通的一个桥梁。

## DOM1 节点层次

> 节点分为几种不同的类型，每种类型分别表示文档中不同的信息及（或）标记。每个节点都拥有各自的特点、数据和方法，另
外也与其他节点存在某种关系。

每一段标记都可以通过树中的一个节点来表示： 

- HTML 元素通过元素节点表示，
- 特性（attribute）通过特性节点表示，
- 文档类型通过文档类型节点表示，
- 注释则通过注释节点表示。

总共有 12 种节点类型，这些类型都继承自一个基类型。

- [x] Node.ELEMENT_NODE(1)；
- [x] Node.ATTRIBUTE_NODE(2)；
- [x] Node.TEXT_NODE(3)；
- [x] Node.CDATA_SECTION_NODE(4)；
- [x] Node.ENTITY_REFERENCE_NODE(5)；
- [x] Node.ENTITY_NODE(6)；
- [x] Node.PROCESSING_INSTRUCTION_NODE(7)；
- [x] Node.COMMENT_NODE(8)；
- [x] Node.DOCUMENT_NODE(9)；
- [x] Node.DOCUMENT_TYPE_NODE(10)；
- [x] Node.DOCUMENT_FRAGMENT_NODE(11)；
- [x] Node.NOTATION_NODE(12)。

为了确保跨浏览器兼容，最好还是将 nodeType 属性与数字值进行比较，如下所示：

```js
if (someNode.nodeType == 1){ //适用于所有浏览器
    alert("Node is an element.");
}
```

dom就是学习利用javascript如何实现对html标签内容的增、删、改、查等操作

### 元素节点获取

```js
//选择所有img标签返回一个NodeList
const img = document.querySelectorALl("img");

```

### 文本节点获取

```js
//<div>hello</div>
var dvnode = document.getElementsByTagName(‘div’)[0];
dvnode.firstChild;  //(或调用lastChild)获得元素div内部的第一个子节点对象


```

对 `arguments` 对象使用 `Array.prototype.slice()`方法可以
将其转换为数组。而采用同样的方法，也可以将 `NodeList` 对象转换为数组。

### 兄弟节点

- `firstChild`、`lastChild`:父节点获得第一个/最后一个子节点
- `nextSibling`:获得下个兄弟节点
- `previousSibling`:获得上个兄弟节点
- `childNodes`:父节点获得内部全部的子节点信息

以上属性在主流浏览器(火狐firefox、chrome、safari、opera)中会给考虑空白节点。在IE浏览器中不考虑。

```js
const ul = document.getElementsByTagName("ul")[0];
console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.firstChild);
console.log(ul.lastChild);
console.log(ul.childNodes);
```

### 父节点

节点.parentNode;

```js
console.log(ul.parentNode);
//<body>...</body>
```

### 操作节点

#### 添加节点`appendChild()`

**用于向 `childNodes`列表的末尾添加一个节点**。添加节点后， `childNodes`的新增节点、父节点及以前的最后一个子节点的关系指针都会相应地得到更新。更新完成后，`appendChild()`返回新增的节点。

```js
const divs = document.getElementsByTagName('div')[1]
divs.appendChild(ul.lastChild);
```

#### 插入节点`insertBefore()`

如果需要把节点放在`childNodes`列表中某个特定的位置上，而不是放在末尾，那么可以使用`insertBefore()`方法。

这个方法接受两个参数：
- 要插入的节点
- 作为参照的节点。
 
如果参照节点是null，则`insertBefore()`与`appendChild()`执行相同的操作

`appendChild()`和`insertBefore()`方法都只插入节点，不会移除节点。

```js
const pp = document.querySelector("p");
ul.insertBefore(pp,ul.firstChild);
```

#### 替换节点`replaceChild()`

`replaceChild()`方法接受的两个参数是：
- 要插入的节点
- 要替换的节点。

要替换的节点将由这个方法返回并从文档树中被移除，同时由要插入的节点占据其位置。

```js
const pp = document.querySelector("p");
ul.replaceChild(pp,ul.firstChild);
```

#### 移除节点`removeChild()`

`removeChild()`方法。这个方法接受一个参数，即要移除
的节点。被移除的节点将成为方法的返回值

```js
const pp = document.querySelector("p");
ul.removeChild(pp);
```

**四个方法操作的都是某个节点的子节点，也就是说，要使用这几个方法必须先取得父节点（使用parentNode属性）。另外，并不是所有类型的节点都有子节点，如果在不支持子节点的节点上调用了这些方法，将会导致错误发生。**

#### 复制节点

> 有两个方法是所有类型的节点都有的。第一个就是`cloneNode()`，用于创建调用这个方法的节点的一个完全相同的副本。 

```js
const clones = ul.cloneNode(true);
console.log(clones);
divs.appendChild(clones);
ul.onclick=function(){
    alert(1)
}
//被clone点击不会弹出1
```

`cloneNode()`方法不会复制添加到`DOM`节点中的`JavaScript` 属性，例如事件处理程序等。

这个方法只复制特性、（在明确指定的情况下也复制）子节点其他一切都不会复制。

`IE`在此存在一个`bug`，即它会复制事件处理程序，所以我们建议在复制之前最好先移除事件处理程序。

### 属性值操作

```js
//<input  type=”text”  name=”username”  value=”tom”  class=”orange” />
//<a href=”http://www.baidu.com”  addr=’beijing’ target=”_blank”>百度</a>

//①获取属性值
//itnode.getAttribute(属性名称);规定的和自定义的都可以获取
input.getAttribute("name");
//②设置属性值
//itnode.setAttribute(名称，值);规定的和自定义的都可以设置
a.setAttribute("addr","shanghai");
```

## DOM 操作技术

### 1、选择符 API

`querySelector()`

`querySelectorAll()`

`matchesSelector()`

这个方法接收一个参数，即`CSS`选择符，如果调用元素与该选择符匹配，返回 `true`；否则，返回 `false`。

```js
if (document.body.matchesSelector("body.page1")){
//true
}
//浏览器前缀+MatchesSelector()
// msMatchesSelector() ie
// mozMatchesSelector() Firefox 
// webkitMatchesSelector() Chrome
```

### 2、元素遍历

`childElementCount`：返回子元素（不包括文本节点和注释）的个数。

- [ ] `firstElementChild`：指向第一个子元素；`firstChild` 的元素版。

- [ ] `lastElementChild`：指向最后一个子元素；`lastChild` 的元素版。

- [ ] `previousElementSibling`：指向前一个同辈元素； `previousSibling` 的元素版。

- [ ] `nextElementSibling`：指向后一个同辈元素； `nextSibling` 的元素版。

支持的浏览器为 `DOM`元素添加了这些属性，利用这些元素不必担心空白文本节点，从而可以更方便地查找 `DOM` 元素了。

### 3、与类相关的扩充

`classList` 属性

> 在操作类名时，需要通过className属性添加、删除和替换类名。因为 className中是一个字符串，所以即使只修改字符串一部分，也必须每次都设置整个字符串的值。

- add(value)：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
- contains(value)：表示列表中是否存在给定的值，如果存在则返回 true，否则返回 false。
- remove(value)：从列表中删除给定的字符串。
- toggle(value)：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。

```js
div.classList.add("user");
div.classList.contains("user");
div.classList.remove("user");
div.classList.toggle("user");
```

## DOM2 和 DOM3

### 1. 偏移量

- `offsetHeight`：元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、（可见的）
水平滚动条的高度、上边框高度和下边框高度。
- `offsetWidth`：元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、（可见的）垂
直滚动条的宽度、左边框宽度和右边框宽度。
- `offsetLeft`：元素的左外边框至包含元素的左内边框之间的像素距离。
- `offsetTop`：元素的上外边框至包含元素的上内边框之间的像素距离。

![偏移量](http://otxurl2qj.bkt.clouddn.com/1507710627%281%29.png)

### 2、客户区大小

元素的客户区大小（`clientdimension`），指的是元素内容及其内边距所占据的空间大小。有关客户区大小的属性有两个： `clientWidth` 和 `clientHeight`。

- `clientWidth` 属性是元素内容区宽度加上左右内边距宽度；
- `clientHeight`属性是元素内容区高度加上上下内边距高度。

![客户区大小](http://otxurl2qj.bkt.clouddn.com/1507710880%281%29.png)

### 3、滚动大小

- `scrollHeight`：在没有滚动条的情况下，元素内容的总高度
- `scrollWidth`：在没有滚动条的情况下，元素内容的总宽度
- `scrollLeft`：被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置。
- `scrollTop`：被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置。

![滚动大小](http://otxurl2qj.bkt.clouddn.com/1507710920%281%29.png)

### 4、确定元素大小

`IE、 Firefox 3+、 Safari 4+、 Opera 9.5 `及 `Chrome` 为每个元素都提供了一个 `getBoundingClientRect()`方
法。

这个方法返回会一个矩形对象，包含 4 个属性： 
`left`、 `top`、 `right`和`bottom`。

这些属性给出了元素在页面中相对于视口的位置。但是，浏览器的实现稍有不同。IE8及更早版本认为文档的左上角坐标是(2, 2)，而其他浏览器包括IE9则将传统的(0,0)作为起点坐标。因此，就需要在一开始检查一下位于(0,0)处的元素的位置，在IE8及更早版本中，会返回(2,2)，而在其他浏览器中会返回(0,0)。

