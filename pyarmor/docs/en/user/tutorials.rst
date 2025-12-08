.. include:: ../_header_note.txt

===========
 Tutorials
===========

.. contents:: Content
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

In this tutorials, all the examples are based on this folder structure::

  project/src/
      ├── foo.py
      ├── fibo.py
      ├── jsontool.py
      └── tomjson/
          ├── __init__.py
          ├── encoder.py
          ├── decoder.py
          └── scanner.py

Unless specified, the default directory in this tutorial is::

  $ cd project/src/

Install & Register Pyarmor
==========================

Pyarmor is published in PyPI, install it by pip::

  $ pip install pyarmor.cli

Some features need purchase Pyarmor license which could unlock RFT mode

Generate RFT Script
===================

.. program:: pyarmor build

How to generate :term:`RFT Script` for one simple script `foo.py`?

First create one project which only include one script `foo.py`::

  $ pyarmor init -e foo.py

Then build this project with target :option:`--rft`::

  $ pyarmor build --rft

It will generate final script in the default path `dist`, check it::

  $ cat dist/foo.py

Run it::

  $ python dist/foo.py

Generate Complex RFT Script
---------------------------

For simple script, it's enough by default options. But for complex scripts, it need extra options

Let's take another script `fibo.py`. First create one project for it also::

  $ pyarmor init --clean -e fibo.py

When building the project, there are warnings::

  $ pyarmor build --rft

  WARNING There are variables of unknown type
  WARNING There are function calls which may use unknown arguments

It will raise exception when executing the output script::

  $ python dist/fibo.py

  AttributeError: 'pyarmor__7' object has no attribute 'run'

Pyarmor also supports auto-fix mode to make it works by simple and rough way::

  $ pyarmor build --autofix 1

After that, build the project and test it again::

  $ pyarmor build --rft
  $ python dist/fibo.py

If need disable auto-fix mode, run this command::

  $ pyarmor build --autofix 0

Then build project again::

  $ pyarmor build --rft

Generate MINI Script
====================

First install package :term:`pyarmor.mini`::

  $ pip install pyarmor.mini

We will still use the project created in the previous example and generate :term:`MINI Script` with the same configuration::

  $ pyarmor build --mini

Check the obfuscated script::

  $ cat dist/fibo.py

Run it::

  $ python dist/fibo.py

:term:`MINI Script` is almost same as .pyc file in irreversibility. So usually it's better to combine :term:`MINI Script` and :term:`RFT Script` by the following command::

  $ pyarmor build --mini-rft

Generally, first generate :term:`RFT Script` and make it works, then call above command to generate combined script.

Publish MINI Script
-------------------

When publishing :term:`MINI Script`, it also need install package :term:`pyarmor.mini` in the target machine::

  $ pip install pyarmor.mini

Note that now only the following platforms support :term:`MINI Script`

- linux.x86_64, darwin.x86_64, windows.x86_64
- linux.aarch64, darwin.arm64

Support Freethreading
---------------------

:term:`MINI Script` supports freethreading in Python 3.13+

But now Pyarmor still doesn't support free-threading Python, so it need build :term:`MINI Script` by normal Python.

Then in target machine using free-threading Python to install package :term:`pyarmor.mini`.

For example, build `MINI Script` with normal Python 3.13 in Apple Silicon, then copy obfuscated scripts to Linux.x86_64, and install free-threaded extension `pyarmor_mini` in it::

  $ python3.13t -m pip install pyarmor.mini

Make sure `pip >=24.1`, the installed wheel tag should be `cp313-cp313t`

Generate VMC Script
===================

.. versionadded:: 9.2.2

First install package :term:`pyarmor.mini`::

  $ pip install pyarmor.mini

We will still use the project created in the previous example and generate :term:`VMC Script` with the same configuration::

  $ pyarmor build --vmc

Check the result::

  $ cat dist/fibo.py

Run the final script::

  $ python dist/fibo.py

It's also possible to combine :term:`VMC Script` and :term:`RFT Script` by the following command::

  $ pyarmor build --vmc-rft

Generally, first generate :term:`RFT Script` and make it works, then call above command to generate combined script.

Publish VMC Script
------------------

