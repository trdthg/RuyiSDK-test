# 运行 Coremark

这里我们从零开始，安装 ruyisdk 并编译运行 Coremark。ruyisdk 包含 ruyibuild 和 ruyishell 两个工具，ruyibuild 可用于下\>载工具链源码，从源码构建工具链。如果我们想要开箱即用，那么可以选择 ruyishell。这里我们也是介绍使用 ruyishell 交叉编译 Coremark 的步骤。

## 安装 ruyishell

ruyishell 是一个辅助开发工具，不需要手动搭建复杂的环境和下载代码，只需要几条命名，就可以直接获取所需要的构建\>好的软件包。

假设我们的 shell 是 bash（大多数情况可能是这样），那么需要先安装 zsh。

1. 安装 zsh

    ``` bash
    sudo apt install zsh
    ```

2. 下载 ruyishell 仓库

    ``` bash
    git clone https://github.com/ruyisdk/ruyishell.git
    ```

3. 运行 install.sh 安装 ruyishell

    安装成功显示如下：

    <!-- ![image](./images/ruyishell_install.png) -->

    （如果在安装依赖时脚本就退出了，没有成功安装的话，可以先执行一下 sudo apt
    update 命令）

## 下载工具链

Ruyi 提供多种编译环境，可以在 repo.xml 中查看支持的 SDK 环境，以及对应的 SDKid。这里我们选择\"基于 sg2042 的
riscv64gc gcc 开发环境\"，它的 sdkid 是 1。我们执行下面的命令来安装：

``` bash
source ~/.zshrc
ruyi on
ruyi update
ruyi install --id=1
ruyi switch --id=1
source ~/.zshrc
```

这样我们就通过 ruyi 安装好了 riscv64gc 的 SDK 环境。测试一下是否成功：

``` bash
riscv64-ruyi-linux-gnu-gcc -v
```

## 交叉编译 Coremark

1. 下载 Coremark

    ``` bash
    git clone https://github.com/eembc/coremark.git
    ```

2. 交叉编译 Coremark

    ``` bash
    cd coremark
    mkdir rv64 && cp simple/* rv64/
    sed -i 's/ee_u32         ee_ptr_int/unsigned long long         ee_ptr_int/g' rv64/core_portme.h
    make compile PORT_DIR=rv64 CC=$riscv64-ruyi-linux-gnu-gcc LD=$riscv64-ruyi-linux-gnu-gcc XCFLAGS="-march=$rv64gc"
    ```

    编译成功会看到 coremark 目录下生成了 coremark.exe，将 coremark.exe 拷贝到我们的 riscv 开发板或者 Qemu 上就可以运行了。
