import { cons } from 'hexlet-pairs';
import game from '..';
import generateNum from '../utils';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const maxNumber = 100;
const minNumber = 0;

const even = () => {
  const question = generateNum(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => game(instruction, even);
