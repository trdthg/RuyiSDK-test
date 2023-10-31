# RuyiSDK 测试仓

RUYISDK 是一个旨在提供给一个一体化集成开发环境的产品计划。从2023年开始筹备，计划用三年时间为RISC-V开发者提 供一个完整的、全家桶式的全功能开发环境。

目前该产品包含 `ruyibuild` 和 `ruyishell`。

## 测试方案

本次测试目标在四类设备上进行测试。

- Ubuntu 22.04.3 LTS x86
- openEuler 23.09 x86
- Fedora on 2042

### 编译器工具链测试方案

#### dejagnu

#### Anghabench

#### jotai

该程序为一个随机程序发生器。考虑到性能问题，此测试只在 x86 架构设备上测试。

#### csmith

该程序为一个随机程序发生器。考虑到性能问题，此测试只在 x86 架构设备上测试。

#### yarpgen

该程序为一个随机程序发生器。考虑到性能问题，此测试只在 x86 架构设备上测试。

### ruyibuild

ruyibuild是一个辅助开发工具，不需要手动搭建复杂的环境和下载代码，只需要几条命令，就可以直接获取所需要的构建好的软件包。

测试时，按照文档说明构建工具链后，按照编译器工具链测试方案测试。

### ruyishell

ruyishell是一个辅助开发工具，不需要手动搭建复杂的环境和下载代码，只需要几条命令，就可以直接获取所需要的构建好的软件包。

在获取二进制包后，验证获取的工具链的哈希值对比由 ruyibuild 生成的二进制进行比较验证。