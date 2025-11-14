==========
 疑问解惑
==========

.. contents:: 目录
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

.. _ask:

开始提问
========

使用说明

- 点击图片中的文字寻找相应的答案
- 点击文中的小标题返回到顶部目录
- 点击浏览器的后退按钮回到上一步

.. graphviz::
   :caption: 开始提问
   :align: center
   :name: g-ask

   digraph G {
       label="开始提问\n\n"
       labeljust=c
       labelloc=t
       rankdir=LR

       node [shape=box
             style=rounded
             target="_top"]

       a [label="?"
          shape=doublecircle
          style=filled
          fillcolor=tan]

       {
          rank=same
          a1 [label="关于许可证的问题"
              href="ask.html#license"]
          a2 [label="注册许可证出现错误"
              href="https://pyarmor.readthedocs.io/zh/latest/reference/solutions.html#fix-register-issue"]
          a3 [label="加密脚本出现错误"
              href="how-to.html#how-fix-build-issue"]
          a4 [label="运行加密脚本出现错误"
              href="how-to.html#how-fix-runtime-issue"]
       }

       a -> { a1, a2, a3, a4 }

   }

.. _license:

许可证相关问题
==============

.. contents::
   :depth: 1
   :local:
   :backlinks: top

.. _need-license:

我是否需要购买许可证
--------------------

.. graphviz::
   :caption: 我是否需要购买许可证
   :align: center
   :name: g-lic-a1

   digraph G {
       label="我是否需要购买许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       a [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]

       b1 [label="在加密脚本的过程中是否\n抛出异常 out of license"]

       b2 [label="生成的加密脚本是否\n被用于能产生收益的产品"
           tooltip="不管是前端界面，还是后台服务端，都属于产品的组成部分"]

       b3 [label="该产品的销售收入是否大于\nPyarmor 许可证费用的 100 倍"]

       c1 [label="需要购买相应的许可证"
           style="filled,rounded"
           fillcolor=wheat]

       c2 [label="不需要购买许可证"
           style="filled,rounded"
           fillcolor=lightgray]

       a -> b1
       b1 -> b2 [label="否"]
       b1 -> c1 [label="是"]
       b2 -> b3 [label="是"]
       b2 -> c2 [label="否"]

       // edge [constraint=false]
       b3 -> c1 [label="是"]
       b3 -> c2 [label="否"]

       {
         rank=same
         b1
         c1
       }

       {
         rank=same
         b2
         b3
       }

   }

.. _select-license:

我应该选择哪一种许可证
----------------------

影响许可证选择的主要要素

- 是否需要离线加密（生成加密脚本的设备需要连接互联网）
- 是否需要不可逆加密功能（RFT，BCC，VMC，ECC）
- 运行加密脚本使用的 Python 版本
- 构建设备的类型（用于生成加密脚本的设备类型）

  - 常规设备，重启后设备 ID 保持不变，例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等

    - 构建设备最多数量有限制

  - 重启后设备 ID 会发生变化，例如 CI/CD，本地 Docker 容器

    - 每分钟运行次数和每月运行次数的有限制

如果在图中没有列出的要素，均不影响许可证的选择。例如

- 选择许可证不需要考虑操作系统的类型
- 选择许可证不需要考虑客户设备（运行加密脚本）的数目

