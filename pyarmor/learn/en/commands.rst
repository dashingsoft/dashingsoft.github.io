===========
 Functions
===========

.. highlight:: console

.. contents:: Content
   :depth: 2
   :local:
   :backlinks: top

.. _cmd-init:

pyarmor init
============

.. _create-project:

Create Project
--------------

.. graphviz::
   :caption: Create Project
   :align: center
   :name: g-create-project

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      opts [shape=record
            label="{-C|-s|-r|-x}"]
      init [label="pyarmor init"]
      conf [label="Config file: .pyarmor/config"]

      init -> opts [label="By options" dir=back arrowtail=curve]
      rank=same { init -> conf [label="Save to"] }
   }

.. _append-project-item:

Append Project Item
-------------------

.. graphviz::
   :caption: Append Project Item
   :align: center
   :name: g-append-project-item

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      opts [shape=record
            label="{-e|-m|-p}"]
      init [label="pyarmor init"]
      conf [label="Config file: .pyarmor/config"]

      init -> opts [label="By options" dir=back arrowtail=curve]
      rank=same { init -> conf [label="Save to"] }
   }

.. _cmd-env:

pyarmor env
===========

.. _show-project-info:

Show Project Information
------------------------

.. graphviz::
   :caption: Show Project Information
   :align: center
   :name: g-show-project-info

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      init [label="pyarmor env -p info"]
      conf [label="Config file: .pyarmor/config"]
      info [label="Project Information"]

      rank=same { conf -> init [label="Read" arrowhead=curve] }
      init -> info [label="Print"]
   }

.. _edit-project-info:

Update Project
--------------

.. graphviz::
   :caption: Update Project
   :align: center
   :name: g-edit-project-info

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      opts [label="Project Options"
            href="../../docs/en/configuration.html"]
      env [label="pyarmor env -p set opt value"]
      conf [label="Config file: .pyarmor/config"]

      env -> opts [dir=back arrowtail=curve]
      rank=same { env -> conf [label="Write"] }
   }

.. _cmd-build:

pyarmor build
=============

.. _list-project-items:

List Project Scripts
--------------------

.. graphviz::
   :caption: List Project Scripts
   :align: center
   :name: g-list-project-items

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      conf [label="Config file: .pyarmor/config"
            href="../../docs/en/configuration.html"]
      build [label="pyarmor build --list"]
      items [label="Print all script name in project"]

      conf -> build [label="Read" arrowhead=curve]
      build -> items [label="Search files by project"]
   }

.. _project-build-rft:

Build RFT Script
----------------

.. graphviz::
   :caption: Build RFT Script
   :align: center
   :name: g-project-build-rft

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --rft"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="Process each script"]

      conf [label="Project file: .pyarmor/config 中"]

      rules [shape=plaintext
             label="Got RFT options from:\n.pyarmor/config"]
      autofix [shape=plain
               label="Got autofix rules from:\n.pyarmor/project/rft_autofix.rules"]

      p1 [label="Apply refactor rulers"]
      rft [label="Generate RFT Script"]

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="Get all scripts in project"]
      items -> p1
      rank=same { p1 -> rft }

      p1 -> rules [arrowtail=curve dir=back]
      p1 -> autofix [arrowtail=curve dir=back]
   }

.. _project-rft-autofix:

Refactor complex script by autofix mode
---------------------------------------

There are 3 autofix mode

- :ref:`Mode 1: simple way, but many attributes may not be renamed <g-project-rft-autofix-1>`
- :ref:`Mode 2: normal way, most attributes will be renamed, but sometimes need manually update the rules <g-project-rft-autofix-2>`
- :ref:`Mode 3: difficult way, it could rename attributes as many as possible (more than mode 2), need manually add most of rules <g-project-rft-autofix-3>`

.. graphviz::
   :caption: Refactor Complex Script Autofix Mode 1
   :align: center
   :name: g-project-rft-autofix-1

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --autofix 1"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="Process each script"]

      conf [label="Project file: \n.pyarmor/config"]

      rules [shape=plaintext
             label="Got RFT options from:\n.pyarmor/config"]
      autofix [shape=component
               style="filled"
               fillcolor="tan"
               label="Generate autofix rules to\n.pyarmor/project/rft_autofix.rules\nDo not rename all unknown attributes"]

      p1 [label="Apply refactor rules"]
      rft [label="Try to refactor script\nIf not sure to rename one attribute\nRecord it to unknown attribute list"]

      loop [label="Merge all unknown attribute list"]

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="Get all scripts in project"]
      items -> p1
      rank=same { p1 -> rft }
      p1 -> rules [arrowtail=curve dir=back]

      rft -> loop -> autofix

      rebuild [style="filled,rounded"
               fillcolor="wheat"
               label="Rebuild project\npyarmor build --rft"]
      test [label="Run RFT script\npython dist/foo.py"]
      fb [label="Does it raise AttributeError?"]
      f2 [label="Exclude this attribute:\npyarmor env -p push rft:exclude_names xxxx"]

      autofix -> rebuild -> test -> fb

      fb -> f2 [label="AttributeError is raised"]
      f2 -> rebuild [label="Loop until there is no error" headport=e tailport=e]
   }

