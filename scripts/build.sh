#!/bin/bash

set -e

./node_modules/.bin/babel src --out-dir build --source-maps inline --ignore "src/test.js"
