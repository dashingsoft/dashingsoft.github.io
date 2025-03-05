==========
 Concepts
==========

.. highlight:: console

.. _pyarmor-cli:

Pyarmor CLI
===========

Pyarmor CLI is command line tool to generate the obfuscated scripts

.. graphviz::
   :caption: Pyarmor CLI Life Cycle
   :align: center
   :name: graph-pyarmor-cli-lifecycle

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      package [label="Python package: pyarmor.cli\nPublished in the PyPI"
               href="https://pypi.org/project/pyarmor.cli/"]
      install [label="In build device installing command `pyarmor`\npip install pyarmor.cli"]
      pyarmor [label="Execute command `pyarmor` to do everyting"]

      package -> install -> pyarmor
   }

Components
----------

.. graphviz::
   :align: center
   :name: g-pyarmor-cli-components

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      subgraph C {
          cluster=true
          label="Sub-Commands"
          style="setlinewidth(0)"

          init [label="pyarmor init", href="commands.html#cmd-init"]
          env [label="pyarmor env", href="commands.html#cmd-env"]
          build [label="pyarmor build", href="commands.html#cmd-build"]
      }
   }

Functional Relationship
-----------------------

.. graphviz::
   :caption: Functional Relationship
   :align: center
   :name: g-pyarmor-cli-functions

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      init [label="pyarmor init", href="commands.html#cmd-init"]
      env [label="pyarmor env", href="commands.html#cmd-env"]
      build [label="pyarmor build", href="commands.html#cmd-build"]

      project [label="Project", href="concepts.html#project"]
      miniscript [label="Mini Script", href="concepts.html#mini-script"]
      rftscript [label="RFT Script", href="concepts.html#rft-script"]
      license [shape=component, label="Pyarmor License", href="https://pyarmor.readthedocs.io/en/latest/licenses.html"]
      joint [shape=point]

      init -> project [label="Create"]
      env -> project [label="Configure"]

      project -> build [label="Scripts and options"]
      build -> miniscript [label="Generate"]
      joint -> rftscript [label="Generate"]

      build -> joint [arrowhead=none, tailport=se]
      license -> joint [label="Unlock RFT feature", arrowhead=none]
   }

.. _project:

Project
=======

Project is set of scripts and options

.. graphviz::
   :align: center
   :name: g-project-components

   digraph G {
      node [shape=box, style=rounded, target="_top"]
      rankdir="LR"

      subgraph C {
          cluster=true
          label="Project"

          scripts [label="Scripts", href="project.html"]
          modules [label="Modules", href="project.html"]
          package [label="Packages", href="project.html"]

          rftoptions [label="Refactor Options", shape=oval, href="project.html#rft-options"]
      }

      edge [style=invis]
      scripts -> modules -> package -> rftoptions
   }

.. _obf-scripts:

Obfuscated Scripts
==================

.. graphviz::
   :align: center
   :name: g-script-types

   digraph G {
      node [shape=box, style=rounded, target="_top"]
      rankdir="LR"

      subgraph C {
          cluster=true
          label="Obfuscated Scripts"
          style="setlinewidth(0)"

          std [label="Std Script", href="https://pyarmor.readthedocs.io/en/latest/tutorial/getting-started.html"]
          rft [label="RFT Script", href="concepts.html#rft-script"]
          mini [label="Mini Script", href="concepts.html#mini-script"]
      }

      edge [style=invis]
      std -> rft -> mini
   }

.. flat-table:: Table-1. Comparison of Different Scripts
   :widths: 10 10 10 10 60
   :header-rows: 1
   :stub-columns: 1

   * - Script Type
     - Sceurity [#]_
     - Performance [#]_
     - Need Extension [#]_
     - Remark
   * - Std Script
     - 正常
     - 正常
     - Yes
     - 能够设置加密脚本有效期和绑定加密脚本到固定设备，其他加密脚本类型都不具备此特性，适用于大多数的情况
   * - Mini Script
     - 较低
     - 很高
     - 需要
     - 不可逆程度较低，但是执行速度较高，适用于 Web 服务等类型
   * - RFT Script
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

   def plusinc(m, n=1):
           return m + n + 1
   a = plusinc
   b = a
   n = b(1, n=2)

   def hello():
       return b(3, n=4)

   print('result is', n + hello())

使用 Pyarmor 生成重构型加密脚本之后，输出的 `dist/foo.py` 内容如下

.. code-block:: python
   :linenos:

   def pyarmor__3(pyarmor__1, pyarmor__2=1):
       return pyarmor__1 + pyarmor__2 + 1
   pyarmor__4 = pyarmor__3
   pyarmor__5 = pyarmor__4
   pyarmor__2 = pyarmor__5(1, pyarmor__2=2)

   def pyarmor__6():
       return pyarmor__5(3, pyarmor__2=4)
   print('result is', pyarmor__2 + pyarmor__6())
