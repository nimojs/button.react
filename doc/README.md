# 示例

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
.face-btn--themes-night {
    background-color: #444;
    background-image: -webkit-linear-gradient(top,#444,#333);
    border-color: transparent;
    color:white;
}
.face-btn--themes-night.face-btn--clicked:before {
    border-color: #444;
}
/* 三次封装 */
.face-btn--themes-link {
    text-decoration: underline;
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


````code
{
    title: '完全自定义样式',
    desc: '将 [lib/index.css](https://github.com/onface/button.react/blob/master/lib/index.css) 修改为 [doc/prefixClassName.css](https://github.com/onface/button.react/blob/master/doc/prefixClassName.css) 并引用。配置 `prefixClassName`',
    html: '<div id="prefixClassName-demo" ></div>',
    js: './PrefixClassName.demo.js',
    source: './PrefixClassName.js',
    open: true
}
````
