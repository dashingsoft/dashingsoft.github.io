==================
 Learning Pyarmor
==================

:Version: 1.0
:Homepage: https://github.com/dashingsoft/pyarmor

Here only includes Pyarmor 9.1 new features, old functions please check `Pyarmor 9.0 Documentation <https://pyarmor.readthedocs.io/en/latest/>`_

.. graphviz::
   :caption: Pyarmor Overview
   :align: center
   :name: master-graph

   digraph G {

          node [shape=box, style=rounded]

          c1 [label="Pyarmor CLI"
              href="concepts.html#pyarmor-cli"
              target="_top"]
          c2 [label="Pyarmor License"
              href="https://pyarmor.readthedocs.io/en/latest/licenses.html"
              target="_top"]
          c3 [label="Pyarmor Project"
              href="concepts.html#project"
              target="_top"]
          c4 [label="Python Scripts" shape=plaintext]
          c5 [label="Obfuscated Scripts"
              href="concepts.html#obf-scripts"
              target="_top"]

          c4 -> c3 [label="compose" arrowhead=tee]
          rank=same {c3 -> c1}
          c2 -> c1
          c1 -> c5
   }

Table of content
================

.. toctree::
   :caption: Learning Pyarmor
   :name: learndoc
   :maxdepth: 2

   concepts
   project
   commands
   how-to
   ask
