/*
Snack 1
Crea una funzione che somma due numeri.

Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

// Funzione dichiarativa
function somma(num1, num2) {
  return num1 + num2;
}

console.log(somma(1, 2));

// Funzione anonima
const sommaAnonima = function (num1, num2) {
  return num1 + num2;
};

console.log(sommaAnonima(3, 4));

// Arrow Function
const sommaFreccia = (num1, num2) => num1 + num2;

console.log(sommaFreccia(5, 6));
