"use strict";

// operações em array
var arr = [1, 2, 3, 4, 5, 6]; // map / recebe item e posição

var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr); // reduce - consome o vetor em uma unica variavel ()

var soma = arr.reduce(function (total, next) {
  // retorna soma de total com o seguinte
  return total + next;
});
console.log(soma); // filter

var filtra = arr.filter(function (item) {
  // filtra os numerto impares
  return item % 2 === 0;
});
console.log(filtra); // find - Acho objeto

var find = arr.find(function (item) {
  return item === 5;
});
console.log(find);
