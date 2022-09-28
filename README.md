# JS-Ad-Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An Javascript Package that renders a sticky element on a webpage.
## Installation
Clone the repository and run npm install.

```bash
npm i
```
## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`. (Port is configurable in webpack.dev.js file)

### Production build

```bash
npm run build
```


> Note: You can view the generated files in `dist` folder. 

----
To launch production ready Application, Follow these steps: (Two Methods)

> (Method 1) Using http-server npm package 
1. Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.
2. Run this command `cd dist && http-server`

> (Method 2) If using Visual Studio Code 
1. Download the Live Server extension
2. Right-click on the index.html file present in the dist folder
3. Select the `Open with Live Server` Option
---- 

## Dev Dependencies
### webpack 

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets

## Author
- [Suraj Acharya](https://portfolio-suraj-acharya.vercel.app/)

## License
This project is open source and available under the [MIT License](LICENSE).