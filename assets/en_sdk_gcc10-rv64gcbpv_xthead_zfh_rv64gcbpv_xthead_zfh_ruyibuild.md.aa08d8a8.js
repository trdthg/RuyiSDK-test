import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.35bd0d1d.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/sdk/gcc10-rv64gcbpv_xthead_zfh/rv64gcbpv_xthead_zfh_ruyibuild.md","filePath":"en/sdk/gcc10-rv64gcbpv_xthead_zfh/rv64gcbpv_xthead_zfh_ruyibuild.md","lastUpdated":null}'),l={name:"en/sdk/gcc10-rv64gcbpv_xthead_zfh/rv64gcbpv_xthead_zfh_ruyibuild.md"},e=p(`<hr><h2 id="title-使用-ruyibuild-构建" tabindex="-1">title: 使用 ruyibuild 构建 <a class="header-anchor" href="#title-使用-ruyibuild-构建" aria-label="Permalink to &quot;title: 使用 ruyibuild 构建&quot;">​</a></h2><p>创建编译的虚拟环境 (如已配置，可跳过)</p><p>更新 pip(可选)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--upgrade</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--upgrade</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span></span></code></pre></div><p>安装 virtualenv 和 virtualenvwrapper</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">virtualenv</span></span>
<span class="line"><span style="color:#B392F0;">pip3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">virtualenvwrapper</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">virtualenv</span></span>
<span class="line"><span style="color:#6F42C1;">pip3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">virtualenvwrapper</span></span></code></pre></div><p>在.bashrc 中添加配置</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 虚拟环境存放目录，.virtualenvs目录可自拟</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> WORKON_HOME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">~/.virtualenvs</span></span>
<span class="line"><span style="color:#6A737D;"># 指定virtualenvwrapper执行的python版本</span></span>
<span class="line"><span style="color:#6A737D;"># which python3 获取路径</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> VIRTUALENVWRAPPER_PYTHON</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">/usr/bin/python3</span></span>
<span class="line"><span style="color:#6A737D;"># 指定virtualenv的路径</span></span>
<span class="line"><span style="color:#6A737D;"># find -name virtualenv 获取路径</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> VIRTUALENVWRAPPER_VIRTUALENV</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">~/.local/bin/virtualenv</span></span>
<span class="line"><span style="color:#6A737D;"># virtualenvwrapper.sh所在目录</span></span>
<span class="line"><span style="color:#6A737D;"># find -name virtualenvwrapper.sh</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.local/bin/virtualenvwrapper.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 虚拟环境存放目录，.virtualenvs目录可自拟</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> WORKON_HOME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">~/.virtualenvs</span></span>
<span class="line"><span style="color:#6A737D;"># 指定virtualenvwrapper执行的python版本</span></span>
<span class="line"><span style="color:#6A737D;"># which python3 获取路径</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> VIRTUALENVWRAPPER_PYTHON</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/usr/bin/python3</span></span>
<span class="line"><span style="color:#6A737D;"># 指定virtualenv的路径</span></span>
<span class="line"><span style="color:#6A737D;"># find -name virtualenv 获取路径</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> VIRTUALENVWRAPPER_VIRTUALENV</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">~/.local/bin/virtualenv</span></span>
<span class="line"><span style="color:#6A737D;"># virtualenvwrapper.sh所在目录</span></span>
<span class="line"><span style="color:#6A737D;"># find -name virtualenvwrapper.sh</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.local/bin/virtualenvwrapper.sh</span></span></code></pre></div><p>使能.bashrc 配置从而可以使用 python 虚拟环境</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.bashrc</span></span>
<span class="line"><span style="color:#6A737D;"># 以下是常用命令</span></span>
<span class="line"><span style="color:#6A737D;"># 创建虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">mkvirtualenv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">buildgcc</span></span>
<span class="line"><span style="color:#6A737D;"># 切换到某个虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">workon</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">buildgcc</span></span>
<span class="line"><span style="color:#6A737D;"># 退出当前虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">deactivate</span></span>
<span class="line"><span style="color:#6A737D;"># 删除某个虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">rmvirtualenv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">buildgcc</span></span>
<span class="line"><span style="color:#6A737D;"># 列出所有虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">lsvirtualenv</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.bashrc</span></span>
<span class="line"><span style="color:#6A737D;"># 以下是常用命令</span></span>
<span class="line"><span style="color:#6A737D;"># 创建虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">mkvirtualenv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">buildgcc</span></span>
<span class="line"><span style="color:#6A737D;"># 切换到某个虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">workon</span><span style="color:#24292E;"> </span><span style="color:#032F62;">buildgcc</span></span>
<span class="line"><span style="color:#6A737D;"># 退出当前虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">deactivate</span></span>
<span class="line"><span style="color:#6A737D;"># 删除某个虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">rmvirtualenv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">buildgcc</span></span>
<span class="line"><span style="color:#6A737D;"># 列出所有虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">lsvirtualenv</span></span></code></pre></div><p>创建虚拟环境用于编译，例如</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mkvirtualenv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">buildgcc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mkvirtualenv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">buildgcc</span></span></code></pre></div><p>至此，python 的虚拟环境配置完成，ruyibuild 的安装和使用可在虚拟环境中进行，而不影响 host 机 python 环境</p><p>安装 ruyibuild</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://repo.tarsier-infra.com:8080/ruyisdk/misc/ruyibuild-0.0.2-py3-none-any.whl</span></span>
<span class="line"><span style="color:#B392F0;">pip3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ruyibuild-0.0.2-py3-none-any.whl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://repo.tarsier-infra.com:8080/ruyisdk/misc/ruyibuild-0.0.2-py3-none-any.whl</span></span>
<span class="line"><span style="color:#6F42C1;">pip3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ruyibuild-0.0.2-py3-none-any.whl</span></span></code></pre></div><p>创建编译配置用于初始化，例如 rv64all.yaml 根据不同的构建目标和构建系统，创建不同的运行配置</p><p>::: tabs ::: code-tab bash Ubuntu</p><p>config_file: repo_url: <a href="https://github.com/ruyisdk/ruyici.git" target="_blank" rel="noreferrer">https://github.com/ruyisdk/ruyici.git</a> branch: main path: gcc/ubuntu/22.04/rv64gcbpv_xthead_zfh/config.yaml :::</p><p>::: code-tab bash openEuler</p><p>config_file: repo_url: <a href="https://github.com/ruyisdk/ruyici.git" target="_blank" rel="noreferrer">https://github.com/ruyisdk/ruyici.git</a> branch: main path: gcc/openeuler/23.03/rv64gcbpv_xthead_zfh/config.yaml ::: :::</p><p>初始化工作</p><p>: 执行以下命令创建工作目录, 后续自动下载的源码以及构建生成的软件包都会在此目录下</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rv64all</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rv64all.yaml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rv64all</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rv64all.yaml</span></span></code></pre></div><p>准备构建环境和代码</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span></code></pre></div><p>执行构建</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyibuild</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">generate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyibuild</span><span style="color:#24292E;"> </span><span style="color:#032F62;">generate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>生成目标 toolchain</p>`,29),o=[e];function t(c,r,i,y,d,u){return a(),n("div",null,o)}const v=s(l,[["render",t]]);export{E as __pageData,v as default};
