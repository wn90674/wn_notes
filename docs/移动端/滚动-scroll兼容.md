### `ios`下`scroll`兼容问题
#### 滚动不流畅
`ios`下滚动存在很多兼容问题:尤其是在内滚动情况下(在限高的元素内),默认没有回弹效果，需要对设置`-webkit-overflow-scroll:touch`;
::: tip
正常情况，列表内容在`body`下滚动，是比较平滑的;
2、如果使用定时器做返回顶部时候,需要将此属性禁用,否则会出现奇怪的闪烁现象;
3、返回顶部建议使用`RFA`;
:::
#### 滚动事件触发瓶颈:
由于系统优化的机制，不能准确的监测到每一次的滚动事件。目前找到可行的两种方法:
  - 1、使用`iscroll`或`better scroll`这种第三方插件，使用纯`js`模拟滚动效果;
  - 2、使用`ontouchmove`代替监听，但是在惯性滑动时仍然需要配合`onscroll`;
#### 返回顶部功能兼容差
  - 为了滚动流畅，我们将容器设置了`-webkit-overflow-scroll:touch`,但是在使用`RFA`或定时器做返回顶部时候,需要动态将此属性修改,否则会出现闪烁现象。
```js{4}
el.onscorll = ()=> delelte this.style['-webkit-overflow-scroll'] = 'auto'
// 回到顶部后
el.style['-webkit-overflow-scroll'] = 'touch'
```
  - `scrollTo`、`scrollBy`等`API`的兼容性太差，不支持`smooth`平滑滚动属性
``` js{4}
  window.scrollTo({
    top: 0,
    left:0,
    // 平滑参数不兼容，需要引入smoothscroll polyfill
    behavior:'smooth', 
  })
```
::: tip
  `window`可以换成任意的`DOM`元素
  由于`ios`端不兼容平滑滚动，因此会使用`scrollBy`结合定时器或者`RFA`方案来进行处理，
但是低版本系统没有此方案，需要手动计算
```js{4}
  const step = 50
  el.scrollTop -= step 
```
:::