.. graphviz::
   :caption: Refactor Complex Script Autofix Mode 2
   :align: center
   :name: g-project-rft-autofix-2

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --autofix 2"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="Process each script"]

      conf [label="Project file: \n.pyarmor/config"]

      rules [shape=plaintext
             label="Got RFT options from:\n.pyarmor/config"]
      p1 [label="Apply refactor rules"]
      rft [label="Try to refactor scripts\nIf not sure to rename one attribute\nRecord it to Unknown Attribute Table"]

      u1 [label="Read all builtin types and\nExternal types defined in the RFT options"]
      un [label="Merge all attributes of \nboth external types and builtin types\nGet External Attribute Table"]
      u1 -> un

      autofix [shape=component
               style="filled"
               fillcolor="tan"
               label="Generate autofix rules to\n.pyarmor/project/rft_autofix.rules\nDo not rename intersection of \nUnknown Attributes and External Attributes\nRename all the other unknown attributes"]
      un -> autofix

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="Get all scripts in project"]
      items -> p1
      rank=same { p1 -> rft [dir=normal] }
      p1 -> rules [arrowtail=curve dir=back]
      rft -> autofix

      rebuild [style="filled,rounded"
               fillcolor="wheat"
               label="Rebuild project:\npyarmor build --rft"]
      test [label="Run RFT script:\npython dist/foo.py"]
      fb [label="Does it raise AttributeError?"]
      f1 [label="If this attribute has been renamed\nSearch it in .pyarmor/project/rft_autofix.rules\nGet the original attribute"]
      f2 [label="Exclude the original attribute:\npyarmor env -p push rft:exclude_names xxxx"]
      f3 [label="Advanced way"]
      f4 [label="Check autofix log by Emacs org-mode:\n.pyarmor/rft_autofix.2.org"]
      f5 [label="Look through each attribute in the log\nIf this attribute shouldn't be rename\nAppend it to RFT options:\npyarmor env -p push external_attrs XXXX"]
      f6 [label="Restart\npyarmor build --autofix 2"
          style="filled,rounded"
          fillcolor="wheat"]
      autofix -> rebuild -> test -> fb
      fb -> f1 [label="AttributeError is raised"]
      f1 -> f2 [label="Simple way"]
      f2 -> rebuild [label="Loop until there is no error" tailport=e]
      f1 -> f3 -> f4 -> f5 -> f6
   }

.. graphviz::
   :caption: Refactor Complex Script Autofix Mode 3
   :align: center
   :name: g-project-rft-autofix-3

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --autofix 3"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="Process each script"]
      conf [label="Project file: \n.pyarmor/config"]
      rules [shape=plaintext
             label="Got RFT options from:\n.pyarmor/config"]
      p1 [label="Apply refactor rules"]
      rft [label="Try to refactor scripts"]

      n1 [label="Iter each type defined in the project\nGenerate Internal Attribute Table"]
      n2 [label="If not sure to rename one attribute\nRecord it to Unknown Attribute Table"]

      autofix [shape=component
               style="filled"
               fillcolor="tan"
               label="Generate autofix rules to\n.pyarmor/project/rft_autofix.rules\nRename all names in Internal Attribute Table"]
      autolog [shape=box
               style="filled,rounded"
               fillcolor="tan"
               label="Generate autofix log:\n.pyarmor/project/rft_autofix.3.org"]

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="Get scripts in the project"]
      items -> p1
      rank=same { p1 -> rft }
      p1 -> rules [arrowtail=curve dir=back]
      rft -> n1 -> autofix
      rft -> n2 [tailport=e]
      n2 -> autolog

      m1 [label="Create RFT rules manually"]
      autolog -> m1 [label="Look through autofix log"]
      m1 -> autofix [label="Append rules"]

      rebuild [style="filled,rounded"
               fillcolor="wheat"
               label="Rebuild project:\npyarmor build --rft"]
      test [label="Run RFT script:\npython dist/foo.py"]
      fb [label="Does it raise AttributeError?"]

      autofix -> rebuild -> test -> fb
      fb -> m1 [label="AttributeError is raised"]
   }

.. _project-build-mini:

Build Mini Script
-----------------

.. graphviz::
   :caption: Build Mini Script
   :align: center
   :name: g-project-build-mini

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      build [label="pyarmor build --mini"
             style="filled,rounded"
             fillcolor="wheat"]
      join1 [shape=point]

      items [label="Process each script"]
      conf [label="Project file: .pyarmor/config"]
      mini [label="Generate Mini Script"]

      build -> join1
      join1 -> conf [dir=none]
      join1 -> items [label="Get all scripts in the project"]
      items -> mini
   }
