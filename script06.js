let metaLivros = 3;

let livrosLidos = ["guerra dos tronos", "furia dos reis", "tormenta de espadas", "festim dos corvos", "danca dos dragões", "fogo e sangue"];

for(let i = 0; i < livrosLidos.length; i++){
    console.log(livrosLidos[i]);
}

if(livrosLidos.length < metaLivros){
    console.log("tá mal hein pai... faltam " + (metaLivros - livrosLidos.length) + " livros ainda")
}else{
    console.log("não fez mais que a sua obrigação");
};