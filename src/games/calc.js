import game from '..';
import { cons } from 'hexlet-pairs';

const instruction = 'What is the result of the expression?';

const operationTypes = ['+', '-', '*'];

const operations = [(a, b) => (a + b),
  (a, b) => (a - b),
  (a, b) => (a * b)];

const maxNumber = 30;

const calc = () => {
  const numberFirst = Math.floor(Math.random() * (maxNumber + 1));
  const numberSecond = Math.floor(Math.random() * (maxNumber + 1));
  const operationPosition = Math.floor(Math.random() * operationTypes.length);
  const questionString = `Question: ${numberFirst} ${operationTypes[operationPosition]} ${numberSecond}`;
  const correctAnswer = String(operations[operationPosition](numberFirst, numberSecond));
  return cons(questionString, correctAnswer);
};

export default () => game(instruction, calc);
