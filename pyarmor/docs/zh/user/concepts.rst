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

原来的脚本 `foo.py`

.. code:: python

   import sys

   data = 'abcxyz'

   def hello(msg):
       print('hello world')
       print(msg)

   def sum2(a, b):
       return a + b

   def main(msg):
       a = 2
       b = 6
       hello(msg)
       print('%s + %s = %d' % (a, b, sum2(a, b)))

   if __name__ == '__main__':
       main('pass: %s' % data)

生成的迷你加密脚本

.. code:: python

   # Pyarmor MINI 1, requires: pyarmor_mini >= 1.0
   from pyarmor.mini.pyarmor_mini import __pyarmor__
   __pyarmor__(__name__, b'xxxx')


重构型加密脚本
==============

重构后的脚本 `foo.py`

.. code:: python

   import sys as pyarmor__35
   pyarmor__325 = 'abcxyz'

   def pyarmor__4146(pyarmor__12):
       print('hello world')
       print(pyarmor__12)

   def pyarmor__51637(pyarmor__214, pyarmor__488):
       return pyarmor__214 + pyarmor__488

   def pyarmor__2063(pyarmor__12):
       pyarmor__214 = 2
       pyarmor__488 = 6
       pyarmor__4146(pyarmor__12)
       print('%s + %s = %d' % (pyarmor__214, pyarmor__488, pyarmor__51637(pyarmor__214, pyarmor__488)))
   if __name__ == '__main__':
       pyarmor__2063('pass: %s' % pyarmor__325)

嵌入型加密脚本
==============

最终生成的代码

.. code:: python

   # Pyarmor ECC 1, requires: pyarmor_mini >= 3.0
   from pyarmor.mini.pyarmor_mini import __pyarmor__
   __pyarmor__(__name__, b'xxxx', 3)

原来的脚本 `foo.py` 生成的中间步骤 ECC 等效脚本

.. code:: python

   _pyarmor_ecc_var = ()[0](('data', 'abcxyz', '__name__', '__main__', 'main', 'pass: %s'))
   import sys
   ()[1](_pyarmor_ecc_var)

   def hello(msg):
       _pyarmor_ecc_var = ()[0](('print', 'hello world'))
       ()[2](_pyarmor_ecc_var)

   def sum2(a, b):
       _pyarmor_ecc_var = ()[0](None)
       return ()[3](_pyarmor_ecc_var)

   def main(msg):
       _pyarmor_ecc_var = ()[0]((2, 6, 'hello', 'print', '%s + %s = %d', 'sum2'))
       if not _pyarmor_ecc_var:
           b, a = []
       ()[4](_pyarmor_ecc_var)
   ()[5](_pyarmor_ecc_var)


虚拟型加密脚本
==============

最终生成的代码

.. code:: python

   # Pyarmor VMC 1, requires: pyarmor_mini >= 3.0
   from pyarmor.mini.pyarmor_mini import __pyarmor__
   __pyarmor__(__name__, b'xxxx', 2)

原来的脚本 `foo.py` 生成的中间步骤 VMC 等效脚本

.. code:: python

   _pyarmor_ecc_var = ()[1](('data', 'abcxyz', '__name__', '__main__', 'main', 'pass: %s'))
   import sys
   ()[2]((_pyarmor_ecc_var, '__pyarmor_ecc_code_block_1__'))

   def hello(msg):
       _pyarmor_ecc_var = ()[1](('print', 'hello world'))
       ()[2]((_pyarmor_ecc_var, '__pyarmor_ecc_code_block_2__'))

   def sum2(a, b):
       _pyarmor_ecc_var = ()[1](None)
       return ()[2]((_pyarmor_ecc_var, '__pyarmor_ecc_code_block_3__'))

   def main(msg):
       _pyarmor_ecc_var = ()[1]((2, 6, 'hello', 'print', '%s + %s = %d', 'sum2'))
       if not _pyarmor_ecc_var:
           b, a = []
       ()[2]((_pyarmor_ecc_var, '__pyarmor_ecc_code_block_4__'))
   ()[2]((_pyarmor_ecc_var, '__pyarmor_ecc_code_block_5__'))

其实基本和嵌入型（ECC）生成的中间代码类似，两者的主要区别在于变形后的隐藏代码 VMC 使用虚拟机实现，而 ECC 则是直接使用 C 代码编译成为机器指令实现

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
     S3 [label="虚拟型脚本" shape=component]
     S4 [label="嵌入型脚本" shape=component]

     X1->C1
     C1->P1 [taillabel="创建"]

     X1->C2
     C2->P1 [taillabel="修改"]

     P1->C3
     C3->S1 [label="生成" labelfloat=true]
     C3->S2
     C3->S3
     C3->S4
   }
