import{_ as e,o as s,c as n,k as t}from"./chunks/framework.35bd0d1d.js";const g=JSON.parse('{"title":"使用 ruyishell 下载测试","description":"","frontmatter":{"title":"使用 ruyishell 下载测试"},"headers":[],"relativePath":"zh/sdk/gcc13-rv32izfinx/rv32izfinx_ruyishell.md","filePath":"zh/sdk/gcc13-rv32izfinx/rv32izfinx_ruyishell.md","lastUpdated":1698725865000}'),o={name:"zh/sdk/gcc13-rv32izfinx/rv32izfinx_ruyishell.md"},i=t("p",null,"::: tabs 编写测试用例",-1),l=t("p",null,"::: code-tab c demo",-1),a=t("p",{return:"","a+b;":""},"// 测试用例示例 fadd.c float foo(float a, float b)",-1),c=t("p",null,"int main(){",-1),r=t("p",null,": foo(1.0,2.0); return 0;",-1),d=t("p",null,"} :::",-1),_=t("p",null,"::: code-tab bash build",-1),u=t("p",null,"# 使用构建的工具编译测试用例，查看反汇编文件中是否将浮点运算指令 fadd.s 后使用的浮点寄存器（fa*）替换为整型寄存器 (a*) build/bin/riscv64-unknown-linux-gnu-gcc -S foo.c ::: :::",-1),f=[i,l,a,c,r,d,_,u];function h(p,m,x,v,z,b){return s(),n("div",null,f)}const y=e(o,[["render",h]]);export{g as __pageData,y as default};
