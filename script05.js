let armas = ["canhãozão bolado", "cineraria", "rasengan", "bombinha de festa junina", "dracaerys", "choque do trovão"];

let ataques = [];
ataques.unshift("frank puxa-penas");

ataques.push(armas[1]);
ataques.push(armas[4]);
ataques.push(armas[0]);
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]);
ataques.push(armas[5]);

for(let i = 0; i < ataques.length; i++){
    if(i == 0){
        console.log(`Nome do robô: ${ataques[0]}`);
    }else{
        console.log(`Ataque ${i} ${ataques[i]}`);
    };    
};