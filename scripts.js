//Função para perguntar o nome do usuário;
let nomeUsuario = " "

function perguntaNome(){
    while(nomeUsuario === " "){
        nomeUsuario = prompt('Qual é o seu nome?');
    }
    acessarBatePapo();
    buscarMensagens();
}

//função para ter acesso ao bate papo;
function acessarBatePapo(){
    const nomeDoUsuario = {name: nomeUsuario};
    const usuario = axios.post( "https://mock-api.driven.com.br/api/v6/uol/participants", nomeDoUsuario);
    usuario.then((res)=>{
      console.log(res)
      setInterval(matemConexao, 5000);
      setInterval(buscarMensagens, 3000);
    });
}


//função que mantém a conexão do usuário;
function matemConexao(){
    const conexaoDoUsuario = {name: nomeUsuario};
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/status",conexaoDoUsuario);

    
    promise.then((res)=>{
      console.log("mantendo conexão com sucesso")
    })
}



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
        buscar.innerHTML += `<div data-test="message" class="mensagemParaTodos caixaMensagem"> <time>(${mensagem[i].time})</time> <strong>${mensagem[i].from}</strong> para <strong>${mensagem[i].to}</strong> ${mensagem[i].text}</div>`;
      } else if (mensagem[i].type == "status") {
        buscar.innerHTML += `<div data-test="message" class="entradaEsaida caixaMensagem"><time>(${mensagem[i].time})</time> <strong>${mensagem[i].from}</strong> ${mensagem[i].text}</div>`;
      } else if (mensagem[i].type == "private_message") {
        buscar.innerHTML += `<div data-test="message" class="mensagemReservada caixaMensagem"><time>(${mensagem[i].time})</time> <strong>${mensagem[i].from}</strong> Reservado para ${mensagem[i].to} ${mensagem[i].text} </div>`;
      }
    }

    console.log('renderizando')
    buscar.lastElementChild.scrollIntoView();
  }

//enviar mensagens;
function enviarMensagens() {
    let enviarParaTodos = document.querySelector(".digitar").value;
    let enviar = {
      from: nomeUsuario,
      to: " todos" ,
      text: enviarParaTodos,
      type: "message"
    };
    console.log(enviar);
    let promessa = axios.post(
      "https://mock-api.driven.com.br/api/v6/uol/messages",
      enviar
    );
  
    promessa.then(buscarMensagens);
}



perguntaNome();