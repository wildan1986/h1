const instruction = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
};

const isEven = number => (number % 2 === 0);

const maxNumber = 100;

const even = () => {
  const question = Math.floor(Math.random() * (maxNumber + 1));
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  console.log(`Question: ${question}`);
  return correctAnswer;
};

export default {
  instruction,
  even,
};
