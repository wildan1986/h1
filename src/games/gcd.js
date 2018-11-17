import { cons } from 'hexlet-pairs';
import game from '../index';
import generateNum from '../utils';

const instruction = 'Find the greatest common divisor of given numbers.';

const maxNumber = 30;
const minNumber = 0;

const gcdSearch = (a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  if (max % min === 0) {
    return min;
  }
  return gcdSearch(min, max % min);
};

const gcd = () => {
  const numberFirst = generateNum(minNumber, maxNumber);
  const numberSecond = generateNum(minNumber, maxNumber);
  const question = `${numberFirst} ${numberSecond}`;
  const correctAnswer = String(gcdSearch(numberFirst, numberSecond));
  return cons(question, correctAnswer);
};

export default () => game(instruction, gcd);
