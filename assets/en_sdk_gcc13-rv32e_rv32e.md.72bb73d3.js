import{_ as s,o as a,c as o,k as e,a as t}from"./chunks/framework.35bd0d1d.js";const N=JSON.parse('{"title":"使用构建的工具编译测试用例，查看反汇编文件中是否使用软浮点指令__addsf3","description":"","frontmatter":{},"headers":[],"relativePath":"en/sdk/gcc13-rv32e/rv32e.md","filePath":"en/sdk/gcc13-rv32e/rv32e.md","lastUpdated":null}'),n={name:"en/sdk/gcc13-rv32e/rv32e.md"},l=e("hr",null,null,-1),d=e("h2",{id:"title-使用-ruyishell-下载测试",tabindex:"-1"},[t("title: 使用 ruyishell 下载测试 "),e("a",{class:"header-anchor",href:"#title-使用-ruyishell-下载测试","aria-label":'Permalink to "title: 使用 ruyishell 下载测试"'},"​")],-1),c=e("p",null,"::: tabs 编写测试用例",-1),r=e("p",null,"::: code-tab c demo",-1),i=e("p",{return:"","a+b;":""},"// 测试用例示例 fadd.c float foo(float a, float b)",-1),_=e("p",null,"int main(){",-1),h=e("p",null,": foo(1.0,2.0); return 0;",-1),u=e("p",null,"} :::",-1),f=e("p",null,"::: code-tab bash build",-1),p=e("h1",{id:"使用构建的工具编译测试用例-查看反汇编文件中是否使用软浮点指令-addsf3",tabindex:"-1"},[t("使用构建的工具编译测试用例，查看反汇编文件中是否使用软浮点指令__addsf3 "),e("a",{class:"header-anchor",href:"#使用构建的工具编译测试用例-查看反汇编文件中是否使用软浮点指令-addsf3","aria-label":'Permalink to "使用构建的工具编译测试用例，查看反汇编文件中是否使用软浮点指令__addsf3"'},"​")],-1),b=e("p",null,"build/bin/riscv64-unknown-linux-gnu-gcc -S foo.c ::: :::",-1),m=[l,d,c,r,i,_,h,u,f,p,b];function v(k,x,g,y,P,$){return a(),o("div",null,m)}const S=s(n,[["render",v]]);export{N as __pageData,S as default};
