Quick Start
===========

Since Pyarmor is written in the Python language, you need to install
Python (the required version is at least 2.6).

Pyarmor packages are available on the `Python Package Index
<https://pypi.python.org/pypi/pyarmor#downloads>`_.

Pyarmor is a command line tool, the main script is "pyarmor.py".

There is a gui wizard "wizard.py" which includes many examples, it's
useful to understand all of the featuers of Pyarmor. In order to run
Pyarmor Wizard, be sure you have installed python package: Tkinter

See next chapter to know the basic usage of pyarmor.py.

Linux
-----

Extract Pyarmor source package.

.. code-block:: bash

   $ tar xzf pyarmor-2.5.4.tar.gz

Run Pyarmor.

.. code-block:: bash

   $ python pyarmor.py

Start pyarmor wizard.

.. code-block:: bash

   $ python wizard.py

Windows
-------

Unzip Pyarmor source package.

.. code-block:: bat

   C:\> unzip pyarmor-2.5.3.zip

Run Pyarmor.

.. code-block:: bat

   C:\pyarmor\> python pyarmor.py

Start pyarmor wizard.

.. code-block:: bat

   C:\pyarmor\> python wizard.py

If you have not Python, you can download an all-in-one installer:

* `pyarmor-2.5.4.exe <http://dashingsoft.com/products/pyarmor/pyarmor-2.5.4.exe>`__

After installation, there is a desktop icon. Double-click it, Pyarmor
Wizard will run.

Basic Usage
===========

The normal scenario for a developer to use pyarmor is

* Generate project capsule for each project
* Encrypt python scripts with project capsule
* Distribute the encrypted scripts to target machine

Next it's an example to show you how to use pyarmor to encrypt scripts
and how to distribute encrypted scripts.

Encrypt Script
--------------

Assume you have 2 scripts: moda.py modb.py,

* Generate project capsule

  `For example,`::

    $ python pyarmor.py capsule

  It will make a file "project.zip" in the current directory.

* Encrypt python scripts

  `For example,`::

    $ python pyarmor.py encrypt --with-capsule=project.zip \
      moda.py modb.py

  After above command finished, you will find the following files in
  the path "dist"

    * moda.pye
    * modb.pye

    * pyimcore.py
    * pytransform.pyd (for windows) or pytransform.so (for linux)
    * cygtfm-0.dll / libtfm-0.dll (only for windows)
    * cygtomcrypt-0.dll / libtomcrypt-0.dll (only for windows)
    * pyshield.key
    * pyshield.lic
    * product.key
    * license.lic

  The first 2 files are encrypted scripts, the others are
  auxiliary. All of these files is required when distribute encrypted
  scripts.

  `About more usage of pyarmor`::

     C:/Python32/python pyarmor --help
     C:/Python32/python pyarmor encrypt --help

Distribute Script
-----------------

Before you distribute encrypted scripts above, you need change a
little in your main script -- add a line 'import pyimcore' before
import those encrypted module. Assume your startup script is main.py,
what you will do is add a line in the file header somewhere.

`For example,`::

  import pyimore

The main function of pyimcore is to install an import hook, so that
the encrypted module will be imported correctly. For you, everything
is transparent, all of the source code need to be changed nothing
else !

Now copy the following files to your customer:

  * main.py
  * moda.pye
  * modb.pye

  * pyimcore.py
  * pytransform.pyd (for windows) or pytransform.so (for linux)
  * cygtfm-0.dll / libtfm-0.dll (only for windows)
  * cygtomcrypt-0.dll / libtomcrypt-0.dll (only for windows)
  * pyshield.key
  * pyshield.lic
  * product.key
  * license.lic

And run it as if there are no any encrypted scripts.

Generate Special "license.lic"
------------------------------

By default, the distribute path will include a file "license.lic",
it's required to run/import encrypted scripts. You can generate other
license file by command "license" for special users.

