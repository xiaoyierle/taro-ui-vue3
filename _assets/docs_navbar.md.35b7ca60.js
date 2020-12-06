import{f as t,g as a,B as n}from"./common-03e26d29.js";const s='{"title":"NavBar 导航栏","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"自定义标题内容","slug":"自定义标题内容"},{"level":2,"title":"参数","slug":"参数"},{"level":2,"title":"事件","slug":"事件"}],"relativePath":"docs/navbar.md","lastUpdated":1607242430502.0027}';var e={};const p=n('<h1 id="navbar-导航栏"><a class="header-anchor" href="#navbar-导航栏" aria-hidden="true">#</a> NavBar 导航栏</h1><hr><p>导航栏组件，主要用于头部导航。</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtNavBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/nav-bar.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtNavBar</span>\n  <span class="token attr-name">@clickRgIconSt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@clickRgIconNd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@clickLeftIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#000<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>NavBar 导航栏示例<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>返回<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">rightFirstIconType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>bullet-list<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">rightSecondIconType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>user<span class="token punctuation">&#39;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="自定义标题内容"><a class="header-anchor" href="#自定义标题内容" aria-hidden="true">#</a> 自定义标题内容</h2><p>注意 title 属性须为空</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtNavBar</span>\n  <span class="token attr-name">@clickRgIconSt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@clickRgIconNd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@clickLeftIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#000<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>返回<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">rightFirstIconType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>bullet-list<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">rightSecondIconType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>user<span class="token punctuation">&#39;</span></span>\n<span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>Taro UI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtNavBar</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>链接文字跟图标颜色，不包括标题</td><td>String</td><td>-</td><td><code>#6190E8</code></td></tr><tr><td>fixed</td><td>是否固定顶部</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>border</td><td>是否显示下划线</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>leftIconType</td><td>左边图标类型，图标类型请看<code>AtIcon</code>文档</td><td>String | Object</td><td>-</td><td>&#39;chevron-left&#39;</td></tr><tr><td>leftText</td><td>左边文字</td><td>String</td><td>-</td><td>-</td></tr><tr><td>title</td><td>标题文字</td><td>String</td><td>-</td><td>-</td></tr><tr><td>rightFirstIconType</td><td>从右到左，第一个图标类型，图标类型请看<code>AtIcon</code>文档</td><td>String | Object</td><td>-</td><td>-</td></tr><tr><td>rightSecondIconType</td><td>从右到左第二个图标类型，图标类型请看<code>AtIcon</code>文档</td><td>String | Object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onClickLeftIcon</td><td>左边第一个图标类型点击事件</td><td>-</td></tr><tr><td>onClickRgIconSt</td><td>从右到左第一个图标类型点击事件</td><td>-</td></tr><tr><td>onClickRgIconNd</td><td>从右到左第二个图标类型点击事件</td><td>-</td></tr></tbody></table>',17);e.render=function(n,s,e,o,c,l){return t(),a("div",null,[p])};export default e;export{s as __pageData};
