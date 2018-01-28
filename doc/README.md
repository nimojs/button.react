# 文档

 > 所有属性参数，可以随意组合，达到各种效果。

## style

````code
{
    title: '风格',
    desc: '`type="primary"`',
    html: '<div id="style-demo" ></div>',
    js: './Style.demo.js',
    source: './Style.js',
    open: false
}
````

## border

````code
{
    title: '边框',
    desc: '`ghost` `dashed`',
    html: '<div id="border-demo" ></div>',
    js: './Border.demo.js',
    source: './Border.js',
    open: false
}
````

## icon

````code
{
    title: '图标',
    desc: '',
    html: '<div id="icon-demo" ></div>',
    js: './Icon.demo.js',
    source: './Icon.js',
    open: false
}
````

## loading

````code
{
    title: '加载',
    desc: '`loading={true}`',
    html: '<div id="loading-demo" ></div>',
    js: './Loading.demo.js',
    source: './Loading.js',
    open: false
}
````

## group

````code
{
    title: '按钮组',
    desc: '',
    html: '<div id="group-demo" ></div>',
    js: './Group.demo.js',
    source: './Group.js',
    open: false
}
````


## size

````css
.face-btn--big {
    font-size:2em;
}
````

````code
{
    title: '尺寸',
    desc: ' `size="small"` `size="large"`',
    html: '<div id="size-demo" ></div>',
    js: './Size.demo.js',
    source: './Size.js',
    open: false
}
````

## themes

````css
/* 二次封装 */
.face-btn--themes-loose {
    letter-spacing: .3em;
    text-indent: .3em;
}
/* 三次封装 */
.face-btn--themes-import {
    font-weight: bold;
}
````

````code
{
    title: '多次封装',
    desc: '',
    html: '<div id="themes-demo" ></div>',
    js: './Themes.demo.js',
    source: './Themes.js',
    open: true
}
````

## prefixClassName

````html
<link rel="stylesheet" href="./prefixClassName.css" />
````

复制 [lib/index.less](https://github.com/onface/button.react/blob/master/lib/index.less) 和 [lib/less/](https://github.com/onface/button.react/blob/master/lib/less) 下的文件，修改 `border-radius` 部分或者其他代码。配置 `prefixClassName`。



````code
{
    title: '完全自定义样式',
    desc: '',
    html: '<div id="prefixClassName-demo" ></div>',
    js: './PrefixClassName.demo.js',
    source: './PrefixClassName.js',
    open: true
}
````

### addStyle

如果你想要新增一种风格，只需要修改 `less/style.less` 和 `less/settings.less` 文件。比如找到这两个文件的 `// dark` 部分，取消注释，就可以使用 `<Button type="dark">dark</Button>`
