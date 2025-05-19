========
 How to
========

.. highlight:: console

.. _how-to-license:

License Issues
==============

- `Which Pyarmor License is right for me? <https://pyarmor.readthedocs.io/en/latest/licenses.html#select-license-type>`_
- `How many Pyarmor Licenses I need purchase? <https://pyarmor.readthedocs.io/en/latest/licenses.html#how-many-licenses-required>`_
- `How to use Pyarmor License in local devices/cloud server/vm etc.? <https://pyarmor.readthedocs.io/en/latest/how-to/register.html#using-pyarmor-license>`_
- `How to use Pyarmor License in CI/CD pipeline or docker container? <https://pyarmor.readthedocs.io/en/latest/how-to/register.html#using-pyarmor-license>`_
- `How to fix registering Pyarmor License issues? <https://pyarmor.readthedocs.io/en/latest/reference/solutions.html#fix-register-issue>`_
- `How to fix Pyarmor License doesn't work after upgrading Pyarmor to latest version? <https://pyarmor.readthedocs.io/en/latest/how-to/register.html#pyarmor>`_
- `How to upgrade different Pyarmor Licenses? <https://pyarmor.readthedocs.io/en/latest/licenses.html#how-to-upgrade-license>`_

.. _how-fix-build-issue:

Build Issues
============

.. _generate-script-issue:

How to fix issues when generating obfuscated scripts
----------------------------------------------------

.. graphviz::
   :caption: Fix generating obfuscated scripts issues
   :align: center
   :name: graph-generate-script-issue

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      subgraph P0 {
          rankdir="TB"
          style="setlinewidth(0)"

          s1 [label="Error: update license token failed"]
          s2 [label="Error: out of license"]
          s3 [label="Try to obfuscate hello-world script"]
          s4 [label="Try to obfuscate by default options"]
          s5 [label="Remove local configuration\nRename .pyarmor/config\nTry to obfuscate the script"]

          s31 [label="Comment some lines in script\nFind exact problem lines"]
      }

      subgraph P1 {
          node [
             style="filled,rounded",
             fillcolor="burlywood",
             ]

          n1 [href="https://pyarmor.readthedocs.io/en/latest/reference/solutions.html#fix-register-issue"
              label="Please check how to fix registering issues"]
          n2 [href="https://pyarmor.readthedocs.io/en/latest/licenses.html"
              label="Please check Pyarmor Licenses"]
          n3 [href="https://github.com/dashingsoft/pyarmor/issues"
              label="Reprot issue in Github\nThe minimum options to reproduce the bug\nCode snapshort which results in problem\nFull traceback"]
          n4 [href="https://pyarmor.readthedocs.io/en/latest/reference/man.html#pyarmor-gen"
              label="Please check Pyarmor man page\nUnderstand the right usage for each option"]
          n5 [href="https://pyarmor.readthedocs.io/en/latest/reference/solutions.html#fix-bootstrap-issue"
              label="Please check how to fix Pyarmor bootstrap issuses"]
          nr [href="https://github.com/dashingsoft/pyarmor/issues"
              label="Report issue in Github\nThe minimum options to reproduce this issue\nThe simplest script without third-party package"]
      }

      start -> s1 -> s2 -> s3 -> s4 -> s5 -> nr
      s31 -> n3

      rank=same { s1 -> n1 [label="Yes"] }
      rank=same { s2 -> n2 [label="Yes"] }
      rank=same { s3 -> s31 [label="Works"] }
      rank=same { s4 -> n4 [label="Works"] }
      rank=same { s5 -> n5 [label="Error"] }
   }

.. _pack-script-issue:

How to fix issues when packing obfuscated scripts
-------------------------------------------------

.. graphviz::
   :caption: Fix packing script issues
   :align: center
   :name: graph-pack-script-issue

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      s1 [label="Do not obfuscate the scripts\nPack plain scripts by PyInstaller directly\nMake sure the final bundle works"]
      s2 [label="Do not use option --pack\nOnly obfuscate the scripts\nMake sure it works"]
      s3 [style="filled,rounded",
          fillcolor="burlywood",
          href="https://pyarmor.readthedocs.io/en/latest/topic/repack.html"
          label="Please check topic `insight into packing`"]

      start -> s1 -> s2 -> s3
   }

.. _how-fix-runtime-issue:

Runtime Issues
==============

.. _run-obfuscated-script-issue:

How to fix issues when executing obfuscated script
--------------------------------------------------

