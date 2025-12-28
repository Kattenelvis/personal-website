#!/usr/bin/env bash
set -euo pipefail

DEFAULT_MSG="Changes to my personal website"
MSG="${*:-$DEFAULT_MSG}"

git add .
git commit -m "$MSG"
git push
