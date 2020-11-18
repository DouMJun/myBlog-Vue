#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 



git add -A
git commit -m 'deploy'

# 获取更新后的时间
# node getTime.js


git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# https://doumjun.github.io/vuepress.blog/
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:DouMJun/myBlog-Vue.git master
