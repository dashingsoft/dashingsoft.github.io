======
 工程
======

.. highlight:: console

工程是用来管理脚本和重构选项的对象

.. graphviz::
   :caption: 工程生命周期图
   :align: center
   :name: graph-project-lifecycle

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      project [label="工程", shape=hexagon, style="filled", fillcolor="burlywood"]

      init [label="pyarmor init", href="commands.html#cmd-init"]
      env [label="pyarmor env", href="commands.html#cmd-env"]
      info [label="pyarmor env -p info", href="commands.html#cmd-env"]
      list [label="pyarmor build --list", href="commands.html#cmd-build"]
      genrft [label="pyarmor build --rft", href="commands.html#cmd-build"]
      genmini [label="pyarmor build --mini", href="commands.html#cmd-build"]

      c1 [label="工程信息只能存放在当前目录\n工程属性存放在文件 .pyarmor/config\n工程相关文件存放在目录 .pyarmor/project/"
          shape=plain]

      init -> project [taillabel="创建"]
      env -> project [taillabel="修改和配置"]
      rank=same { project -> info [label="显示工程信息"] }
      rank=same { list -> project [label="显示工程包含的所有脚本", dir=back] }
      project -> genrft [label="生成重构型加密脚本"]
      project -> genmini [label="生成迷你型加密脚本"]

      c1 -> project [label="约束", dir=none]
   }

工程属性
========

.. graphviz::
   :caption: 工程属性
   :align: center
   :name: g-project-options

   digraph G {
      node [shape=box, style=rounded, target="_top"]
      rankdir=LR

      project [shape=record
               label="src|scripts|modules|packages|search_mode|recursive"
               href="../../docs/zh/user/configutation.html"]
      rft [label="重构选项", href="project.html#rft-options"]

      edge [style=invis]
      project -> rft
   }

.. _rft-options:

重构选项
--------

.. graphviz::
   :align: center
   :name: g-project-rft-options

   digraph G {
      node [shape=box, style=rounded, target="_top"]
      rankdir=LR

      rft [shape=record
           label="remove_assert|remove_docstr|builtin_mode|argument_mode|export_mode|exclude_names|exclude_funcs|attr_rules|call_rules|extra_builtins|external_types|external_attrs"
           href="../../docs/zh/user/configutation.html#rft-section"]
   }
