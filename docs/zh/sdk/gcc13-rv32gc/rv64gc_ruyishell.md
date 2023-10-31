---
title: 使用 ruyishell 下载测试
---

::: tabs
编写测试用例

::: code-tab
C demo

//测试用例示例 ruyi.c #include \"stdio.h\" int main(){ printf(\"Hello
RUYISDKn\"); return 0; }
:::

::: code-tab
bash build

\# 使用构建的工具编译测试用例，查看汇编文件中是否使用 RISC-V 指令
build/bin/riscv64-unknown-linux-gnu-gcc -S ruiyi.c cat ruyi.s
:::
:::
