import{_ as t,r as o,o as p,c,a as n,b as i,e as s,d as a}from"./app.be996f63.js";const l={},r=s('<h1 id="\u5B9E\u73B0\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u5B9E\u73B0\u6DF1\u62F7\u8D1D</h1><h2 id="\u9879\u76EE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4ECB\u7ECD" aria-hidden="true">#</a> \u9879\u76EE\u4ECB\u7ECD</h2><p>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7B80\u5355\u7684\u5BF9\u8C61\u6DF1\u62F7\u8D1D\uFF0C\u5373 <code>clone({id: 1, obj: {id: 2}})</code> \u8FD4\u56DE<code>{id: 1, obj: {id: 2}}</code>\uFF0C\u4F20\u5165\u5BF9\u8C61\u4E0E\u8FD4\u56DE\u5BF9\u8C61\u4E92\u76F8\u72EC\u7ACB\u3002</p><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2>',4),d=a("\u4E4B\u524D\u5206\u6790\u8FC7\uFF0C\u76F4\u63A5\u5F15\u7528\u4E86\u3002"),u={href:"https://devin.ren/interview/JS%E7%AF%87/01.%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B-typeof-%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-%E6%B7%B1%E6%B5%85%E6%8B%B7%E8%B4%9D.html#%E6%B7%B1%E6%8B%B7%E8%B4%9D",target:"_blank",rel:"noopener noreferrer"},k=a("\u70B9\u51FB\u8FD9\u91CC"),v=s(`<h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5148\u5C06\u5BF9\u8C61\u8F6C\u6362\u4E3AJSON\u5B57\u7B26\u4E32</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token comment">// \u518D\u5C06JSON\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u65B0\u7684\u5BF9\u8C61\uFF0C\u81F3\u6B64\u5B9E\u73B0\u6DF1\u62F7\u8D1D,\u4F20\u5165\u7684\u5BF9\u8C61\u548C\u8FD4\u56DE\u7684\u5BF9\u8C61\u76F8\u4E92\u72EC\u7ACB</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
  <span class="token keyword">return</span> res

<span class="token punctuation">}</span>
<span class="token keyword">let</span> resObj <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">555</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resObj<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(b,h){const e=o("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[d,n("a",u,[k,i(e)])]),v])}var B=t(l,[["render",m],["__file","\u9879\u76EE\u7B14\u8BB0.html.vue"]]);export{B as default};
