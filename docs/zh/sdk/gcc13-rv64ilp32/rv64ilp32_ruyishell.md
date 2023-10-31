---
title: 使用 ruyishell 下载测试
---

::: tabs
编写测试用例

::: code-tab
c demo

int main(){

:   return 0;

}
:::

::: code-tab
bash build

\# 使用构建的工具编译测试用例，查看 elf 文件属性是否为 64 位 ILP32ABI
build/bin/riscv64-unknown-linux-gnu-gcc main.c -o main.elf
build/bin/riscv64-unknown-linux-gnu-readelf -h main.elf
:::
:::
