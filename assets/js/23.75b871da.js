(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{73:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/chaoyuehedy/p/8985425.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("$nextTick"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("当data中的某个属性改变的时候，这个值并不是立即渲染到页面上，而是先放到watcher队列上（异步），只有当前任务空闲的时候才会去执行watcher队列上的任务。所以导致，改变的数据挂载到dom上会有一定的延迟，这也就导致了，当我们在改变属性值的时候，立即通过dom去拿改变的值时发现拿到的值并不是改变的值，而是之前的值。")]),s._v(" "),a("p",[s._v("this.$nextTick作用：在下次dom更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获得更新后的dom")]),s._v(" "),a("div",{staticClass:"language-vue.js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  <div class="demo">\n    <van-field\n      readonly\n      clickable\n      :value="keyValue"\n      @touchstart.native.stop="showKey = true"\n    />\n    <van-number-keyboard\n      v-model="keyValue"\n      :show="showKey"\n      :maxlength="10"\n      extra-key="."\n      @input="onInput"\n      @blur="showKey = false"\n    />\n  </div>\n</template>\n\n\n<script>\n\nexport default {\n  data() {\n    return {\n      keyValue: \'\',\n      showKey: false,\n    };\n  },\n  methods: {\n    handleFocus() {\n    onInput(ev) {\n      if(ev===\'.\') {\n        // 需要在dom更新完毕后修改赋值\n        this.$nextTick(()=>{\n        this.keyValue = this.keyValue.slice(0, -1)\n        })\n      }\n      console.error(ev,this.keyValue);\n    },\n  },\n};\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);