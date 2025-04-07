/*
Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi

Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
*/

const operazioni = [
  () => console.log("Operazione1"),
  () => console.log("Operazione2"),
  () => console.log("Operazione3"),
];

function sequenzaOperazioni(array, intervallo) {
  array.forEach((operazione, index) => {
    setTimeout(() => {
      operazione();
    }, intervallo * index);
  });
}

sequenzaOperazioni(operazioni, 1000);
