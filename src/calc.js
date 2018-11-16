const instruction = () => {
  console.log('What is the result of the expression?');
};

const operationTypes = ['+', '-', '*'];

const operations = [(a, b) => (a + b),
  (a, b) => (a - b),
  (a, b) => (a * b)];

const maxNumber = 100;

const calc = () => {
  const numberFirst = Math.floor(Math.random() * (maxNumber + 1));
  const numberSecond = Math.floor(Math.random() * (maxNumber + 1));
  const operationPosition = Math.floor(Math.random() * operationTypes.length);
  console.log(`Question: ${numberFirst} ${operationTypes[operationPosition]} ${numberSecond}`);
  return String(operations[operationPosition](numberFirst, numberSecond));
};

export default {
  instruction,
  calc,
};
