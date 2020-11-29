#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 



git add -A

git commit -m 'deploy'

git push -f git@github.com:DouMJun/myBlog-Vue.git master

npm run build

scp -r ./myblog root@42.192.44.81:/usr/local
