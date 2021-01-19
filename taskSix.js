function maximumNumber(numbers) {
  let maxNum = 0;

  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}
