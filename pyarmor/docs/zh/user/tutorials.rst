==========
 使用教程
==========

.. contents:: 目录
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

在本教程中，均以下面的目录结构为例来进行说明::

  project/src/
      ├── foo.py
      ├── fibo.py
      ├── jsontool.py
      └── tomjson/
          ├── __init__.py
          ├── encoder.py
          ├── decoder.py
          └── scanner.py

如果没有特别说明，本教程中默认的目录都是::

  $ cd project/src/

安装和注册 Pyarmor
==================

Pyarmor 发布在 PyPI 上面，使用下面的命令直接安装::

  $ pip install pyarmor.cli

因为重构功能需要能够解锁不可逆加密的许可证，所以必须购买相应的许可证并进行注册。例如::

  $ pyarmor reg pyarmor-regfile-5068.zip

  ...

  INFO     Python 3.11.0
  INFO     Pyarmor 9.1.0 (pro), 005068, btarmor
  INFO     Platform darwin.x86_64
  INFO     Current license information:

  License Type    : pyarmor-pro
  License No.     : pyarmor-vax-005068
  License To      : Tester
  License Product : btarmor

  BCC Mode        : Yes
  RFT Mode        : Yes
  CI/CD Mode      : No

  Notes
  * Need verify license online when obfuscating scripts

.. note::

   试用版和基础版许可证可以生成迷你型脚本，但是不会对脚本进行重构，其加密的不可逆程度略大于 .pyc 文件

生成重构型脚本
==============

下面我们来说明如何重构一个简单脚本 `foo.py`

首先为其创建一个工程，工程只包含一个脚本 `foo.py`::

  $ pyarmor init -e foo.py

然后构建工程，指定输出类型为重构型脚本::

  $ pyarmor build --rst

默认输出是在 `dist` ，查看输出脚本::

  $ cat dist/foo.py

运行重构后的脚本::

  $ python dist/foo.py

重构脚本只是对函数，参数，变量以及类，方法，属性进行了重命名，所以使用方式和原来的脚本一样

重构复杂脚本
============

对于简单脚本，使用默认选项可以正确重构脚本。但是对于复杂脚本，则需要额外的配置。

我们以脚本 `fibo.py` 为例，首先创建仅包含该脚本的工程::

  $ pyarmor init --clean -m fibo.py

当使用下面的命令生成重构型脚本的时候，最后会出现如下警告::

  $ pyarmor build --rft

  WARNING There are variables of unknown type
  WARNING There are function calls which may use unknown arguments
  WARNING Please check file ".pyarmor/project/rft_extra_config.sh"

第一个警告::

  WARNING There are variables of unknown type

是因为在脚本 `fibo.py` 中，有如下的代码块:

.. code-block:: python

   def fib(obj, n):
       obj.name = 'fibo'
       obj.value = n
       obj.run()
       return obj.result

因为参数 `obj` 的类型不确定，所以默认情况是不会对其属性进行重命名，这样可能会导致问题。

解决方案有两种，

一是使用 annotation 指定变量类型，例如:

.. code-block:: python

   def fib(obj: QuickFibo, n):
       obj.name = 'fibo'
       obj.value = n
       obj.run()
       return obj.result

一是不修改脚本，使用规则指定变量类型。例如，执行下面的命令配置规则::

  $ pyarmor env -p push rft_option:var_type_table "fibo:fib.obj QuickFibo"

其中，后者特别适用于类型定义不在当前模块，而是在其他模块，例如::

  $ pyarmor env -p push rft_option:var_type_table "fibo:fib.obj foo:QuickFibo"

第二个警告::

  WARNING There are function calls which may use unknown arguments

是因为在脚本 `fibo.py` 中，有如下的代码块:

.. code-block:: python

   def show(rlist, n, delta=2):
       print('fibo', n, 'is', rlist)
       return n + delta

   if __name__ == '__main__':
       ...
       kwarg = {'n': n, 'delta': 3}
       show(result, **kwarg)

调用函数 `show` 的时候使用了参数 `kwarg` ，而字典的键值重构之后不会改变，而函数的参数名称都进行了重命名，所以运行重构后的脚本会导致出现参数不存在错误

解决方案之一是配置函数 `show` 的参数不能进行重命名，执行下面的命令进行配置::

  $ pyarmor env -p rft_option:rft_exclude_args fibo:show

..
  使用自动生成的配置脚本
  ----------------------

  在重构过程中会自动生成配置脚本 `.pyarmor/project/rft_extra_config.sh`

  在上例中，它的内容如下:

  .. code-block:: bash

     # The following variables type are unknown
     # Please replace "?" with variable type or "<any>"
     # "<any>" means not rename any attribute of this variable
     pyarmor env -p rft_option:var_type_table "fibo:fib.obj ?"


     # The following function arguments could not be renamed
     pyarmor env -p rft_option:rft_exclude_args fibo:show

  这个脚本包含了解决两种警告所需要的额外配置，只需要替换 "?" 为变量的真实类型。

  例如，修改第四行的内容为::

    pyarmor env -p rft_option:var_type_table "fibo:fib.obj QuickFibo"

  然后直接运行配置脚本，就可以完成额外的配置::

    $ bash .pyarmor/project/rft_extra_config.sh

  最后重新生成加密脚本::

    $ pyarmor build --rft

  查看加密脚本::

    $ cat dist/fibo.py

  运行加密后的脚本::

    $ python dist/fibo.py

