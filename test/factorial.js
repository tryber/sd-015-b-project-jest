function rFact(num) {
// https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript/19139071
  if (num === 0) return 1;
  return num * rFact(num - 1);
}

module.exports = rFact;
