# cra-template-plus

This is the custom TypeScript template for Create React App.

To use this template, add --template, and pass the file path to the directory of your template source using the `file:` prefix.

For example:

```shell
npx create-react-app my-app --template file:../templates/cra-template-plus
```

Integrate more common deps than the official TypeScript template below.

- antd、@ant-design/icons
- classnames
- immer
- redux、redux-devtools-extension、redux-logger、redux-saga、react-redux
- react-helmet、react-router-dom
- @csstools/normalize.css
- babel-plugin-import
- less、less-loader

> react-hot-loader is deprecated，use Fast Refresh instead，react-script set FAST_REFRESH to true since v4.x.
