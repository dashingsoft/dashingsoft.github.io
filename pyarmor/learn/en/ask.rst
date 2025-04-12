==========
 Ask
==========

.. contents:: Content
   :depth: 2
   :local:
   :backlinks: top

.. highlight:: console

.. _ask:

Begin your question
===================

Usage:

- Click text in the figure to jump next step
- Click "?" in the figure to top
- Click back button of browser to back

.. graphviz::
   :caption: Begin your question
   :align: center
   :name: g-ask

   digraph G {
       label="Begin your question\n\n"
       labeljust=c
       labelloc=t
       rankdir=LR

       node [shape=box
             style=rounded
             target="_top"]

       a [label="?"
          shape=doublecircle
          style=filled
          fillcolor=tan]

       {
          rank=same
          a1 [label="License Questions"
              href="ask.html#license"]
          a2 [label="Registering issues"
              href="https://pyarmor.readthedocs.io/en/latest/reference/solutions.html#fix-register-issue"]
          a3 [label="Building issues"
              href="how-to.html#how-fix-build-issue"]
          a4 [label="Runtime issues"
              href="how-to.html#how-fix-runtime-issue"]
       }

       a -> { a1, a2, a3, a4 }

   }

.. _license:

License Questions
=================

.. contents::
   :depth: 1
   :local:
   :backlinks: top

.. _need-license:

Do I need purchase Pyarmor License
----------------------------------

.. graphviz::
   :caption: Do I need purchase Pyarmor License
   :align: center
   :name: g-lic-a1

   digraph G {
       label="Do I need purchase Pyarmor License\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       a [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]

       b1 [label="When generating the obfuscated scripts\nraise exception `out of license`"]

       b2 [label="The generated scripts are used\nin the product which could make money"
           tooltip="Not only front-end, but also back end are belong to the product"]

       b3 [label="The sales revenue of the product is\ngreater than 100 x Pyarmor license fee"]

       c1 [label="Need purchase Pyarmor license"
           style="filled,rounded"
           fillcolor=wheat]

       c2 [label="Need not purchase Pyarmor license"
           style="filled,rounded"
           fillcolor=lightgray]

       a -> b1
       b1 -> b2 [label="No"]
       b1 -> c1 [label="Yes"]
       b2 -> b3 [label="Yes"]
       b2 -> c2 [label="No"]

       // edge [constraint=false]
       b3 -> c1 [label="Yes"]
       b3 -> c2 [label="No"]

       {
         rank=same
         b1
         c1
       }

       {
         rank=same
         b2
         b3
       }

   }

.. _select-license:

Which license type is right for me
----------------------------------

If something is not listed in the figure, it need not be taken into account. For example

- The type of operating system
- The number of your customer devices in which running obfuscated scripts

