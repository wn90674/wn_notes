(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{55:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"合并多个commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并多个commit"}},[s._v("#")]),s._v(" 合并多个commit")]),s._v(" "),e("ul",[e("li",[s._v("step1")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取最新10条提交")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~10\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("-step2\n执行上述命令后会在控制台打开一个"),e("code",[s._v("vi")]),s._v("文件编辑区域，\n将需要覆盖掉的"),e("code",[s._v("commit")]),s._v("记录"),e("code",[s._v("pick")]),s._v("改成 squash（或者s），如果你不打算保留提交信息，用 fixup（或者f）就行;")]),s._v(" "),e("p",[s._v("-step3\n编辑完保存后进入一个新的提交信息窗口")]),s._v(" "),e("p",[s._v("-step4")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git push --force origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);