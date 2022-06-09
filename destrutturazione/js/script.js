const numbers = [4, 6, 12, 13, 567];

// Estrapolazione elementi array pre-es6
// let firstNumber = numbers[0];
// let secondNumber = numbers[1];
// let thirdNumber = numbers[2];

// Destrutturazione esempio
let [firstNumber, secondNumber, thirdNumber] = numbers;
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

// Se voglio prendere solo il primo e il terzo elemento
// let [firstElement, , thirdElement] = numbers;
// console.log(firstElement);
// console.log(thirdElement);