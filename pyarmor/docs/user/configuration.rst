=======================
 Configuration Options
=======================

.. contents:: Content
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

Bool value is 0, 1

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

       Each pattern is fnmatch 格式的字符串

       默认情况下是匹配搜索目录下面的名称，不会匹配多级目录

       如果仅在某一个包中排除，使用包名称前缀模式 `pkgname:pattern`

       使用 `:` 开始的模式仅用于排除工程路径下面的文件和目录

       例如，常见的排除模式::

         venv
         __pycache__
         test*.py
         joker:data
         :find.py
   * - recursive
     - Bool
     - Recursively search modules and packages in project src

Section: rft_option
-------------------

List all the options and values in this section::

  $ pyarmor env -p info rft_option

Get only one option value. For example, `rft_argument`::

  $ pyarmor env -p get rft_option:rft_argument

Set option value. For example::

  $ pyarmor env -p set rft_option:rft_argument 0

.. flat-table:: Table-4. Section `rft_option` Options
   :widths: 20 10 10 60
   :header-rows: 1

   * - 选项
     - 类型
     - 默认值
     - 说明
   * - rft_remove_assert
     - 布尔
     - 0
     - 是否删除脚本中 assert 语句
   * - rft_remove_docstr
     - 布尔
     - 0
     - 是否删除脚本中所有 docstring
   * - rft_builtin
     - 布尔
     - 0
     - 是否重命名内置名称，例如 print 等
   * - rft_argument
     - 枚举
     - all
     - 重命名参数的方式，可用值

       - 0: "no", 不重名所有函数的参数
       - 1: "pos", 仅重命名 posonly 参数
       - 2: "!kw"，仅保留 kwonly 的参数名称，其他都重命名
       - 3: "all", 重命名所有函数的参数（默认值）
   * - rft_auto_export
     - 布尔
     - 0
     - 是否输出模块属性 `__all__` 中列出的名称

       输出的名称在重构过程中不会被重命名

       如果输出的名称是类，那么类的方法和属性也不会重命名

       如果输出的名称是函数，那么函数的参数也不会重命名

       模块 ``__all__`` 的名称可能是模块内部定义的，也可能是导入的名称

       如果是导入的名称，在被导入的模块中也不会重命名该名称
   * - rft_exclude_names
     - 模式列表
     -
     - 列出不能重命名的模块，函数，类，方法，属性

       支持的格式如下::

          "name"               所有模块中的函数，方法，类，属性
          "cls.name"           所有模块中指定类的方法和属性

          "modname:name"       限制在指定模块内部
          "modname:cls.name"

          "modname:*"          不重命名指定模块的所有类和方法
          "^name"              限定名称在模块层

       这里面列出的名称仅对模块内部定义的名称有效，对于导入的名称无效

       参数和局部变量总是会被重命名，这里列出的名称对参数和局部变量不起作用
   * - rft_exclude_args
     - 模式列表
     -
     - 这里面列出的函数名称，对应的参数都不进行重命名::

          "func"
          "modname:func"
          "modname:cls.method"

       以 "!" 开头的模式表示该函数的参数依旧会进行重命名，例如::

          "!func"
          "!modname:func"
          "!modname:cls.method"

       主要是为了不在警告信息中显示该函数，否则总是在日志中显示警告
   * - extra_builtins
     - 名称列表
     -
     - 除了 builtins 模块之外，需要作为内置名称进行处理的额外名称
   * - var_type_table
     - 列表
     -
     - 多行列表，每一行对应一个变量类型，支持的格式如下::

          modname:func.var typename
          modname:cls.method.var typename

       如果变量是属于 For/With/Except/Comprehension 中的变量，那么::

          {modname:func.var} typename

       typename 支持的格式:

       - "cls" 当前模块中定义的类名称
       - "modname:cls" 在其它模块中定义的类名称
       - "<any>" 内置类型名称，该变量的所有属性都不会进行重命名
   * - extra_type_info
     - 列表
     -
     - 较少使用，用来指定已知类型的额外属性信息，包括额外的属性::

          modname:cls attrname1:typename attrname2:typename

       指定已知属性的返回类型::

          modname:cls (method1):typename (method2):typename

       指定已知属性的子元素类型，例如::

          modname:cls [attrname1]:typename1,typename2

   * - on_unknown_attr
     - 枚举
     - log
     - 遇到不知道如何处理的属性链的处理方式:

       - "ask" 询问用户进行处理
       - "log" 记录到日志（默认选项）
       - "yes" 直接重命名
       - "no"  不重名，也不记录到日志
       - "err" 报错退出
