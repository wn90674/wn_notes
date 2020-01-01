### `ios`下`scroll`兼容问题
`ios`下滚动存在很多兼容问题
#### 内容器滚动
正常情况，列表内容在`body`下滚动，是比较平滑的，但是如果使用了内滚动(在限高的元素内)，滚动
会变得很生硬，需要对设置`-webkit-overflow-scroll:touch`;
:::
如果使用`setInterval` 会导致动画累积，出现闪烁回弹问题，可以使用`RFA`代替，且在启用定时器的时候动态修改`-webkit-overflow-scroll`的属性
:::

#### 滚动事件触发
由于系统优化的机制，不能准确的监测到每一次的滚动事件。目前找到可行的两种方法:
- 1、使用`iscroll`或`better scroll`这种第三方插件，使用纯`js`模拟滚动效果;
- 2、使用`ontouchmove`代替监听，但是在惯性滑动时仍然需要配合`onscroll`;

### `window.scrollTo`兼容性
``` js{4}
  window.scrollTo({
    top: 0,
    left:0,
    behavior:'smooth', // 平滑参数不兼容，需要引入smoothscroll polyfill
  })
```
::: tip
  `window`可以换成任意的`DOM`元素
:::
### `window.scrollBy`兼容性
由于`ios`端不兼容平滑滚动，因此会使用`scrollBy`结合定时器或者`RFA`方案来进行处理，
但是低版本系统没有此方案，需要手动计算
```js{4}
// 每次向上偏移50
const step = 50
el.scrollTop -= step
```