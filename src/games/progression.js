import { cons } from 'hexlet-pairs';
import game from '../index';
import generateNum from '../utils';

const instruction = 'Find the greatest common divisor of given numbers.';

const maxFistNumber = 5;
const minFistNumber = 0;
const maxStep = 5;
const minStep = 0;
const amountOfElements = 10;

const progression = () => {
  const firstElement = generateNum(minFistNumber, maxFistNumber);
  const step = generateNum(minStep, maxStep);
  const missElementPosition = generateNum(0, amountOfElements - 1);
  const elements = [];
  for (let i = 0; i < amountOfElements; i += 1) {
    elements.push(` ${firstElement + i * step}`);
  }
  const correctAnswer = String(firstElement + missElementPosition * step);
  elements[missElementPosition] = '..';
  const question = elements.join(' ');
  return cons(question, correctAnswer);
};

export default () => game(instruction, progression);
