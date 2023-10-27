import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.01608dce.js";const d=JSON.parse('{"title":"LLVM 的构建和使用","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/llvm/llvm_compile_and_use.md","filePath":"sdk/llvm/llvm_compile_and_use.md","lastUpdated":1698396886000}'),o={name:"sdk/llvm/llvm_compile_and_use.md"},p=n(`<h1 id="llvm-的构建和使用" tabindex="-1">LLVM 的构建和使用 <a class="header-anchor" href="#llvm-的构建和使用" aria-label="Permalink to &quot;LLVM 的构建和使用&quot;">​</a></h1><p>目前支持的所有扩展见： <a href="https://github.com/ruyisdk/llvm-project/blob/main/llvm/docs/RISCVUsage.rst" target="_blank" rel="noreferrer">https://github.com/ruyisdk/llvm-project/blob/main/llvm/docs/RISCVUsage.rst</a></p><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cmake</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ninja-build</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">autoconf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">automake</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libmpc-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mpfr-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gmp-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gawk</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">bison</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flex</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">texinfo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">patchutils</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc-c++</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zlib-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">expat-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diffutils</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/ruyisdk/llvm-project.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">llvm-project</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"><span style="color:#B392F0;">cmake</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-DLLVM_ENABLE_PROJECTS=</span><span style="color:#9ECBFF;">&quot;clang&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-DCMAKE_BUILD_TYPE=</span><span style="color:#9ECBFF;">&quot;Release&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-G</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Ninja</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">../llvm</span></span>
<span class="line"><span style="color:#B392F0;">ninja</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cmake</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ninja-build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">autoconf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">automake</span><span style="color:#24292E;"> </span><span style="color:#032F62;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libmpc-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mpfr-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gmp-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gawk</span><span style="color:#24292E;">  </span><span style="color:#032F62;">bison</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flex</span><span style="color:#24292E;"> </span><span style="color:#032F62;">texinfo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">patchutils</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc-c++</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zlib-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">expat-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diffutils</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/ruyisdk/llvm-project.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">llvm-project</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span>
<span class="line"><span style="color:#6F42C1;">cmake</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-DLLVM_ENABLE_PROJECTS=</span><span style="color:#032F62;">&quot;clang&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-DCMAKE_BUILD_TYPE=</span><span style="color:#032F62;">&quot;Release&quot;</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">-G</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Ninja</span><span style="color:#24292E;"> </span><span style="color:#032F62;">../llvm</span></span>
<span class="line"><span style="color:#6F42C1;">ninja</span></span></code></pre></div><h2 id="交叉编译" tabindex="-1">交叉编译 <a class="header-anchor" href="#交叉编译" aria-label="Permalink to &quot;交叉编译&quot;">​</a></h2><p>需要使用 riscv-gnu-toolchain，可以从 riscv-gnu-toolchain/releases 中下载</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">https://github.com/riscv-collab/riscv-gnu-toolchain/releases</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">https://github.com/riscv-collab/riscv-gnu-toolchain/releases</span></span></code></pre></div><p>以 riscv64-elf-ubuntu-22.04-nightly-2023.06.09-nightly.tar.gz 为例</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/riscv-collab/riscv-gnu-toolchain/releases/download/2023.06.09/riscv64-elf-ubuntu-22.04-nightly-2023.06.09-nightly.tar.gz</span></span>
<span class="line"><span style="color:#B392F0;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-xvf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">riscv64-elf-ubuntu-22.04-nightly-2023.06.09-nightly.tar.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/riscv-collab/riscv-gnu-toolchain/releases/download/2023.06.09/riscv64-elf-ubuntu-22.04-nightly-2023.06.09-nightly.tar.gz</span></span>
<span class="line"><span style="color:#6F42C1;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-xvf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">riscv64-elf-ubuntu-22.04-nightly-2023.06.09-nightly.tar.gz</span></span></code></pre></div><p>编译 helloworld</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">/home/liaochunyu/llvm-project/build/bin/clang</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--target=riscv64-unknown-elf</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-march=rv64gc</span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">--sysroot=/home/liaochunyu/riscv/riscv64-unknown-elf</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--gcc-toolchain=/home/liaochunyu/riscv/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello.c</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">/home/liaochunyu/llvm-project/build/bin/clang</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--target=riscv64-unknown-elf</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">-march=rv64gc</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">--sysroot=/home/liaochunyu/riscv/riscv64-unknown-elf</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--gcc-toolchain=/home/liaochunyu/riscv/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello.c</span></span></code></pre></div><p>riscv 环境下本地编译</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">/home/liaochunyu/llvm-project/build/bin/clang</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello.c</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">/home/liaochunyu/llvm-project/build/bin/clang</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello.c</span></span></code></pre></div>`,13),e=[p];function c(t,r,y,i,E,F){return a(),l("div",null,e)}const u=s(o,[["render",c]]);export{d as __pageData,u as default};
