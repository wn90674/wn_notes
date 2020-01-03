(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{68:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"ios下scroll兼容问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios下scroll兼容问题"}},[s._v("#")]),s._v(" "),a("code",[s._v("ios")]),s._v("下"),a("code",[s._v("scroll")]),s._v("兼容问题")]),s._v(" "),a("p",[a("code",[s._v("ios")]),s._v("下滚动存在很多兼容问题")]),s._v(" "),a("h4",{attrs:{id:"内容器滚动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容器滚动"}},[s._v("#")]),s._v(" 内容器滚动")]),s._v(" "),a("p",[s._v("正常情况，列表内容在"),a("code",[s._v("body")]),s._v("下滚动，是比较平滑的，但是如果使用了内滚动(在限高的元素内)，滚动\n会变得很生硬，需要对设置"),a("code",[s._v("-webkit-overflow-scroll:touch")]),s._v(";\n:::\n如果使用"),a("code",[s._v("setInterval")]),s._v(" 会导致动画累积，出现闪烁回弹问题，可以使用"),a("code",[s._v("RFA")]),s._v("代替，且在启用定时器的时候动态修改"),a("code",[s._v("-webkit-overflow-scroll")]),s._v("的属性\n:::")]),s._v(" "),a("h4",{attrs:{id:"滚动事件触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动事件触发"}},[s._v("#")]),s._v(" 滚动事件触发")]),s._v(" "),a("p",[s._v("由于系统优化的机制，不能准确的监测到每一次的滚动事件。目前找到可行的两种方法:")]),s._v(" "),a("ul",[a("li",[s._v("1、使用"),a("code",[s._v("iscroll")]),s._v("或"),a("code",[s._v("better scroll")]),s._v("这种第三方插件，使用纯"),a("code",[s._v("js")]),s._v("模拟滚动效果;")]),s._v(" "),a("li",[s._v("2、使用"),a("code",[s._v("ontouchmove")]),s._v("代替监听，但是在惯性滑动时仍然需要配合"),a("code",[s._v("onscroll")]),s._v(";")])]),s._v(" "),a("h3",{attrs:{id:"window-scrollto兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-scrollto兼容性"}},[s._v("#")]),s._v(" "),a("code",[s._v("window.scrollTo")]),s._v("兼容性")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scrollTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    behavior"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smooth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 平滑参数不兼容，需要引入smoothscroll polyfill")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[a("code",[s._v("window")]),s._v("可以换成任意的"),a("code",[s._v("DOM")]),s._v("元素")])]),s._v(" "),a("h3",{attrs:{id:"window-scrollby兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-scrollby兼容性"}},[s._v("#")]),s._v(" "),a("code",[s._v("window.scrollBy")]),s._v("兼容性")]),s._v(" "),a("p",[s._v("由于"),a("code",[s._v("ios")]),s._v("端不兼容平滑滚动，因此会使用"),a("code",[s._v("scrollBy")]),s._v("结合定时器或者"),a("code",[s._v("RFA")]),s._v("方案来进行处理，\n但是低版本系统没有此方案，需要手动计算")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每次向上偏移50")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" step "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" step\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);