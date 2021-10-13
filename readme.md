# How to integrate storybook with npm workspaces, react, and webpack

[Storybook]() is the most popular UI component development tool for React, Vue, and Angular. It helps you develop and design UI components outside your app in an isolated environment. 

This is the very basic setup to integrate our [previous react monorepo](https://dev.to/ynwd/how-to-create-react-monorepo-with-npm-workspace-webpack-and-create-react-app-2dhn) with storybook. 

## Setup Storybook
```
cd web/components/
```

Install storybook
```
npx sb init --builder webpack5 -f
```
> *You can find detail overview on this page: [Storybook for Webpack 5](https://storybook.js.org/blog/storybook-for-webpack-5/)*

Run storybook
```
npm run storybook
```

You can also run storybook from the app root folder
```
npm run storybook -w @fstr/components
```

## Update webpack config
This update is used to handle css files of storybooks.
```js
const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        index: { import: "./src/index.js" }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: "components.bundle.min.js",
        library: 'fstrComponents',
        libraryTarget: 'umd',
        clean: true
    },
}
```
> *You can find detail instruction to setup webpack css on [this page](https://webpack.js.org/guides/asset-management/#loading-css)*

Still in `web/components` folder, build the storybook component.
```
npm run build
```

You can also build from root folder.
```
npm run build -w @fstr/components
```

## Use storybook component
Update index
```js
import React from "react"
import { Button } from "./stories/Button.jsx"

const Header = ({ text = "" }) => {
    return (
        <h1>Shared header library {text}</h1>
    )
}

export {
    Button,
    Header
}
```

And you can import the storybook component from all modules
```js
// web/modules/root/src/App.js
import './App.css'
import { Header, Button } from "@fstr/components"

function App() {
  return (
    <div className="App">
      <Header text="from root" />
      <Button
        label="Button"
        onClick={() => { }}
      />
    </div>
  )
}

export default App
```

Run the root module to see the changes
```
npm start -w @fstr/root
```