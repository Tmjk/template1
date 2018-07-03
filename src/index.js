/* global ResizeObserver */
const canvas = document.querySelector('canvas');

const observer = new ResizeObserver((entries) => {
  const {
    width,
    height,
  } = entries[0].contentRect;
  canvas.width = width;
  canvas.height = height;
});
// Observe one or multiple elements
observer.observe(canvas);
