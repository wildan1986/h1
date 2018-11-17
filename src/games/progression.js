import game from '..';
import { cons } from 'hexlet-pairs';

const instruction = 'Find the greatest common divisor of given numbers.';

const maxFistNumber = 5;
const maxStep = 5;
const amountOfElements = 10;

const progression = () => {
  const firstElement = Math.floor(Math.random() * (maxFistNumber + 1));
  const step = Math.floor(Math.random() * (maxStep + 1));
  const missElementPosition = Math.floor(Math.random() * amountOfElements);
  let questionString = '';
  let correctAnswer;
  const elements = [];
  for (let i = 0; i < amountOfElements; i += 1) {
    if (i === missElementPosition) {
      correctAnswer = String(firstElement + i * step);
      elements.push(' ..');
    } else {
      elements.push(` ${firstElement + i * step}`);
    }
    questionString += elements[i];
  }
  return cons(questionString, correctAnswer);
};

export default () => game(instruction, progression);
