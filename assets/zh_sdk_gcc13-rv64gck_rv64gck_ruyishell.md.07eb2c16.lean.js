import{_ as s,o as e,c,k as t}from"./chunks/framework.35bd0d1d.js";const y=JSON.parse('{"title":"使用 ruyishell 下载测试","description":"","frontmatter":{"title":"使用 ruyishell 下载测试"},"headers":[],"relativePath":"zh/sdk/gcc13-rv64gck/rv64gck_ruyishell.md","filePath":"zh/sdk/gcc13-rv64gck/rv64gck_ruyishell.md","lastUpdated":1698725865000}'),r={name:"zh/sdk/gcc13-rv64gck/rv64gck_ruyishell.md"},n=t("p",null,"::: tabs 编写测试用例",-1),i=t("p",null,"::: code-tab c demo",-1),o=t("p",null,"// 测试用例示例 crypto.c #include <stdint-gcc.h>",-1),_=t("p",null,"int64_t foo1(int64_t rs1, int64_t rs2) { return __builtin_riscv_aes64ds(rs1,rs2); }",-1),l=t("p",null,"int64_t foo2(int64_t rs1, int64_t rs2) { return __builtin_riscv_aes64ks1i(rs1,rs2); } :::",-1),a=t("p",null,"::: code-tab bash build",-1),d=t("p",null,"# 使用构建的工具编译测试用例，查看汇编文件中是否使用 K 扩展指令 aes64ds,aes64ks1i build/bin/riscv64-unknown-linux-gnu-gcc -S crypto.c cat crypto.s ::: :::",-1),u=[n,i,o,_,l,a,d];function h(p,k,g,v,f,m){return e(),c("div",null,u)}const x=s(r,[["render",h]]);export{y as __pageData,x as default};
