import { cons } from 'hexlet-pairs';
import game from '../index';
import generateNum from '../utils';

const instruction = 'What is the result of the expression?';

const operationTypes = [
  '+',
  '-',
  '*',
];

const operations = [
  (a, b) => (a + b),
  (a, b) => (a - b),
  (a, b) => (a * b),
];

const maxNumber = 30;
const minNumber = 0;

const calc = () => {
  const numberFirst = generateNum(minNumber, maxNumber);
  const numberSecond = generateNum(minNumber, maxNumber);
  const operationPosition = Math.floor(Math.random() * operationTypes.length);
  const question = `${numberFirst} ${operationTypes[operationPosition]} ${numberSecond}`;
  const correctAnswer = String(operations[operationPosition](numberFirst, numberSecond));
  return cons(question, correctAnswer);
};

export default () => game(instruction, calc);
