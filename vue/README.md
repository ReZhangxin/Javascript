# vue入门
# vue基本雏形

```js
angular展示一条数据
var app = angular.moudle('app',[]);
app.controller('xxx',function($scope){
  $scope.msg='welcome'
})
html:
div ng-controller='xxx'
 {{msg}}

vue:
 var c =new Vue({
        el:"#box",
        data:{
            msg:"welcome vue"
        }
    })
html:
<div id="box">
    {{msg}}
</div>
```
# 1.vue常用指令
> 指令：扩展html标签功能 属性
```js
v-model
v-for循环遍历

     <ul>
        <li v-for="(value,index) in arr">
            {{value}} {{index}} 
        </li>
    </ul>
    
    var c =new Vue({
        el:"#box",
        data:{
            msg:"welcome vue",
            arr:['apple','banana','orange','pear'],
            json:{a:'apple',b:'banana',c:'orange'}
        }
    })

```
# 2.事件
```js
v-on绑定事件click,mouseover,dbclick,mousedown
<div id="example-1">
  <button v-on:click="counter += 1">增加 1</button>
  <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>

var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})


```
# 3.事件深入
```js
v-on:click,mouseover...
简写
v-on:===@click
@click左击
@contextmenu右击
事件对象
<div id="box">
    <button @click="show($event)">按钮</button>
</div>
new Vue({
    el:"#box",
    data:{
    },
    methods:{
        show:function(ev){
        alert(ev.clientX)
        }
    }
})
事件冒泡@click-->
    阻止冒泡：
        a): event.cancelBubble=true;
        b): @click.stop //推荐
默认行为
    阻止默认行为：
        a)：event.preventDefaule();
        b)：@contextmenu.prevent //推荐
键盘
    @keydown    $event ev.keyCode
    @keyup
    常用键：
        回车    a) @keydown.13
                b) @keydown.enter
        上，下，左，右
                @keyup/keydown.up
                @keyup/keydown.down
                @keyup/keydown.left
                @keyup/keydown.right
    
```
# 4.属性
```js
<div id="box">
    <img :src="url" alt="">
</div>
 new Vue({
    el:"#box",
    data:{
        url:"https://ss0.png"
        },
    methods:{

        }
    })
```

