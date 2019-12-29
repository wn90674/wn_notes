### `refer`、`origin`、`host`
在目前的`http1.1`后的版本,默认是`keep-alive`的连接，因此,在`response header`中,`content-length`和`transcode:chunck`(结合`gzip`)两者必然会出现一种;
`content-length`很好理解,就是返回内容的大小,而`chunk`意思是返回内容逐块传输,因此无法确定内容的大小

