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

示例脚本的下载地址

安装和注册 Pyarmor
==================

Pyarmor 发布在 PyPI 上面，使用下面的命令直接安装::

  $ pip install pyarmor.cli

重构功能需要购买相应的许可证并进行注册

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

默认选项可以重构简单脚本，对于复杂脚本，重构之后脚本可能无法正确运行。

例如，我们重新创建一个包含复杂脚本 `fibo.py` 的新工程::

  $ pyarmor init --clean -e fibo.py

当使用下面的命令生成重构型脚本的时候，最后会出现如下警告::

  $ pyarmor build --rft
  ...
  WARNING There are variables of unknown type
  WARNING There are function calls which may use unknown arguments
  ...

运行重构脚本会报错::

  $ python dist/fibo.py

  AttributeError: 'pyarmor__7' object has no attribute 'run'

这时候可以使用下面的命令自动生成额外的重构规则::

  $ pyarmor build --autofix 1

然后再次执行重构命令::

  $ pyarmor build --rst

运行重构后的脚本::

  $ python dist/fibo.py

使用上面的方法生成的重构规则会保留所有未知的属性，也就是说，如果不能确定某一个属性是否需要重命名，那么所有脚本中和该属性重名的名称都保留不变

如果需要重命名所有类方法和属性，可以清除上面生成的规则::

  $ pyarmor build --autofix 0

然后根据需要人工配置重构规则，但是这需要学习和了解重构规则的使用方法，详细内容请参考后面高级重构功能

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

迷你型脚本的不可逆程度基本和 .pyc 文件相当，所以一般会首先对脚本进行重构，增加其不可逆程度，然后在生成迷你型脚本。使用下面的命令可以直接生成迷你型重构脚本::

  $ pyarmor build --mini-rft

一般情况下，首先单独生成重构型脚本进行调试，调试通过之后直接使用相同配置生成迷你型脚本

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

这就需要启用自动输出选项 `enable_auto_export`::

  $ pyarmor env -p set rft:enable_auto_export 1

这样的话，模块属性 ``__all__`` 中列出的名称不会被重命名

- 如果该名称是一个类，那么类的属性和方法，都不会进行重命名
- 如果该名称是一个函数，那么函数的参数也不会进行重命名

然后重构整个包::

  $ pyarmor build --rft

也可以根据需要生成迷你型加密包::

  $ pyarmor build --mini-rft

发布迷你型加密包需要把包 :term:`pyarmor.mini` 作为依赖先进行安装

创建复杂工程
============

.. program:: pyarmor init

下面我们来创建一个工程，包含当前目录下面的脚本 jsontool.py 以及内部包 tomjson，但是不包含 fibo.py 和 venv 目录::

  $ pyarmor init --clean --src . --exclude fibo.py --exclude venv

该命令会自动搜索 :option:`--src` 下面的文件和目录，把发现的模块和包自动增加到工程中

查看工程包含的所有项目::

  $ pyarmor build --list

重构整个工程::

  $ pyarmor build --rft

运行一下重构后的脚本::

  $ python dist/jsontool.py

高级重构功能
============

对于复杂脚本，使用默认选项生成的重构型脚本，运行的时候主要会出现两种类型的问题

- 对象的属性名称不存在
- 函数的参数名称不存在

例如::

  AttributeError: 'pyarmor__7' object has no attribute 'run'

除了上文中提到的自动生成重构规则的方法之外，还可以通过人工配置规则的方式来解决

属性名称不存在
--------------

如果提示属性名称 ``xxxx`` 不存在，最简单的方式是直接增加排除规则，不重命名该属性::

  $ pyarmor env -p set rft:exclude_names xxxx

这样可以简化配置，但是可能造成更多的名称没有被重命名

另外一种方式，是对出现问题的属性进行单独配置

例如在脚本 `fibo.py` 中，有如下的代码块:

.. code-block:: python

   def fib(obj, n):
       obj.name = 'fibo'
       obj.value = n
       obj.run()
       return obj.result

因为参数 `obj` 的类型不确定，所以默认情况是不会对其属性进行重命名，这样运行的时候会导致问题属性找不到的问题。

一种解决方案是使用 annotation 指定变量类型，例如:

.. code-block:: python

   def fib(obj: QuickFibo, n):
       obj.name = 'fibo'
       obj.value = n
       obj.run()
       return obj.result

另外一种解决方案是不修改脚本，使用规则指定需要修改的属性。例如，下面的规则指定模块 `fibo` 中的函数 `fib` 中变量 `obj` 的所有属性都进行重命名::

  $ pyarmor env -p push rft:attr_rules "fibo::fib:obj.*"

配置新规则之后，需要重新构建工程::

  $ pyarmor build --rft

函数参数名称不存在
------------------

如果错误提示是参数名称不存在，那么可以直接禁用重命名参数::

  $ pyarmor env -p set rft:enable_argument 0

或者也可以仅重命名 posonly 参数和 vararg 和 kwarg 参数::

  $ pyarmor env -p set rft:enable_argument 1

这样可以简化配置，但是大部分参数可能没有被重命名

另外一种方式是仅仅禁用某一个函数重命名参数，例如在脚本 `fibo.py` 中，有如下的代码块:

.. code-block:: python

   def show(rlist, n, delta=2):
       print('fibo', n, 'is', rlist)
       return n + delta

   if __name__ == '__main__':
       ...
       kwarg = {'n': n, 'delta': 3}
       show(result, **kwarg)

调用函数 `show` 的时候使用了参数 `kwarg` ，而字典的键值重构之后不会改变，而函数的参数名称都进行了重命名，所以运行重构后的脚本会导致出现参数不存在错误

使用下面的命令配置函数 `show` 的参数不能进行重命名::

  $ pyarmor env -p set rft:enable_argument 3
  $ pyarmor env -p push rft:exclude_funcs fibo::show

配置修改之后，需要重新构建脚本::

  $ pyarmor build --rft
