/*
Snack 10 (Bonus)
Creare un throttler per limitare l’esecuzione di una funzione

Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
*/

function stampaMessaggio() {
  console.log("Messaggio");
}

function creaThrottler(funzione, limite) {
  let canExecute = true;

  return function (...argomenti) {
    if (canExecute) {
      funzione(...argomenti);
      canExecute = false;

      setTimeout(() => {
        canExecute = true;
      }, limite);
    } else {
      console.log("Non posso eseguire");
    }
  };
}

const throttled = creaThrottler(stampaMessaggio, 2000);

setInterval(() => {
  throttled();
}, 200);
