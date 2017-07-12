---
date: 2017-06-24 14:05
status: public
title: 'JQui Interactions互动'
---

## draggable拖拽
> 需要先引入jq 以及jq ui 插件
还有jq ui.css文件
```javascript
$("element").draggable();
```
## sortable拖动换位置
```js
$("element").sortable();
```
## selectable选择
```html
<style>
    .ui-selected{
    background-color:#abcdef;
    }
</style>
<ul id="select">
    <li>apple</li>
    <li id="right">water</li>
    <li>peal</li>
</ul>
<a herf="javascript:void(0)" id="btn">按钮</a>
<script>
    $("#btn").button();
    $("#select").sortable();
    $("#btn").on("click",function(){
        if($("#right").hasClass("ui-selected")){
            alert("you are right");
        }
    });
</script>

```
## resizeable改变尺寸
```js
$("element").resizeable();
```
## droppable
```js
$("element1").draggable();
$("element2").droppable();
$("element2").on("drop",function(event,ui){
   $("element2").text("drop事件");
};
```