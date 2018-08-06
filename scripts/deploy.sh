#!/bin/bash

set -e

#yarn build
yarn document
#yarn cover

yarn publish --access public
