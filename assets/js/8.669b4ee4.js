(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{57:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"版本回退"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[t._v("#")]),t._v(" 版本回退")]),t._v(" "),e("p",[t._v("经常遇到"),e("code",[t._v("push")]),t._v("远程代码完后发现还有东西需要继续调整,想对上次的远程提交做撤销；\n亦或看到有2个"),e("code",[t._v("commit")]),t._v("需要合并、修改"),e("code",[t._v("commit")]),t._v("信息等需求，我们可以使用下面的方法进行处理：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用git log 查看历史commitId")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset commitId  \n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#(注：不要带--hard，默认是--mixed;hard会使上次commit的修改记录也被抹除)到上个版本")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#暂存修改")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#强制push,成功后会发现远程的最新的一次commit被删除")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#释放暂存的修改，开始修改代码")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"massage"')]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("需要注意的是，这种方法使用"),e("code",[t._v("reset")]),t._v("会导致后面人提交的信息也被重置，因此做这个操作前要保证后面没有提交记录；")])]),t._v(" "),e("h3",{attrs:{id:"revert-和-reset的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revert-和-reset的区别"}},[t._v("#")]),t._v(" "),e("code",[t._v("revert")]),t._v(" 和 "),e("code",[t._v("reset")]),t._v("的区别")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git revert")]),t._v("是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit。")]),t._v(" "),e("li",[t._v("在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。因为git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，导致这部分改变不会再次出现，但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入。")]),t._v(" "),e("li",[e("code",[t._v("git reset")]),t._v(" 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);