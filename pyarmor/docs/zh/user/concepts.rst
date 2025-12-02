.. include:: ../_header_note.txt

============
 概念和定义
============

.. contents:: 目录
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

术语表
======

.. glossary::

   工程
       工程是用来组织需要加密的脚本和如何加密脚本的选项集合

   迷你型脚本
       使用 :term:`pyarmor` 命令生成的一种加密脚本，需要扩展模块 :term:`pyarmor_mini` 才能正常运行

   重构型脚本
       使用 :term:`pyarmor` 命令生成的加密脚本，主要是对脚本中函数，类和方法等名称进行了重命名，不需要任何额外的扩展模块即可运行

   虚拟型脚本
       使用 :term:`pyarmor` 命令生成的加密脚本，主要是使用虚拟指令对脚本进行了变形处理，需要扩展模块 :term:`pyarmor_mini` 才能正常运行

   嵌入型脚本
       使用 :term:`pyarmor` 命令生成的加密脚本，主要是直接使用 C 代码（编译成为机器指令）对脚本进行了变形处理，需要扩展模块 :term:`pyarmor_mini` 才能正常运行，属于不可逆加密方式

   pyarmor
       实现 Pyarmor 所有功能的命令行工具

   pyarmor_mini
       Python 扩展模块，由 Pyarmor 开发组预编译，并发布在包 :term:`pyarmor.mini` 中

   pyarmor.cli
       Python 包，用来创建 :term:`pyarmor` ，由 Pyarmor 开发组发布

   pyarmor.mini
       Python 包，提供运行加密脚本需要的预编译扩展模块，由 Pyarmor 开发组发布在 PyPI 上面

工程
====

.. graphviz::

   graph Project {

     node [shape=component]

     C1 [label="Scripts"]
     C2 [label="Modules"]
     C3 [label="Packages"]

     X1 [label="Options" shape=ellipse]

   }

迷你型加密脚本
==============

.. code:: python

   from pyarmor_mini import __pyarmor__
   __pyarmor__(__name__, b'xxxx')


重构型加密脚本
==============

.. code:: python

   def pyarmor__1(pyarmor__2):
     return pyarmor__2 + 'a'

   pyarmor__1('abc')

pyarmor 命令
==============

.. graphviz::
   :align: center
   :caption: 子命令
   :name: command-graph

   graph pyarmor {
     node [shape=rect]

     C1 [label="pyarmor init"]
     C2 [label="pyarmor env"]
     C3 [label="pyarmor build"]
   }

.. graphviz::
   :align: center
   :caption: 功能关系图
   :name: command-relation-graph

   digraph Structure {

     P1 [label="工程" shape=component]

     C1 [label="pyarmor init" shape=rect]
     C2 [label="pyarmor env" shape=rect]
     C3 [label="pyarmor build" shape=rect]

     X1 [label="选项"]

     S1 [label="迷你型脚本" shape=component]
     S2 [label="重构型脚本" shape=component]

     X1->C1
     C1->P1 [taillabel="创建"]

     X1->C2
     C2->P1 [taillabel="修改"]

     P1->C3
     C3->S1 [label="生成" labelfloat=true]
     C3->S2
   }
