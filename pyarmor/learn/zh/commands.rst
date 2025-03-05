==========
 功能手册
==========

.. highlight:: console

.. contents:: 目录
   :depth: 2
   :local:
   :backlinks: top

.. _cmd-init:

pyarmor init
============

.. _create-project:

创建工程
--------

.. graphviz::
   :caption: 创建工程
   :align: center
   :name: g-create-project

   digraph G {
      node [shape=box, style=rounded, target="_top"]
      rankdir=LR

      opts [shape=record
            label="{-C|-s|-r|-x}"]
      init [label="pyarmor init"]
      conf [label="配置文件 .pyarmor/config"]

      init -> opts [label="传入选项" dir=back arrowtail=curve]
      rank=same { init -> conf [label="写入"] }
   }

.. _append-project-item:

增加脚本/模块/包到工程
----------------------

.. graphviz::
   :caption: 增加脚本/模块/包到工程
   :align: center
   :name: g-append-project-item

   digraph G {
      node [shape=box, style=rounded, target="_top"]
      rankdir=LR

      opts [shape=record
            label="{-e|-m|-p}"]
      init [label="pyarmor init"]
      conf [label="配置文件 .pyarmor/config"]

      init -> opts [label="传入选项" dir=back arrowtail=curve]
      rank=same { init -> conf [label="写入"] }
   }

.. _cmd-env:

pyarmor env
===========

.. _show-project-info:

显示工程配置
------------

.. graphviz::
   :caption: 显示工程配置
   :align: center
   :name: g-show-project-info

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      init [label="pyarmor env -p info"]
      conf [label="配置文件 .pyarmor/config"]
      info [label="工程信息"]

      rank=same { conf -> init [label="传入配置" arrowhead=curve] }
      init -> info [label="显示"]
   }

.. _edit-project-info:

修改工程配置
------------

.. graphviz::
   :caption: 修改工程配置
   :align: center
   :name: g-edit-project-info

   digraph G {
      node [shape=box, style=rounded, target="_top"]
      rankdir=LR

      opts [label="工程选项"
            href="../../docs/zh/configuration.html"]
      env [label="pyarmor env -p set opt value"]
      conf [label="配置文件 .pyarmor/config"]

      env -> opts [label="传入选项" dir=back arrowtail=curve]
      rank=same { env -> conf [label="写入"] }
   }

.. _cmd-build:

pyarmor build
=============

.. _list-project-items:

列出工程中包含的脚本/模块/包
----------------------------

.. graphviz::
   :caption: 列出工程中包含的脚本/模块/包
   :align: center
   :name: g-list-project-items

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      conf [label="配置文件 .pyarmor/config"
            href="../../docs/zh/configuration.html"]
      build [label="pyarmor build --list"]
      items [label="显示工程中包含的所有脚本名称"]

      conf -> build [label="传入配置" arrowhead=curve]
      build -> items [label="根据项目选项配置进行搜索和过滤"]
   }

.. _project-build-rft:

生成重构型脚本
--------------

.. graphviz::
   :caption: 生成重构型脚本
   :align: center
   :name: g-project-build-rft

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --rft"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="依次处理每一个脚本"]

      conf [label="工程属性\n存放在 .pyarmor/config 中"]

      rules [shape=plaintext
             label="工程的重构选项\n存放在 .pyarmor/config 中"]
      autofix [shape=plain
               label="自动生成的重构规则\n存放在 .pyarmor/project/rft_autofix.rules"]

      p1 [label="应用重构规则"]
      rft [label="生成重构脚本"]

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="得到工程中的脚本列表"]
      items -> p1
      rank=same { p1 -> rft }

      p1 -> rules [arrowtail=curve dir=back]
      p1 -> autofix [arrowtail=curve dir=back]
   }

.. _project-rft-autofix:

使用自动修正模式重构复杂脚本
----------------------------

Pyarmor 目前实现三种自动修改模式

- 模式 1 使用最简单，一般不需要人工增加规则，但是可能很多属性都没有重命名
- 模式 2 使用较为复杂的方式，大部分的属性都会重命名，但是有时候需要人工修改规则
- 模式 3 使用最麻烦，但是能够重命名绝大部分属性，一般必须要人工修改规则

