import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const numberOfSteps = 3;

const game = (instruction, gameType) => {
  greeting();
  console.log(instruction);
  const userName = getName();
  const iter = (step) => {
    if (step > numberOfSteps) {
      console.log(`Congratulations, ${userName}!\n`);
      return;
    }
    const pair = gameType();
    const question = car(pair);
    const correctAnswer = cdr(pair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(step + 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!\n`);
  };
  iter(1);
};
export default game;
