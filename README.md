# jsx-render
模拟 React.createElement 渲染 jsx

* 利用 [@babel/plugin-transform-react-jsx](https://www.babeljs.cn/docs/babel-plugin-transform-react-jsx) 插件编译 `jsx`，利用其配置项 `pragma` 设定编译后生成 `html` 的函数

* run
```shell
yarn
yarn build
```

浏览器打开 index.html

* 查看 `babel` 编译之后的中间代码
```shell
yarn compile
```