生成迷你型脚本
==============

生成迷你型加密脚本需要首先安装包 :term:`pyarmor.mini`::

  $ pip install pyarmor.mini

我们依旧使用上例中创建的工程，使用相同配置生成迷你型脚本::

  $ pyarmor build --mini

查看加密脚本::

  $ cat dist/fibo.py

运行加密之后的脚本::

  $ python dist/fibo.py

一般情况下，首先生成重构型脚本进行调试，调试通过之后直接使用相同配置生成迷你型脚本

发布迷你型脚本
==============

发布迷你型脚本需要把依赖包 :term:`pyarmor.mini` 加入到发布包中

或者在运行环境直接安装依赖包::

  $ pip install pyarmor.mini

不是所有的平台都支持 pyarmor.mini，目前仅支持五个平台

- linux.x86_64, darwin.x86_64, windows.x86_64
- linux.aarch64, darwin.arm64

支持 Freethreading
------------------

迷你型脚本支持 Freethreading (Python 3.13+) 特性

在支持 Freethreading 的 Python 环境，使用 `pip >=24.1` 安装依赖包 :term:`pyarmor.mini` ，这样安装的就是支持 Freethreading 的扩展模块 `pyarmor_minit` ， 扩展模块的名称包含后缀 `t` ，支持 Freethreading 的 wheel 标签为 `cp313t`

重构包
======

下面说明如何重构包 tomjson

首先创建一个工程，包含包 tomjson::

  $ pyarmor init --clean -p tomjson

因为外部模块需要导入包中的类和函数，所以这些输出的名称不能进行重命名

一种方式是启用自动输出 `rft_auto_export`::

  $ pyarmor env -p set rft_option:rft_auto_export 1

这样的话，模块属性 ``__all__`` 中列出的名称不会被重命名

- 如果该名称是一个类，那么类的属性和方法，都不会进行重命名
- 如果该名称是一个函数，那么函数的参数也不会进行重命名

另外一种方式是使用配置选项 `rft_exclude_names` 输出类和函数等，这里面列出的类和函数也不会进行重命名::

  $ pyarmor env -p push rft_option:rft_exclude_names \
          tomjson:load tomjson:loads tomjson:dump tomjson:dumps

和 ``__all__`` 输出方式相比较， `rft_exclude_names` 中的名称必须是模块内部定义的名称，而不能是导入的名称，例如::

  # 错误，JSONDecoder 并没有在 tomjson/__init__.py 中被定义，只是被导入进来使用
  $ pyarmor env -p push rft_option:rft_exclude_names tomjson:JSONDecoder

  # 正确，JSONDecoder 是在 tomjson/decoder.py 中定义
  $ pyarmor env -p push rft_option:rft_exclude_names tomjson.decoder:JSONDecoder

然后重构整个包::

  $ pyarmor build --rft

也可以根据需要生成迷你型加密包::

  $ pyarmor build --mini

发布迷你型加密包需要把包 :term:`pyarmor.mini` 作为依赖先进行安装

创建复杂工程
============

.. program:: pyarmor init

下面我们来创建一个工程，包含当前目录下面的脚本 jsontool.py 以及内部包 tomjson，但是不包含 fibo.py 和 venv 目录::

  $ pyarmor init --clean --src . --exclude fibo.py --exclude venv

不使用选项 :option:`--entry`, :option:`--module` 以及 :option:`--package` 来指定工程包含的脚本，模块和包的话，会自动搜索 :option:`--src` 下面的文件和目录，把发现的模块和包自动增加到工程中

而一旦使用了任何一个选项指定了脚本，模块或者包，就不会进行自动搜索，只有指定的脚本，模块和包会添加到工程中

重构整个工程::

  $ pyarmor build --rft

运行一下重构后的脚本::

  $ python dist/jsontool.py

解决重构的常见问题
==================

对于复杂脚本，使用默认选项生成的重构型脚本，运行的时候主要会出现两种类型的问题

- 对象的属性名称不存在
- 函数的参数名称不存在

例如::

  AttributeError: 'pyarmor__7' object has no attribute 'run'

除了上文中提到的方法外，还可以使用下面的配置方法来解决

属性名称不存在
--------------

如果提示属性名称 ``xxxx`` 不存在，可以增加规则，不重命名该属性::

  $ pyarmor env -p set rft_option:rft_exclude_names xxxx

这样可以简化配置，但是可能造成更多的名称没有被重命名

函数参数名称不存在
------------------

如果错误提示是参数名称不存在，那么可以直接禁用重命名参数::

  $ pyarmor env -p set rft_option:rft_argument 0

或者也可以仅重命名 posonly 参数和 vararg 和 kwarg 参数::

  $ pyarmor env -p set rft_option:rft_argument 1

然后在重新加密脚本，这样可以简化配置，但是大部分参数可能没有被重命名

自动重构模式
============

自动重构模式可以省去人工的配置，自动进行配置以生成正确的脚本。

其使用方法如下::

  $ pyarmor build --rft --auto-fix

如果有警告提示，那么重复执行该命令，直到没有警告提示::

  $ pyarmor build --rft --auto-fix

自动重构模式虽然无需复杂的配置，但是可能会导致某些属性和参数不会进行重命名

其基本的工作原理是

- 固定配置 rft_argument = 1
- 如果发现某一个属性无法确定其类型，那么这个属性不进行重命名
