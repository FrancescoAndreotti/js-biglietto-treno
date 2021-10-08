const prezzoAlKm = 0.21;
let prezzoBiglietto = "";

const etaPasseggero = prompt("Quanti anni hai?");
parseInt(etaPasseggero);
if (isNaN(etaPasseggero)) {
    alert("Il valore inserito non è corretto!");
}

const kmDaPercorrere = prompt("Quanti KM devi percorrere?");
parseInt(kmDaPercorrere);
if (isNaN(kmDaPercorrere)) {
    alert("Il valore inserito non è corretto!");
}

prezzoBiglietto = prezzoAlKm * kmDaPercorrere;

if (etaPasseggero <= 18) {
    prezzoBiglietto = (prezzoBiglietto / 100) * 80;
} else if (etaPasseggero >= 65) {
    prezzoBiglietto = (prezzoBiglietto / 100) * 60;
}

parseInt(prezzoBiglietto);

alert("Il costo del biglietto è di €" + prezzoBiglietto.toFixed(2));

