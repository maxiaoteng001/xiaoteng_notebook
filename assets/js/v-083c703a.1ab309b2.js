"use strict";(self.webpackChunkxiaoteng=self.webpackChunkxiaoteng||[]).push([[5251],{3451:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-083c703a",path:"/python/python_basics/data_structure.html",title:"数据结构",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"列表 List",slug:"列表-list",children:[]},{level:2,title:"集合 Set",slug:"集合-set",children:[]},{level:2,title:"字典 Dict",slug:"字典-dict",children:[]}],filePathRelative:"python/python_basics/data_structure.md",git:{updatedTime:1631876121e3,contributors:[{name:"maxiaoteng",email:"jizhuwo00@hotmail.com",commits:1}]}}},8356:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h1><h2 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list" aria-hidden="true">#</a> 列表 List</h2><h2 id="集合-set" tabindex="-1"><a class="header-anchor" href="#集合-set" aria-hidden="true">#</a> 集合 Set</h2><p>特点: 无序不重复</p><ol><li><p>初始化</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 初始化一个集合</span>\na <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># {}是空字典</span>\n\n<span class="token comment"># 添加一个元素</span>\ns<span class="token punctuation">.</span>add<span class="token punctuation">(</span>m<span class="token punctuation">)</span>\n<span class="token comment"># 更新多个元素</span>\ns<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token comment"># 删除</span>\ns<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># 如果不存在则抛出异常</span>\ns<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># 不抛出异常</span>\n\n<span class="token comment"># 不可变集合</span>\nfs <span class="token operator">=</span> <span class="token builtin">frozenset</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> <span class="token builtin">frozenset</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;h&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;l&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment"># 执行更改操作将抛出异常</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li><li><p>转换</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#  list to set</span>\nl <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>\ns <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>\n<span class="token comment"># set to list</span>\n<span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ol><h2 id="字典-dict" tabindex="-1"><a class="header-anchor" href="#字典-dict" aria-hidden="true">#</a> 字典 Dict</h2>',6),t={render:function(n,s){return p}}}}]);