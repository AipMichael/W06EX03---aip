const addition = (firstNumber, secondNumber) => {
  firstNumber + secondNumber;
};
const substraction = (firstNumber, secondNumber) => {
  firstNumber - secondNumber;
};
const multiplication = (firstNumber, secondNumber) => {
  firstNumber * secondNumber;
};
const division = (firstNumber, secondNumber) => {
  firstNumber / secondNumber;
};

const calculator = (firstNumber, secondNumber) => {
  return `${firstNumber}+${secondNumber} = ${addition}, ${firstNumber}-${secondNumber} = ${substraction}, ${firstNumber}*${secondNumber} = ${multiplication}, ${firstNumber}/${secondNumber} = ${division}`;
};

calculator(5, 3);
