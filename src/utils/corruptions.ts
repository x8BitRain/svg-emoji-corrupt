import {
  getRandomTransforms,
  getRandomTransformsByAddition,
  getRandomTransformsByMultiplication,
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
  {
    id: "transform_multiply",
    name: "Multiplication Transforms",
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
        getRandomTransformsByMultiplication(Number(value)),
      );
      return pathData;
    },
  },
  {
    id: "random_creations",
    name: "Random creations",
    active: false,
    description:
      "Generates completely new path data with random commands and coordinates",
    random: true,
    function: (
      _pathData: string,
      _search: RegExp,
      value: string,
      _node: SVGPathElement,
    ) => {
      const newValue = Number(value);
      const randomInRange = (min: number, max: number): number =>
        Math.random() * (max - min) + min;

      // Helper function to generate a random coordinate pair
      const randomCoord = (): string =>
        `${randomInRange(0, newValue).toFixed(2)} ${randomInRange(0, newValue).toFixed(2)}`;

      // Start with a 'Move To' command
      let pathData2 = `M ${randomCoord()}`;

      // Define the list of available commands
      const commands = ["L", "C", "Q", "A", "Z"];

      // Randomly choose a number of commands to include in the path
      const numCommands = Math.floor(randomInRange(3, 8));

      for (let i = 0; i < numCommands; i++) {
        const command = commands[Math.floor(Math.random() * commands.length)];

        switch (command) {
          case "L": // Line to
            pathData2 += ` L ${randomCoord()}`;
            break;

          case "C": // Cubic Bezier Curve
            pathData2 += ` C ${randomCoord()}, ${randomCoord()}, ${randomCoord()}`;
            break;

          case "Q": // Quadratic Bezier Curve
            pathData2 += ` Q ${randomCoord()}, ${randomCoord()}`;
            break;

          case "A": // Elliptical Arc
            const rx = randomInRange(10, 50).toFixed(2); // x-axis radius
            const ry = randomInRange(10, 50).toFixed(2); // y-axis radius
            const xAxisRotation = randomInRange(0, 360).toFixed(2); // Rotation angle
            const largeArcFlag = Math.round(Math.random()); // 0 or 1
            const sweepFlag = Math.round(Math.random()); // 0 or 1
            pathData2 += ` A ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${randomCoord()}`;
            break;

          case "Z": // Close path
            pathData2 += ` Z`;
            break;

          default:
            break;
        }
      }

      return pathData2;
    },
  },
  {
    id: "random_filters",
    name: "Random SVG Filters",
    active: false,
    description: "Applies random funky SVG filters (can be slow)",
    random: true,
    function: (
      pathData: string,
      _search: RegExp,
      value: string,
      node: SVGPathElement,
    ) => {
      function applyRandomFunkyFilter(
        svgPathNode: SVGPathElement,
        value: number,
      ): void {
        const svgNamespace = "http://www.w3.org/2000/svg";
        const svgElement = svgPathNode.ownerSVGElement;

        if (!svgElement) {
          console.error("The SVG path is not within an SVG element.");
          return;
        }

        // Create a unique filter ID
        const filterId = `funkyFilter-${Math.floor(Math.random() * 100000)}`;

        // Create a filter element
        const filter = document.createElementNS(svgNamespace, "filter");
        filter.setAttribute("id", filterId);

        // List of potential funky effects
        const effects = [
          () => {
            const feTurbulence = document.createElementNS(
              svgNamespace,
              "feTurbulence",
            );
            feTurbulence.setAttribute("type", "fractalNoise");
            feTurbulence.setAttribute(
              "baseFrequency",
              `${Math.random() * 0.1 + 0.05}`,
            );
            feTurbulence.setAttribute(
              "numOctaves",
              `${Math.floor(Math.random() * 4 + 1)}`,
            );
            filter.appendChild(feTurbulence);

            const feDisplacementMap = document.createElementNS(
              svgNamespace,
              "feDisplacementMap",
            );
            feDisplacementMap.setAttribute("in", "SourceGraphic");
            feDisplacementMap.setAttribute("in2", "turbulence");
            feDisplacementMap.setAttribute("scale", `${Math.random() * 50}`);
            feDisplacementMap.setAttribute("xChannelSelector", "R");
            feDisplacementMap.setAttribute("yChannelSelector", "G");
            filter.appendChild(feDisplacementMap);
          },
          () => {
            const feGaussianBlur = document.createElementNS(
              svgNamespace,
              "feGaussianBlur",
            );
            feGaussianBlur.setAttribute(
              "stdDeviation",
              `${Math.random() * value}`,
            );
            filter.appendChild(feGaussianBlur);
          },
          () => {
            const feColorMatrix = document.createElementNS(
              svgNamespace,
              "feColorMatrix",
            );
            feColorMatrix.setAttribute("type", "matrix");
            const matrixValues = Array.from({ length: value }, () =>
              (Math.random() * value - 1).toFixed(2),
            ).join(" ");
            feColorMatrix.setAttribute("values", matrixValues);
            filter.appendChild(feColorMatrix);
          },
          () => {
            const feOffset = document.createElementNS(svgNamespace, "feOffset");
            feOffset.setAttribute("dx", `${Math.random() * value - 5}`);
            feOffset.setAttribute("dy", `${Math.random() * value - 5}`);
            filter.appendChild(feOffset);
          },
          () => {
            const feComposite = document.createElementNS(
              svgNamespace,
              "feComposite",
            );
            feComposite.setAttribute("in2", "SourceAlpha");
            feComposite.setAttribute("operator", "in");
            feComposite.setAttribute("k2", `${Math.random()}`);
            feComposite.setAttribute("k3", `${Math.random()}`);
            filter.appendChild(feComposite);
          },
        ];

        // Randomly select a few effects to apply
        const numberOfEffects = Math.floor(Math.random() * effects.length) + 1;
        for (let i = 0; i < numberOfEffects; i++) {
          const effectIndex = Math.floor(Math.random() * effects.length);
          effects[effectIndex]();
        }

        // Append the filter to the SVG element
        svgElement.appendChild(filter);

        // Apply the filter to the SVG path
        svgPathNode.setAttribute("filter", `url(#${filterId})`);
      }

      applyRandomFunkyFilter(node, Number(value));
      return pathData;
    },
  },
];
