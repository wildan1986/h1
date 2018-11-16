const instruction = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const maxNumber = 30;

const gcdSearch = (a, b) => {
  let max = a;
  let min = b;
  if (a < b) {
    max = b;
    min = a;
  }
  if (max % min === 0) {
    return min;
  }
  return gcdSearch(min, max % min);
};

const gcd = () => {
  const numberFirst = Math.floor(Math.random() * (maxNumber + 1));
  const numberSecond = Math.floor(Math.random() * (maxNumber + 1));
  console.log(`Question: ${numberFirst} ${numberSecond}`);
  return String(gcdSearch(numberFirst, numberSecond));
};

export default {
  instruction,
  gcd,
};
