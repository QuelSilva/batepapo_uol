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

//busca pela mensagem do usuário;
function buscarMensagens() {
    const buscaDeMensagem = axios.get(
      "https://mock-api.driven.com.br/api/v6/uol/messages"
    );
    buscaDeMensagem.then(renderizarMensagens);
  }

//função que vai fazer tudo funcionar;
function renderizarMensagens(mensagens) {
    const mensagem = mensagens.data;
    let buscar = document.querySelector(".chat");
    for (let i = 0; i < mensagem.length; i++) {
      if (mensagem[i].type == "message") {
        buscar.innerHTML += `<div class="mensagemParaTodos caixaMensagem"> <time>(${mensagem[i].time})</time> ${mensagem[i].from} para<strong>todos:</strong> ${mensagem[i].to} ${mensagem[i].text}</div>`;
      } else if (mensagem[i].type == "status") {
        buscar.innerHTML += `<div class="entradaEsaida caixaMensagem"><time>(${mensagem[i].time})</time> ${mensagem[i].from} ${mensagem[i].text}</div>`;
      } else if (mensagem[i].type == "private_message") {
        buscar.innerHTML += `<div class="mensagemReservada caixaMensagem"><time>(${mensagem[i].time})</time> ${mensagem[i].from}Reservado para ${mensagem[i].to} ${mensagem[i].text} </div>`;
      }
    }
    setInterval(buscarMensagens, 3000);
    buscar.lastElementChild.scrollIntoView();
  }

//enviar mensagens;
function enviarMensagens() {
    let enviarParaTodos = document.querySelector(".digitar").value;
    let enviar = {
      from: nomeUsuario,
      to: "" ,
      text: enviarParaTodos,
      type: "message"
    };
    console.log(enviar);
    let promessa = axios.post(
      "https://mock-api.driven.com.br/api/v6/uol/messages",
      enviar
    );
  
    promessa.then(renderizarMensagens);
  }



perguntaNome();