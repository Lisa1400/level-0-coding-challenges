function areaOfTriangle(side1, side2, side3) {
  let semiPerimeter = (side1 + side2 + side3) / 2;

  let areaValue = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
  );
  return areaValue;
}
console.log(areaOfTriangle(6, 7, 8))
