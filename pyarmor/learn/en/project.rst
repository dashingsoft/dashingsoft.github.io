=========
 Project
=========

.. highlight:: console

Project is used to manage scripts and options

.. graphviz::
   :caption: Project Life Cycle
   :align: center
   :name: graph-project-lifecycle

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      project [label="Project", shape=hexagon, style="filled", fillcolor="burlywood"]

      init [label="pyarmor init", href="commands.html#cmd-init"]
      env [label="pyarmor env", href="commands.html#cmd-env"]
      info [label="pyarmor env -p info", href="commands.html#cmd-env"]
      list [label="pyarmor build --list", href="commands.html#cmd-build"]
      genrft [label="pyarmor build --rft", href="commands.html#cmd-build"]
      genmini [label="pyarmor build --mini", href="commands.html#cmd-build"]

      c1 [label="Project data is stored in the file `.pyarmor/config`\nRelated files is stored in the path `.pyarmor/project/`"
          shape=plain]

      init -> project [taillabel="Create"]
      env -> project [taillabel="Update"]
      rank=same { project -> info [label="Show project information"] }
      rank=same { list -> project [label="List all the scripts in project", dir=back] }
      project -> genrft [label="Generate Mini Script"]
      project -> genmini [label="Generate RFT Script"]

      c1 -> project [dir=none]
   }

Project Attributes
==================

.. graphviz::
   :caption: Project Attributes
   :align: center
   :name: g-project-options

   digraph G {
      node [shape=box, style=rounded, target="_top"]
      rankdir=LR

      project [shape=record
               label="src|scripts|modules|packages|search_mode|recursive"
               href="../../docs/en/user/configutation.html"]
      rft [label="RFT Options", href="project.html#rft-options"]

      edge [style=invis]
      project -> rft
   }

.. _rft-options:

RFT Options
-----------

.. graphviz::
   :align: center
   :name: g-project-rft-options

   digraph G {
      node [shape=box, style=rounded, target="_top"]
      rankdir=LR

      rft [shape=record
           label="remove_assert|remove_docstr|builtin_mode|argument_mode|export_mode|exclude_names|exclude_funcs|attr_rules|call_rules|extra_builtins|external_types|external_attrs"
           href="../../docs/en/user/configutation.html#rft-section"]
   }
