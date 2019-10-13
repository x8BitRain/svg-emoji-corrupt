# SVG/Emoji Corrupter

A weird idea;
You feed the page an .SVG file and it will modify the values in the d="" paths of the SVG based on your paramters and shows you the result on screen. 


## TODO

Add an emoji picker.

## react-setup

Simple react boilerplate with the following config:

- React, ReactDOM
- Webpack 4
- Babel with es2015 and react presets
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

## Building & Scripts

To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build assets to the `dist` folder:

```bash
webpack -p
```
