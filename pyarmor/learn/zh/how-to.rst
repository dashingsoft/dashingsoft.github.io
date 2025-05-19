==============
 如何解决问题
==============

.. highlight:: console

.. _how-to-license:

许可证相关
==========

- `如何选择许可证类型？ <https://pyarmor.readthedocs.io/zh/latest/licenses.html#select-license-type>`_
- `需要购买几个许可证？ <https://pyarmor.readthedocs.io/zh/latest/licenses.html#how-many-licenses-required>`_
- `如何在本地设备/云服务器/虚拟机等中注册和使用 Pyarmor 许可证? <https://pyarmor.readthedocs.io/zh/latest/how-to/register.html#using-pyarmor-license>`_
- `如何在 CI/CD 管线或者 Docker 容器中使用 Pyarmor 许可证? <https://pyarmor.readthedocs.io/zh/latest/how-to/register.html#using-pyarmor-license>`_
- `如何解决注册 Pyarmor 许可证遇到的问题？ <https://pyarmor.readthedocs.io/zh/latest/reference/solutions.html#fix-register-issue>`_
- `关于升级 Pyarmor 版本之后原来购买的许可证无法工作的问题？ <https://pyarmor.readthedocs.io/zh/latest/how-to/register.html#pyarmor>`_
- `关于是否可以升级Pyarmor许可证的问题？ <https://pyarmor.readthedocs.io/zh/latest/licenses.html#how-to-upgrade-license>`_

.. _how-fix-build-issue:

加密相关
========

.. _generate-script-issue:

如何解决生成加密脚本过程中出现的问题
------------------------------------

.. graphviz::
   :caption: 加密问题解决方案
   :align: center
   :name: graph-generate-script-issue

   digraph G {
      node [shape=box, style=rounded]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      subgraph P0 {
          rankdir="TB"
          style="setlinewidth(0)"

          s1 [label="错误消息是 update license token failed？"]
          s2 [label="错误消息是 out of license？"]
          s3 [label="加密一个简单脚本 foo.py ，看能否成功？"]
          s4 [label="使用默认选项加密，看能否成功？"]
          s5 [label="清除配置选项，移除文件 .pyarmor/config\n看能否加密成功？"]

          s31 [label="简化原来的脚本，直至发现导致出现问题的行号"]
      }

      subgraph P1 {
          node [
             style="filled,rounded",
             fillcolor="burlywood",
             ]

          n1 [href="https://pyarmor.readthedocs.io/zh/latest/reference/solutions.html#fix-register-issue"
              target="_top"
              label="请查看注册失败问题的解决方案"]
          n2 [href="https://pyarmor.readthedocs.io/zh/latest/licenses.html"
              target="_top"
              label="使用了未解锁的功能\n请查看 Pyarmor 许可证类型说明文档"]
          n3 [href="https://github.com/dashingsoft/pyarmor/issues"
              target="_top"
              label="提交报告问题\n能够重现问题的最少加密选项\n出现问题的代码片段\n错误堆栈的详细信息"]
          n4 [href="https://pyarmor.readthedocs.io/zh/latest/reference/man.html#pyarmor-gen"
              target="_top"
              label="请查看 Pyarmor 的命令手册\n了解各个选项的正确用法"]
          n5 [href="https://pyarmor.readthedocs.io/zh/latest/reference/solutions.html#fix-bootstrap-issue"
              target="_top"
              label="请参考Pyarmor启动失败的解决方案"]
          nr [href="https://github.com/dashingsoft/pyarmor/issues"
              target="_top"
              label="提交报告问题，包含\n加密脚本使用的最少选项\n未使用第三方库的测试脚本"]
      }

      start -> s1 -> s2 -> s3 -> s4 -> s5 -> nr
      s31 -> n3

      rank=same { s1 -> n1 [label="是"] }
      rank=same { s2 -> n2 [label="是"] }
      rank=same { s3 -> s31 [label="成功"] }
      rank=same { s4 -> n4 [label="成功"] }
      rank=same { s5 -> n5 [label="出错了"] }
   }

.. _pack-script-issue:

如何解决打包加密脚本过程中出现的问题
------------------------------------

