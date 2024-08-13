// É preciso verificar a idade do aluno

let idade = 5;

if( idade <= 7 ){
console.log('inapto a se matricular');
}else{
    console.log('apto a se matricular');
};

if (idade > 7 && idade <= 12){
    console.log('apto a categoria infantil');
}else if(idade >=13 && idade <=17){
    console.log('apto a categoria adolescente');
}else if (idade > 17){
    console.log('apto a categoria adulto');
};

