(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{57:function(t,s,e){"use strict";e.r(s);var a=e(0),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"csrf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" "),e("code",[t._v("CSRF")])]),t._v(" "),e("p",[t._v("CSRF（Cross-site request forgery），中文名称：跨站请求伪造，也被称为：one click attack/session riding，缩写为：CSRF/XSRF。\n攻击者盗用了你的身份，以你的名义发送恶意请求。CSRF能够做的事情包括：以你名义发送邮件，发消息，盗取你的账号，甚至于购买商品，虚拟货币转账......造成的问题包括：个人隐私泄露以及财产安全。")]),t._v(" "),e("p",[t._v("从上图可以看出，要完成一次CSRF攻击，受害者必须依次完成两个步骤：")]),t._v(" "),e("p",[t._v("1.登录受信任网站A，并在本地生成Cookie。")]),t._v(" "),e("p",[t._v("2.在不登出A的情况下，访问危险网站B。")]),t._v(" "),e("p",[t._v("看到这里，你也许会说：“如果我不满足以上两个条件中的一个，我就不会受到CSRF的攻击”。是的，确实如此，但你不能保证以下情况不会发生：")]),t._v(" "),e("p",[t._v("1.你不能保证你登录了一个网站后，不再打开一个tab页面并访问另外的网站。")]),t._v(" "),e("p",[t._v("2.你不能保证你关闭浏览器了后，你本地的Cookie立刻过期，你上次的会话已经结束")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("事实上，关闭浏览器不能结束一个会话，但大多数人都会错误的认为关闭浏览器就等于退出登录/结束会话了,因为服务端的"),e("code",[t._v("sessionId")]),t._v("没有失效")])]),t._v(" "),e("p",[t._v("3.上图中所谓的攻击网站，可能是一个存在其他漏洞的可信任的经常被人访问的网站。")]),t._v(" "),e("h4",{attrs:{id:"示例1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例1"}},[t._v("#")]),t._v(" 示例1")]),t._v(" "),e("p",[t._v("银行网站A，它以GET请求来完成银行转账的操作，如："),e("code",[t._v("http://www.mybank.com/Transfer.php?toBankId=11&money=1000")])]),t._v(" "),e("p",[t._v("危险网站B，它里面有一段HTML的代码如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<img src=http://www.mybank.com/Transfer.php?toBankId=11&money=1000>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("首先，你登录了银行网站A，然后访问危险网站B，噢，这时你会发现你的银行账户少了1000块......")]),t._v(" "),e("p",[t._v("为什么会这样呢？原因是银行网站A违反了HTTP规范，使用GET请求更新资源。在访问危险网站B的之前，你已经登录了银行网站A，而B中的"),e("img"),t._v("以GET的方式请求第三方资源（这里的第三方就是指银行网站了，原本这是一个合法的请求，但这里被不法分子利用了），所以你的浏览器会带上你的银行网站A的Cookie发出Get请求，去获取资源"),e("code",[t._v("http://www.mybank.com/Transfer.php?toBankId=11&money=1000")]),t._v("，结果银行网站服务器收到请求后，认为这是一个更新资源操作（转账操作），所以就立刻进行转账操作......")])])}),[],!1,null,null,null);s.default=v.exports}}]);