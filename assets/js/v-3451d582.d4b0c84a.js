"use strict";(self.webpackChunkxiaoteng=self.webpackChunkxiaoteng||[]).push([[2137],{2618:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-3451d582",path:"/python/python_basics/install.html",title:"安装",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"python/python_basics/install.md",git:{updatedTime:1631876121e3,contributors:[{name:"maxiaoteng",email:"jizhuwo00@hotmail.com",commits:1}]}}},8329:(n,e,a)=>{a.r(e),a.d(e,{default:()=>l});const s=(0,a(6252).uE)('<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><ol><li>debian ubuntu安装<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update\necho &#39;安装解压缩软件&#39;\napt-get install aptitude -y\naptitude install bzip2 tar xz-utils gcc -y\necho &#39;安装依赖&#39;\nsudo aptitude install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev curl libbz2-dev -y\ncurl -O https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tar.xz\ntar -xf Python-3.8.2.tar.xz\ncd Python-3.8.2 &amp;&amp; ./configure --enable-optimizations\nmake -j 4\nsudo make altinstall\necho &#39;install success&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li>centos</li></ol>',2),l={render:function(n,e){return s}}}}]);