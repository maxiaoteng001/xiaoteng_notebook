"use strict";(self.webpackChunkxiaoteng=self.webpackChunkxiaoteng||[]).push([[804],{9732:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-42829afe",path:"/python/python_web/django/HTTP.html",title:"url",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"python/python_web/django/HTTP.md",git:{updatedTime:1631876121e3,contributors:[{name:"maxiaoteng",email:"jizhuwo00@hotmail.com",commits:1}]}}},6440:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h1><ol><li><p>app中修改</p><ul><li>添加urls</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># blog/urls.py</span>\n<span class="token comment"># url: 正则表达式匹配空字符, index: views的内容, name是index的别名</span>\n<span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url\nurlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>\n    url<span class="token punctuation">(</span><span class="token string">r&#39;^$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>index<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>添加views</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># blog/views.py</span>\n<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse\n<span class="token comment"># render根据返回的内容构造httpResponse</span>\n<span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render  \n<span class="token comment"># Create your views here.</span>\n<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;欢迎访问我的博客首页！&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>注册到project中</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path<span class="token punctuation">,</span> include\nurlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>\n    path<span class="token punctuation">(</span><span class="token string">&#39;admin/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment"># 此处的path, url添加后, 可以和后面的urls组合</span>\n    path<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">&#39;blog.urls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>编辑视图函数</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> get_object_or_404\n<span class="token comment"># 返回数据库的对象, 不存在返回404</span>\n<span class="token operator">-</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    post <span class="token operator">=</span> get_object_or_404<span class="token punctuation">(</span>Post<span class="token punctuation">,</span> pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol>',2),e={render:function(n,s){return p}}}}]);