`Generate license.lic with registration code "MYPROJECT-001"`::

  $ python pyarmor.py license --with-capsule=project.zip MYPROJECT-001

This command will generate a new "license.lic" with registration code
"MYPROJECT-001", replace the old with this one in "dist" path.

Advanced Usage
==============

Run Encrypted Script
--------------------

Someone maybe say I want to encrypt my startup script either, then how
to run it.

`Encrypt the script at first,`::

    $ python pyarmor.py encrypt --with-capsule=project.zip \
      main.py moda.py modb.py

`Run python with -c, for example,`::

    python -c "import pyimcore
    import pytransform
    pytransform.exec_file('main.pye')"

`Or create a startup script startup.py like this,`::

    import pyimcore
    import pytransform
    pytransform.exec_file('main.pye')

Then run startup.py as normal python script.

You can read the source file pyarmor.py to know the basic usage of
pytransform extension.

Cross Publish
-------------

If target machine is different from development machine, you need use
option '--with-extension' to publish encrypted scripts. A common case
is to distribute python scripts to embedded linux system. The only
difference is to replace python extension "pytransform" with the
corresponding platform.

In the sub-directory "extensions" of pyarmor, there are many files
looks like:

    pytransform-1.7.2.win32-ARCH-pyX.Y.pyd
    pytransform-1.7.2.linux-ARCH-pyX.Y.so

X.Y is python major and minor version, ARCH may be x86, x86_64, arm etc.

`Encrypt scripts with option --with-extension`::
  
    $ python pyarmor.py encrypt --with-capsule=project.zip \
      --with-extension=extensions/pytransform-1.7.2.linux-arm-py2.so \
      main.py moda.py modb.py
  
`Another example, encrypted scripts for Python2.3`::
  
    $ python3  pyarmor.py encrypt --with-capsule=project.zip \
      --with-extension=extensions/pytransform-1.7.2.win32-x86-py2.3.pyd \
      main.py moda.py modb.py
  

Generate "license.lic" For Special Machine
------------------------------------------

Sometimes you want to run/import encrypted scripts in special
machine. You can generate a "license.lic" bind to serial number of
hard disk.

`Generate license.lic with serial number of hard disk "PBN2081SF3NJ5T"`::

    $ python pyarmor.py license --with-capsule=project.zip --bind \
      PBN2081SF3NJ5T

This command will generate a new "license.lic" bind to harddisk which
serial number is "PBN2081SF3NJ5T", replace the old with this one in
"dist" path.

Generate Periodic "license.lic"
-------------------------------

`Generate license.lic which will be expired in Jan. 31, 2015`::

    $ python pyarmor.py license --with-capsule=project.zip \
      --expired-date 2015-01-31

This command will generate a new "license.lic" will be expired in
Jan. 31, 2015.

Generate "license.lic" Bind to Fix File
---------------------------------------

Sometimes you want to run/import encrypted scripts bind to your ssh
private key. You can generate a "license.lic" bind to fix file as the
following steps:

`Generate license.lic with your ssh private key file "id_rsa"`::

    $ python pyarmor.py license --with-capsule=project.zip \
      --bind-file ~/.ssh/id_rsa /home/jondy/my_id_rsa

This command will generate a new "license.lic" bind to fix file
"~/.ssh/id_rsa". After that, 

  * Copy "license.lic" with your encrypted python scripts to target machine

  * Copy "~/.ssh/id_rsa" in your develop machine to target machine,
    and save as /home/jondy/my_id_rsa

In target machine pyarmor will check "license.lic" by reading data
from "/home/jondy/my_id_rsa" when run/import encrypted python scripts.

You can specify any path or any name in target machine, for example,
"/var/pyarmor/my_any_file", only it's same as your bind file.

Generate "license.lic" Both Expired-Date and Fix File/Fix Key
-------------------------------------------------------------
You can even mix expired date and fix file or fix key in the same license file.

