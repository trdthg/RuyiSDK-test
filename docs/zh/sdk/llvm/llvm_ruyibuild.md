# 使用 ruyibuild 构建

> 创建编译的虚拟环境 (如已配置，可跳过)
>
> 更新 pip(可选)
>
> ``` bash
> pip3 install --upgrade pip
> ```
>
> 安装 virtualenv 和 virtualenvwrapper
>
> ``` bash
> pip3 install virtualenv
> pip3 install virtualenvwrapper
> ```
>
> 在.bashrc 中添加配置
>
> ``` bash
> # 虚拟环境存放目录，.virtualenvs 目录可自拟
> export WORKON_HOME=~/.virtualenvs
> # 指定 virtualenvwrapper 执行的 python 版本
> # which python3 获取路径
> export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
> # 指定 virtualenv 的路径
> # find -name virtualenv 获取路径
> export VIRTUALENVWRAPPER_VIRTUALENV=~/.local/bin/virtualenv
> # virtualenvwrapper.sh 所在目录
> # find -name virtualenvwrapper.sh
> source ~/.local/bin/virtualenvwrapper.sh
> ```
>
> 使能.bashrc 配置从而可以使用 python 虚拟环境
>
> ``` bash
> source ~/.bashrc
> # 以下是常用命令
> # 创建虚拟环境
> mkvirtualenv buildllvm
> # 切换到某个虚拟环境
> workon buildllvm
> # 退出当前虚拟环境
> deactivate
> # 删除某个虚拟环境
> rmvirtualenv buildllvm
> # 列出所有虚拟环境
> lsvirtualenv
> ```
>
> 创建虚拟环境用于编译，例如
>
> ``` bash
> mkvirtualenv buidllvm
> ```
>
> 至此，python 的虚拟环境配置完成，ruyibuild 的安装和使用可在虚拟环境中进行，而不影响 host 机 python 环境
>
> 安装 ruyibuild
>
> ``` bash
> wget https://repo.tarsier-infra.com:8080/ruyisdk/misc/ruyibuild-0.0.2-py3-none-any.whl
> pip3 install ruyibuild-0.0.2-py3-none-any.whl
> ```
>
> 创建编译配置用于初始化，例如：config_llvm15.yaml
>
> ``` bash
> git clone https://github.com/ruyisdk/ruyici.git
> cd llvm
> cat >> ./test.yaml <<"EOT"
>
> config_file:
>    repo_url: git@github.com:ChunyuLiao/ruyici.git
>    branch: main
>    path: llvm/config_llvm15.yaml
>
> EOT
> ```
>
> 初始化工作
>
> :   执行以下命令创建工作目录，
>     后续自动下载的源码以及构建生成的软件包都会在此目录下
>
> ``` bash
> ruyibuild init -d llvm -f test.yaml
> ```
>
> 准备构建环境和代码
>
> ``` bash
> ruyibuild update
> ```
>
> 执行构建
>
> ``` bash
> ruyibuild generate <name>
> ```
>
> 生成目标 toolchain
