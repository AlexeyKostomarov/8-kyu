// Write a function that returns the total surface area and volume of a box as an array:
// [area, volume]

function getSize(w, h, d) {
  let arr = [];
  const surfaceArea = 2 * (w * h) + 2 * (w * d) + 2 * (h * d);
  const volume = w * h * d;
  arr.push(surfaceArea);
  arr.push(volume);

  return arr;
}
