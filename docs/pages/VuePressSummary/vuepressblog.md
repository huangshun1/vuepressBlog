## 一、开始搭建

1. cmd+R使用mkdir+项目名称，或右键新建项目

2. 全局安装vuepress，`npm install -g vuepress`

3. 进入新建的文件中，cd 项目名称，初始化项目，使用 `npm init -y`

4. 创建文件夹和文件，创建 docs 文件夹，在 docs 中创建 .vuepress 文件夹，在.vuepress中创建 public 文件夹和 config.js 文件，最终项目结构如下所示：

   ```
   vuepressBlogDemo
   ├─── docs
   │   ├── README.md
   │   └── .vuepress
   │       ├── public
   │       └── config.js
   └── package.json
   ```

5. 在config.js中配置网站的标题、描述、主题信息，如下:

   ```js
   module.exports = {
     title: 'Huang\'s blog',
     description: '我的个人网站',
     head: [ // 注入到当前页面的 HTML <head> 中的标签
       ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
     ],
     base: '/', // 这是部署到github相关的配置
     markdown: {
       lineNumbers: false // 代码块显示行号
     },
     themeConfig: {
       nav:[ // 导航栏配置
         {text: '前端基础', link: '/accumulate/' },
         {text: '算法题库', link: '/algorithm/'},
         {text: '微博', link: 'https://baidu.com'}      
       ],
       sidebar: 'auto', // 侧边栏配置
       sidebarDepth: 2, // 侧边栏显示2级
     }
   };
   ```

6. 在package.json中添加两个启动命令

   ```json
   "scripts": {
     "dev": "vuepress dev docs",
     "build": "vuepress build docs"
   }
   ```

7. 项目本地启动，`npm run dev`



## 二、github部署上线

1. 登录 [Github](https://github.com/)网站或注册一个github账号

2. 新建仓库一：USERNAME.github.io

   ::: warning 注意

   `USERNAME` 必须是你 Github 的账号名称，不是你的名字拼音，也不是你的非主流网名，不要瞎起，要保证和Github账号名一模一样！

   ***这个仓库建好后，不用克隆到本地，内容更新修改都在下面的仓库中进行。***

   :::

3. 新建仓库二：仓库名随意，例如：[vuepressBlog](https://github.com/huangshun1/vuepressBlog)

4. 可直接克隆 git clone https://github.com/huangshun1/vuepressBlog.git  或者 将自己新建的内容拷贝到克隆下来的文件夹中

5. 在文件中添加deploy.sh（部署）文件，内容如下：

   ```sh
   #!/usr/bin/env sh
   
   # 确保脚本抛出遇到的错误
   set -e
   
   # 生成静态文件
   npm run build
   
   # 进入生成的文件夹
   cd docs/.vuepress/dist
   
   # 如果是发布到自定义域名
   # echo 'www.zhangyunchen.cc' > CNAME
   
   git init
   git add -A
   git commit -m 'deploy'
   
   # 如果你想要部署到 https://<USERNAME>.github.io
   
   # 第一次使用deploy.hs文件时，用如下：
   # git push https://github.com/<USERNAME>/<USERNAME>.github.io.git master
   
   # 第二次使用deploy.hs文件时，用如下：
   git push -f https://github.com/huangshun1/huangshun1.github.io.git master
   
   # 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
   # git push -f git@github.com:<USERNAME>/vuepress.git master:gh-pages
   
   cd -
   ```

6. 在package.json中添加如下命令：

   ```json
   "scripts": {
     "deploy": "start deploy.sh",   //windows中使用start
     "deploy": "bash deploy.sh",	 //mac中使用bash
   }
   ```