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

The new features are highly dependent on RFT mode, so it need purchase one Pyarmor license which could unlock RFT mode. For example::

  $ pyarmor reg pyarmor-regfile-5068.zip

  ...

  INFO     Python 3.11.0
  INFO     Pyarmor 9.1.0 (pro), 005068, btarmor
  INFO     Platform darwin.x86_64
  INFO     Current license information:

  License Type    : pyarmor-pro
  License No.     : pyarmor-vax-005068
  License To      : Tester
  License Product : btarmor

  BCC Mode        : Yes
  RFT Mode        : Yes
  CI/CD Mode      : No

  Notes
  * Need verify license online when obfuscating scripts

Generate RFT Script
===================

.. program:: pyarmor build

How to generate :term:`RFT Script` for one simple script `foo.py`?

First create one project which only include one script `foo.py`::

  $ pyarmor init -e foo.py

Then build this project with target :option:`--rft`::

  $ pyarmor build --rst

It will generate final script in the default path `dist`, check it::

  $ cat dist/foo.py

Run it::

  $ python dist/foo.py

Generate Complex RFT Script
===========================

For simple script, it's enough by default options. But for complex scripts, it need extra options

Let's take another script `fibo.py`. First create one project for it also::

  $ pyarmor init --clean -m fibo.py

When building the project, there are warnings::

  $ pyarmor build --rft

  WARNING There are variables of unknown type
  WARNING There are function calls which may use unknown arguments
  WARNING Please check file ".pyarmor/project/rft_extra_config.sh"

In the script `fibo.py`, there are the following lines:

.. code-block:: python

   def fib(obj, n):
       obj.name = 'fibo'
       obj.value = n
       obj.run()
       return obj.result

Because Pyarmor couldn't decide the argument `obj` type, so it prints the first warning::

  WARNING There are variables of unknown type

There are 2 solutions to fix it, one is annotation by updating script. For example:

.. code-block:: python

   def fib(obj: QuickFibo, n):
       obj.name = 'fibo'
       obj.value = n
       obj.run()
       return obj.result

Another is to set variable type by pyarmor option, no touch script. For example::

  $ pyarmor env -p push rft_option:var_type_table "fibo:fib.obj QuickFibo"

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

  $ pyarmor env -p rft_option:rft_exclude_args fibo:show

Now build project again::

  $ pyarmor build --rft
  $ cat dist/fibo.py

Generate Mini Script
====================

First install package :term:`pyarmor.mini`::

  $ pip install pyarmor.mini

We will still use the project created in the previous example and generate :term:`Mini Script` with the same configuration::

  $ pyarmor build --mini

Check the obfuscated script::

  $ cat dist/fibo.py

Run it::

  $ python dist/fibo.py

Generally, if something is wrong with :term:`Mini Script`, try to generate :term:`RFT Script` and make sure it works, then generate :term:`Mini Script` with same configuration

Publish Mini Script
===================

When publishing :term:`Mini Script`, it need package :term:`pyarmor.mini` too.

Or install package :term:`pyarmor.mini` in the target machine::

  $ pip install pyarmor.mini

Note that now only the following platforms support :term:`Mini Script`

- linux.x86_64, darwin.x86_64, windows.x86_64
- linux.aarch64, darwin.arm64

Support Freethreading
---------------------

:term:`Mini Script` supports freethreading in Python 3.13+

Just using free-threaded Python interpreter to install package :term:`pyarmor.mini`, for example::

  $ python3.13t -m pip install pyarmor.mini

Make sure `pip >=24.1`, it will install free-threaded extension `pyarmor_minit` with suffix `t`, the installed wheel tag includes `cp3.13t`

Refactor Package
================

First create one project with package `tomjson`::

  $ pyarmor init --clean -p tomjson

Because the package will be imported by outer scripts, the exported classes and functions can't be renamed

In order to keep these names, one way is to enable option `rft_auto_export`::

  $ pyarmor env -p set rft_option:rft_auto_export 1

Thus all the names list in the module attribute ``__all__`` aren't changed, and

- If this is one class, no rename all the attributes and methods
- If this is one function, no rename function arguments

Another way is to export names by option `rft_exclude_names`. For example::

  $ pyarmor env -p push rft_option:rft_exclude_names \
          tomjson:load tomjson:loads tomjson:dump tomjson:dumps

Then build this package::

  $ pyarmor build --rft

Create Complex Project
======================

.. program:: pyarmor init

Let's create one comple project, include one script `jsontool.py` and package `tomjson`, but no `fibo.py` and path `venv`::

  $ pyarmor init --clean --src . --exclude fibo.py --exclude venv

Because there is no :option:`--entry`, :option:`--module` and :option:`--package`, so pyarmor will search all the files and paths in the :option:`--src`, all of them except in the excludes will be added into the project.

Refactor this project::

  $ pyarmor build --rft

Run the final script::

  $ python dist/jsontool.py

Solve Refactor Issues
=====================

For complex scripts, it need some extra configuration to make it works.

Pyarmor also provides one option to fix these issues by simple and rough way, run the following command repeatly, until there is no warning::

  $ pyarmor build --rft --auto-fix

Generally twice is enough.

How it works?

First in auto-fix mode, it always set argument refactor to `1`::

  $ pyarmor env -p set rft_option:rft_argument 1

It means only position-only arguments are renamed (the default value `3` means all the arguments are renamed)

Second, in each refactor processing, it will log all unknown attributes, and append them to option `rft_exclude_names` before next round::

  $ pyarmor env -p set rft_option:rft_exclude_names xxxx

By this way, all the names like `xxxx` in any place won't be renamed.
