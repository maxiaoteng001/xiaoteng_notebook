"use strict";(self.webpackChunkxiaoteng=self.webpackChunkxiaoteng||[]).push([[8818],{8325:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-128331f7",path:"/python/python_web/jinja.html",title:"jinja",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"python/python_web/jinja.md",git:{updatedTime:1631876121e3,contributors:[{name:"maxiaoteng",email:"jizhuwo00@hotmail.com",commits:1}]}}},662:(n,s,e)=>{e.r(s),e.d(s,{default:()=>r});const a=(0,e(6252).uE)('<h1 id="jinja" tabindex="-1"><a class="header-anchor" href="#jinja" aria-hidden="true">#</a> jinja</h1><ol><li>demo<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> jinja2 <span class="token keyword">import</span> Template\ntem_str <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;\n    version: &quot;3&quot;\n    services:\n        {% for nic in nics %}\n        replica_{{ nic.num }}:\n            build: ./replica\n            expose:\n                - &quot;5000&quot;\n                - &quot;3128&quot;\n            networks:\n                - mobile_network_proxy\n            environment:\n                - REPLICA_NAME=replica_{{ nic.num }}\n                - QL_DEV=/dev/ttyUSB{{ nic.tty_usb_num }}\n                - AT_DEV=/dev/ttyUSB{{ nic.tty_usb_num - 1 }}\n            privileged: true\n        {% endfor %}\n\n        master:\n            build: ./master\n            ports:\n                - &quot;3128:3128&quot;\n                - &quot;5000:5000&quot;\n            networks:\n                - mobile_network_proxy\n\n        redis:\n            image: redis\n            expose:\n                - &quot;6379&quot;\n            networks:\n                - mobile_network_proxy\n\n    networks:\n        mobile_network_proxy:\nnics = [{&quot;num&quot;: num, &quot;tty_usb_num&quot;: (num + 1) * 4 - 1} for num in range(5)]\ntext = template.render(nics=nics)\nwith open(&quot;docker-compose.yml&quot;, &quot;w&quot;) as f:\n    f.write(text)\n&#39;&#39;&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div></li><li>more</li></ol>',2),r={render:function(n,s){return a}}}}]);