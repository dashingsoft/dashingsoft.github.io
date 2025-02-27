==============
 如何解决问题
==============

.. contents:: 目录
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

.. _how-to-license:

许可证相关
==========

- `如何选择许可证类型？ <https://pyarmor.readthedocs.io/zh/latest/licenses.html#select-license-type>`_
- `需要购买几个许可证？ <https://pyarmor.readthedocs.io/zh/latest/licenses.html#how-many-licenses-required>`_
- `如何在本地设备/云服务器/虚拟机等中注册和使用 Pyarmor 许可证? <https://pyarmor.readthedocs.io/zh/latest/how-to/register.html#using-pyarmor-license>`_
- `如何在 CI/CD 管线或者 Docker 容器中使用 Pyarmor 许可证? <https://pyarmor.readthedocs.io/zh/latest/how-to/register.html#using-pyarmor-license>`_
- `如何解决注册 Pyarmor 许可证遇到的问题？ <https://pyarmor.readthedocs.io/zh/latest/reference/solutions.html#fix-register-issue>`_

.. _how-fix-build-issue:

加密相关
========

.. _generate-script-issue:

如何解决生成加密脚本过程中出现的问题
------------------------------------

.. _pack-script-issue:

如何解决打包加密脚本过程中出现的问题
------------------------------------

.. _how-fix-runtime-issue:

运行加密脚本问题
================

.. _run-obfuscated-script-issue:

如何解决运行加密脚本过程中出现的问题
------------------------------------

.. _run-packed-script-issue:

如何解决运行打包的可执行文件出现的问题
--------------------------------------

.. graphviz::
   :caption: 打包脚本运行问题的解决方案
   :align: center
   :name: graph-run-packed-script-issue

   digraph G {
      node [shape=box, style=rounded]

      start [shape="doublecircle", label="",
             style="filled", fillcolor="wheat"]

      subgraph P0 {
          rankdir="TB"
          style="setlinewidth(0)"

          s2 [label="在构建设备上，使用没有加密的脚本\n直接使用 PyInstaller 进行打包\n在客户设备上面运行打包好的可执行文件\n是否出错？"]
          s3 [label="在构建设备上面不要使用 --pack 选项\n而是仅仅加密脚本\n然后在客户设备上面直接运行\n是否依旧出错？"]
          s4 [label="在构建设备上面尝试去掉一些加密选项\n使用最少的加密选项对脚本进行打包\n然后在客户设备运行\n是否出错？"]
          s5 [label="如果脚本中使用了第三方库\n尝试加密打包一个简单脚本，\n然后在客户设备运行，\n是否出错？"]
          s6 [
            style="filled,rounded",
            fillcolor="burlywood",
            href="https://github.com/dashingsoft/pyarmor/issues"
            label="提交错误报告\n使用的命令行选项\n以及可以重现问题的简单脚本"]

	  s2 -> s3 -> s4 -> s5 -> s6
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
            href="#run-obfuscated-script-issue"
            label="请使用加密脚本运行错误的解决方案"]
          n3 [
            href="https://pyarmor.readthedocs.io/zh/latest/how-to/third-party.html"
            label="查看第三方库是否能够兼容 Pyarmro+PyInstaller"]
          y1 [
            href="https://pyarmor.readthedocs.io/zh/latest/topic/repack.html"
            label="参考关于打包的详细说明\n使用没有出错的选项进行打包"]
      }

      start -> s2

      edge [tailport=se]

      s2 -> n1
      s3 -> n2
      s4 -> y1
      s5 -> n3
   }
