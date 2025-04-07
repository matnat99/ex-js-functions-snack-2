/*
Snack 7
Crea una funzione che ferma un timer dopo un certo tempo

Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. 
Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

function eseguiEferma(messaggio, avvio, stop) {
  const intervallo = setInterval(() => {
    console.log(messaggio);
  }, avvio);

  setTimeout(() => {
    clearInterval(intervallo);
  }, stop);
}

eseguiEferma("Hello", 1000, 10000);
