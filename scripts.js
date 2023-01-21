//Função para perguntar o nome do usuário;
let nomeUsuario = " "

function perguntaNome(){
    while(nomeUsuario === " "){
        nomeUsuario = prompt('Qual é o seu nome?');
    }
    acessarBatePapo();
    matemConexao();
    buscarMensagens();
}

//função para ter acesso ao bate papo;
function acessarBatePapo(){
    const nomeDoUsuario = {name: nomeUsuario};
    const usuario = axios.post( "https://mock-api.driven.com.br/api/v6/uol/participants", nomeDoUsuario);
}


//função que mantém a conexão do usuário;
function matemConexao(){
    const conexaoDoUsuario = {name: nomeUsuario};
    const conectado = axios.post ("https://mock-api.driven.com.br/api/v6/uol/status",conexaoDoUsuario);

    conectado.then(resultado);
    console.log(matemConexao);
    
}

//só pra conferir se deu certo;
function resultado(){}




perguntaNome();