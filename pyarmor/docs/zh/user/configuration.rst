==========
 配置选项
==========

.. contents:: 目录
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

布尔类型的值为 0, 1

配置选项存放在文件 `.pyarmor/config` 中

工程域
======

查看工程域的所有选项和节，以及选项的当前值::

  $ pyarmor env -p info

查看单个选项的值，例如::

  $ pyarmor env -p get src

设置选项的值，例如::

  $ pyarmor env -p set src "workspace/project/src"

.. flat-table:: 表-3. 工程选项表
   :widths: 10 30 60
   :header-rows: 1

   * - 选项
     - 类型
     - 说明
   * - src
     - 路径
     - 绝对路径，工程搜索模块和包的路径
   * - scripts
     - 文件列表
     - 工程的脚本，可以为空，也可以是一个或者多个文件

       脚本一般是不会被工程中其他脚本和模块导入，是直接被执行的文件

       文件是相对于 src 的路径或者绝对路径，可以包含通配符，例如::

         foo.py
         fib*.py
   * - modules
     - 文件列表
     - 工程的模块，可以为空，也可以是一个或者多个文件

       文件是相对于 src 的路径或者绝对路径，可以包含通配符，例如::

         joker.py
         card*.py
   * - packages
     - 路径列表
     - 工程的包，相对于 src 的路径或者绝对路径，可以有通配符

       包的名称默认为最后一级的目录名称

       如果不一致的话，使用后缀 `@pkgname` 指定包的名称

       例如::

         lib/mypkg1
         ../tools/mypkg2
         src@mypkg
   * - excludes
     - 模式列表
     - 搜索模块和包的时候排除列表中指定的文件或者路径

       模式是 fnmatch 格式的字符串

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
     - 布尔
     - 递归搜索工程路径下的模块和包
   * - pypaths
     - 列表
     - 指定动态导入模块时候的额外路径，支持的格式::

         path
         path,path
         modname::path,path

       主要用于重构的时候需要导入基类，以及获取 wildcard 导入的名称::

         import a
         from b import *

         class C(a.T):
             pass

.. _rft-section:

rft
---

显示节 rft 中所有选项和选项的设置::

  $ pyarmor env -p info rft

查看单个选项的值，例如::

  $ pyarmor env -p get rft:argument_mode

设置选项的值，例如::

  $ pyarmor env -p set rft:argument_mode 1

.. flat-table:: 表-4. 节 rft 选项表
   :widths: 20 10 10 60
   :header-rows: 1

   * - 选项
     - 类型
     - 默认值
     - 说明
   * - remove_assert
     - 布尔
     - 0
     - 是否删除脚本中 assert 语句
   * - remove_docstr
     - 布尔
     - 0
     - 是否删除脚本中所有 docstring
   * - builtin_mode
     - 布尔
     - 0
     - 是否重命名内置名称，例如 print 等
   * - argument_mode
     - 枚举
     - 3
     - 重命名参数的方式，可用值

       - 0: 不重名所有函数的参数
       - 1: 仅重命名 posonly 参数
       - 2: 仅保留 kwonly 的参数名称，其他都重命名
       - 3: 重命名所有函数的参数（默认值）
   * - export_mode
     - 布尔
     - 0
     - 是否输出模块属性 `__all__` 中列出的名称

       输出的名称在重构过程中不会被重命名

       如果输出的名称是类，那么类的方法和属性也不会重命名

       如果输出的名称是函数，那么函数的参数也不会重命名

       模块 ``__all__`` 的名称可能是模块内部定义的，也可能是导入的名称

       如果是导入的名称，在被导入的模块中也不会重命名该名称
   * - exclude_names
     - 模式列表
     -
     - 列出不能重命名的类，函数，方法和属性的名称

       支持的格式是 fnmatch 的模式，例如::

          "inc"
          "dir*"

       参数和局部变量总是会被重命名，这里列出的名称对参数和局部变量不起作用
   * - exclude_funcs
     - 模式列表
     -
     - 这里面列出的函数名称，对应的参数都不进行重命名::

          "func"
          "modname::func"
          "modname::cls.method"
   * - attr_rules
     - 模式列表
     -
     - 处理未知类型的属性的时候，自定义重命名规则

       一个规则占一行，支持如下格式::

         modname::scope:a.b.c
         !modname::scope:a.b.c
         modname::scope:a.b.c *.?.?

       第一种格式所有的属性都重命名，第二种格式正好相反，所有的属性都不重命名

       第三种格式是指定需要重命名的属性， `?` 对应的属性重命名
   * - call_rules
     - 模式列表
     -
     - 处理函数调用的时候，重命名匹配函数的关键字参数

       支持的格式为函数名称，或者指定模块内的函数，支持通配符，例如::

         foo
         visit*
         modname::foo
         pkg.mod::foo*

   * - extra_builtins
     - 名称列表
     -
     - 除了 builtins 模块之外，需要作为内置名称进行处理的额外名称

       支持的格式为空格分开的名称，可以多行
   * - external_types
     - 外部类列表
     -
     - 处理未知类型的属性的时候，自动排除外部类的属性，支持的格式::

         modname
         modname::*
         modname::Cls
         modname::Cls*

       只有模块名称则模块中所有的类的属性都会被排除，第一行和第二行是等价的
   * - external_attrs
     - 外部属性表
     -
     - 处理未知类型的属性的时候，自动排除这里列出的属性

       支持的格式为空格分开的名称，可以多行，不支持通配符

..
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

          modname:cls method1():typename method2():typename

       指定已知属性的子元素类型，例如::

          modname:cls attrname1[]:typename1,typename2

   * - on_unknown_attr
     - 枚举
     - log
     - 遇到不知道如何处理的属性链的处理方式:

       - "ask" 询问用户进行处理
       - "log" 记录到日志（默认选项）
       - "yes" 直接重命名
       - "no"  不重名，也不记录到日志
       - "err" 报错退出

       该选项功能尚未实现

