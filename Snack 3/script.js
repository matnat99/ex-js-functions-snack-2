/*
Snack 3
Crea una funzione eseguiOperazione

Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
La funzione deve eseguire l'operazione fornita sui due numeri.
*/

const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(2, 2, somma));
console.log(eseguiOperazione(2, 2, sottrazione));
console.log(eseguiOperazione(2, 2, moltiplicazione));
console.log(eseguiOperazione(2, 2, divisione));