.. graphviz::
   :caption: Fix issues when executing obfuscated script
   :align: center
   :name: graph-run-obfuscated-script-issue

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      subgraph P0 {
          rankdir="TB"
          style="setlinewidth(0)"

          s1 [label="Is build device same as target device?"]
          s2 [label="Is Python major.minor version to obfuscate the script same as\nPyarmor major.minor version to run the obfuscated scripts?"]
          s3 [label="Is it raising exception message?"]
          s4 [label="If RFT mode is enabled\nTry to disable RFT mode\nDoes it work?"]
          s5 [label="If BCC mode is enabled\nTry to disable BCC mode\nDoes it work?"]
          s6 [label="If any restrict options are used\nTry to remove these options\nDoes it work?"]
          s7 [label="If any third-party library is used\nTry to test one hello-world script\nDoes it work"]
          s8 [label="If Python is alpha or rc version\nTry to upgrade Python"]

          s1 -> s2 -> s3
          s4 -> s5 -> s6 -> s7 -> s8
      }

      start -> s1

      subgraph P1 {
          node [
             style="filled,rounded",
             fillcolor="burlywood",
             ]
          n1 [
              href="https://pyarmor.readthedocs.io/en/latest/tutorial/advanced.html#generating-cross-platform-scripts"
              label="Please check cross-platform solutions"]
          n2 [
              href="https://pyarmor.readthedocs.io/en/latest/tutorial/advanced.html#support-multiple-python-versions"
              label="Please use same Python major.minor version to obfuscate the scripts\nIf need support multiple Python version\nPlease check this link"]
          n3 [href="https://pyarmor.readthedocs.io/en/latest/reference/errors.html"
              label="Please check error message table to find solution"]
          n4 [style=rounded
              label="Try to add print statement in scripts\nFind the problem lines"]
          n5 [href="how-to.html#graph-fix-runtime-crash-issue"
              label="Please check how to fix crashing issue"]
          n6 [
              href="https://pyarmor.readthedocs.io/en/latest/topic/rftmode.html"
              label="Please check topic `insight into RFT mode`"]
          n7 [
              href="https://pyarmor.readthedocs.io/en/latest/topic/bccmode.html"
              label="Please check topic `insight into BCC mode`"]
          n8 [href="https://pyarmor.readthedocs.io/en/latest/reference/man.html#pyarmor-gen"
              label="Understand the usage of each option\nUse the right options\nOr refine the scripts"]
          n9 [href="https://pyarmor.readthedocs.io/en/latest/how-to/third-party.html"
              label="Check third-party library solutions"]
          n10 [href="https://github.com/dashingsoft/pyarmor/issues"
               label="Report issue in Github\nThe minimum options to reproduce this issue\nThe simplest script without third-party package"]
      }

      s3 -> n3 [label="Yes"]
      s3 -> n4 [label="No"]
      s3 -> n5 [label="Crashed"]
      n3 -> s4 [label="No solution found"]
      s8 -> n10 [label="Still wrong"]

      n4 -> s4
      n5 -> s4

      rank=same { s1 -> n1 [label="No"] }
      rank=same { s2 -> n2 [label="No"] }
      rank=same { s4 -> n6 [label="Yes"] }
      rank=same { s5 -> n7 [label="Yes"] }
      rank=same { s6 -> n8 [label="Yes"] }
      rank=same { s7 -> n9 [label="Yes"] }
   }

.. graphviz::
   :caption: Fix crash issues in runtime
   :align: center
   :name: graph-fix-runtime-crash-issue

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      subgraph P0 {
          rankdir="TB"
          style="setlinewidth(0)"

          s1 [label="Is target device Apple M1+ ?"]
          s2 [label="Which Python interpreter to run the obfuscated scripts?"]
      }

      subgraph P1 {
          node [
             style="filled,rounded",
             fillcolor="burlywood",
             ]
          n1 [label="Check extension pyarmor_runtime.so by codesign"]
          n2 [href="https://pyarmor.readthedocs.io/en/latest/topic/obfuscated-script.html"
              label="Check doc to understand obfuscated scripts"]
          n3 [href="https://github.com/dashingsoft/pyarmor/issues"
              label="Report issue in Github\nThe minimum options to reproduce this issue\nThe simplest script without third-party package"]
      }

      start -> s1
      s1 -> s2 -> n3

      rank=same { s1 -> n1 [label="Yes"] }
      rank=same { s2 -> n2 [label="Not CPython"] }
   }

.. _run-packed-script-issue:

How to fix issues when executing packed bundle
----------------------------------------------

.. graphviz::
   :caption: Fix issues when executing packed bundle
   :align: center
   :name: graph-run-packed-script-issue

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      subgraph P0 {
          rankdir="TB"
          style="setlinewidth(0)"

          s2 [label="In build device, do not obfuscate scripts\npack the plain scripts by Pyinstaller directly\nThen run the final bundle in target device\nDoes it work?"]
          s3 [label="In build device, do not use option --pack\nOnly obfuscate scripts\nThen run the obfuscated scripts in target device\nDoes it work?"]
          s4 [label="In build device, try fewer options\nUse the minimu options to pack scripts\nThen run the final bundle in target device\nDoes it work?"]
          s5 [
            style="filled,rounded",
            fillcolor="burlywood",
            href="https://pyarmor.readthedocs.io/en/latest/topic/repack.html"
            label="Refer to doc about packing topic\nPack the scripts by fewer options"]
          s6 [label="Try to pack one hello-world script\nThen run it in target device\nDoes is work?"]

	  s2 -> s3 -> s4 -> s5
          s4 -> s6 [label="Error", tailport=se]
      }

      subgraph P2 {
          node [
             style="filled,rounded",
             fillcolor="burlywood",
             ]
          n1 [
              href="https://pyinstaller.org/en/stable/usage.html"
              label="Please refer to PyInstaller doc\nMake sure PyInstaller could pack the plain scripts\nAnd the final bundle works in target device"]
          n2 [
            href="how-to.html#run-obfuscated-script-issue"
            label="Please check how to fix running obfuscated script issues"]
          n3 [
            href="https://pyarmor.readthedocs.io/en/latest/how-to/third-party.html"
            label="Please check third-party library compatibility"]
          n4 [
            href="https://github.com/dashingsoft/pyarmor/issues"
            label="Report issue in Github\nThe minimum options to reproduce this issue\nThe simplest script without third-party package"]
      }

      start -> s2
      s6 -> n3

      rank=same { s2 -> n1 [label="Error"] }
      rank=same { s3 -> n2 [label="Error"] }
      rank=same { s6 -> n4 [label="Error"] }
   }
