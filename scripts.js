//Função para perguntar o nome do usuário;
let nomeUsuario = " "

function perguntaNome(){
    while(nomeUsuario === " "){
        nomeUsuario = prompt('Qual é o seu nome?');
    }
    acessarBatePapo();
}

//função para ter acesso ao bate papo;
function acessarBatePapo(){
    const nomeDoUsuario = {name: nomeUsuario};
    const usuario = axios.post( "https://mock-api.driven.com.br/api/v6/uol/participants", nomeDoUsuario);
}

perguntaNome();