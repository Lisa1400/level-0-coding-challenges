function maximumNumber(num1, num2, num3) {
  return num1 > num2 && num1 > num3
    ? num1
    : num2 > num1 && num2 > num3
    ? num2
    : num3;
}
console.log(maximumNumber( 23, 1, 78))