When publishing :term:`VMC Script`, it also need install package :term:`pyarmor.mini` in the target machine::

  $ pip install pyarmor.mini

Like :term:`MINI Script`, :term:`VMC Script` also supports Freethreading feature in runtime.

Generate ECC Script
=====================

.. versionadded:: 9.2.2

First configure C compiler, it's same as BCC mode

Then install package :term:`pyarmor.mini`::

  $ pip install pyarmor.mini

We will still use the project created in the previous example and generate :term:`ECC Script` with the same configuration::


  $ pyarmor build --ecc

Check the result::

  $ cat dist/fibo.py

Run the final script::

  $ python dist/fibo.py

It's also possible to combine :term:`ECC Script` and :term:`RFT Script` by the following command::

  $ pyarmor build --ecc-rft

Generally, first generate :term:`RFT Script` and make it works, then call above command to generate combined script.

Publish ECC Script
------------------

When publishing :term:`ECC Script`, it also need install package :term:`pyarmor.mini` in the target machine::

  $ pip install pyarmor.mini

:term:`ECC Script` also supports Freethreading feature in runtime, it need use :option:`--ecc-nogil` to generate freethreading :term:`ECC script` respectively::

  $ pyarmor build --ecc-nogil

Because pyarmor still doesn't work with freethreading Python, but the runtime package :term:`pyarmor.bmini` supports freethreading feature, so the final ecc script could work with freethreading Python, .

Refactor Package
================

First create one project with package `tomjson`::

  $ pyarmor init --clean -p tomjson

Because the package will be imported by outer scripts, the exported classes and functions can't be renamed

In order to keep these names, one way is to enable option `export_mode`::

  $ pyarmor env -p set rft:export_mode 1

Thus all the names list in the module attribute ``__all__`` aren't changed, and

- If this is one class, no rename all the attributes and methods
- If this is one function, no rename function arguments

Then build this package::

  $ pyarmor build --rft

Create Complex Project
======================

.. program:: pyarmor init

Let's create one comple project, include one script `jsontool.py` and package `tomjson`, but no `fibo.py` and path `venv`::

  $ pyarmor init --clean --src . -r --exclude fibo.py --exclude venv

Pyarmor will search all the files and paths in the :option:`--src`, all of them except in the excludes will be added into the project.

Check the project items::

  $ pyarmor build --list

Refactor this project::

  $ pyarmor build --rft

Run the final script::

  $ python dist/jsontool.py

Advanced Refactor
=================

The major problem for complex scripts is to raise `AttributeError`. For example::

  AttributeError: 'pyarmor__7' object has no attribute 'run'

Let's look at one example script `fibo.py`, there are the following lines:

.. code-block:: python

   def fib(obj, n):
       obj.name = 'fibo'
       obj.value = n
       obj.run()
       return obj.result

The problem is that the argument `obj` type is unknown.

The simple way to fix this issue is to exclude these attributes. For example::

  $ pyarmor env -p push rft:exclude_names name value run

The second way is annotation by updating script. For example:

.. code-block:: python

   def fib(obj: QuickFibo, n):
       obj.name = 'fibo'
       obj.value = n
       obj.run()
       return obj.result

The third way is to set rules to rename the attributes. For examle, this rule tell Pyarmor to rename all the attributes of `obj` which in the module `fibo` and function `fib`::

  $ pyarmor env -p push rft:attr_rules "fibo::fib:obj.*"

..
  The second warning::

    WARNING There are function calls which may use unknown arguments

  is caused by the following code in the `fibo.py`:

  .. code-block:: python
     :linenos:

     def show(rlist, n, delta=2):
         print('fibo', n, 'is', rlist)
         return n + delta

     if __name__ == '__main__':
         ...
         kwarg = {'n': n, 'delta': 3}
         show(result, **kwarg)

  In the line 8, it uses dict `kwarg` to call `show`, but the key in the dict won't be renamed by default

  In order to solve this problem, one solution is to tell Pyarmor doesn't rename all the argument of function `show`. For example::

    $ pyarmor env -p rft:exclude_funcs fibo::show

  Now build project again::

    $ pyarmor build --rft
    $ cat dist/fibo.py
    $ python dist/fibo.py
