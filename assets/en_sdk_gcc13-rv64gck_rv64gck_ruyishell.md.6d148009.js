import{_ as e,o as c,c as n,k as s,a as t}from"./chunks/framework.35bd0d1d.js";const P=JSON.parse('{"title":"使用构建的工具编译测试用例，查看汇编文件中是否使用 K 扩展指令 aes64ds,aes64ks1i build/bin/riscv64-unknown-linux-gnu-gcc -S crypto.c cat crypto.s ::: :::","description":"","frontmatter":{},"headers":[],"relativePath":"en/sdk/gcc13-rv64gck/rv64gck_ruyishell.md","filePath":"en/sdk/gcc13-rv64gck/rv64gck_ruyishell.md","lastUpdated":null}'),i={name:"en/sdk/gcc13-rv64gck/rv64gck_ruyishell.md"},r=s("hr",null,null,-1),l=s("h2",{id:"title-使用-ruyishell-下载测试",tabindex:"-1"},[t("title: 使用 ruyishell 下载测试 "),s("a",{class:"header-anchor",href:"#title-使用-ruyishell-下载测试","aria-label":'Permalink to "title: 使用 ruyishell 下载测试"'},"​")],-1),a=s("p",null,"::: tabs 编写测试用例",-1),o=s("p",null,"::: code-tab c demo",-1),d=s("p",null,"// 测试用例示例 crypto.c #include <stdint-gcc.h>",-1),_=s("p",{return:"","__builtin_riscv_aes64ds(rs1,rs2);":""},"int64_t foo1(int64_t rs1, int64_t rs2)",-1),u=s("p",null,"int64_t foo2(int64_t rs1, int64_t rs2) { return __builtin_riscv_aes64ks1i(rs1,rs2); } :::",-1),h=s("p",null,"::: code-tab bash build",-1),p=s("h1",{id:"使用构建的工具编译测试用例-查看汇编文件中是否使用-k-扩展指令-aes64ds-aes64ks1i-build-bin-riscv64-unknown-linux-gnu-gcc-s-crypto-c-cat-crypto-s",tabindex:"-1"},[t("使用构建的工具编译测试用例，查看汇编文件中是否使用 K 扩展指令 aes64ds,aes64ks1i build/bin/riscv64-unknown-linux-gnu-gcc -S crypto.c cat crypto.s ::: ::: "),s("a",{class:"header-anchor",href:"#使用构建的工具编译测试用例-查看汇编文件中是否使用-k-扩展指令-aes64ds-aes64ks1i-build-bin-riscv64-unknown-linux-gnu-gcc-s-crypto-c-cat-crypto-s","aria-label":'Permalink to "使用构建的工具编译测试用例，查看汇编文件中是否使用 K 扩展指令 aes64ds,aes64ks1i build/bin/riscv64-unknown-linux-gnu-gcc -S crypto.c cat crypto.s ::: :::"'},"​")],-1),k=[r,l,a,o,d,_,u,h,p];function g(b,y,v,f,m,x){return c(),n("div",null,k)}const S=e(i,[["render",g]]);export{P as __pageData,S as default};