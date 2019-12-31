#! /bin/sh
npm run generate:config
yarn build
cp -r dist/* ./

git config --global user.email "maple0421@163.com"
git config --global user.name "wn90674"
git add .
# npm run XX --commit :lock: <yarn不支持传参>
git fetch
git commit -m$1
git push origin master