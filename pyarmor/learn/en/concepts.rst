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
     - Security [#]_
     - Performance [#]_
     - Need Extension [#]_
     - Remark
   * - Std Script
     - ✫✫✫
     - ✫✫✫
     - Yes
     - Could bind scripts to device or expired
   * - Mini Script
     - ✫
     - ✫✫✫✫
     - Yes
     - High execution speed, suitable for web services
   * - RFT Script
     - ✫✫✫✫
     - ✫✫✫✫✫
     - No
     - Only rename most variables/classes/functions etc. in the original script

.. rubric:: Notes

.. [#] Difficulty level to reverse the obfuscated scripts, 5 stars is the most
.. [#] How fast to run the script, 5 stars is the fastest, same as plain script
.. [#] Need extension means it need prebuilt binary file

.. _mini-script:

Mini Script
-----------

Mini Script consists of one common Python script and an extension `pyarmor_mini.so`

For example, there is one script like this

.. code-block:: python

   print('Hello')

The corresponding Mini Script would be

.. code-block:: python

   from pyarmor_mini import __pyarmor__
   __pyarmor__(__name__, b'xxxx')

It's one common Python script, but need import one extra module `pyarmor_mini <https://pypi.org/project/pyarmor.mini/>`_ which could be installed by this way::

  $ pip install pyarmor.mini

.. _rft-script:

RFT Script
----------

RFT Scripts is same as original Python scripts, only variables/classes/functions etc. are renamed

For example, there is one script like this

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

The corresponding RFT Script would be

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
