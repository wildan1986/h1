import game from '..';
import { cons } from 'hexlet-pairs';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const maxNumber = 100;

const even = () => {
  const question = Math.floor(Math.random() * (maxNumber + 1));
  const questionString = `Question: ${question}`;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(questionString, correctAnswer);
};

export default () => game(instruction, even);