..
  下列选项为内部选项，

  - rft_str_keywords

    这种类型的规则可以重命名指定范围（模块，函数，工程）中的字符串常量，包括字典常量中的 Key，以及下标 Subscript 的 Key

    默认情况下，函数参数会全部重命名。例如:

    .. code:: python

      def show(a, b, /, c, d=2, *args, **kwargs):
          ...

      # 重构之后
      def pyarmor__1(pyarmor__2, pyarmor__3, pyarmor__4, pyarmor__5=2, *pyarmor__6, **pyarmor__7):
          ...

    但是这样可能会导致调用函数的时候出现参数找不到的错误

    因为函数调用的时候可能通过多种形式指定参数名称，例如

    .. code:: python

       # case 1: 这种情况会自动识别和处理
       show(2, 5, c=2, d=8)

       # case 2: 参数名称在 dict 常量中
       kwarg = { 'c': 1, 'd': 3 }
       show(1, 9, **kwarg)

       # case 3: 参数名称在 subscript 中的字符串常量
       kwarg['c'] = 8
       show(1, 10, **kwarg)

       # case 4: 参数是 dict 函数的关键字参数
       kwarg = dict(d=6)
       show(1, 10, 5, **kwarg)

    默认情况下不会对字符串进行重命名，所以除了第一种情况外，其他情况都不会进行自动处理。重构后的代码如下:

    .. code:: python

       # case 1: 这种情况会自动识别和处理
       pyarmor__1(2, 5, pyarmor__4=2, pyarmor__5=8)

       # case 2: 字符串参数不会重构
       pyarmor__10 = { 'c': 1, 'd': 3 }
       pyarmor__1(1, 9, **pyarmor__10)

       # case 3: 参数名称在 subscript 中的字符串常量
       pyarmor__10['c'] = 8
       pyarmor__1(1, 10, **pyarmor__10)

       # case 4: 参数是 dict 函数的关键字参数
       pyarmor__10 = dict(d=6)
       pyarmor__1(1, 10, 5, **pyarmor__10)

    为了修改字符串中的关键字参数名称 `c` 和 `d` ， 需要使用下面的命令增加规则::

      $ pyarmor env push rft:rft_str_keywords "fibo:show c d"

    这样重构之后会修改字符串和字典常量中关键字字符串，例如:

    .. code:: python

       # case 1: 这种情况会自动识别和处理
       pyarmor__1(2, 5, pyarmor__4=2, pyarmor__5=8)

       # case 2: 字符串参数名称进行了重命名
       pyarmor__10 = { 'pyarmor__4': 1, 'pyarmor__5': 3 }
       pyarmor__1(1, 9, **pyarmor__10)

       # case 3: 字符串参数名称进行了重命名
       pyarmor__10['pyarmor__4'] = 8
       pyarmor__1(1, 10, **pyarmor__10)

       # case 4: dict 函数的关键字参数没有进行重命名
       pyarmor__10 = dict(d=6)
       pyarmor__1(1, 10, 5, **pyarmor__10)

    对于第四种情况，有两种处理方案

    一是人工把原来的代码替换成为字典常量 `{ "key": value }` ，例如:

    .. code:: python

       # case 4: 参数是 dict 函数的关键字参数，需要替换成为字典常量
       kwarg = {'d': 6}         # kwarg = dict(d=6)
       show(1, 10, 5, **kwarg)

    二是不修改代码，而是使用下面的配置，不重名函数 show 的参数，例如::

      $ pyarmor env rft:rft_exclude_args fibo::show

    使用第二种方案重构之后，函数 show 仅 posonly, stararg 和 kwarg 会进行重命名，其他参数都保持不变，例如:

    .. code:: python

       # case 1:
       pyarmor__1(2, 5, c=2, d=8)

       # case 2:
       pyarmor__10 = { 'c': 1, 'd': 3 }
       pyarmor__1(1, 9, **pyarmor__10)

       # case 3:
       pyarmor__10['c'] = 8
       pyarmor__1(1, 10, **pyarmor__10)

       # case 4:
       pyarmor__10 = dict(d=6)
       pyarmor__1(1, 10, 5, **pyarmor__10)

  - rft_get_setattr

    是否重命名属性表达式 obj.attr 中属性名称是个难题，主要有两种情况

    - obj 的类型未知
    - obj 的类型已知，但是 attr 不存在于 obj 类型的属性表中

    因为 obj 的类型可能是动态变化的，所以到底是否重命名 attr 是个难题

    还包括 setattr(obj, 'attr', value) 和 getattr(obj, 'attr') 等形式

    一种解决方案是在脚本中使用 annotation 指定该变量的属性

    另外一种解决方案是设置为遇到无法处理的情况下提示用户进行处理::

      $ pyarmor env set rft:on_unknown_attr ?

    这样在遇到不可识别的对象类型时候，Pyarmor 提示用户进行处理

    - 指定变量的类型
    - 不进行命名，所有该对象的其他属性也不进行重命名
    - 进行重命名，所有该对象的其他属性也重命名

  - rft_call_rules

    列表，应用于函数调用语句，匹配模式的函数，调用中关键字参数均进行重命名::

        module:scope:attrs

    其中 attrs 可以是如下的格式使用 "." 进行连接:

    - name
    - name()
    - name[]

    例如::

       joker.card:Fibo.start:self.runner.run

  - rft_attr_rules

    属性重命名规则，满足模式的属性链表进行重命名，模式的格式和 rft_call_rulers 相同::

        module:scope:attrs
