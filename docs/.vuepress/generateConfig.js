const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const mdFilesPath = path.resolve(__dirname, '../');
const readdir = promisify(fs.readdir);
const fsStat = promisify(fs.stat);
const readConfigFile = promisify(fs.readFile);
const writeFleConfig = promisify(fs.writeFile);

async function generateSidebar() {
  const mdFolders = await readdir(mdFilesPath);
  const mdList = await getFoldTree(mdFolders);
  const filecontent = await readConfigFile(
    path.resolve(__dirname, './config.js'),
    { encoding: 'utf-8' },
  );
  const start = filecontent.indexOf('sidebar');
  const end = filecontent.lastIndexOf(']');
  const newstr =
    filecontent.slice(0, start) +
    // 数组转字符串格式(格式化并去除属性引号)
    `sidebar: ${JSON.stringify(mdList, null, 2)}`
      .replace(/"([^"]+)"(:)/g, '$1$2') +
    filecontent.slice(end + 1);
  await writeFleConfig(path.resolve(__dirname, './config.js'), newstr);
}
/**
 * 获取MD文档目录(除去.vuepress)
 * @param {*} folderList
 */
async function getFoldTree(folderList) {
  let folderTreeList = [];
  // async 使用for 、for of、 while，不可以使用高阶函数forEach、reduce、filter
  for (let folder of folderList) {
    const filePath = path.resolve(__dirname, `../${folder}`);
    const stat = await fsStat(filePath);
    if (folder !== '.vuepress' && stat.isDirectory(filePath)) {
      const files = await readdir(filePath);
      let folderTree = {
        title: folder, // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [],
      };
      files.forEach(file => {
        folderTree.children.push({
          title:
            file !== 'README.md'
              ? file.replace(/(.+)\.md$/, '$1')
              : '文件名不能为README',
          path: `${folder}/${file}`,
        });
      });
      folderTreeList.push(folderTree);
    }
  }
  return folderTreeList;
}

generateSidebar();
