

![borked](https://raw.githubusercontent.com/x8BitRain/svg-emoji-corrupt/master/assets/stylesheets/out.png "xd")

# SVG/Emoji Corrupter
https://x8bitrain.github.io/svg-emoji-corrupt/

Feed it an emoji or an SVG file and the corrupter will target the numbers you specify inside the d="" paths of the SVG and replaces them with a random number between whatever you set in the "replace with" slider. Why not?

## TODO

- ~~Fix the bad reset function that results in previous SVG elements stacking onto the current one, or leave it in as a feature idk.~~
- Add an emoji merge feature.

## dependancies

Built with Lewagon's react boilerplate with the following packages and config:

- React, ReactDOM
- Webpack 4
- Babel with es2015 and react presets
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading
- react-inlinesvg
- emoji-mart
- panzoom
- save-svg-as-png
- uikit

## Building

```bash
git clone https://github.com/x8BitRain/svg-emoji-corrupt.git
cd svg-emoji-corrupt/
yarn install
```

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