.. graphviz::
   :caption: 打包问题解决方案
   :align: center
   :name: graph-pack-script-issue

   digraph G {
      node [shape=box, style=rounded]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      s1 [label="确保直接使用 PyInstaller 打包没有加密的脚本\n可以成功打包并执行"]
      s2 [label="确保不使用 --pack 选项，仅仅加密脚本\n可以成功生成加密脚本"]
      s3 [style="filled,rounded", fillcolor="burlywood",
          href="https://pyarmor.readthedocs.io/zh/latest/topic/repack.html"
          target="_top"
          label="参考关于打包的详细说明文档"]

      start -> s1 -> s2 -> s3
   }

.. _how-fix-runtime-issue:

运行加密脚本问题
================

.. _run-obfuscated-script-issue:

如何解决运行加密脚本过程中出现的问题
------------------------------------

.. graphviz::
   :caption: 运行加密脚本出现问题的解决方案
   :align: center
   :name: graph-run-obfuscated-script-issue

   digraph G {
      node [shape=box, style=rounded]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      subgraph P0 {
          rankdir="TB"
          style="setlinewidth(0)"

          s1 [label="生成加密脚本的设备和运行加密脚本的设备\n两种是否相同?"]
          s2 [label="运行脚本的 Python 大小版本和\n生成脚本的 Python 大小版本\n两者是否相同？例如，都是 3.10"]
          s3 [label="运行结果中是否存在异常错误信息？"]
          s4 [label="如果使用 RFT 模式进行加密\n尝试禁用 RFT 模式进行加密\n执行加密脚本是否出错？"]
          s5 [label="如果使用了 BCC 模式进行加密\n尝试禁用 BCC 模式\n执行加密脚本是否出错？"]
          s6 [label="如果使用了约束选项进行加密\n尝试禁用约束选项进行加密\n执行加密脚本是否出错？"]
          s7 [label="如果使用了第三方库，先不要使用第三方库\n尝试加密一个简单脚本\n执行加密脚本是否出错？"]
          s8 [label="如果运行设备上 Python 是 alpha 版\n尝试升级 Python 到最新的小版本\n执行加密脚本是否出错？"]

          s1 -> s2 -> s3
          s4 -> s5 -> s6 -> s7 -> s8
      }

      start -> s1

      subgraph P1 {
          node [
             style="filled,rounded",
             fillcolor="burlywood",
             ]
          n1 [target="_top"
              href="https://pyarmor.readthedocs.io/zh/latest/tutorial/advanced.html#generating-cross-platform-scripts"
              label="请参考跨平台发布的解决方案"]
          n2 [target="_top"
              href="https://pyarmor.readthedocs.io/zh/latest/tutorial/advanced.html#support-multiple-python-versions"
              label="请使用相同版本的 Python 加密脚本\n如果需要支持不同版本的 Python\n请参考跨版本发布问题的解决方案"]
          n3 [href="https://pyarmor.readthedocs.io/zh/latest/reference/errors.html"
              target="_top"
              label="请参考错误信息表查找相应的解决方案"]
          n4 [style=rounded
              label="请尝试在脚本中增加 print 语句\n找到导致问题出现的语句"]
          n5 [href="how-to.html#graph-fix-runtime-crash-issue"
              target="_top"
              label="请参考运行加密脚本崩溃解决方案"]
          n6 [target="_top"
              href="https://pyarmor.readthedocs.io/zh/latest/topic/rftmode.html"
              label="请参考 RFT 专题文档"]
          n7 [target="_top"
              href="https://pyarmor.readthedocs.io/zh/latest/topic/bccmode.html"
              label="请参考 BCC 专题文档"]
          n8 [href="https://pyarmor.readthedocs.io/zh/latest/reference/man.html#pyarmor-gen"
              target="_top"
              label="详细了解相关选项的使用方法\n使用正确的约束选项\n或者修改脚本满足约束要求"]
          n9 [href="https://pyarmor.readthedocs.io/zh/latest/how-to/third-party.html"
              target="_top"
              label="请参考常用第三方库解决方案"]
          n10 [href="https://github.com/dashingsoft/pyarmor/issues"
               target="_top"
               label="提交报告问题，包含\n加密脚本使用的最少选项\n未使用第三方库的测试脚本"]
      }

      s3 -> n3 [label="有异常"]
      s3 -> n4 [label="无异常"]
      s3 -> n5 [label="直接崩溃"]
      n3 -> s4 [label="未找到解决方案"]
      s8 -> n10 [label="依旧出错"]

      n4 -> s4
      n5 -> s4

      rank=same { s1 -> n1 [label="不相同"] }
      rank=same { s2 -> n2 [label="不相同"] }
      rank=same { s4 -> n6 [label="RFT 模式错误"] }
      rank=same { s5 -> n7 [label="BCC 模式错误"] }
      rank=same { s6 -> n8 [label="约束模式错误"] }
      rank=same { s7 -> n9 [label="第三方库错误"] }
   }

