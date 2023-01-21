//Função para perguntar o nome do Usuario
let nomeDeUsuario = " "

function perguntaNome(){
    while(nomeDeUsuario === " "){
        nomeDeUsuario = prompt('Qual é o seu nome?');
    }
    console.log(perguntaNome);
}

perguntaNome();