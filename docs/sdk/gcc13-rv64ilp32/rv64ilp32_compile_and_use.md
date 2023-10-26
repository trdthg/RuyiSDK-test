---
title: 支持 rv64ilp32 扩展构建和使用
---

安装构建依赖 (如有后续构建提示缺失，可根据错误信息全依赖)

::: tabs
::: code-tab
bash Ubuntu 环境

apt-get install -y make diffutils autoconf automake autotools-dev curl
python3 python3-pip libmpc-dev libmpfr-dev libgmp-dev gawk
build-essential bison flex texinfo gperf libtool patchutils bc
zlib1g-dev libexpat-dev ninja-build git cmake libglib2.0-dev
:::

::: code-tab
bash OpenEuler/RevyOS环境

dnf install -y make diffutils autoconf automake python3 libmpc-devel
mpfr-devel gmp-devel gawk bison flex texinfo patchutils gcc gcc-c++
zlib-devel expat-devel
:::
:::

下载 riscv-gnu-toolchain:

``` bash
git clone https://github.com/ruyisdk/riscv-gnu-toolchain
git checkout gcc-13
```

构建准备 (以 gcc13 为例),进入 riscv-gnu-toolchain 目录，建立 build 文件夹，用于存放构建生成的工具链：

``` bash
cd riscv-gnu-toolchain && mkdir build
```

配置构建参数，以启用不同扩展

> 支持 RV64ILP32 特性的构建 (rv64-ilp32)

``` bash
#支持RV64ILP32的构建 （rv64gc-ilp32d）
./configure --prefix=$PWD/build --with-arch=rv64gc --with-abi=ilp32d
```

配置完成后进行构建

``` bash
make linux -j $(nproc)
```

构建完成后，检查是否构建成功 (这里以标准 64 位工具链为例，32 位工具链注意替换工具链名称)

``` bash
build/bin/riscv64-unknown-linux-gnu-gcc -v
```
