# New-Balance 网站的重构
[点击前往项目演示网址](https://www.404error.top/NewBalance)

* 重构的页面包括 首页 男士热销 女士热销  注册登录 及其 （走心双杀）足球鞋商品页面。
* 重构的内容主要是 页面结构，样式，以及自适应方面的重构。
* 首页轮播图，导航栏二级隐藏菜单的显示效果，热销页的侧边栏的固定。
* pc端和移动端用一套代码，通过@media媒体查询，实现了页面的自适应。
* 对登录注册页面进行表单提交前的验证，用正则表达式对输入的内容进行简单的校验。