#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m '更新'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push https://github.com/huangshun1/huangshun1.github.io.git master
git push https://github.com/huangshun1/vuepressBlog.git

cd -
