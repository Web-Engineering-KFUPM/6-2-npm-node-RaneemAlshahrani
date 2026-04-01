   
     export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
    export function subtract(numbers) {
      return numbers.reduce((sub,num) => sub - num, numbers[0]);
    }

    export function multiply(numbers) {
      return numbers.reduce((product, num) => product * num, 1);
    }

    export function divide(numbers) {
      return numbers.reduce((quotient, num) => quotient / num, numbers[0]);
    }