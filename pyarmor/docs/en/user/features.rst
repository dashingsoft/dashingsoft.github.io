.. include:: ../_header_note.txt

==============
 Introduction
==============

In order to get high performance after the scripts are obfuscated, Pyarmor 9.1 introduces 2 new scripts:

- :term:`MINI Script`

   The main purpose is to improve performance, and the obfuscated scripts is designed to provide web services

   Compared to previous obfuscated scripts

   - Using a simplified extension :term:`pyarmor_mini`
   - So no features like expired scripts, binding scripts to devices
   - Support freethreading in Python 3.13+

  :term:`MINI Script` need refactor to prevent scripts from be reversed. If no refactor, the security level is almost same as .pyc file

- :term:`RFT Script`

   RFT Scripts simply rename functions, variables, classes, and methods within the script while keep the original script structure

   :term:`MINI Script` still need binary extension which make running obfuscated scripts more complex

   But RFT scripts need not binary extension, they can be used wherever normal Python scripts can be used

   For example, use it in WASM, pass it to Nuitka, CPython, even Pyarmor to continue processing

Pyarmor 9.1 uses :term:`Project` to manage all the scripts to handle the complex relations between modules and packages, so that the scripts could be reformed correctly.

Pyarmor 9.2.2 introduces 2 new scripts:

- :term:`ECC Script`

  ECC Script only converts the statements in the function, just think of function body is replaced by C code which are compiled to machine instruction in the final obfuscated scripts. It need C compiler in build time and the obfuscation is irreversible.

  Please refer to ECC Script example in the :doc:`concepts`

- :term:`VMC Script`

  VMC Script is similar with :term:`ECC Script`, but the function body is replaced by VM code defined by Pyarmor. It need not C compiler in build time, but the obfuscation is reversible.

  Please refer to VMC Script example in the :doc:`concepts`
