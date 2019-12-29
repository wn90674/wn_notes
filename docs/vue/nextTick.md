### [$nextTick](https://www.cnblogs.com/chaoyuehedy/p/8985425.html)
当data中的某个属性改变的时候，这个值并不是立即渲染到页面上，而是先放到watcher队列上（异步），只有当前任务空闲的时候才会去执行watcher队列上的任务。所以导致，改变的数据挂载到dom上会有一定的延迟，这也就导致了，当我们在改变属性值的时候，立即通过dom去拿改变的值时发现拿到的值并不是改变的值，而是之前的值。

this.$nextTick作用：在下次dom更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获得更新后的dom
```vue.js
<template>
  <div class="demo">
    <van-field
      readonly
      clickable
      :value="keyValue"
      @touchstart.native.stop="showKey = true"
    />
    <van-number-keyboard
      v-model="keyValue"
      :show="showKey"
      :maxlength="10"
      extra-key="."
      @input="onInput"
      @blur="showKey = false"
    />
  </div>
</template>


<script>

export default {
  data() {
    return {
      keyValue: '',
      showKey: false,
    };
  },
  methods: {
    handleFocus() {
    onInput(ev) {
      if(ev==='.') {
        // 需要在dom更新完毕后修改赋值
        this.$nextTick(()=>{
        this.keyValue = this.keyValue.slice(0, -1)
        })
      }
      console.error(ev,this.keyValue);
    },
  },
};
</script>
```