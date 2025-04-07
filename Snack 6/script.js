/*
Snack 6
Crea un contatore automatico con setInterval

Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval,
incrementando un contatore e stampandolo.
*/

function creaContatoreAutomatico(name, intervallo) {
  let contatore = 0;

  return () => {
    setInterval(() => {
      console.log(`${name}: ${contatore++}`);
    }, intervallo);
  };
}

const contaOgniSecondo = creaContatoreAutomatico("uno", 1000);
const contaOgni5Secondi = creaContatoreAutomatico("cinque", 5000);

contaOgniSecondo();
contaOgni5Secondi();
