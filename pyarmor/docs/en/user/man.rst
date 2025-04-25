=====
 Man
=====

.. contents:: Content
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

pyarmor init
============

.. program:: pyarmor init

In current path create project, update project and show project information

.. describe:: Syntax

   [#]_ pyarmor init -h

   [#]_ pyarmor init [-C] [-s PATH] [-x PATTERN] [-r]

   [#]_ pyarmor init [-e FILE] [-m FILE] [-p PATH]

   [#]_ pyarmor init

   .. rubric:: Description

   .. [#] Show help
   .. [#] Create project, set project src, add contents in the src to project
   .. [#] Add specified items to project
   .. [#] Show project information

.. describe:: Option

.. option:: -s PATH, --src PATH

   Specify project src, absolute path or relative path

.. option:: -x PATTERN, --exclude PATTERN

   Exclude patterns when searching files in project src

   It supports `fnmatch` wildcards

   Use this option multiple times to exclude more

   For example::

       __pycache__
       config.py
       test_*.py
       data*

   If need exclude one package items, use package as prefix. For example::

       pkgname:test_*.py
       pkgname:config

.. option:: -e FILE, --entry FILE

   Add script to project, use this option multiple times for more scripts

   It could be absolute path, or relative path. For example::

       $ pyarmor init --src ../joker -e ../joker/card.py

   Note that wildcard is allowable, but quote it. For example::

       $ pyarmor init --src ../joker -e "../joker/*.py"

   Project script should not be imported by any other moudles

.. option:: -m FILE, --module FILE

   Add module to project, use this option multiple times for more module

   It's almost same as :option:`-e`, but project module could be imported by scripts or other modules

.. option:: -p PATH, --package PATH

   Add package to project, use this option multiple times for more packages

   The package name is last path name. For example, add package `joker` to project::

      $ pyarmor init -p lib/joker

   If package name is different, use suffix `@pkgname`. For example::

      $ pyarmor init -p lib/src@joker

.. option:: -r, --recursive

   Enable to search modules and packages in project src

.. option:: -C, --clean

   Remove all old project information before create new project

.. describe:: Usage

   Create one project, add all scripts and packages in the current path to this project::

      $ pyarmor init -r

   If need exclude some files or paths::

      $ pyarmor init -r --exclude venv --exclude "test*.py"

   If there has project in current path, this command could show project information::

      $ pyarmor init

   Check all the files in the project::

      $ pyarmor build --list

   Re-create project in current path, only include one script::

      $ pyarmor init -C -e foo.py

   By :option:`-C`, all the old project information are removed, otherwise, only update project

   After project is created, use :command:`pyarmor env` to update project

.. describe:: Examples

All of these examples assume there is still no project in work path

1. Create one project which include all the scripts and packages in current path::

    $ pyarmor init -r

2. Same as above, but not include path `venv` and all scripts which start with `test`::

    $ pyarmor init -r --exclude venv --exclude "test*.py"

3. Update project src, :option:`-C` is required to clean old project::

    $ pyarmor init -C --src another/src -r

4. Create one project which src is not current path::

    $ pyarmor init -s eke/src -r

5. Create one project with only one script::

    $ pyarmor init -e foo.py

6. Create one project with only one module::

    $ pyarmor init -m fibo.py

7. Create one project with one package `joker` which locates in the sub-folder`joker`::

    $ pyarmor init -p joker

8. Create one project with one package `joker` which locates in the `joker/src`::

    $ pyarmor init -p joker/src@joker

9. Create one project with many packages::

    $ pyarmor init -p mypkg -p lib/mypkg1 -p lib/mypkg2

10. Create one project with script, module and package::

    $ pyarmor init -e main.py -m lib/*.py -p lib/mypkg

pyarmor env
===========

.. program:: pyarmor env

Get or set Pyarmor configuration and project settings

There are 3 domains for this command:

- global
- local
- project

Each doamin has many sections, each section has many options

For the same options, the priority is project domain > local domain > global domain

Refer to :doc:`configuration` for all available options

.. describe:: Syntax

   [#]_ pyarmor env -h

   [#]_ pyarmor env [-l | -g | -p] info [NAME]

   [#]_ pyarmor env [-l | -g | -p] get OPTION

   [#]_ pyarmor env [-l | -g | -p] set OPTION VALUE

   [#]_ pyarmor env [-l | -g | -p] reset OPTION

   [#]_ pyarmor env [-l | -g | -p] [pop | push] OPTION VALUE ...

   [#]_ pyarmor env [-l | -g | -p]

   .. rubric:: Description

   .. [#] Show help
   .. [#] Show available sections and options, and usage of options
   .. [#] Show option value
   .. [#] Set option value
   .. [#] Restore option default value
   .. [#] Add or remove one item to value list of option
   .. [#] Enter interactive mode

.. describe:: Options

.. option:: -l, --local

   Select local doamin::

     $ pyarmor env -l
     (local) ls

.. option:: -g, --global

   Select global domain::

     $ pyarmor env -g
     (global)

.. option:: -p, --project

   Select project doamin::

     $ pyarmor env -p
     (project)

.. describe:: info

   Show available sections and options, and usage of options

   For example, print all options and sections in project domain::

     $ pyarmor env -p info

     Sections:
     rft

     Options:
     src  scripts  modules  packages  excludes  recursive

     ...

   Show the usage of option `excludes`::

     $ pyarmor env -p info excludes

   Show all the options in section `rft`::

     $ pyarmor env -p info rft

   Show the usage of option `argument_mode` in the section `rft`::

     $ pyarmor env -p info rft:argument_mode

.. describe:: get

   Show option value. For example::

     $ pyarmor env -p get excludes

   OPTION may be format like `SECTION:OPTION`. For example::

     $ pyarmor env -p get rft:argument_mode

.. describe:: set, reset

   Change option value or restore default value. For example::

     $ pyarmor env -p set recursive 1
     $ pyarmor env -p set rft:argument_mode 0

     $ pyarmor env -p reset recursive
     $ pyarmor env -p reset rft:argument_mode

.. describe:: push, pop

   Add or remove one item to value list of option

   For example, add new pattern to project option `excludes`::

      $ pyarmor env -p push excludes "test*.py"

   Add many items in one command::

      $ pyarmor env -p push excludes venv test

   Quote special characaters. For example::

     $ pyarmor env -p push excludes "test 2" "venv 2"

   Remove one item::

      $ pyarmor env -p pop excludes "test*.py"

.. describe:: Interactive Mode

   If this command is executed without action options, it will enter interactive mode. For example::

     $ pyarmor env -p
     (project)

   Type :kbd:`?` then press :kbd:`Enter`, show all commands::

     (project) ?
     cd exit get help info ls pop push reset set use
     (project)

   .. flat-table:: Table-2. Interactive Commands
      :widths: 20 40 40
      :header-rows: 1

      * - Action
        - Description
        - Examples
      * - ?
        - Show command help
        - Show usage of command `ls`::

            (project) ? ls
      * - use
        - Switch domain
        - Swith to global, then back to project::

            (project) use global
            (global) use project
            (project)
      * - ls
        - List all the options and sections in current scope
        - Check options and sections in project domain::

            (project) ls
            Sections:
            rft

            Options:
            src  scripts  modules  packages  excludes  recursive
      * - cd
        - Switch section
        - Enter section `rft`, then back to parent::

            (project) cd rft
            (project)[rft] cd ..
            (project)
      * - get
        - Show option value
        - Show project option `scripts` value::

            (project) get scripts
            scripts              = hanoi.py

          Show all values of project options::

            (project) get
            src                  = /Users/zhaojunde/eksuite/src
            scripts              = hanoi.py
      * - set
        - Change option value
        - Set project option `src` to new path::

            (project) set src /Users/zhaojunde/eksuite/src
      * - reset
        - Restore option value to default
        - Remove project option `src`::

            (project) reset src
      * - push
        - Add one or more items to value list of option
        - Add `foo.py` and `fibo.py` to project scripts::

            (project) push scripts foo.py fibo.py
            (project) push scripts "foo.py" "fibo.py"
      * - pop
        - Remove one item from value list of option
        - Remove script `fibo.py` from project::

            (project) pop scripts fibo.py
      * - info
        - Show option usage or available options
        - Show all sections and options in project domain::

            (project) info

          List all options in section `rft`::

            (project) info rft

          Show option `argument_mode` usage::

            (project) cd rft
            (project)[rft] info argument_mode

pyarmor build
=============

.. program:: pyarmor build

Generate obfuscated scripts for project

.. describe:: Syntax

   [#]_ pyarmor build -h

   [#]_ pyarmor build [--mini | --rft | --mini-rft]

   [#]_ pyarmor build [--autofix {0,1,2,3}]

   [#]_ pyarmor build [--randname {0,1}]

   .. rubric:: Describition

   .. [#] Show help
   .. [#] Generate obfuscated scripts for project
   .. [#] Enable or disable auto-fix mode
   .. [#] Enable or disable random name mode

.. option:: --mini

   Generate :term:`Mini Script` for this project::

     $ pyarmor build --mini

.. option:: --rft

   Generate :term:`RFT Script` for this project::

     $ pyarmor build --rft

.. option:: --mini-rft

   First refactor the scripts as :term:`RFT Script`, then generate :term:`Mini Script` for this project::

     $ pyarmor build --mini-rft

.. option:: --autofix {0,1,2,3}

   This option can fix refactor issues for complex scripts, it support 3 modes

   - 1: simple way, but many attributes may not be renamed
   - 2: normal way, most attributes will be renamed, but sometimes need manually update the rules
   - 3: difficult way, it could rename attributes as many as possible (more than mode 2), need manually add most of rules

   The basic steps are

   1. First start one autofix mode to generate rules. For example::

         $ pyarmor build --autofix 1

   2. Next build the script based on these rules::

         $ pyarmor build --rft

   3. Then test the result script::

         $ python dist/foo.py

   3. Fix rules `.pyarmor/project/rft_autofix.rules` by errors

   4. Loop from step 2, until no error

   Refer to `Refactor complex script by autofix mode <../../learn/en/commands.html#project-rft-autofix>`_

   If need disable auto-fix mode, run this command::

     $ pyarmor build --autofix 0

   Then build project again::

     $ pyarmor build --rft

.. option:: --randname {0,1}

   By default, the names in refactor script are prefix `pyarmor__` with one serial number. For example::

     pyarmor__1 = 1
     pyarmor__2 = 'a'

   If this option is enabled, the suffix will be random name. For example::

     $ pyarmor build --randname 1
     $ pyarmor build --rft
     $ cat dist/foo.py

     pyarmor20af2cdf6a = 1
     pyarmor5688af382c = 'a'

   If need disable random name mode, run this command::

      $ pyarmor build --randname 0

   Then build project again::

      $ pyarmor build --rft
