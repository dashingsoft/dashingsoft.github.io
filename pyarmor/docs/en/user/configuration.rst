.. include:: ../_header_note.txt

===============
 Configuration
===============

.. contents:: Content
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

Bool value is 0, 1

Project configuration is stored in the :file:`.pyarmor/config`

Project Domain
==============

List all the options and values in this domain::

  $ pyarmor env -p info

Get only one option value. For example::

  $ pyarmor env -p get src

Set option value. For example::

  $ pyarmor env -p set src "workspace/project/src"

.. flat-table:: Table-3. Project Options
   :widths: 10 30 60
   :header-rows: 1

   * - Option
     - Type
     - Remark
   * - src
     - Path
     - Absolute path, where to search project modules and packages
   * - scripts
     - List
     - List all scripts, may be empty, one or many files

       Each file is relative to src, wildcard is possible. For example::

         foo.py
         fib*.py
   * - modules
     - List
     - List all modules, may be empty, one or many files

       Each file is relative to src, wildcard is possible. For example::

         joker.py
         card*.py
   * - packages
     - List
     - List all packages, each package is one path

       Each path is relative to src, or absolute path, wildcard is possible

       The package name is last path name, use suffix `@pkgname` if they're different

       For example::

         lib/mypkg1
         ../tools/mypkg2
         src@mypkg
   * - excludes
     - List
     - Exclude patterns in this list when search modules and packages

       Each pattern is matched by `fnmatch.fnmatchcase`

       Each pattern only matches one level path by default

       If only match files in one package, use prefix pattern `pkgname:pattern`

       If pattern starts with `:`, only match paths and files in project src

       For example::

         venv
         __pycache__
         test*.py
         joker:data
         :find.py
   * - recursive
     - Bool
     - Enable to search modules and packages in project src
   * - pypaths
     - List
     - Extra Python paths to import module on demand::

         path
         path,path
         modname::path,path

       Used by wildcard import or outer base classes. For examle::

         import a
         from b import *

         class C(a.T):
             pass

Section: rft
------------

List all the options and values in this section::

  $ pyarmor env -p info rft

Get only one option value. For example, `argument_mode`::

  $ pyarmor env -p get rft:argument_mode

Set option value. For example::

  $ pyarmor env -p set rft:argument_mode 0

.. flat-table:: Table-4. Section `rft` Options
   :widths: 20 10 10 60
   :header-rows: 1

   * - Option
     - Type
     - Default
     - Remark
   * - remove_assert
     - Bool
     - 0
     - Remove `assert` statement in the script
   * - remove_docstr
     - Bool
     - 0
     - Remove all the docstring in the script
   * - builtin_mode
     - Bool
     - 0
     - Rename builtin names such as `print` etc.
   * - argument_mode
     - Enum
     - 3
     - How to rename arguments in the function

       - 0: no touch arguments
       - 1: only rename position-only arguments
       - 2: rename all the arguments except keyword-only arguments
       - 3: rename all the arguments
   * - export_mode
     - Bool
     - 0
     - Export all the names list in the module attribute `__all__`

       Exported names won't be renamed
   * - exclude_names
     - List
     -
     - No rename these classes, functions, attributes when reforming the scripts

       The support format is fnmatch pattern. For example::

          "inc"
          "dir*"

       Note that arguments and local variables are always renamed
   * - exclude_funcs
     - List
     -
     - List all the functions which arguments can't be reformed

       The support formats::

          "func"
          "modname::func"
          "modname::cls.method"
   * - attr_rules
     - List
     -
     - Define how to rename unknown attributes

       One rule one line. For example::

         modname::scope:a.b.c
         !modname::scope:a.b.c
         modname::scope:a.b.c *.?.?

       The first line will rename all attributes `b.c`, on the contrary the second form won't

       The third form only renames attribute by action `?`
   * - call_rules
     - List
     -
     - Define keywords in which function call should be renamed::

         foo
         visit*
         modname::foo
         pkg.mod::foo*
   * - extra_builtins
     - List
     -
     - Extra builtin name
   * - external_types
     - List
     -
     - Classes aren't defined in the project, supported formats::

         modname
         modname::*
         modname::Cls
         modname::Cls*

       The first line is same as the second line, only modname means all the classes defined in the module.
   * - external_attrs
     - List
     -
     - Outer attributes should not be renamed
