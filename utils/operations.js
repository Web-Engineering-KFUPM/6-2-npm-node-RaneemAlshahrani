   
     export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
    export function subtract(numbers) {
      return numbers.slice(1).reduce((sub, num) => sub - num, numbers[0]);
    }

    export function multiply(numbers) {
      return numbers.reduce((product, num) => product * num, 1);
    }

    export function divide(numbers) {
      return numbers.slice(1).reduce((quotient, num) => {
    if (num === 0) return NaN;
    return quotient / num;
  }, numbers[0]);
}