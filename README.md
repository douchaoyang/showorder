# showorder
你是否遇到过这种项目需求，当页面滚动时，让页面元素一个个的出来，从下面？渐渐地？
写一堆样式。。。一堆keyframes。。。
现在有了showorder，妈妈再也不用担心**策划给我提这种需求啦

特点：`兼容性取决于CSS`，`依赖jQuery库`，`提高开发效率`

* `使用方法`：

```javascript
$(selector).showorder({
	clss : "active", // 执行样式，默认active
	sped : 200, // 同一高度元素执行时间间隔，默认200
	part : 3, // 在距离窗口几分之一高度时执行，默认3
	perc : 0.2 // 变换比例(eg: transform: translateY(20%))，默认0.2
});

```
* `请注意`:

- **1** ：确保最后添加的元素距离顶部的高度大于所设置窗口比例的高度，否则无法添加样式；
- **2** ：所使用插件的元素display不能设置为none，否则无法正确获取元素数量；

* [`关于作者`](http://www.douchaoyang.com)