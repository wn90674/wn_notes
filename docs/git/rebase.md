### 合并多个commit
- step1
``` bash
# 获取最新10条提交
git rebase -i HEAD~10
```
-step2
执行上述命令后会在控制台打开一个`vi`文件编辑区域，
将需要覆盖掉的`commit`记录`pick`改成 squash（或者s），如果你不打算保留提交信息，用 fixup（或者f）就行;

-step3
编辑完保存后进入一个新的提交信息窗口

-step4
```
git push --force origin master
```
