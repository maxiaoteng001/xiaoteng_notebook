"use strict";(self.webpackChunkxiaoteng=self.webpackChunkxiaoteng||[]).push([[5995],{2590:(s,n,a)=>{a.r(n),a.d(n,{data:()=>p});const p={key:"v-b0225146",path:"/python/python_basics/built_in_module/string.html",title:"string 模块",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"python/python_basics/built_in_module/string.md",git:{updatedTime:1631876121e3,contributors:[{name:"maxiaoteng",email:"jizhuwo00@hotmail.com",commits:1}]}}},461:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="string-模块" tabindex="-1"><a class="header-anchor" href="#string-模块" aria-hidden="true">#</a> string 模块</h1><p>提供字符串和数字组合</p><ol><li><p>用法</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> string\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string\n<span class="token operator">&lt;</span>module <span class="token string">&#39;string&#39;</span> <span class="token keyword">from</span> <span class="token string">&#39;/Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6/string.py&#39;</span><span class="token operator">&gt;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>digits\n<span class="token string">&#39;0123456789&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>hexdigits\n<span class="token string">&#39;0123456789abcdefABCDEF&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>octdigits\n<span class="token string">&#39;01234567&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>punctuation\n<span class="token string">&#39;!&quot;#$%&amp;\\&#39;()*+,-./:;&lt;=&gt;?@[\\\\]^_`{|}~&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>ascii_lowercase\n<span class="token string">&#39;abcdefghijklmnopqrstuvwxyz&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>ascii_uppercase\n<span class="token string">&#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>ascii_letters\n<span class="token string">&#39;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li><li><p>关系</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>printable <span class="token operator">=</span> digits <span class="token operator">+</span> ascii_letters <span class="token operator">+</span> punctuation <span class="token operator">+</span> whitespace\nhexdigits <span class="token operator">=</span> digits <span class="token operator">+</span> <span class="token string">&#39;abcdef&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;ABCDEF&#39;</span>\nwhitespace <span class="token operator">=</span> <span class="token string">&#39; \\t\\n\\r\\v\\f&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>随机字符串</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>string<span class="token punctuation">.</span>digits<span class="token operator">+</span>string<span class="token punctuation">.</span>ascii_lowercase<span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ol>',3),t={render:function(s,n){return p}}}}]);