![icon](https://github.com/user-attachments/assets/54750fcd-a31a-4aa5-9226-5416f17b2e2f)

# SVG/Emoji Corrupter

https://x8bitrain.github.io/svg-emoji-corrupt/

Feed it an emoji or an SVG file and the corrupter will target the numbers you specify inside the d="" paths of the SVG
and replaces them with a random number between whatever you set in the "replace with" slider. Why not?

## TODO

- Add an emoji merge feature.

## Adding Custom Corrupter functions

Two methods are exposed to the window object for adding and getting corruption functions.

Getting all corruption functions:

```javascript
window.getCorrupters()
```

Adding a custom function:

```typescript
window.addCorrupter({
  id: "multiply",
  name: "Multiply",
  active: true,
  description: "Multiply the target values by the selected value",
  function: (
    pathData,
    search,
    value,
    node
  ) => {
    return pathData.replace(search, (match) =>
      String(Math.trunc(Number(match) * Number(value))),
    );
  },
});
```

### Explanation:

This function is called for each found `<path>` node in the SVG.

```typescript
function: (
  pathData: string, // The raw `d` attribute value, i.e. "d="M361.794,351.072c2...."
  search: RegExp, // The regular expression containing the selected target values, i.e. `/1|2|3|4|5/gi`
  value: string, // The current value of the slider, i.e. 5
  node: SVGPathElement // The entire SVG path node, you could add any attribute or class this way.
) => {}
```

All of the corruption functions are stored in the `corruptions.ts` object in `src/utils/corruptions.ts`. Feel free to
open a PR to add your own!

## Made with

- [vue3 - twemoji - picker](https://github.com/limin04551/vue3-twemoji-picker)
- [panzoom](https://github.com/timmywil/panzoom)
- [round / SVG](https://github.com/round/SVG/blob/master/README.md)

## FAQ

- Why don't some links work?
    - [Explanation](https://github.com/x8BitRain/svg-emoji-corrupt/issues/16#issuecomment-2291480087)

## Development

```bash
git clone https://github.com/x8BitRain/svg-emoji-corrupt.git
cd svg-emoji-corrupt/
bun install
```

```bash
bun dev
```

## Development

```bash
bun build
```


