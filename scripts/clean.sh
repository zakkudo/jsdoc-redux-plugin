#!/bin/bash

set -e

PROJECT_DIR=$(git rev-parse --show-toplevel)
BIN_DIR=$(npm bin)
JSDOC="$BIN_DIR/jsdoc"

rm -rf $PROJECT_DIR/build
rm -rf $PROJECT_DIR/coverage
rm -rf $PROJECT_DIR/documentation
rm -rf $PROJECT_DIR/demo
rm -f $PROJECT_DIR/.karma-test-results.json
rm -f $PROJECT_DIR/.jest-test-results.json
rm -f $PROJECT_DIR/jsdoc.*.conf.tmp
rm -f $PROJECT_DIR/yarn-error.log
