==============
 学习 Pyarmor
==============

:版本: 1.0
:项目: https://github.com/dashingsoft/pyarmor

这里重点介绍的是 Pyarmor 9.1 新增中的功能和特性，对于以前版本中已经具备的功能，请参阅 `Pyarmor 9.0 文档 <https://pyarmor.readthedocs.io/zh/latest>`_

.. graphviz::
   :caption: Pyarmor 组成和结构
   :align: center
   :name: master-graph

   digraph G {

          node [shape=box, style=rounded]

          c1 [label="Pyarmor 命令行工具"
              href="concepts.html#pyarmor-cli"
              target="_top"]
          c2 [label="Pyarmor 许可证"
              href="https://pyarmor.readthedocs.io/zh/latest/licenses.html"
              target="_top"]
          c3 [label="Pyarmor 工程"
              href="concepts.html#project"
              target="_top"]
          c4 [label="Python 脚本", shape=plaintext]
          c5 [label="加密脚本"
              href="concepts.html#obf-scripts"
              target="_top"]

          c4 -> c3 [arrowhead=tee, label="组成"]
          rank=same {c3 -> c1}
          c2 -> c1
          c1 -> c5
   }

目录
====

.. toctree::
   :caption: 学习 Pyarmor
   :name: master-toc
   :maxdepth: 2

   concepts
   project
   commands
   examples
   how-to
