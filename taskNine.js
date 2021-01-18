function checkVowels(string) {
  let regEx = /[aeiou]/g;
  return (vowels = string.toLowerCase().match(regEx));
}
console.log(checkVowels("lisAmabe"));
