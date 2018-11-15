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

const numberOfSteps = 3;

const isEven = number => (number % 2 === 0);

const game = () => {
  greeting();
  instruction();
  const userName = getName();
  const iter = (step) => {
    if (step === (numberOfSteps + 1)) {
      return true;
    }
    const question = Math.floor(Math.random() * 101);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(step + 1, question);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
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
  getName,
  game,
};