.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-1

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-33"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-17"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-9"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_0 [label="<= 100" tooltip=""]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-2"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_0 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-2

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-34"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-18"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-10"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_1 [label="<= 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-1"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-3

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-19"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-11"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_2 [label="> 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-1"
          ]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-2"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_0 -> a5_2 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-4

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-1"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-5"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_1 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-5

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-37"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-21"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-13"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-1"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a5_1 [label="more than 100 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_1 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-6

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-1"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-7"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_2 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-7

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-39"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-23"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-15"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-1"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a5_1 [label="no more than 3 runs per second\nno more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-6"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_2 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-8

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-24"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-16"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-1"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a5_2 [label="more than 3 runs per second\nOr more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-6"
          ]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-7"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_0 -> a3_0 -> a4_2 -> a5_2 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-9

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-41"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-25"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-1"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_0 [label="<= 100" tooltip=""]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-10"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-11"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_0 -> a5_0 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-10

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-42"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-26"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-2"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_1 [label="<= 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-9"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-11"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_0 -> a5_1 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-11

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-27"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_2 [label="> 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-9"
          ]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-10"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-12

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-9"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-13"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_1 -> a5_0 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-13

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-45"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-29"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-5"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-9"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a5_1 [label="more than 100 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_1 -> a5_1 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-14

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-9"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-15"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-16"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_2 -> a5_0 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-15

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-47"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-31"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-7"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-9"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a5_1 [label="no more than 3 runs per second\nno more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-14"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-16"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_2 -> a5_1 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-16

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-48"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-32"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-9"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a5_2 [label="more than 3 runs per second\nOr more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-14"
          ]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-15"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_0 -> a3_1 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-17

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-49"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-1"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-25"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_0 [label="<= 100" tooltip=""]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-18"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-19"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_0 -> a4_0 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-18

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-50"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-2"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-26"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_1 [label="<= 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-17"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-19"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_0 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-19

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-51"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-27"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_2 [label="> 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-17"
          ]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-18"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_0 -> a4_0 -> a5_2 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-20

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-17"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-21"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_0 -> a4_1 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-21

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-53"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-5"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-29"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-17"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a5_1 [label="more than 100 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_0 -> a4_1 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-22

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-17"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-23"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-24"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_0 -> a4_2 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-23

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-55"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-7"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-31"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-17"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a5_1 [label="no more than 3 runs per second\nno more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-22"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-24"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_0 -> a4_2 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-24

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-56"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-32"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-17"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a5_2 [label="more than 3 runs per second\nOr more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-22"
          ]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-23"
          ]

       }

       {
          rank=same

          n1 [
            label="Old License (Pyarmor 7)"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_0 -> a2_1 -> a3_0 -> a4_2 -> a5_2 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-25

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-57"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-9"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-17"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_0 [label="<= 100" tooltip=""]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-26"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-27"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_0 -> a5_0 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-26

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-58"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-10"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-18"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_1 [label="<= 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-25"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-27"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_0 -> a5_1 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-27

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-11"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-19"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_2 [label="> 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-25"
          ]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-26"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-28

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-25"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-29"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_1 -> a5_0 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-29

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-61"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-13"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-21"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-25"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a5_1 [label="more than 100 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_1 -> a5_1 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-30

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-25"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-31"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-32"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_2 -> a5_0 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-31

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-63"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-15"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-23"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-25"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a5_1 [label="no more than 3 runs per second\nno more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-30"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-32"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_2 -> a5_1 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-32

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_0 [label="Use Python <= 3.6\nor Python 2.7" tooltip=""]

          a1_1 [
            label="Only use Python 3.7+"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-64"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-16"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-24"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-25"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a5_2 [label="more than 3 runs per second\nOr more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-30"
          ]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-31"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_0 -> a2_1 -> a3_1 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-33

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-1"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-49"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-41"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_0 [label="<= 100" tooltip=""]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-34"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same

          n1 [
            label="Baisc License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="Pro License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_0 -> a5_0 -> {n1, n2, n3}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-34

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-2"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-50"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-42"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_1 [label="<= 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-33"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-35

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-3"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-51"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_2 [label="> 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-33"
          ]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-34"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_0 -> a3_0 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-36

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-4"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-33"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-37"
          ]

       }

       {
          rank=same

          n1 [
            label="Baisc License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="Pro License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n4 [
            label="CI License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_1 -> a5_0 -> {n1, n2, n3, n4}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-37

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-5"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-53"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-45"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-33"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a5_1 [label="more than 100 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same

          n1 [
            label="Baisc License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="CI License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_1 -> a5_1 -> {n1, n2, n3}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-38

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-6"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-33"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-39"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same

          n1 [
            label="Baisc License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="Pro License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="CI License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_2 -> a5_0 -> {n1, n2, n3}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-39

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-7"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-55"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-47"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-33"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a5_1 [label="no more than 3 runs per second\nno more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-38"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same

          n1 [
            label="Baisc License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="CI License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_0 -> a4_2 -> a5_1 -> {n1, n2}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-40

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-8"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-56"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-48"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-33"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a5_2 [label="more than 3 runs per second\nOr more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-38"
          ]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-39"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_0 -> a3_0 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-41

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-9"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-57"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-33"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_0 [label="<= 100" tooltip=""]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-42"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same

          n1 [
            label="Pro License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_0 -> a5_0 -> {n1, n2}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-42

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-10"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-58"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-34"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_1 [label="<= 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-41"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-43

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-11"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_2 [label="> 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-41"
          ]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-42"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_0 -> a3_1 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-44

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-12"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-41"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-45"
          ]

       }

       {
          rank=same

          n1 [
            label="Pro License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n3 [
            label="CI License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_1 -> a5_0 -> {n1, n2, n3}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-45

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-13"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-61"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-37"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-41"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a5_1 [label="more than 100 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="CI License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_1 -> a5_1 -> {n1, n2}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-46

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-14"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-41"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-47"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-48"
          ]

       }

       {
          rank=same

          n1 [
            label="Pro License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

          n2 [
            label="CI License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_2 -> a5_0 -> {n1, n2}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-47

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-15"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-63"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-39"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-41"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a5_1 [label="no more than 3 runs per second\nno more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-46"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-48"
          ]

       }

       {
          rank=same

          n1 [
            label="CI License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_0 -> a3_1 -> a4_2 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-48

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-16"
          ]

       }

       {
          rank=same
          a2_0 [label="inline build" tooltip="The build device need connect to internet when generating obfuscated scripts "]

          a2_1 [
            label="offline build"
            style="rounded,dashed"
            tooltip="The build device could be offline, not connect to internet"
            href="ask.html#g-lic-a2-64"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-41"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a5_2 [label="more than 3 runs per second\nOr more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-46"
          ]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-47"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_0 -> a3_1 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-49

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-17"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-33"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-57"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_0 [label="<= 100" tooltip=""]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-50"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-51"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_0 -> a4_0 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-50

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-18"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-34"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-58"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_1 [label="<= 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-49"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-51"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_0 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-51

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-19"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-35"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_2 [label="> 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-49"
          ]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-50"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-52

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-20"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-36"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-49"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-53"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_0 -> a4_1 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-53

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-21"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-37"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-61"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-49"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a5_1 [label="more than 100 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_0 -> a4_1 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-54

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-22"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-38"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-49"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-55"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-56"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_2 -> a5_0 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-55

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-23"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-39"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-63"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-49"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a5_1 [label="no more than 3 runs per second\nno more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-54"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-56"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_2 -> a5_1 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-56

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-24"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-40"
          ]

       }

       {
          rank=same
          a3_0 [label="Need not irreversible obfuscation features" tooltip=""]

          a3_1 [
            label="Need irreversible obfuscation features"
            style="rounded,dashed"
            tooltip="For example, RFT，BCC，VMC，ECC mode"
            href="ask.html#g-lic-a2-64"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-49"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a5_2 [label="more than 3 runs per second\nOr more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-54"
          ]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-55"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_0 -> a4_2 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-57

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-25"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-41"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-49"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_0 [label="<= 100" tooltip=""]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-58"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_1 -> a4_0 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-58

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-26"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-42"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-50"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_1 [label="<= 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-57"
          ]

          a5_2 [
            label="> 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-59"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_1 -> a4_0 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-59

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-27"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-43"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-51"
          ]

       }

       {
          rank=same
          a4_0 [label="How many normal devices" tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_2 [label="> 200" tooltip=""]

          a5_0 [
            label="<= 100"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-57"
          ]

          a5_1 [
            label="<= 200"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-58"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_1 -> a4_0 -> a5_2 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-60

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-28"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-44"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-52"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-57"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-61"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_1 -> a4_1 -> a5_0 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-61

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-29"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-45"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-53"
          ]

       }

       {
          rank=same
          a4_1 [label="Local Docker Container" tooltip=""]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-57"
          ]

          a4_2 [
            label="CI/CD Pipeline"
            style="rounded,dashed"
            tooltip="For example, Github Action"
            href="ask.html#g-lic-a2-62"
          ]

       }

       {
          rank=same
          a5_1 [label="more than 100 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same

          n1 [
            label="Group License"
            tooltip=""
            style="rounded,filled"
            fillcolor=wheat
          ]

       }

       s -> a1_1 -> a2_1 -> a3_1 -> a4_1 -> a5_1 -> {n1}
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-62

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-30"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-46"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-54"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-57"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a5_0 [label="no more than 100 runs per month" tooltip=""]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-63"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-64"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_1 -> a4_2 -> a5_0 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-63

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-31"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-47"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-55"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-57"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a5_1 [label="no more than 3 runs per second\nno more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-62"
          ]

          a5_2 [
            label="more than 3 runs per second\nOr more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-64"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_1 -> a4_2 -> a5_1 -> n0
   }


.. graphviz::
   :caption: Which license is right for me
   :align: center
   :name: g-lic-a2-64

   digraph G {
       label="Which license is right for me\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       s [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]


       {
          rank=same
          a1_1 [label="Only use Python 3.7+" tooltip=""]

          a1_0 [
            label="Use Python <= 3.6\nor Python 2.7"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-32"
          ]

       }

       {
          rank=same
          a2_1 [label="offline build" tooltip="The build device could be offline, not connect to internet"]

          a2_0 [
            label="inline build"
            style="rounded,dashed"
            tooltip="The build device need connect to internet when generating obfuscated scripts "
            href="ask.html#g-lic-a2-48"
          ]

       }

       {
          rank=same
          a3_1 [label="Need irreversible obfuscation features" tooltip="For example, RFT，BCC，VMC，ECC mode"]

          a3_0 [
            label="Need not irreversible obfuscation features"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-56"
          ]

       }

       {
          rank=same
          a4_2 [label="CI/CD Pipeline" tooltip="For example, Github Action"]

          a4_0 [
            label="How many normal devices"
            style="rounded,dashed"
            tooltip="For example, PC, laptop, ECS, Qemu VM etc.\nOr self-host runner in CI/CD pipeline"
            href="ask.html#g-lic-a2-57"
          ]

          a4_1 [
            label="Local Docker Container"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-60"
          ]

       }

       {
          rank=same
          a5_2 [label="more than 3 runs per second\nOr more than 5,000 runs per month" tooltip=""]

          a5_0 [
            label="no more than 100 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-62"
          ]

          a5_1 [
            label="no more than 3 runs per second\nno more than 5,000 runs per month"
            style="rounded,dashed"
            tooltip=""
            href="ask.html#g-lic-a2-63"
          ]

       }

       n0 [label="No available licenses"
           tooltip=""
           style="rounded,filled"
           fillcolor=lightgray]

       s -> a1_1 -> a2_1 -> a3_1 -> a4_2 -> a5_2 -> n0
   }

.. _how-many-licenses:

How many licenses are required
------------------------------

First of all

- Pyarmor License is only installed in the build machine used to generate the obfuscated scripts
- Do not install Pyarmor License in your customer machine in which to run the obfuscated scripts

.. graphviz::
   :caption: How many licenses are required
   :align: center
   :name: g-lic-a3

   digraph G {
       label="How many licenses are required\n\n"
       labeljust=c
       labelloc=t

       node [shape=box
             style=rounded
             target="_top"]

       a [label="?"
          href="ask.html#ask"
          shape=doublecircle
          style=filled
          fillcolor=tan]

       b1 [label="List all the products which are sold separately"]

       b2 [label="If the sales revenue of the product is\nless than 100 x Pyarmor license fee\nthere is no need to list the product"]

       b3 [label="Total products"]

       s1 [label="One license is OK"
           style="filled,rounded"
           fillcolor=tan]

       s2 [label="How to tell 2 products\ncould share one Pyarmor License"
           style="filled,rounded"
           fillcolor=wheat
           href="https://pyarmor.readthedocs.io/en/latest/licenses.html#how-many-licenses-required"]

       a -> b1 -> b2 -> b3
       b3 -> s1 [label="<= 1" ]
       b3 -> s2 [label="> 1"]

   }
