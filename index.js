const chalk = require("chalk");

const numbers = process.argv.slice(2);
const firstNumber = numbers[0];
const secondNumber = numbers[1];

const addition = (firstNumber, secondNumber) => firstNumber + secondNumber;
const substraction = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiplication = (firstNumber, secondNumber) =>
  firstNumber * secondNumber;
const division = (firstNumber, secondNumber) => firstNumber / secondNumber;

const calculator = (firstNumber, secondNumber) => {
  const added = addition(firstNumber, secondNumber);
  const substracted = substraction(firstNumber, secondNumber);
  const multiplied = multiplication(firstNumber, secondNumber);
  const divided = division(firstNumber, secondNumber);

  console.log(
    chalk.blue(
      `Resultados: 
    ${firstNumber}+${secondNumber} = ${chalk.magenta(added)}, 
    ${firstNumber}-${secondNumber} = ${chalk.yellow(substracted)}, 
    ${firstNumber}*${secondNumber} = ${chalk.red(multiplied)}, 
    ${firstNumber}/${secondNumber} = ${chalk.green(divided)}`
    )
  );
};

calculator(firstNumber, secondNumber);
