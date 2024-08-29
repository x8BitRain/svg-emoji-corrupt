export const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const getRandomTransforms = (amount: number = 1): string => {
  const transforms = [
    () =>
      `matrix(${Array.from({ length: 6 }, () => Math.random() * 10 - 5).join(", ")})`,
    () =>
      `matrix3d(${Array.from({ length: 16 }, () => Math.random() * 2 - 1).join(", ")})`,
    () => `perspective(${Math.random() * 1000}px)`,
    () => `rotate(${Math.random() * 360}deg)`,
    () =>
      `rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random() * 360}deg)`,
    () => `rotateX(${Math.random() * 360}deg)`,
    () => `rotateY(${Math.random() * 360}deg)`,
    () => `rotateZ(${Math.random() * 360}deg)`,
    () => `translate(${Math.random() * 100}px, ${Math.random() * 100}%)`,
    () =>
      `translate3d(${Math.random() * 100}px, ${Math.random() * 100}%, ${Math.random() * 100}em)`,
    () => `translateX(${Math.random() * 100}em)`,
    () => `translateY(${Math.random() * 100}in)`,
    () => `translateZ(${Math.random() * 100}px)`,
    () => `scale(${Math.random() * 3}, ${Math.random() * 3})`,
    () =>
      `scale3d(${Math.random() * 3}, ${Math.random() * 3}, ${Math.random() * 3})`,
    () => `scaleX(${Math.random() * 3})`,
    () => `scaleY(${Math.random() * 3})`,
    () => `scaleZ(${Math.random() * 3})`,
    () => `skew(${Math.random() * 90}deg, ${Math.random() * 90}deg)`,
    () => `skewX(${Math.random() * 90}deg)`,
    () => `skewY(${(Math.random() * Math.PI) / 2}rad)`,
  ];

  const randomTransform =
    transforms[Math.floor(Math.random() * transforms.length)];
  return Array(amount)
    .fill(null)
    .map(() => `transform: ${randomTransform()};`)
    .join(" ");
};

export const getRandomTransformsByAddition = (
  amount: number = 1,
  addition: number = 0,
): string => {
  const transforms = [
    () => `matrix(1, 0, 0, 1, 0, ${addition})`,
    () =>
      `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, ${1 + addition})`,
    () => `perspective(${1000 + addition}px)`,
    () => `rotate(${addition}deg)`,
    () => `rotate3d(1, 1, 1, ${addition}deg)`,
    () => `rotateX(${addition}deg)`,
    () => `rotateY(${addition}deg)`,
    () => `rotateZ(${addition}deg)`,
    () => `translate(${addition}px, ${addition}%)`,
    () => `translate3d(${addition}px, ${addition}%, ${addition}em)`,
    () => `translateX(${addition}em)`,
    () => `translateY(${addition}in)`,
    () => `translateZ(${addition}px)`,
    () => `scale(${1 + addition}, ${1 + addition})`,
    () => `scale3d(${1 + addition}, ${1 + addition}, ${1 + addition})`,
    () => `scaleX(${1 + addition})`,
    () => `scaleY(${1 + addition})`,
    () => `scaleZ(${1 + addition})`,
    () => `skew(${addition}deg, ${addition}deg)`,
    () => `skewX(${addition}deg)`,
    () => `skewY(${addition}rad)`,
  ];

  const getRandomTransform = () =>
    transforms[Math.floor(Math.random() * transforms.length)]();

  return Array(amount)
    .fill(null)
    .map(() => `transform: ${getRandomTransform()};`)
    .join(" ");
};

export const getRandomTransformsByMultiplication = (
  amount: number = 1,
): string => {
  const transforms = [
    () =>
      `matrix(${Array.from({ length: 6 }, () => Math.random() * 10 - 5).join(", ")})`,
    () =>
      `matrix3d(${Array.from({ length: 16 }, () => Math.random() * 2 - 1).join(", ")})`,
    () => `perspective(${Math.random() * 1000 * amount}px)`,
    () => `rotate(${Math.random() * 360}deg)`,
    () =>
      `rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random() * 360 * amount}deg)`,
    () => `rotateX(${Math.random() * 360}deg)`,
    () => `rotateY(${Math.random() * 360}deg)`,
    () => `rotateZ(${Math.random() * 360}deg)`,
    () => `translate(${Math.random() * 100}px, ${Math.random() * 100}%)`,
    () =>
      `translate3d(${Math.random() * 100}px, ${Math.random() * 100}%, ${Math.random() * 100 * amount}em)`,
    () => `translateX(${Math.random() * 100 * amount}em)`,
    () => `translateY(${Math.random() * 100 * amount}in)`,
    () => `translateZ(${Math.random() * 100 * amount}px)`,
    () => `scale(${Math.random() * 3}, ${Math.random() * 3})`,
    () =>
      `scale3d(${Math.random() * 3}, ${Math.random() * 3}, ${Math.random() * 3 * amount})`,
    () => `scaleX(${Math.random() * 3 * amount})`,
    () => `scaleY(${Math.random() * 3 * amount})`,
    () => `scaleZ(${Math.random() * 3 * amount})`,
    () =>
      `skew(${Math.random() * 90 * amount}deg, ${Math.random() * 90 * amount}deg)`,
    () => `skewX(${Math.random() * 90 * amount}deg)`,
    () => `skewY(${((Math.random() * Math.PI) / 2) * amount}rad)`,
  ];

  const randomTransform =
    transforms[Math.floor(Math.random() * transforms.length)];
  return Array(amount)
    .fill(null)
    .map(() => `transform: ${randomTransform()};`)
    .join(" ");
};

