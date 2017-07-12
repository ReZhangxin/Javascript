---
date: 2017-06-24 14:56
status: public
title: jQUI-Widgets控件*
---

## AutoComplete自动补全
```js
var autotags=["im","js","ajax","java","php","c","c++"];
$("#tags").autocomplete({
    source:autotags //不能有分号
});
```
## Detepicker日期的选择
```html
<p>Date:<input type="text" id="detepicker"></p>
<script>
    $("#detepicker").detepicker();
</script>

```
# Accordion手风琴展示
> 很重要这个后台常用
```html
<div id="accordion">
    <h3>music</h3>
    <div> 
        <p>hello world</p>
    </div>
     <h3>blog</h3>
    <div> 
        <p>hello world</p>
    </div>
     <h3>audio</h3>
    <div> 
        <p>hello world</p>
    </div>   
</div>
<script>
    $("#accordion").accordion();
</script>
```
# Dialog对话框
> 这个也是挺重要的
```html
<div id="dialog>
    <p>这是一个Dialog</p>
</div>
<script>
    $("#dialog").dialog();
</script>
```
# Progressbar进度条

```html
<div id="pb"></div>
<script>
    var pb;
    var max = 100;
    var current = 0;
    pb =$("#pb")
    pb.progressbar({max:100});
    setInterval(changepb,100);
    function changpb(){
        current++;
        if(current>=100){
            current = 0;
        }
        pb.progressbar("option","value",current);            
    }
</script>
```
# tabs选项卡
```html
<div id="tabs">
    <ul>
        <li><a href="#hello1">hello</a></li>
        <li><a href="#hello2">hello</a></li>
        <li><a href="#hello3">hello</a></li>
    </ul>
    <div id="hello1">one</div>
    <div id="hello2">two</div>
    <div id="hello3">three</div>
</div>
<script type="text/javascript">
    $("#tabs").tabs();
</script>
```


