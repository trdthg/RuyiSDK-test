# LLVM 的构建和使用

目前支持的所有扩展见：
<https://github.com/ruyisdk/llvm-project/blob/main/llvm/docs/RISCVUsage.rst>

## 构建

``` bash
apt-get install -y cmake ninja-build autoconf automake make python3 libmpc-devel mpfr-devel gmp-devel gawk  bison flex texinfo patchutils gcc gcc-c++ zlib-devel expat-devel diffutils
git clone https://github.com/ruyisdk/llvm-project.git
cd llvm-project
mkdir build
cmake -DLLVM_ENABLE_PROJECTS="clang" -DCMAKE_BUILD_TYPE="Release"  -G Ninja ../llvm
ninja
```

## 交叉编译

需要使用 riscv-gnu-toolchain，可以从 riscv-gnu-toolchain/releases 中下载

``` bash
https://github.com/riscv-collab/riscv-gnu-toolchain/releases
```

以 riscv64-elf-ubuntu-22.04-nightly-2023.06.09-nightly.tar.gz 为例

``` bash
wget https://github.com/riscv-collab/riscv-gnu-toolchain/releases/download/2023.06.09/riscv64-elf-ubuntu-22.04-nightly-2023.06.09-nightly.tar.gz
tar -xvf riscv64-elf-ubuntu-22.04-nightly-2023.06.09-nightly.tar.gz
```

编译 helloworld

``` bash
/home/liaochunyu/llvm-project/build/bin/clang --target=riscv64-unknown-elf  -march=rv64gc   --sysroot=/home/liaochunyu/riscv/riscv64-unknown-elf --gcc-toolchain=/home/liaochunyu/riscv/ hello.c
```

riscv 环境下本地编译

``` bash
/home/liaochunyu/llvm-project/build/bin/clang hello.c
```
