# Vue使用NProgress

如下图所示，绿色的进度条就是`NProgress`实现的效果
![这里写图片描述](https://img-blog.csdn.net/20180828170208517?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3duMTI0NTM0MzQ5Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 1、安装

```
$ npm install --save nprogress 或者
$ yarn add nprogress

//用法
NProgress.start();
NProgress.done();123456
```

## 2、使用

```
router.js
//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
```