export const getRandomSVGFilters = (
  value: number,
  svgNamespace: string,
  filter: SVGFilterElement,
) => {
  return [
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
      feGaussianBlur.setAttribute("stdDeviation", `${Math.random() * value}`);
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
      const feComposite = document.createElementNS(svgNamespace, "feComposite");
      feComposite.setAttribute("in2", "SourceAlpha");
      feComposite.setAttribute("operator", "in");
      feComposite.setAttribute("k2", `${Math.random()}`);
      feComposite.setAttribute("k3", `${Math.random()}`);
      filter.appendChild(feComposite);
    },
  ];
};

export const getRandomSVGFiltersWithEffects = (
  value: number,
  svgNamespace: string,
  filter: SVGFilterElement,
) => {
  return [
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

      // Animate baseFrequency
      const animateBaseFrequency = document.createElementNS(
        svgNamespace,
        "animate",
      );
      animateBaseFrequency.setAttribute("attributeName", "baseFrequency");
      animateBaseFrequency.setAttribute("from", "0.05");
      animateBaseFrequency.setAttribute("to", "0.15");
      animateBaseFrequency.setAttribute("dur", `${Math.random() * 5 + 2}s`);
      animateBaseFrequency.setAttribute("repeatCount", "indefinite");
      feTurbulence.appendChild(animateBaseFrequency);
    },
    () => {
      const feGaussianBlur = document.createElementNS(
        svgNamespace,
        "feGaussianBlur",
      );
      feGaussianBlur.setAttribute("stdDeviation", `${Math.random() * value}`);
      filter.appendChild(feGaussianBlur);

      // Animate stdDeviation
      const animateBlur = document.createElementNS(svgNamespace, "animate");
      animateBlur.setAttribute("attributeName", "stdDeviation");
      animateBlur.setAttribute("from", "0");
      animateBlur.setAttribute("to", `${value}`);
      animateBlur.setAttribute("dur", `${Math.random() * 3 + 1}s`);
      animateBlur.setAttribute("repeatCount", "indefinite");
      feGaussianBlur.appendChild(animateBlur);
    },
    () => {
      const feColorMatrix = document.createElementNS(
        svgNamespace,
        "feColorMatrix",
      );
      feColorMatrix.setAttribute("type", "matrix");
      const matrixValues = Array.from({ length: 20 }, () =>
        (Math.random() * 2 - 1).toFixed(2),
      ).join(" ");
      feColorMatrix.setAttribute("values", matrixValues);
      filter.appendChild(feColorMatrix);

      // Animate color matrix
      const animateColorMatrix = document.createElementNS(
        svgNamespace,
        "animate",
      );
      animateColorMatrix.setAttribute("attributeName", "values");
      animateColorMatrix.setAttribute("from", matrixValues);
      animateColorMatrix.setAttribute(
        "to",
        Array.from({ length: 20 }, () =>
          (Math.random() * 2 - 1).toFixed(2),
        ).join(" "),
      );
      animateColorMatrix.setAttribute("dur", `${Math.random() * 10 + 5}s`);
      animateColorMatrix.setAttribute("repeatCount", "indefinite");
      feColorMatrix.appendChild(animateColorMatrix);
    },
    () => {
      const feOffset = document.createElementNS(svgNamespace, "feOffset");
      feOffset.setAttribute("dx", `${Math.random() * value - 5}`);
      feOffset.setAttribute("dy", `${Math.random() * value - 5}`);
      filter.appendChild(feOffset);

      // Animate offset
      const animateOffsetX = document.createElementNS(svgNamespace, "animate");
      animateOffsetX.setAttribute("attributeName", "dx");
      animateOffsetX.setAttribute("from", "-5");
      animateOffsetX.setAttribute("to", "5");
      animateOffsetX.setAttribute("dur", `${Math.random() * 2 + 1}s`);
      animateOffsetX.setAttribute("repeatCount", "indefinite");
      feOffset.appendChild(animateOffsetX);

      const animateOffsetY = document.createElementNS(svgNamespace, "animate");
      animateOffsetY.setAttribute("attributeName", "dy");
      animateOffsetY.setAttribute("from", "-5");
      animateOffsetY.setAttribute("to", "5");
      animateOffsetY.setAttribute("dur", `${Math.random() * 2 + 1}s`);
      animateOffsetY.setAttribute("repeatCount", "indefinite");
      feOffset.appendChild(animateOffsetY);
    },
    () => {
      const feComposite = document.createElementNS(svgNamespace, "feComposite");
      feComposite.setAttribute("in2", "SourceAlpha");
      feComposite.setAttribute("operator", "arithmetic");
      feComposite.setAttribute("k1", "0");
      feComposite.setAttribute("k2", `${Math.random()}`);
      feComposite.setAttribute("k3", `${Math.random()}`);
      feComposite.setAttribute("k4", "0");
      filter.appendChild(feComposite);

      // Animate k2 and k3
      const animateK2 = document.createElementNS(svgNamespace, "animate");
      animateK2.setAttribute("attributeName", "k2");
      animateK2.setAttribute("from", "0");
      animateK2.setAttribute("to", "1");
      animateK2.setAttribute("dur", `${Math.random() * 3 + 2}s`);
      animateK2.setAttribute("repeatCount", "indefinite");
      feComposite.appendChild(animateK2);

      const animateK3 = document.createElementNS(svgNamespace, "animate");
      animateK3.setAttribute("attributeName", "k3");
      animateK3.setAttribute("from", "1");
      animateK3.setAttribute("to", "0");
      animateK3.setAttribute("dur", `${Math.random() * 3 + 2}s`);
      animateK3.setAttribute("repeatCount", "indefinite");
      feComposite.appendChild(animateK3);
    },
  ];
};
