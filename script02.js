//Defino a intensidade do som que por sua vez definirá a quantidade de palmas da plateia;
let intensidade = 13;
let palminhas = "";
let contagem = 0;

//Crio um laço de repetição que estabelecerá a proporção entre a intensidade e as palmas
for(let i = 1; i <= intensidade; i++){
    palminhas = palminhas + '👏';
    contagem = contagem + 1; //estabeleço uma contagem para determinar a quantidade de palmas;
    
    //uso desta contagem para determinar quantos grupos de 5 palmas há na intensidade;
    if(contagem % 5 == 0){
        palminhas = palminhas + '✨'; //concateno os '✨' à variável das palminhas;
    };
};

//imprimo no console o que foi solicitado;
console.log(palminhas);