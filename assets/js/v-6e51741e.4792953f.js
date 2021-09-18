"use strict";(self.webpackChunkxiaoteng=self.webpackChunkxiaoteng||[]).push([[1117],{5724:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-6e51741e",path:"/python/python_web/venv.html",title:"包管理和虚拟环境",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 安装",slug:"_1-安装",children:[]},{level:2,title:"2. pip 包管理",slug:"_2-pip-包管理",children:[]},{level:2,title:"3. pipenv",slug:"_3-pipenv",children:[]},{level:2,title:"4. pipenv 和autoenv的组合",slug:"_4-pipenv-和autoenv的组合",children:[]},{level:2,title:"5. conda",slug:"_5-conda",children:[]},{level:2,title:"学习Emacs",slug:"学习emacs",children:[]},{level:2,title:"Pycharm安装和使用",slug:"pycharm安装和使用",children:[]},{level:2,title:"使用IPython",slug:"使用ipython",children:[]},{level:2,title:"Web开发环境配置",slug:"web开发环境配置",children:[]}],filePathRelative:"python/python_web/venv.md",git:{updatedTime:1631876121e3,contributors:[{name:"maxiaoteng",email:"jizhuwo00@hotmail.com",commits:1}]}}},3487:(n,s,a)=>{a.r(s),a.d(s,{default:()=>d});var e=a(6252);const p=(0,e._)("h1",{id:"包管理和虚拟环境",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#包管理和虚拟环境","aria-hidden":"true"},"#"),(0,e.Uk)(" 包管理和虚拟环境")],-1),l=(0,e._)("ul",null,[(0,e._)("li",null,"包安装方法 通过Python社区开发的pip, easy_install等工具 使用系统本身自带的包管理器(yum, apt-get) 通过源码安装")],-1),t=(0,e._)("h2",{id:"_1-安装",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_1-安装","aria-hidden":"true"},"#"),(0,e.Uk)(" 1. 安装")],-1),i=(0,e._)("p",null,"虚拟环境的包是对真实环境包的一个复制",-1),c=(0,e._)("p",null,"virtualenv是python2使用的, python3.3引入了venv, 作为自带模块",-1),r=(0,e.Uk)("参考 "),o={href:"https://docs.python.org/3.6/library/venv.html",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("https://docs.python.org/3.6/library/venv.html"),b=(0,e.Uk)(" The pyvenv script has been deprecated as of Python 3.6 in favor of using python3 -m venv to help prevent any potential confusion as to which Python interpreter a virtual environment will be based on."),m=(0,e.uE)('<li><p>virtualenv默认有python可执行文件, 常用标准库等.</p><ol><li><p>python2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pip <span class="token function">install</span> virtualenv  <span class="token comment"># 安装virtualenv</span>\n<span class="token comment"># 创建一个project</span>\n<span class="token function">mkdir</span> project\n<span class="token builtin class-name">cd</span> project\nvirtualenv venv  <span class="token comment"># 启动一个虚拟环境(名为:venv, 也可以带一些路径, 默认当前文件夹), 默认复制系统所有的第三方包</span>\nvirtualenv --no-site-packages venv  <span class="token comment"># 启动一个虚拟环境</span>\nvirtualenv venv --python<span class="token operator">=</span>python3.6\n,不包含任何第三方包\n<span class="token builtin class-name">source</span> venv/bin/activate  <span class="token comment"># 生效一个虚拟环境</span>\n<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>which python\n<span class="token operator">&gt;</span> /home<span class="token punctuation">..</span>./bin/python\n<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>deactivate  <span class="token comment"># 退出虚拟环境</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p>python3.3+</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python3 -m venv\n    positional arguments:\n        ENV_DIR               A directory to create the environment in.\n    optional arguments:\n        -h, --help            show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>\n        --system-site-packages\n                                Give the virtual environment access to the system\n                                site-packages dir.\n        --symlinks            Try to use symlinks rather than copies, when symlinks\n                                are not the default <span class="token keyword">for</span> the platform.\n        --copies              Try to use copies rather than symlinks, even when\n                                symlinks are the default <span class="token keyword">for</span> the platform.\n        --clear               Delete the contents of the environment directory <span class="token keyword">if</span> it\n                                already exists, before environment creation.\n        --upgrade             Upgrade the environment directory to use this version\n                                of Python, assuming Python has been upgraded in-place.\n        --without-pip         Skips installing or upgrading pip <span class="token keyword">in</span> the virtual\n                                environment <span class="token punctuation">(</span>pip is bootstrapped by default<span class="token punctuation">)</span>\n<span class="token comment"># 启动一个虚拟环境(名为:env_name, 也可以带一些路径, 默认当前文件夹), 默认复制系统所有的第三方包</span>\npython3 -m venv ./path/env_name\n<span class="token comment"># 创建一个project</span>\n<span class="token builtin class-name">source</span> venv/bin/activate  <span class="token comment"># 生效一个虚拟环境</span>\n<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>which python\n<span class="token operator">&gt;</span> /home<span class="token punctuation">..</span>./bin/python\n<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>deactivate  <span class="token comment"># 退出虚拟环境</span>\n<span class="token comment"># 安装依赖包</span>\n<span class="token function">sudo</span> pip <span class="token function">install</span> -r requirements.txt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></li></ol></li><li><p>windows启动虚拟环境</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 直接命令行运行active文件执行</span>\nC:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>jizhu<span class="token operator">&gt;</span>task<span class="token punctuation">\\</span>mxt_blogs<span class="token punctuation">\\</span>Scripts<span class="token punctuation">\\</span>activate\n<span class="token punctuation">(</span>mxt_blogs<span class="token punctuation">)</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>jizhu<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>',2),h=(0,e.uE)('<h2 id="_2-pip-包管理" tabindex="-1"><a class="header-anchor" href="#_2-pip-包管理" aria-hidden="true">#</a> 2. pip 包管理</h2><ol><li><p>说明</p></li><li><p>使用</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token comment"># 列出</span>\n    pip list  <span class="token comment"># 列出所有的第三方包</span>\n    pip freeze <span class="token operator">&gt;</span> requirement.txt  <span class="token comment"># 导出当前环境下的所有第三方包</span>\n    \n    <span class="token comment"># 安装</span>\n    pip <span class="token function">install</span> requests  <span class="token comment"># 安装包 </span>\n        -i https://pypi.tuna.tsinghua.edu.cn/simple\n    pip <span class="token function">install</span> <span class="token assign-left variable">requests</span><span class="token operator">==</span><span class="token number">3.6</span>.0  \n    pip <span class="token function">install</span> -r requirement.txt  <span class="token comment"># 根据配置文件生成相同的环境</span>\n    pip <span class="token function">install</span> git+https://github.com/xxx  <span class="token comment"># 安装github仓库的包</span>\n    \n    <span class="token comment"># 升级</span>\n    pip <span class="token function">install</span> -U requests  \n    pip <span class="token function">install</span> -U pip  <span class="token comment"># 升级pip</span>\n\n    <span class="token comment"># 卸载</span>\n    pip uninstall requests \n    pip uninstall -r requirements.txt\n\n    <span class="token comment"># 显示包所在目录</span>\n    pip show -f requests\n\n    <span class="token comment"># 搜索包</span>\n    pip search <span class="token operator">&lt;</span>搜索关键字<span class="token operator">&gt;</span>\n\n    <span class="token comment"># 查询可升级的包</span>\n    pip list -o\n\n    <span class="token comment"># 下载包而不安装</span>\n    pip <span class="token function">install</span> <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span> -d <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>\n    pip <span class="token function">install</span> -d <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span> -r requirements.txt\n\n    <span class="token comment"># 打包</span>\n    pip wheel <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>有的环境中, python3/2与pip没有绑定, 用pip/pip3 或python -m pip</p></li><li><p>指定安装源</p><ol><li><p>单次安装源</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    pip <span class="token function">install</span> <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span> -i http://pypi.douban.com/simple\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>全局修改</p><ol><li>unix和macos: $HOME/.pip/pip.conf</li><li>windows: %HOME%\\pip\\pip.ini</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token punctuation">[</span>global<span class="token punctuation">]</span>\n    <span class="token function">timeout</span> <span class="token operator">=</span> <span class="token number">6000</span>\n    index-url <span class="token operator">=</span> http://pypi.douban.com/simple\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol></li></ol><h2 id="_3-pipenv" tabindex="-1"><a class="header-anchor" href="#_3-pipenv" aria-hidden="true">#</a> 3. pipenv</h2><p>是python项目的依赖管理器</p><ul><li>根据pipfile自动寻找项目根目录</li><li>如果不存在,自动生成pipfile和pipfile.lock</li><li>自动在项目目录的.venv目录创建虚拟环境.</li><li>自动管理pipfile新安装和删除的包</li><li>自动更新pip</li></ul><p>使用pipenv代替pip安装包</p><h2 id="_4-pipenv-和autoenv的组合" tabindex="-1"><a class="header-anchor" href="#_4-pipenv-和autoenv的组合" aria-hidden="true">#</a> 4. pipenv 和autoenv的组合</h2><p>autoenv可以在切换文件目录的同时, 自动完成激活虚拟环境 <strong>用法</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pip <span class="token function">install</span> autoenv\n<span class="token builtin class-name">source</span> /usr/local/bin/activate.sh\n\n<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>\n<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>\n<span class="token function">touch</span> .env\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;source /home/xx/venv/bin/activate&#39;</span> <span class="token operator">&gt;</span> .env\n<span class="token builtin class-name">cd</span>\n<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>  <span class="token comment"># 就会自动激活虚拟环境</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_5-conda" tabindex="-1"><a class="header-anchor" href="#_5-conda" aria-hidden="true">#</a> 5. conda</h2><ol><li><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># miniconda</span>\n<span class="token function">wget</span> https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh\n<span class="token function">bash</span> Miniconda3-latest-Linux-x86_64.sh\n\n<span class="token comment"># conda</span>\n<span class="token function">wget</span> https://repo.continuum.io/miniconda/Anaconda-latest-Linux-x86_64.sh\n<span class="token function">bash</span> Anaconda-latest-Linux-x86_64.sh\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ol><h2 id="学习emacs" tabindex="-1"><a class="header-anchor" href="#学习emacs" aria-hidden="true">#</a> 学习Emacs</h2><ul><li><p>安装</p></li><li><p>两种模式</p></li><li><p>GUI模式</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>emacs  <span class="token comment"># 默认启动GUI</span>\nemacd -nw FILE  <span class="token comment"># 终端中启动</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>Daemon模式</p></li><li><p>学习lisp</p></li></ul><h2 id="pycharm安装和使用" tabindex="-1"><a class="header-anchor" href="#pycharm安装和使用" aria-hidden="true">#</a> Pycharm安装和使用</h2><h2 id="使用ipython" tabindex="-1"><a class="header-anchor" href="#使用ipython" aria-hidden="true">#</a> 使用IPython</h2><h2 id="web开发环境配置" tabindex="-1"><a class="header-anchor" href="#web开发环境配置" aria-hidden="true">#</a> Web开发环境配置</h2>',18),d={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,l,t,i,(0,e._)("ol",null,[(0,e._)("li",null,[c,(0,e._)("blockquote",null,[(0,e._)("p",null,[r,(0,e._)("a",o,[u,(0,e.Wm)(a)]),b])])]),m]),h],64)}}}}]);