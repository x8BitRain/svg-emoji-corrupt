import {
  getRandomTransforms,
  getRandomTransformsByAddition,
} from "./corruption-helpers.ts";

export default [
  {
    id: "replace",
    name: "Replace",
    active: true,
    description: "Replace the target values with a single value",
    function: (
      pathData: string,
      search: RegExp,
      value: string,
      _node: SVGPathElement,
    ) => {
      return pathData.replace(search, value);
    },
  },
  {
    id: "multiply",
    name: "Multiply",
    active: true,
    description: "Multiply the target values by the selected value",
    function: (
      pathData: string,
      search: RegExp,
      value: string,
      _node: SVGPathElement,
    ) => {
      return pathData.replace(search, (match) =>
        String(Math.trunc(Number(match) * Number(value))),
      );
    },
  },
  {
    id: "add",
    name: "Add",
    active: true,
    description: "Add the selected value to the target values",
    function: (
      pathData: string,
      search: RegExp,
      value: string,
      _node: SVGPathElement,
    ) => {
      return pathData.replace(search, (match) =>
        String(Math.trunc(Number(match) + Number(value))),
      );
    },
  },
  {
    id: "subtract",
    name: "Subtract",
    active: true,
    description: "Subtract the selected value from the target values",
    function: (
      pathData: string,
      search: RegExp,
      value: string,
      _node: SVGPathElement,
    ) => {
      console.log(search);
      return pathData.replace(search, (match) =>
        String(Math.trunc(Number(match) - Number(value))),
      );
    },
  },
  {
    id: "divide",
    name: "Divide",
    active: true,
    description: "Divide the target values by the selected value",
    function: (
      pathData: string,
      search: RegExp,
      value: string,
      _node: SVGPathElement,
    ) => {
      return pathData.replace(search, (match) =>
        String(Math.trunc(Number(match) / Number(value))),
      );
    },
  },
  {
    id: "transform",
    name: "Random transforms",
    active: true,
    description: "Applies an amount of random transforms to the target values",
    random: true,
    function: (
      pathData: string,
      _search: RegExp,
      value: string,
      node: SVGPathElement,
    ) => {
      node.setAttribute("style", getRandomTransforms(Number(value)));
      return pathData;
    },
  },
  {
    id: "transform_addition",
    name: "Addition Transforms",
    active: true,
    description:
      "Applies an amount of random transforms to the target values, the slider increases the default transform value",
    random: true,
    function: (
      pathData: string,
      _search: RegExp,
      value: string,
      node: SVGPathElement,
    ) => {
      node.setAttribute(
        "style",
        getRandomTransformsByAddition(10, Number(value) / 50),
      );
      return pathData;
    },
  },
];
