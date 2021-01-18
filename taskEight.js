function timeConversion(number) {
  var hours = Math.floor(number / 60);
  var mins = number % 60;

  if (hours == 1) {
    return `${hours} hour, ${mins} minutes`;
  } else if (mins == 1) {
    return `${hours} hours, ${mins} minute`;
  } else {
    return `${hours} hours, ${mins} minutes`;
  }
}
console.log(timeConversion(62));
