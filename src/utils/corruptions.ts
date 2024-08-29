import {
  getRandomSVGFilters,
  getRandomSVGFiltersWithEffects,
  getRandomTransforms,
  getRandomTransformsByAddition,
  getRandomTransformsByMultiplication,
} from "./corruption-helpers.ts";
import anime from "animejs/lib/anime.es.js";

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
    id: "replace-animated",
    name: "Replace but animated",
    active: true,
    description:
      "Replace the target values with a single value but with animations this time",
    function: (
      pathData: string,
      search: RegExp,
      value: string,
      _node: SVGPathElement,
    ) => {
      const shapes = [{ d: pathData }, { d: pathData.replace(search, value) }];
      anime({
        targets: _node,
        d: [{ value: shapes[0].d }, { value: shapes[1].d }],
        duration: 3000,
        direction: "alternate",
        autoplay: true,
        easing: "easeInOutSine",
        elasticity: 100,
        loop: true,
      });
      return pathData;
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
        const effects = getRandomSVGFilters(value, svgNamespace, filter);

        const numberOfEffects = value;
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
  {
    id: "random_animated_filters",
    name: "Random Animated SVG Filters",
    active: false,
    random: true,
    description: "Random SVG filters that are animated (can be VERY slow)",
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

        // List of potential funky effects with animations
        const effects = getRandomSVGFiltersWithEffects(
          value,
          svgNamespace,
          filter,
        );

        const numberOfEffects = value;
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

  {
    id: "random_animated_filters_stacked",
    name: "Random Animated SVG Filters Stacked",
    active: false,
    random: true,
    description:
      "Same as above but multiple filters are stacked on top of each other",
    function: (
      pathData: string,
      _search: RegExp,
      value: string,
      node: SVGPathElement,
    ) => {
      function applyMultipleRandomFunkyFilters(
        svgPathNode: SVGPathElement,
        value: number,
        numberOfFilters: number = 3,
      ): void {
        const svgNamespace = "http://www.w3.org/2000/svg";
        const svgElement = svgPathNode.ownerSVGElement;

        if (!svgElement) {
          console.error("The SVG path is not within an SVG element.");
          return;
        }

        // Function to create a single filter
        const createFilter = () => {
          const filterId = `funkyFilter-${Math.floor(Math.random() * 100000)}`;
          const filter = document.createElementNS(svgNamespace, "filter");
          filter.setAttribute("id", filterId);

          // List of potential funky effects with animations
          const effects = getRandomSVGFiltersWithEffects(
            value,
            svgNamespace,
            filter,
          );

          // Randomly select a few effects to apply
          const numberOfEffects =
            Math.floor(Math.random() * effects.length) + 1;
          for (let i = 0; i < numberOfEffects; i++) {
            const effectIndex = Math.floor(Math.random() * effects.length);
            effects[effectIndex]();
          }

          return { filter, filterId };
        };

        // Create multiple filters
        const filters = Array.from({ length: numberOfFilters }, () =>
          createFilter(),
        );

        // Append all filters to the SVG element
        filters.forEach(({ filter }) => svgElement.appendChild(filter));

        // Apply all filters to the SVG path
        const filterUrls = filters
          .map(({ filterId }) => `url(#${filterId})`)
          .join(" ");
        svgPathNode.setAttribute("filter", filterUrls);
      }

      applyMultipleRandomFunkyFilters(node, Number(value));
      return pathData;
    },
  },
];
