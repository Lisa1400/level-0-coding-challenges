function timeConversion(number) {
  let hours = Math.floor(number / 60);
  let mins = number % 60;

  if (hours == 1 && mins == 1) {
    return `${hours} hour, ${mins} minute`;
  } else if (hours == 1 && mins > 1) {
    return `${hours} hour, ${mins} minutes`;
  } else if (hours > 1 && mins == 1) {
    return `${hours} hours, ${mins} minute`;
  } else {
    return `${hours} hours, ${mins} minutes`;
  }
}
console.log(timeConversion(127));