.. graphviz::
   :caption: 运行加密脚本崩溃的解决方案
   :align: center
   :name: graph-fix-runtime-crash-issue

   digraph G {
      node [shape=box, style=rounded]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      subgraph P0 {
          rankdir="TB"
          style="setlinewidth(0)"

          s1 [label="目标平台是否 Apple M1+ ？"]
          s2 [label="执行脚本的 Python 解释器\n是否标准的 CPython 解释器？"]
      }

      subgraph P1 {
          node [
             style="filled,rounded",
             fillcolor="burlywood",
             target="_top"
             ]
          n1 [label="使用 codesign 命令检查\n加密脚本扩展模块 pyarmor_runtime.so 的签名是否正确\n如果不正确，请使用 codesign 对其重新签名"]
          n2 [href="https://pyarmor.readthedocs.io/zh/latest/topic/obfuscated-script.html"
              label="请参考文档深入了解加密脚本"]
          n3 [href="https://github.com/dashingsoft/pyarmor/issues"
              label="提交报告问题，包含\n加密脚本使用的最少选项\n未使用第三方库的测试脚本"]
      }

      start -> s1
      s1 -> s2 -> n3

      rank=same { s1 -> n1 [label="是"] }
      rank=same { s2 -> n2 [label="不是 CPython 解释器"] }
   }

.. _run-packed-script-issue:

如何解决运行打包的可执行文件出现的问题
--------------------------------------

.. graphviz::
   :caption: 打包脚本运行问题的解决方案
   :align: center
   :name: graph-run-packed-script-issue

   digraph G {
      node [shape=box, style=rounded, target="_top"]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      subgraph P0 {
          rankdir="TB"
          style="setlinewidth(0)"

          s2 [label="在构建设备上，使用没有加密的脚本\n直接使用 PyInstaller 进行打包\n在客户设备上面运行打包好的可执行文件\n是否出错？"]
          s3 [label="在构建设备上面不要使用 --pack 选项\n而是仅仅加密脚本\n然后在客户设备上面直接运行\n是否依旧出错？"]
          s4 [label="在构建设备上面尝试去掉一些加密选项\n使用最少的加密选项对脚本进行打包\n然后在客户设备运行\n是否出错？"]
          s5 [
            style="filled,rounded",
            fillcolor="burlywood",
            href="https://pyarmor.readthedocs.io/zh/latest/topic/repack.html"
            label="参考关于打包的详细说明\n使用没有出错的选项进行打包"]
          s6 [label="如果脚本中使用了第三方库\n尝试加密打包一个简单脚本，\n然后在客户设备运行，\n是否出错？"]

	  s2 -> s3 -> s4 -> s5
          s4 -> s6 [label="出错了", tailport=se]
      }

      subgraph P2 {
          node [
             style="filled,rounded",
             fillcolor="burlywood",
             ]
          n1 [
              href="https://pyinstaller.org/en/stable/usage.html"
              label="请参阅 PyInstaller 文档\n确保没有加密的脚本能够正确打包"]
          n2 [
            href="how-to.html#run-obfuscated-script-issue"
            label="请使用加密脚本运行错误的解决方案"]
          n3 [
            href="https://pyarmor.readthedocs.io/zh/latest/how-to/third-party.html"
            label="查看第三方库是否能够兼容 Pyarmor+PyInstaller"]
          n4 [
            href="https://github.com/dashingsoft/pyarmor/issues"
            label="提交错误报告，包含\n可以重现问题的最少命令行选项\n可以重现问题的尽可能的简单脚本\n脚本中不要使用第三方包"]
      }

      start -> s2
      s6 -> n3

      rank=same { s2 -> n1 [label="出错了"] }
      rank=same { s3 -> n2 [label="出错了"] }
      rank=same { s6 -> n4 [label="出错了"] }
   }
