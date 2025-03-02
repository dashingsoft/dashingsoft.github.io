============
 概念和定义
============

.. highlight:: console

.. _pyarmor-cli:

Pyarmor 命令行工具
==================

Pyarmor 命令行工具是提供了命令行操作方式的一个应用程序

.. graphviz::
   :caption: 生命周期图
   :align: center
   :name: graph-pyarmor-cli-lifecycle

   digraph G {
      node [shape=box, style=rounded]

      package [label="Python 包 pyarmor.cli\n发布在 PyPI"]
      install [label="在构建设备上面安装 pyarmor 命令\npip install pyarmor.cli"]
      pyarmor [label="执行命令 pyarmor\n实现 Pyarmor 的功能"]

      package -> install -> pyarmor
   }

组成
----

.. graphviz::
   :align: center
   :name: g-pyarmor-cli-components

   digraph G {
      node [shape=box, style=rounded]

      subgraph C {
          cluster=true
          label="子命令"
          style="setlinewidth(0)"

          init [label="pyarmor init"]
          env [label="pyarmor env"]
          build [label="pyarmor build"]
      }
   }

功能结构图
----------

.. graphviz::
   :caption: 功能结构图
   :align: center
   :name: g-pyarmor-cli-functions

   digraph G {
      node [shape=box, style=rounded]

      init [label="pyarmor init"]
      env [label="pyarmor env"]
      build [label="pyarmor build"]

      project [label="工程"]
      miniscript [label="迷你型加密脚本"]
      rftscript [label="重构型加密脚本"]
      license [shape=component, label="Pyarmor 许可证", target="_top", href="https://pyarmor.readthedocs.io/zh/latest/licenses.html"]
      joint [shape=point]

      init -> project [label="创建"]
      env -> project [label="配置"]

      project -> build [label="输入脚本和选项"]
      build -> miniscript [label="生成"]
      joint -> rftscript [label="生成"]

      build -> joint [arrowhead=none, tailport=se]
      license -> joint [label="解锁重构功能", arrowhead=none]
   }

.. _project:

Pyarmor 工程
============

工程是脚本和选项的集合

.. graphviz::
   :align: center
   :name: g-project-components

   digraph G {
      node [shape=box, style=rounded]
      rankdir="LR"

      subgraph C {
          cluster=true
          label="工程"

          scripts [label="脚本"]
          modules [label="模块"]
          package [label="包"]

          rftoptions [label="重构选项", shape=diamond]
      }

      edge [style=invis]
      scripts -> modules -> package -> rftoptions
   }

.. _obf-scripts:

加密脚本
========

.. graphviz::
   :align: center
   :name: g-script-types

   digraph G {
      node [shape=box, style=rounded]
      rankdir="LR"

      subgraph C {
          cluster=true
          label="加密脚本类型"
          style="setlinewidth(0)"

          std [label="标准型", target="_top", href="https://pyarmor.readthedocs.io/zh/latest/tutorial/getting-started.html"]
          rft [label="重构型", target="_top", href="#rft-script"]
          mini [label="迷你型", target="_top", href="#mini-script"]
      }

      edge [style=invis]
      std -> rft -> mini
   }

.. flat-table:: 表-1. 加密脚本类型比较表
   :widths: 10 10 10 10 60
   :header-rows: 1
   :stub-columns: 1

   * - 加密类型
     - 安全性 [#]_
     - 运行速度 [#]_
     - 扩展模块 [#]_
     - 备注
   * - 标准型
     - 正常
     - 正常
     - 需要
     - 能够设置加密脚本有效期和绑定加密脚本到固定设备，其他加密脚本类型都不具备此特性，适用于大多数的情况
   * - 迷你型
     - 较低
     - 很高
     - 需要
     - 不可逆程度较低，但是执行速度较高，适用于 Web 服务等类型
   * - 重构型
     - 较高
     - 最高
     - 不需要
     - 和普通 Python 脚本完全一样，主要是对 Python 语句进行了重构，所以不需要额外的扩展模块，适用范围更广，包括用于 WASM，也可以继续使用任意工具，例如 Nuitka，Cython 等进一步处理

.. rubric:: Notes

.. [#] 安全性主要是指加密脚本的不可逆程度
.. [#] 运行速度是指加密脚本的运行速度和没有加密之前的脚本运行速度的比较
.. [#] 运行加密脚本是否需要额外的扩展模块，除了重构型脚本之外，其他类型的都需要


.. _mini-script:

迷你型加密脚本
--------------

迷你型加密脚本由一个普通 Python 脚本和一个扩展模块 pyarmor_mini.so 组成

例如，一个 Python 脚本 `foo.py`

.. code-block:: python

   print('Hello')

使用 Pyarmor 生成迷你型加密脚本之后，输出的 `dist/foo.py` 内容如下

.. code-block:: python

   from pyarmor_mini import __pyarmor__
   __pyarmor__(__name__, b'xxxx')

这就是一个普通的 Python 脚本，可以使用 Python 解释器直接执行

运行迷你型加密脚本需要使用下面的命令安装扩展模块 `pyarmor_mini <https://pypi.org/project/pyarmor.mini/>`_::

  $ pip install pyarmor.mini

.. _rft-script:

重构型加密脚本
--------------

重构型加密脚本由一个普通的 Python 脚本，只是对其中的变量，函数和类，属性等进行了重命名

例如，一个 Python 脚本 `foo.py`

.. code-block:: python
   :linenos:

   msg = 'Hello'
   print(msg)

使用 Pyarmor 生成重构型加密脚本之后，输出的 `dist/foo.py` 内容如下

.. code-block:: python
   :linenos:

   pyarmor__1 = 'Hello'
   pyarmor__2(pyarmor__1)
