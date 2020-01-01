### 安卓环境
### 下载`android studio`并安装`jdk1.8+`
```bash
# mac下java环境变量配置
vi ~/.zshrc
### 将内容添加
JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home"
export JAVA_HOME
CLASS_PATH="$JAVA_HOME/lib"
PATH=“$PATH:$JAVA_HOME/bin”
###
# 重启配置
source ~/.zshrc
java -version
```
``` bash
# 在根目录下创建安卓工程
cordova platform add android

# 检查环境需求
cordova requirements

# 基础环境
brew install gradle
```
::: warning
如果提示`android target not install`,一般是jdk版本不匹配导致
:::

### 导入项目
需要注意的是，引入项目要选择`platforms/andriod`,否则不会被识别为安卓项目;
