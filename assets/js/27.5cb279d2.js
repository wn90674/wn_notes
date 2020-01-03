(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{75:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"数字校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字校验"}},[t._v("#")]),t._v(" 数字校验")]),t._v(" "),a("p",[t._v("最近有个需求,限定输入金额"),a("code",[t._v("14+2")]),t._v(",屏蔽输入非数字内容;")]),t._v(" "),a("h3",{attrs:{id:"方案1-h5键盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案1-h5键盘"}},[t._v("#")]),t._v(" 方案1:"),a("code",[t._v("H5")]),t._v("键盘")]),t._v(" "),a("ul",[a("li",[t._v("优点: 可以自定义键盘内容,保证只有数字、正、符号、小数点;")]),t._v(" "),a("li",[t._v("缺点: 1、无法自动顶起输入框,可能会造成输入框被遮挡,因此需要手动处理优化;\n2、模拟出的H5键盘实质上是"),a("code",[t._v("div")]),t._v("实现，而不是"),a("code",[t._v("input")]),t._v(",因此默认是没有光标的,这点也需要做进一步优化;")])]),t._v(" "),a("h3",{attrs:{id:"方案2：调用系统键盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案2：调用系统键盘"}},[t._v("#")]),t._v(" 方案2：调用系统键盘")]),t._v(" "),a("p",[t._v("此方案可谓是一波三折。因为需要默认调用数字键盘,所以必须是"),a("code",[t._v('input type="number"')]),t._v(",然后根据"),a("code",[t._v('v-model="value"')]),t._v("\n监听"),a("code",[t._v("input")]),t._v("事件,对"),a("code",[t._v("value")]),t._v("值进行正则匹配,移除非法字符;\n看上去似乎很美好，但是事情不是想象中那么简单;\n我们会发现,一旦输入后将输入框的显示内容变成一个非合法数字,例如"),a("code",[t._v("0-0")]),t._v("、"),a("code",[t._v("汉字")]),t._v("的时候,页面的内容显示的是正常输入的信息,可是绑定的"),a("code",[t._v("value")]),t._v("确突然变成了"),a("code",[t._v("''")]),t._v(";\n经过搜寻各方资料得知,这个是浏览器的默认行为,在"),a("code",[t._v('input type="number"')]),t._v("的情况下,"),a("code",[t._v("DOM")]),t._v("有一个"),a("code",[t._v("validity")]),t._v("的对象属性,它的第一个属性"),a("code",[t._v("badInput")]),t._v("会对输入的内容进行校验,一旦是非法数字,"),a("code",[t._v("badeInput=true")]),t._v(",此时的"),a("code",[t._v('value=""')]),t._v(",因此也就无法对异常字符进行过滤了,因为无法获取到源字符串;\n解决思路:\n1、动态修改"),a("code",[t._v("input")]),t._v("的"),a("code",[t._v("type")]),t._v(":\n在聚焦时候，设置延迟,将"),a("code",[t._v("type=number")]),t._v("修改为"),a("code",[t._v("type='text'")]),t._v("，这样一来，就可以正确的获取到任何输入的字符串结果(切换类型的时候，系统键盘不会变化!这点很重要很关键);")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFocus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据正则匹配当前的字符")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("此法不建议使用，"),a("code",[t._v("ios")]),t._v("下正常，"),a("code",[t._v("andriod")]),t._v("下键盘会切换;\n2、监听按键事件:\n我们都知道对于"),a("code",[t._v("input")]),t._v("输入来说，"),a("code",[t._v("keyPress")]),t._v("这些按键事件是要比"),a("code",[t._v("input")]),t._v("提前触发,因此可以在按键时进行拦截:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onKeyPress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" charCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("charCode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" charCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不符项拦截")]),t._v("\n     ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("突然发现一个问题，如果输入内容直接从联想提示中输入，这样是无法监听到按键事件的。。因此最完美的做法还是使用一个自定义键盘。")])]),t._v(" "),a("p",[t._v("3、最后又想到了一个思路,监听"),a("code",[t._v("value")]),t._v("的变化,但是不能直接进行"),a("code",[t._v("watch")]),t._v("然后修复数值,否则会进入死循环,于是就重写实现了一个检验版的"),a("code",[t._v("v-model")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code")]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"})]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("1、如果不需要实时过滤非法字符，而只是做提示的话,可以根据"),a("code",[t._v('value=""')]),t._v("且"),a("code",[t._v("badInput=true")]),t._v("的条件来判断,因为真正的"),a("strong",[t._v("空输入")]),t._v("时,尽管"),a("code",[t._v('value=""')]),t._v(",但是"),a("code",[t._v("badeInput=false")]),t._v(";\n2、如果不考虑兼容性,"),a("code",[t._v('input type="text" inputmode="number"')]),t._v("也是可以的,"),a("code",[t._v('type="text"')]),t._v("的时候可以获取到任意情况下的输入内容,"),a("code",[t._v("inputmode")]),t._v("可以默认系统调起对应类型的键盘,但是兼容性比较差;")])])])}),[],!1,null,null,null);s.default=e.exports}}]);