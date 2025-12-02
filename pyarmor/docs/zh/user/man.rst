.. include:: ../_header_note.txt

==========
 命令手册
==========

.. contents:: 目录
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

pyarmor init
============

.. program:: pyarmor init

在当前目录创建工程，修改工程和显示工程信息

.. describe:: 语法

   [#]_ pyarmor init -h

   [#]_ pyarmor init [-C] [-s PATH] [-x PATTERN] [-r]

   [#]_ pyarmor init [-e FILE] [-m FILE] [-p PATH]

   [#]_ pyarmor init

   .. rubric:: 说明

   .. [#] 显示命令帮助
   .. [#] 创建工程，指定工程源路径，并把该路径下的模块和包增加到工程
   .. [#] 增加指定的脚本，模块和包到工程
   .. [#] 显示当前目录的工程信息

.. describe:: 选项

.. option:: -s PATH, --src PATH

   工程源路径，相对路径或者绝对路径，默认值是当前路径

.. option:: -x PATTERN, --exclude PATTERN

   搜索工程源路径的时候排除匹配的文件或者目录，使用 fnmatch 的格式进行匹配

   该选项可以使用多次，任何一个模式匹配的文件都会被排除在工程之外

   模式可以包含通配符，匹配任意目录下面的文件或者目录名称，例如::

       __pycache__
       config.py
       test_*.py
       data*

   如果需要匹配指定包下面的文件和目录，使用包前缀模式，例如::

       pkgname:test_*.py
       pkgname:config

.. option:: -e FILE, --entry FILE

   指定工程脚本，相对路径或者绝对路径的文件，可以使用多次指定多个脚本

   如果是相对路径的话，总是相对于当前路径，例如::

       $ pyarmor init --src ../joker -e ../joker/card.py

   支持使用通配符，如果使用通配符的话，必须使用引号，例如::

       $ pyarmor init --src ../joker -e "../joker/*.py"

   脚本是不会被工程中其他任何其他模块导入的模块

.. option:: -m FILE, --module FILE

   指定工程模块，相对路径或者绝对路径的文件，可以使用多次指定多个模块

   相对路径和通配符的使用方法和 :option:`-e` 相同

.. option:: -p PATH, --package PATH

   指定包所在的路径，相对路径或者绝对路径，可以使用多次指定多个包

   相对路径和通配符的使用方法和 :option:`-e` 相同

   包的默认名称是最后一级的路径名称，例如，添加包 `joker` 到工程::

      $ pyarmor init -p lib/joker

   如果包名称和路径名称不一致，使用后缀 `@pkgname` 指定包名称，例如::

      $ pyarmor init -p lib/src@joker

.. option:: -r, --recursive

   搜索工程目录下面的模块和包的模式，没有指定该选项，则不会搜索工程目录

.. option:: -C, --clean

   在创建工程之前，清空原来的工程设置，创建一个空白工程

   一般用于当前目录之前已经创建了工程，需要重新设置工程信息

.. describe:: 用法

   创建一个新的工程，增加当前路径下面的所有脚本和目录到工程中::

      $ pyarmor init -r

   需要把文件或者目录排除在工程之外，使用下面的方式::

      $ pyarmor init --exclude venv --exclude "test*.py"

   如果当前目录已经创建了工程，该命令也可以显示当前工程配置::

      $ pyarmor init

   查看工程中包含的所有脚本和模块::

      $ pyarmor build --list

   重新创建工程，只包含一个脚本::

      $ pyarmor init -C -e foo.py

   使用 :option:`-C` ，会删除原来所有的工程设置，否则仅仅修改工程设置

   创建工程之后，也可以使用命令 :command:`pyarmor env` 修改工程配置

.. describe:: 示例

下面的所有示例中都假定当前目录还没有创建工程

1. 创建一个工程，包含当前目录下面的所有脚本和所有子目录::

    $ pyarmor init -r

2. 和上例类似，但是排除目录 venv 和所有 test 开头的脚本::

    $ pyarmor init -r --exclude venv --exclude "test*.py"

3. 修改当前工程的路径，需要使用选项 :option:`-C` 清除原来的工程路径::

    $ pyarmor init -C --src another/src -r

4. 创建一个工程，包含其他目录下面的所有脚本和目录::

    $ pyarmor init -s eke/src -r

5. 创建包含单独一个脚本的工程::

    $ pyarmor init -e foo.py

6. 创建包含单独一个模块的工程::

    $ pyarmor init -m fibo.py

7. 创建单独一个包 joker 的工程，包路径在当前目录下面的子目录 `joker`::

    $ pyarmor init -p joker

8. 创建单独一个包 joker 的工程，包路径在当前目录下面的 `joker/src`::

    $ pyarmor init -p joker/src@joker

9. 创建包含多个包的工程，在不同目录::

    $ pyarmor init -p mypkg -p lib/mypkg1 -p lib/mypkg2

10. 创建包含脚本，模块以及包的工程::

    $ pyarmor init -e main.py -m lib/*.py -p lib/mypkg

pyarmor env
===========

.. program:: pyarmor env

用于修改 Pyarmor 所有配置选项和工程设置

Pyarmor 的配置有三个域:

- 全局域
- 本地域
- 工程域

每一个域都有若干节，每一节中有若干配置选项

对于相同的配置选项，其优先级是工程域 > 本地域 > 全局域

默认是本地域，所有选项和节请参考 :doc:`configuration`

.. describe:: 语法

   [#]_ pyarmor env -h

   [#]_ pyarmor env [-l | -g | -p] info [NAME]

   [#]_ pyarmor env [-l | -g | -p] get OPTION

   [#]_ pyarmor env [-l | -g | -p] set OPTION VALUE

   [#]_ pyarmor env [-l | -g | -p] reset OPTION

   [#]_ pyarmor env [-l | -g | -p] [pop | push] OPTION VALUE ...

   [#]_ pyarmor env [-l | -g | -p]

   .. rubric:: 说明

   .. [#] 显示命令帮助
   .. [#] 显示可用选项和节，以及选项的使用用法
   .. [#] 显示选项的值
   .. [#] 设置选项的值
   .. [#] 清除选项设置，恢复到默认值
   .. [#] 增加或者删除列表选项中的一个或者多个值
   .. [#] 进入交互命令模式

.. describe:: 选项

.. option:: -l, --local

   查看和修改本地域的选项设置::

     $ pyarmor env -l
     (local) ls

.. option:: -g, --global

   查看和修改全局域的选项设置::

     $ pyarmor env -g
     (global)

.. option:: -p, --project

   查看和修改工程的选项设置::

     $ pyarmor env -p
     (project)

.. describe:: info

   显示可用的节和选项，当前选项的设置，以及选项的使用方法

   例如，查看工程域的所有选项和节，以及选项的当前值::

     $ pyarmor env -p info

     Sections:
     rft

     Options:
     src  scripts  modules  packages  excludes  recursive

     ...

   显示工程域中选项 excludes 的用法和当前设置::

     $ pyarmor env -p info excludes

   显示工程域中的节 rft 中所有选项和选项的设置::

     $ pyarmor env -p info rft

   显示工程域中的节 rft 中选项 argument_mode 的设置和使用方法::

     $ pyarmor env -p info rft:argument_mode

.. describe:: get

   get 用于查看选项的值，例如::

     $ pyarmor env -p get excludes

   OPTION 也可以使用 SECTION:OPTION 的格式，例如::

     $ pyarmor env -p get rft:argument_mode

.. describe:: set 和 reset

   set 用于设置选项的值，reset 用于恢复选项的默认值，例如::

     $ pyarmor env -p set recursive 1
     $ pyarmor env -p set rft:argument_mode 0

     $ pyarmor env -p reset recursive
     $ pyarmor env -p reset rft:argument_mode

.. describe:: push 和 pop

   push 和 pop 用于修改列表型选项，增加或者删除一个或者多个值

   例如向工程选项 excludes 中增加一个新的值::

      $ pyarmor env -p push excludes "test*.py"

   同时增加多个值::

      $ pyarmor env -p push excludes venv test

   如果值中包含空格，需要使用引号，例如::

     $ pyarmor env -p push excludes "test 2" "venv 2"

   删除一个值::

      $ pyarmor env -p pop excludes "test*.py"

.. describe:: 交互模式

   直接执行命令而没有参数的话，会进入交互模式。例如::

     $ pyarmor env -p
     (project)

   输入 :kbd:`?` 然后在键入 :kbd:`Enter` ，显示所有可用的交互命令::

     (project) ?
     cd exit get help info ls pop push reset set use
     (project)

   .. flat-table:: 表-2. 交互命令表
      :widths: 20 40 40
      :header-rows: 1

      * - 命令
        - 功能
        - 示例
      * - ?
        - 显示命令帮助
        - 显示命令 `ls` 的用法::

            (project) ? ls
      * - use
        - 切换不同的域
        - 切换到全局域，然后切换回到工程域::

            (project) use global
            (global) use project
            (project)
      * - ls
        - 列出当前可用的选项和节
        - 查看工程域中的选项和节::

            (project) ls
            Sections:
            rft

            Options:
            src  scripts  modules  packages  excludes  recursive
      * - cd
        - 切换到不同的组
        - 进入到组 rft，然后在返回上一级::

            (project) cd rft
            (project)[rft] cd ..
            (project)
      * - get
        - 显示选项的值
        - 显示工程选项 scripts 的值和所有已经设置的工程选项值::

            (project) get scripts
            scripts              = hanoi.py

            (project) get
            src                  = /Users/zhaojunde/eksuite/src
            scripts              = hanoi.py
      * - set
        - 设置选项的值
        - 设置工程选项 src 的值::

            (project) set src /Users/zhaojunde/eksuite/src
      * - reset
        - 恢复选项的默认值
        - 清除工程选项 src 的值::

            (project) reset src
      * - push
        - 增加一个值或者多个值到列表类型的选项
        - 增加脚本 `foo.py` 和 `fibo.py` 到工程脚本中::

            (project) push scripts foo.py fibo.py
            (project) push scripts "foo.py" "fibo.py"
      * - pop
        - 从列表类型的选项中删除一个值或者多个值
        - 从工程脚本中删除 `fibo.py`::

            (project) pop scripts fibo.py
      * - info
        - 显示节中的选项，或者选项的用法
        - 显示工程域的所有选项和节::

            (project) info

          显示节 `rft` 的所有选项::

            (project) info rft

          显示选项 `argument_mode` 的使用方法::

            (project) cd rft
            (project)[rft] info argument_mode

pyarmor build
=============

.. program:: pyarmor build

加密工程中的所有脚本，生成相应类型的加密脚本

.. describe:: 语法

   [#]_ pyarmor build -h

   [#]_ pyarmor build [--mini | --rft | --mini-rft | --vmc | --vmc-rft | --ecc | --ecc-rft]

   [#]_ pyarmor build [--autofix {0,1,2,3}]

   [#]_ pyarmor build [--randname {0,1}]

   .. rubric:: 说明

   .. [#] 显示命令帮助
   .. [#] 加密工程中所有脚本
   .. [#] 启用或者禁用自动重构模式
   .. [#] 启用随机名称重命名脚本

.. option:: --mini

   构建工程，工程中的所有脚本都生成相应的迷你型加密脚本::

     $ pyarmor build --mini

.. option:: --vmc

   构建工程，工程中的所有脚本都生成相应的虚拟型加密脚本::

     $ pyarmor build --vmc

.. option:: --ecc

   构建工程，工程中的所有脚本都生成相应的嵌入型加密脚本::

     $ pyarmor build --ecc

.. option:: --rft

   构建工程，工程中的所有脚本都生成相应的重构型加密脚本::

     $ pyarmor build --rft

.. option:: --mini-rft

   构建工程，工程中的所有脚本首先进行重构，然后在生成相应的迷你型加密脚本::

     $ pyarmor build --mini-rft

.. option:: --vmc-rft

   构建工程，工程中的所有脚本首先进行重构，然后在生成相应的虚拟嵌入型加密脚本::

     $ pyarmor build --vmc-rft

.. option:: --ecc-rft

   构建工程，工程中的所有脚本首先进行重构，然后在生成相应的嵌入型加密脚本::

     $ pyarmor build --vmc-rft

.. option:: --autofix {0,1,2,3}

   该选项可自动生成重构规则，解决重构之后导致的脚本无法运行问题，共支持三种模式

   - 模式 1 使用最简单，一般不需要人工增加规则，但是可能很多属性都没有重命名
   - 模式 2 使用较为复杂的方式，大部分的属性都会重命名，但是有时候需要人工修改规则
   - 模式 3 使用最麻烦，但是能够重命名绝大部分属性，一般必须要人工修改规则

   基本的使用步骤是

   1. 首先启动自动重构模式，生成规则。例如::

         $ pyarmor build --autofix 1

   2. 其次执行相应的构建命令::

         $ pyarmor build --rft

   3. 然后运行重构后的脚本::

         $ python dist/foo.py

   3. 根据出现的问题修正规则文件 `.pyarmor/project/rft_autofix.rules`

   4. 从第二步可以重新构建并执行，循环修正直到脚本运行没有问题

   详细过程请参阅功能手册中的 `使用自动修正模式重构复杂脚本 <../../../learn/zh/commands.html#project-rft-autofix>`_

   如果不需要使用自动重构模式，那么使用下面的命令::

     $ pyarmor build --autofix 0

   然后在重新进行构建::

     $ pyarmor build --rft

.. option:: --randname {0,1}

   默认情况下，重构后脚本中的名称是固定前缀和顺序号，例如::

     pyarmor__1 = 1
     pyarmor__2 = 'a'

   如果启用随机名称，那么顺序号会替换成为随机名称，例如::

     $ pyarmor build --randname 1
     $ pyarmor build --rft
     $ cat dist/foo.py

     pyarmor20af2cdf6a = 1
     pyarmor5688af382c = 'a'

   如果需要禁用随机名称，那么::

      $ pyarmor build --randname 0

   然后重构工程::

      $ pyarmor build --rft