.. graphviz::
   :caption: 使用模式一生成重构脚本自动修正规则
   :align: center
   :name: g-project-rft-autofix-1

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --autofix 1"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="依次处理每一个脚本"]

      conf [label="工程属性\n存放在 .pyarmor/config 中"]

      rules [shape=plaintext
             label="工程的重构选项\n存放在 .pyarmor/config 中"]
      autofix [shape=component
               style="filled"
               fillcolor="wheat"
               label="生成重构规则\n所有未知属性都不进行重命名\n保存规则到 .pyarmor/project/rft_autofix.rules"]

      p1 [label="应用重构规则"]
      rft [label="尝试重构脚本\n如果某一个属性无法确定是否需要重命名\n那么记录到未知属性表中"]

      loop [label="合并所有脚本生成的未知属性表"]

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="得到工程中的脚本列表"]
      items -> p1
      rank=same { p1 -> rft }
      p1 -> rules [arrowtail=curve dir=back]

      rft -> loop -> autofix
   }

.. graphviz::
   :caption: 使用模式二生成重构脚本自动修正规则
   :align: center
   :name: g-project-rft-autofix-2

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --autofix 2"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="依次处理每一个脚本"]

      conf [label="工程属性\n存放在 .pyarmor/config 中"]

      rules [shape=plaintext
             label="工程的重构选项\n存放在 .pyarmor/config 中"]
      p1 [label="应用重构规则"]
      rft [label="尝试重构脚本\n记录不知道如何处理的属性\n生成未知属性表"]

      u1 [label="读取所有内置类型\n例如 int, list 等的属性"]
      u2 [label="读取重构选项 external_types\n得到所有外部导入类型的属性"]
      un [label="合并内置和外部类型的属性\n生成外部属性表"]
      u1 -> un
      u2 -> un

      autofix [shape=component
               style="filled"
               fillcolor="wheat"
               label="生成重构规则\n未知属性和外部属性的交集都不进行重命名\n其他未知属性都进行重命名\n保存规则到 .pyarmor/project/rft_autofix.rules"]
      un -> autofix

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="得到工程中的脚本列表"]
      items -> p1
      rank=same { p1 -> rft }
      p1 -> rules [arrowtail=curve dir=back]
      rules -> u2 [arrowhead=curve]
      rft -> autofix

      rank=same { rft -> un [style=invis] }
   }

.. graphviz::
   :caption: 使用模式三生成重构脚本自动修正规则
   :align: center
   :name: g-project-rft-autofix-3

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --autofix 3"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="依次处理每一个脚本"]

      conf [label="工程属性\n存放在 .pyarmor/config 中"]

      rules [shape=plaintext
             label="工程的重构选项\n存放在 .pyarmor/config 中"]
      p1 [label="应用重构规则"]
      rft [label="尝试重构每一个脚本"]

      n1 [label="记录工程内部模块定义的类型\n合并所有内部类型的属性\n生成内部属性表"]
      n2 [label="记录所有的未知属性\n生成未知属性表"]

      autofix [shape=component
               style="filled"
               fillcolor="wheat"
               label="生成重构规则\n所有内部属性名称都会进行重命名\n保存规则到 .pyarmor/project/rft_autofix.rules"]
      autolog [shape=component
               style="filled"
               fillcolor="wheat"
               label="生成未知属性所在文件和行号\n保存到 .pyarmor/project/rft_autofix.log\n用户需要根据日志人工生成重构规则"]

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="得到工程中的脚本列表"]
      items -> p1
      rank=same { p1 -> rft }
      p1 -> rules [arrowtail=curve dir=back]
      rft -> n1 -> autofix
      rank=same { rft -> n2 }
      n2 -> autolog
   }

.. _project-build-mini:

生成迷你型脚本
--------------

.. graphviz::
   :caption: 生成迷你型脚本
   :align: center
   :name: g-project-build-mini

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --mini"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="依次处理每一个脚本"]
      conf [label="工程属性\n存放在 .pyarmor/config 中"]
      mini [label="生成迷你型加密脚本"]

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="得到工程中的脚本列表"]
      items -> mini
   }
