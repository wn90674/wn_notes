### `find`
```bash
# 统计文件
find . -name '*.vue' | wc
# 结合管道命令统计字数
find . -name '*.vue' | xargs cat | wc
```