`Generate license.lic with your ssh private key file "id_rsa" and expired at 2015-01-31`::

    $ python pyarmor.py license --with-capsule=project.zip \
      --expired-date 2015-01-31 --bind-file ~/.ssh/id_rsa /home/jondy/my_id_rsa

This command will generate a new "license.lic" bind to fix file "~/.ssh/id_rsa" and
will expired on Jan. 31, 2015.


Change Logs
===========

2.5.5
-----
* Add option '-i' for command 'encrypt' so that the encrypted scripts will be saved in the original path.

2.5.4
-----
* Verbose tracelog when checking license in trace mode.
* In license command, change default output filename to "license.lic.txt".
* Read bind file when generate license in binary mode other than text mode.

2.5.3
-----
* Fix problem when script has line "from __future__ import with_statement"
* Fix error when running pyarmor by 32bit python on the 64bits Windows.
* (Experimental)Support darwin_15-x86_64 platform by adding extensions/pytransform-2.3.3.darwin_15.x86_64-py2.7.so

2.5.2
-----
* License file can mix expire-date with fix file or fix key.
* Fix log error: not enough arguments for format string

2.5.1
-----
* License file can bind to ssh private key file or any other fixed file.

2.4.1
-----
* Change default extension ".pyx" to ".pye", because it confilcted with CPython.
* Custom the extension of encrypted scripts by os environment variable: PYARMOR_EXTRA_CHAR
* Block the hole by which to get bytescode of functions.

2.3.4
-----
* The trial license will never be expired (But in trial version, the
  key used to encrypt scripts is fixed).

2.3.3
-----
* Refine the document

2.3.2
-----
* Fix error data in examples of wizard

2.3.1
-----
* Implement Run function in the GUI wizard
* Make license works in trial version

2.2.1
-----
* Add a GUI wizard
* Add examples to show how to use pyarmor

2.1.2
-----
* Fix syntax-error when run/import encrypted scripts in linux x86_64

2.1.1
-----
* Support armv6

2.0.1
-----
* Add option '--path' for command 'encrypt'
* Support script list in the file for command 'encrypt'
* Fix issue to encrypt an empty file result in pytransform crash

1.7.7
-----

* Add option '--expired-date' for command 'license'
* Fix undefined 'tfm_desc' for arm-linux
* Enhance security level of scripts

1.7.6
-----

* Print exactaly message when pyarmor couldn't load extension
  "pytransform"

* Fix problem "version 'GLIBC_2.14' not found"

* Generate "license.lic" which could be bind to fixed machine.

1.7.5
-----

* Add missing extensions for linux x86_64.

1.7.4
-----

* Add command "licene" to generate more "license.lic" by project
  capsule.

1.7.3
-----

* Add information for using registration code

1.7.2
-----

* Add option --with-extension to support cross-platform publish.
* Implement command "capsule" and add option --with-capsule so that we
  can encrypt scripts with same capsule.
* Remove command "convert" and option "-K/--key"

1.7.1
-----

* Encrypt pyshield.lic when distributing source code.

1.7.0
-----

* Enhance encrypt algorithm to protect source code.
* Developer can use custom key/iv to encrypt source code
* Compiled scripts (.pyc, .pyo) could be encrypted by pyshield
* Extension modules (.dll, .so, .pyd) could be encrypted by pyshield

FAQ
===

Q: Will the license expire? Is the license the same for develop machine
and target machine?

A::

  "license.lic" for pyarmor will expired about by the end of next
   month.  After that, a registration code is required to run pyarmor.

   The "license.lic" in the target machine is different from develop
   machine, it is generated by pyarmor. Simply to say, "license.lic"
   of pyarmor is generated by me, "license.lic" in the target machine
   is generated by developer who uses pyarmor.

Q: If I pay for the registration code, it is valid forever? Or I have to
pay periodically?

A::

  Forever now.
