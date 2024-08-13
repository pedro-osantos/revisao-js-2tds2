let carro1 = "jeep";
let carro2 = "focus";
let carro3 = "fusca";

const carro = [];
carro[0] = "cobalt";
carro[1] = "corsa";

console.log(carro);
console.table(carro);
console.log(carro.length);


let carroCopia1 = [...carro];
console.table(carro);
console.log(carroCopia1);
console.log(carro == carroCopia1);

let carroCopia2 = carro.slice();
let carroCopia3 = [].concat(carro);
let carroCopia4 = Array.from(carro);

const frutas = ["uva", "maçã", "banana", "morango"];
console.log(frutas);

frutas.pop();
console.table(frutas);

frutas.push("tamarindo");
console.table(frutas)