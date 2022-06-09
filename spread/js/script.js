// Merge di array con spread
// const array1 = [1, 5, 7];
// const array2 = [76, 12, 56, 23];
// const array3 = [...array1, ...array2, 100];
// console.log(array3);

let array1 = ['michele', 'franco', 'maria'];
// Qui gli array rimangono 'sincronizzati'
// let array2 = array1;
// Soluzione è usuale lo spread
let array2 = [...array1];

array1.push('alessandro');

console.log(array1);
console.log(array2);