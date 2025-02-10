#! /usr/bin/env python
# -*- coding: utf-8 -*-
#

"""Generate user doc"""

import argparse
import logging
import sys


logger = logging.getLogger('generator')


def make_docs(args):
    pass


def config_log(logfile='generator.log'):
    import logging.config

    logging.config.dictConfig({
        'version': 1,
        'disable_existing_loggers': False,
        'formatters': {
            'simple': {
                'format': '%(levelname)-8s - %(message)s'
            },
            'precise': {
                'format': ('%(asctime)s %(levelname)-8s '
                           '%(name)-15s %(message)s'),
                'datefmt': '%Y-%m-%d %H:%M:%S',
            },
        },
        'handlers': {
            'stdout': {
                'class': 'logging.StreamHandler',
                'level': 'INFO',
                'formatter': 'simple',
                'stream': 'ext://sys.stdout'
            },
            'stderr': {
                'class': 'logging.StreamHandler',
                'level': 'ERROR',
                'formatter': 'simple',
                'stream': 'ext://sys.stderr'
            },
            'file': {
                'class': 'logging.FileHandler',
                'formatter': 'simple',
                'filename': logfile,
                'delay': True,
                'mode': 'w'
            },
        },
        'loggers': {
            'maker': {
                'level': 'INFO',
                'handlers': ['stdout']
            }
        }
    })


def main():
    config_log()

    parser = argparse.ArgumentParser(
        prog='generator',
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        '-O', '--output', default='dist', metavar='PATH',
        help='output path'
    )

    args = parser.parse_args(sys.argv[1:])
    make_docs(args)


if __name__ == '__main__':
    main()
