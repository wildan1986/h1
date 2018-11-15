import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const instruction = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
};

const game = () => {
  greeting();
  instruction();
  const userName = getName();
  const iter = (step) => {
    if (step === 4) {
      return true;
    }
    const num = Math.floor(Math.random() * 101);
    const correctAns = (num % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const userAns = readlineSync.question('Your answer: ');
    if (userAns === correctAns) {
      console.log('Correct!');
      return iter(step + 1, num);
    }
    console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
    return false;
  };
  const res = iter(1);
  if (res) {
    console.log(`Congratulations, ${userName}!\n`);
  } else {
    console.log(`Let's try again, ${userName}!\n`);
  }
};

export default {
  greeting,
  game,
};
