import{_ as e,o,c as s,k as t}from"./chunks/framework.01608dce.js";const $=JSON.parse('{"title":"使用 ruyishell 下载测试","description":"","frontmatter":{"title":"使用 ruyishell 下载测试"},"headers":[],"relativePath":"sdk/gcc13-rv32e/rv32e.md","filePath":"sdk/gcc13-rv32e/rv32e.md","lastUpdated":1698396886000}'),n={name:"sdk/gcc13-rv32e/rv32e.md"},c=t("p",null,"::: tabs 编写测试用例",-1),a=t("p",null,"::: code-tab c demo",-1),l=t("p",{return:"","a+b;":""},"// 测试用例示例 fadd.c float foo(float a, float b)",-1),d=t("p",null,"int main(){",-1),r=t("p",null,": foo(1.0,2.0); return 0;",-1),_=t("p",null,"} :::",-1),i=t("p",null,"::: code-tab bash build",-1),u=t("p",null,"# 使用构建的工具编译测试用例，查看反汇编文件中是否使用软浮点指令__addsf3 build/bin/riscv64-unknown-linux-gnu-gcc -S foo.c ::: :::",-1),p=[c,a,l,d,r,_,i,u];function f(h,m,v,b,k,g){return o(),s("div",null,p)}const B=e(n,[["render",f]]);export{$ as __pageData,B as default};
