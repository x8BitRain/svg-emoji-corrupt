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
