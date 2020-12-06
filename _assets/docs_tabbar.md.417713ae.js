import{f as t,g as n,B as a}from"./common-03e26d29.js";const s='{"title":"TabBar 标签栏","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"带图标标签栏","slug":"带图标标签栏"},{"level":2,"title":"自定义图标颜色、字体颜色、背景颜色","slug":"自定义图标颜色、字体颜色、背景颜色"},{"level":2,"title":"固定底部","slug":"固定底部"},{"level":2,"title":"使用自定义图标","slug":"使用自定义图标"},{"level":2,"title":"使用图片作为图标","slug":"使用图片作为图标"},{"level":2,"title":"参数","slug":"参数"},{"level":2,"title":"tabList object 字段详解","slug":"tablist-object-字段详解"},{"level":2,"title":"事件","slug":"事件"}],"relativePath":"docs/tabbar.md","lastUpdated":1607242430929.6047}';var p={};const e=a('<h1 id="tabbar-标签栏"><a class="header-anchor" href="#tabbar-标签栏" aria-hidden="true">#</a> TabBar 标签栏</h1><hr><p>标签栏组件，主要用于底部导航，方便用户在不同功能模块之间进行快速切换，建议标签数量控制在3～5个，可以通过控制标签的 text ，dot 属性进行内容更新提示。</p><blockquote><p>建议使用小程序原生的 TabBar ，AtTabBar 只是为了满足特殊情况下的自定义而增加的组件，仅仅是 UI 组件，跟原生的 TabBar 组件是有差异的。</p></blockquote><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtTabBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/tab-bar.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><p>使用带图标标签栏时还需引入以下样式文件（仅按需引用时需要）</p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/icon.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><p>说明：</p><ul><li>该组件为受控组件，开发者需要通过 onClick 事件来更新 current 值变化，current 与 onClick 函数必填</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtTabBar</span>\n      <span class="token attr-name">:tabList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabList1<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current1<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>\nexport default {\n  name: &#39;TabBarPage&#39;,\n  data() {\n    return {\n      current1: 0,\n      tabList1: [\n        { title: &#39;待办事项&#39;, text: 8 },\n        { title: &#39;拍照&#39; },\n        { title: &#39;通讯录&#39;, dot: true }\n      ],\n    }\n  },\n  methods: {\n    onClick(value) {\n      this.current1 = value\n    }\n  },\n}\n</code></pre></div><h2 id="带图标标签栏"><a class="header-anchor" href="#带图标标签栏" aria-hidden="true">#</a> 带图标标签栏</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtTabBar</span>\n  <span class="token attr-name">:tabList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[\n    { title: <span class="token punctuation">&#39;</span>待办事项<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>bullet-list<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>new<span class="token punctuation">&#39;</span> },\n    { title: <span class="token punctuation">&#39;</span>拍照<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>camera<span class="token punctuation">&#39;</span> },\n    { title: <span class="token punctuation">&#39;</span>文件夹<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>folder<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>100<span class="token punctuation">&#39;</span>, max: 99 }\n  ]<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="自定义图标颜色、字体颜色、背景颜色"><a class="header-anchor" href="#自定义图标颜色、字体颜色、背景颜色" aria-hidden="true">#</a> 自定义图标颜色、字体颜色、背景颜色</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtTabBar</span>\n  <span class="token attr-name">backgroundColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#ececec<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#ea6bb8<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">:tabList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[\n    { title: <span class="token punctuation">&#39;</span>待办事项<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>bullet-list<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>new<span class="token punctuation">&#39;</span> },\n    { title: <span class="token punctuation">&#39;</span>拍照<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>camera<span class="token punctuation">&#39;</span> },\n    { title: <span class="token punctuation">&#39;</span>文件夹<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>folder<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>100<span class="token punctuation">&#39;</span>, max: 99 }\n  ]<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="固定底部"><a class="header-anchor" href="#固定底部" aria-hidden="true">#</a> 固定底部</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtTabBar</span>\n  <span class="token attr-name">fixed</span>\n  <span class="token attr-name">:tabList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[\n    { title: <span class="token punctuation">&#39;</span>待办事项<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>bullet-list<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>new<span class="token punctuation">&#39;</span> },\n    { title: <span class="token punctuation">&#39;</span>拍照<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>camera<span class="token punctuation">&#39;</span> },\n    { title: <span class="token punctuation">&#39;</span>文件夹<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>folder<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>100<span class="token punctuation">&#39;</span>, max: 99 }\n  ]<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="使用自定义图标"><a class="header-anchor" href="#使用自定义图标" aria-hidden="true">#</a> 使用自定义图标</h2><p>在 <code>AtTabBar</code> 使用自定义图标，需要对 <code>AtIcon</code> 进行拓展，具体请查看 <a href="/#/docs/icon">拓展图标库详细</a></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtTabBar</span>\n  <span class="token attr-name">fixed</span>\n  <span class="token attr-name">:tabList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[\n    { title: <span class="token punctuation">&#39;</span>自定义图标<span class="token punctuation">&#39;</span>, iconPrefixClass:<span class="token punctuation">&#39;</span>fa<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>clock<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>new<span class="token punctuation">&#39;</span> },\n    { title: <span class="token punctuation">&#39;</span>拍照<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>camera<span class="token punctuation">&#39;</span> },\n    { title: <span class="token punctuation">&#39;</span>文件夹<span class="token punctuation">&#39;</span>, iconType: <span class="token punctuation">&#39;</span>folder<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>100<span class="token punctuation">&#39;</span>, max: 99 }\n  ]<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="使用图片作为图标"><a class="header-anchor" href="#使用图片作为图标" aria-hidden="true">#</a> 使用图片作为图标</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtTabBar</span>\n  <span class="token attr-name">:tabList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[\n      { title: <span class="token punctuation">&#39;</span>领取中心<span class="token punctuation">&#39;</span>, image: <span class="token punctuation">&#39;</span>https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png<span class="token punctuation">&#39;</span>, selectedImage: <span class="token punctuation">&#39;</span>https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>new<span class="token punctuation">&#39;</span> },\n      { title: <span class="token punctuation">&#39;</span>找折扣<span class="token punctuation">&#39;</span>, image: <span class="token punctuation">&#39;</span>https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png<span class="token punctuation">&#39;</span> },\n      { title: <span class="token punctuation">&#39;</span>领会员<span class="token punctuation">&#39;</span>, image: <span class="token punctuation">&#39;</span>https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png<span class="token punctuation">&#39;</span>, text: <span class="token punctuation">&#39;</span>100<span class="token punctuation">&#39;</span>, max: 99 }\n    ]<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前选中的标签索引值，从0计数</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>color</td><td>未选中标签字体与图标颜色</td><td>String</td><td>-</td><td><code>#333</code></td></tr><tr><td>selectedColor</td><td>选中标签字体与图标颜色</td><td>String</td><td>-</td><td><code>#6190E8</code></td></tr><tr><td>fixed</td><td>是否固定底部</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>backgroundColor</td><td>背景颜色</td><td>String</td><td>-</td><td><code>#fff</code></td></tr><tr><td>iconSize</td><td>图标大小</td><td>Number</td><td>-</td><td>24</td></tr><tr><td>fontSize</td><td>字体大小</td><td>Number</td><td>-</td><td>14</td></tr><tr><td>tabList</td><td>tab 列表, object 字段说明请看下表</td><td>Array</td><td>-</td><td>false</td></tr></tbody></table><h2 id="tablist-object-字段详解"><a class="header-anchor" href="#tablist-object-字段详解" aria-hidden="true">#</a> tabList object 字段详解</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>可选或必填</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>-</td><td>0</td><td>必填</td></tr><tr><td>iconPrefixClass</td><td>icon className 前缀，用于第三方字体图标库，比如想使用&#39;fa fa-clock&#39; 的图标，则 传入<code>iconPrefixClass=&#39;fa&#39; iconType=&#39;clock&#39;</code>,<a href="/#/docs/icon">拓展图标库详细</a></td><td>String</td><td>-</td><td>-</td><td>-</td></tr><tr><td>iconType</td><td>未选中时展示的 icon 类型，可扩展第三方字体图标库，<a href="/#/docs/icon">拓展图标库详细</a></td><td>String</td><td>-</td><td>-</td><td>可选</td></tr><tr><td>selectedIconType</td><td>选中时展示的 icon 类型，可扩展第三方字体图标库，<a href="/#/docs/icon">拓展图标库详细</a></td><td>String</td><td>-</td><td>-</td><td>可选</td></tr><tr><td>image</td><td>未选中时图片icon的链接</td><td>String</td><td>-</td><td>-</td><td>可选</td></tr><tr><td>selectedImage</td><td>选中时图片icon的链接</td><td>String</td><td>-</td><td>-</td><td>可选</td></tr><tr><td>text</td><td>右上角显示到文本，可以为数字或文字，如果有 dot，优先显示 dot</td><td>String</td><td>-</td><td>-</td><td>可选</td></tr><tr><td>max</td><td>text 可显示的最大数字，超过则显示最大数字加&#39;+&#39;，如&#39;99+&#39;</td><td>Number</td><td>-</td><td>-</td><td>可选</td></tr><tr><td>dot</td><td>是否显示红点，优先级比 text 高</td><td>Boolean</td><td>-</td><td>false</td><td>可选</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onClick</td><td>点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化，onClick 函数必填</td><td>选中 tab 列表索引值</td></tr></tbody></table>',32);p.render=function(a,s,p,o,c,u){return t(),n("div",null,[e])};export default p;export{s as __pageData};