.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-1

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-33"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-17"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-9"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_0 [label="不超过 100 台" tooltip=""]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-2"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_0 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-2

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-34"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-18"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-10"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_1 [label="不超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-1"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-3

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-19"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-11"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_2 [label="超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-1"
          ]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-2"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_0 -> a5_2 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-4

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-1"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每月超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-5"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_1 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-5

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-37"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-21"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-13"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-1"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_1 [label="每月超过 100 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_1 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-6

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-1"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-7"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_2 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-7

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-39"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-23"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-15"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-1"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a5_1 [label="每秒不超过 3 次\n每月不超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-6"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_2 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-8

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-24"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-16"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-1"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a5_2 [label="每秒超过 3 次\n或者每月超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-6"
          ]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-7"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_2 -> a5_2 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-9

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-41"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-25"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-1"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_0 [label="不超过 100 台" tooltip=""]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-10"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-11"
          ]

       }

       {
          rank=same

          n1 [
            label="基础版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="专家版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_1 -> a4_0 -> a5_0 -> {n1, n2, n3}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-10

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-42"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-26"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-2"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_1 [label="不超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-9"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-11"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_1 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-11

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-27"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_2 [label="超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-9"
          ]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-10"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-12

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-9"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每月超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-13"
          ]

       }

       {
          rank=same

          n1 [
            label="基础版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="专家版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n4 [
            label="管线版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_1 -> a4_1 -> a5_0 -> {n1, n2, n3, n4}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-13

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-45"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-29"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-5"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-9"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_1 [label="每月超过 100 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same

          n1 [
            label="基础版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="管线版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_1 -> a4_1 -> a5_1 -> {n1, n2, n3}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-14

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-9"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-15"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-16"
          ]

       }

       {
          rank=same

          n1 [
            label="基础版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="专家版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="管线版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_1 -> a4_2 -> a5_0 -> {n1, n2, n3}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-15

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-47"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-31"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-7"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-9"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a5_1 [label="每秒不超过 3 次\n每月不超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-14"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-16"
          ]

       }

       {
          rank=same

          n1 [
            label="基础版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="管线版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_1 -> a4_2 -> a5_1 -> {n1, n2}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-16

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-48"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-32"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-9"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a5_2 [label="每秒超过 3 次\n或者每月超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-14"
          ]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-15"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-17

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-49"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-1"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-25"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_0 [label="不超过 100 台" tooltip=""]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-18"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-19"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_0 -> a4_0 -> a5_0 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-18

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-50"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-2"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-26"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_1 [label="不超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-17"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-19"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_0 -> a4_0 -> a5_1 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-19

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-51"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-27"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_2 [label="超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-17"
          ]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-18"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_0 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-20

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-17"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每月超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-21"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_0 -> a4_1 -> a5_0 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-21

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-53"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-5"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-29"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-17"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_1 [label="每月超过 100 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_0 -> a4_1 -> a5_1 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-22

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-17"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-23"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-24"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_0 -> a4_2 -> a5_0 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-23

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-55"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-7"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-31"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-17"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a5_1 [label="每秒不超过 3 次\n每月不超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-22"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-24"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_0 -> a4_2 -> a5_1 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-24

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-56"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-32"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-17"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a5_2 [label="每秒超过 3 次\n或者每月超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-22"
          ]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-23"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_0 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-25

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-57"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-9"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-17"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_0 [label="不超过 100 台" tooltip=""]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-26"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-27"
          ]

       }

       {
          rank=same

          n1 [
            label="专家版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_1 -> a4_0 -> a5_0 -> {n1, n2}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-26

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-58"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-10"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-18"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_1 [label="不超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-25"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-27"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_1 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-27

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-11"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-19"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_2 [label="超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-25"
          ]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-26"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-28

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-25"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每月超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-29"
          ]

       }

       {
          rank=same

          n1 [
            label="专家版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="管线版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_1 -> a4_1 -> a5_0 -> {n1, n2, n3}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-29

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-61"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-13"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-21"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-25"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_1 [label="每月超过 100 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="管线版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_1 -> a4_1 -> a5_1 -> {n1, n2}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-30

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-25"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-31"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-32"
          ]

       }

       {
          rank=same

          n1 [
            label="专家版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="管线版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_1 -> a4_2 -> a5_0 -> {n1, n2}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-31

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-63"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-15"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-23"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-25"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a5_1 [label="每秒不超过 3 次\n每月不超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-30"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-32"
          ]

       }

       {
          rank=same

          n1 [
            label="管线版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_1 -> a4_2 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-32

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="不需要离线加密" tooltip=""]

          a1_1 [
            label="需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-64"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-16"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-24"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-25"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a5_2 [label="每秒超过 3 次\n或者每月超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-30"
          ]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-31"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-33

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-1"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-49"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-41"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_0 [label="不超过 100 台" tooltip=""]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-34"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_0 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-34

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-2"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-50"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-42"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_1 [label="不超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-33"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-35

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-51"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_2 [label="超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-33"
          ]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-34"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_0 -> a5_2 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-36

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-33"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每月超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-37"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_1 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-37

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-5"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-53"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-45"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-33"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_1 [label="每月超过 100 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_1 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-38

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-33"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-39"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_2 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-39

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-7"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-55"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-47"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-33"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a5_1 [label="每秒不超过 3 次\n每月不超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-38"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_2 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-40

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-56"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-48"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-33"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a5_2 [label="每秒超过 3 次\n或者每月超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-38"
          ]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-39"
          ]

       }

       {
          rank=same

          n1 [
            label="老版本许可证（Pyarmor 7）"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_2 -> a5_2 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-41

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-9"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-57"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-33"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_0 [label="不超过 100 台" tooltip=""]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-42"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_0 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-42

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-10"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-58"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-34"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_1 [label="不超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-41"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-43

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-11"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_2 [label="超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-41"
          ]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-42"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_0 -> a3_1 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-44

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-41"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每月超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-45"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_1 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-45

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-13"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-61"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-37"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-41"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_1 [label="每月超过 100 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_1 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-46

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-41"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-47"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-48"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_0 -> a3_1 -> a4_2 -> a5_0 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-47

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-15"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-63"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-39"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-41"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a5_1 [label="每秒不超过 3 次\n每月不超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-46"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-48"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_0 -> a3_1 -> a4_2 -> a5_1 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-48

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-16"
          ]

       }

       {
          rank=same
          a2_0 [label="不需要不可逆加密功能" tooltip=""]

          a2_1 [
            label="需要不可逆加密功能"
            style="rounded,dashed"
            tooltip="RFT，BCC，VMC，ECC 模式"
            href="ask.html#g-lic-a2-64"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-41"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a5_2 [label="每秒超过 3 次\n或者每月超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-46"
          ]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-47"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_0 -> a3_1 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-49

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-17"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-33"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-57"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_0 [label="不超过 100 台" tooltip=""]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-50"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-51"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_0 -> a5_0 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-50

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-18"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-34"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-58"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_1 [label="不超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-49"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-51"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_0 -> a5_1 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-51

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-19"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_2 [label="超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-49"
          ]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-50"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-52

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-49"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每月超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-53"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_1 -> a5_0 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-53

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-21"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-37"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-61"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-49"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_1 [label="每月超过 100 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_1 -> a5_1 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-54

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-49"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-55"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-56"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_2 -> a5_0 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-55

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-23"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-39"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-63"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-49"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a5_1 [label="每秒不超过 3 次\n每月不超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-54"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-56"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_2 -> a5_1 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-56

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-24"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same
          a3_0 [label="需要使用 Python <= 3.6\n或者 Python 2.7" tooltip=""]

          a3_1 [
            label="仅使用 Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-64"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-49"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a5_2 [label="每秒超过 3 次\n或者每月超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-54"
          ]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-55"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-57

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-25"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-41"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-49"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_0 [label="不超过 100 台" tooltip=""]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-58"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_1 -> a4_0 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-58

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-26"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-42"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-50"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_1 [label="不超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-57"
          ]

          a5_2 [
            label="超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_1 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-59

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-27"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-51"
          ]

       }

       {
          rank=same
          a4_0 [label="常规设备\n重启后 Machine Id 保持不变的设备" tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_2 [label="超过 200 台" tooltip=""]

          a5_0 [
            label="不超过 100 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-57"
          ]

          a5_1 [
            label="不超过 200 台"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-58"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_1 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-60

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-57"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每月超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-61"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_1 -> a4_1 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-61

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-29"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-45"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-53"
          ]

       }

       {
          rank=same
          a4_1 [label="本地 Docker 容器" tooltip=""]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-57"
          ]

          a4_2 [
            label="远程 CI/CD"
            style="rounded,dashed"
            tooltip="例如 Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_1 [label="每月超过 100 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same

          n1 [
            label="集团版许可证"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_1 -> a4_1 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-62

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-57"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a5_0 [label="每月不超过 100 次" tooltip=""]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-63"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-64"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_1 -> a4_2 -> a5_0 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-63

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-31"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-47"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-55"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-57"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a5_1 [label="每秒不超过 3 次\n每月不超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-62"
          ]

          a5_2 [
            label="每秒超过 3 次\n或者每月超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-64"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_1 -> a4_2 -> a5_1 -> n0
   }


.. graphviz::
   :caption: 我应该选择哪一种许可证
   :align: center
   :name: g-lic-a2-64

   digraph G {
       label="我应该选择哪一种许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="需要离线加密" tooltip=""]

          a1_0 [
            label="不需要离线加密"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-32"
          ]

       }

       {
          rank=same
          a2_1 [label="需要不可逆加密功能" tooltip="RFT，BCC，VMC，ECC 模式"]

          a2_0 [
            label="不需要不可逆加密功能"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-48"
          ]

       }

       {
          rank=same
          a3_1 [label="仅使用 Python 3.7+" tooltip=""]

          a3_0 [
            label="需要使用 Python <= 3.6\n或者 Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-56"
          ]

       }

       {
          rank=same
          a4_2 [label="远程 CI/CD" tooltip="例如 Github Action"]

          a4_0 [
            label="常规设备\n重启后 Machine Id 保持不变的设备"
            style="rounded,dashed"
            tooltip="例如 台式机，笔记本，阿里云服务器，Qemu 虚拟机等\n或者在 CI/CD 中使用本地设备作为Runner (self-host runner)"
            href="ask.html#g-lic-a2-57"
          ]

          a4_1 [
            label="本地 Docker 容器"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a5_2 [label="每秒超过 3 次\n或者每月超过 5000 次" tooltip=""]

          a5_0 [
            label="每月不超过 100 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-62"
          ]

          a5_1 [
            label="每秒不超过 3 次\n每月不超过 5000 次"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-63"
          ]

       }

       n0 [label="没有可用的许可证"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_1 -> a4_2 -> a5_2 -> n0
   }

.. _how-many-licenses:

我需要购买几个许可证
--------------------

首先需要明确的是

- 许可证仅仅用于构建加密脚本的开发设备
- 运行加密脚本的客户设备不需要安装 Pyarmor，也不需要许可证
- Pyarmor 所有许可证的策略都是一个产品一个许可证，但是允许销售收入小于阀值的其它产品借用

.. graphviz::
   :caption: 我需要购买几个许可证
   :align: center
   :name: g-lic-a3

   digraph G {
       label="我需要购买几个许可证\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       a [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]

       b1 [label="列出所有单独销售的产品名称"]

       b2 [label="如果某一个产品的销售额\n小于 100 x Pyarmor 许可证费用\n不需要列出该产品"]

       b3 [label="总共列出的产品名称数目"]

       s1 [label="只需要一个许可证即可"
           style="filled,rounded"
           fillcolor=tan]

       s2 [label="如何判断多个产品是否\n可以使用同一个许可证"
           style="filled,rounded"
           fillcolor=wheat
           href="https://pyarmor.readthedocs.io/zh/latest/licenses.html#how-many-licenses-required"]

       a -> b1 -> b2 -> b3
       b3 -> s1 [label="<= 1 个" ]
       b3 -> s2 [label="> 1 个"]

   }

..
  项目中实际需要使用加密工具来加密python文件，关于Pyarmor工具麻烦解答下：
    由于我这边都是内网环境，可以离线使用吗？
    我这边部署统一使用docker镜像部署或者 k8s 容器管理平台，推荐购买哪个版本？
    针对几万行的python脚本加密会不会影响运行性能？

  I am reaching out with an inquiry regarding the purchase of a Pro subscription for a significant number of devices. Specifically, I am interested in understanding if it is possible to acquire a Pro subscription for 10,000 devices simultaneously, rather than the standard 100 devices per transaction.
  Given the scale of this request, I would greatly appreciate it if you could provide further details or guidance on how this can be facilitated. Additionally, if there are any special processes, pricing structures, or bulk subscription options available, I would be grateful to learn more about them.

  In some places, it suggests that there is an overall limit of 100 devices, whereas some places suggest that it’s 100 devices per month – meaning you could have more than 100 devices registered as long as you didn’t reach the monthly 100 devices limit.
  Can you confirm which of these is the case?

  我在官网上查看到介绍专业版最大构建设备数为100，不太了解这个具体描述的是什么意思，方便解答吗？我的软件加密后，是无限制使用这个密钥和不限制软件使用的数量的吧？

  我想购买许可证，但想问下PyArmor7.7.4的版本的许可证是不是和PyArmor 8+的不通用？ 因为我的代码需要加密成py27，和py37+的版本，但好像PyArmor8+不再支持py27， 所以我是需要购买两个许可证才能实现py2，和py37+加密？(py3的我想用最新的加密)

  We visited your website to purchase a license, We can't make the purchase because of a problem with Paypal. Can you suggest an alternative payment method?

  We’re also considering to choose the Pyarmor Pro license version and we need clarification on its applicability to our CI/CD workflow:
  We plan to create a Docker image where Pyarmor is installed and registered (acting as the licensed "build device").
  This image would then serve as the base for other images in subsequent pipelines, where Pyarmor would perform obfuscation at runtime.
  Our understanding is:
    Only the base image (where registration occurs) should count toward the "build device" limit.
    Subsequent pipeline runs using this pre-registered image would not consume additional licenses, as they reuse the same build environment.
  Could you confirm whether this interpretation aligns with Pyarmor Pro’s licensing terms? Specifically:
  Does this Docker-based approach comply with the "build device" count restrictions?
  Are there any limitations on the number of runtime obfuscations performed by derived containers?
