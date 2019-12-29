### 使用`pdf2json`
经过测试，使用`word`转换的`pdf`文件可以解析，`md`和`html`转换的`pdf`没有正确解析;
```js{4}
const fs = require('fs'),
  PDFParser = require('pdf2json');

const pdfParser = new PDFParser();

pdfParser.on('pdfParser_dataError', errData =>
  console.error(errData.parserError),
);
pdfParser.on('pdfParser_dataReady', pdfData => {
  console.log(JSON.stringify(pdfData));
  // 字符串需要使用decode解码成中文
  fs.writeFile('./1.json', JSON.stringify(pdfData), () => {
    // callback
  });
});

// 加载读取的文件
pdfParser.loadPDF('./111.pdf');
```