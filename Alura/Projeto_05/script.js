let ListaDeJogadores = [];

function exibirJogador(ListaDeJogadores) {
  let tabela = "";
  for (let i = 0; i < ListaDeJogadores.length; i++) {
    tabela += "<tr>";
    tabela += `<td>${ListaDeJogadores[i].nick}</td>`;
    tabela += `<td>${ListaDeJogadores[i].kills}</td>`;
    tabela += `<td>${ListaDeJogadores[i].assistencias}</td>`;
    tabela += `<td>${ListaDeJogadores[i].mortes}</td>`;
    tabela += `<td>${ListaDeJogadores[i].pontos}</td>`;
    tabela += `<td><button onClick="adicionarKill(${i})">Kill</button></td>`;
    tabela += `<td><button onClick="adicionarAssistencias(${i})">Assistencia</button></td>`;
    tabela += `<td><button onClick="adicionarMortes(${i})">Morte</button></td>`;
    tabela += "</tr>";
  }
  let tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = tabela;
}

function adicionarKill(i) {
  var jogador = ListaDeJogadores[i];
  jogador.kills++;
  jogador.pontos++;
  exibirJogador(ListaDeJogadores);
}

function adicionarAssistencias(i) {
  var jogador = ListaDeJogadores[i];
  jogador.assistencias++;
  jogador.pontos = jogador.pontos + 0.5;
  exibirJogador(ListaDeJogadores);
}

function adicionarMortes(i) {
  var jogador = ListaDeJogadores[i];
  jogador.mortes++;
  jogador.pontos = jogador.pontos - 1;
  exibirJogador(ListaDeJogadores);
}


function adicionar() {
  var nomeJogador = document.getElementById("nomeJogador").value;
  ListaDeJogadores.push({
    nick: nomeJogador,
    kills: 0,
    assistencias: 0,
    mortes: 0,
    pontos: 0
  });
  exibirJogador(ListaDeJogadores);
  document.getElementById("nomeJogador").value = "";

}


