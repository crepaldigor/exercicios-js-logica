function saudacao(nome) {
    let mensagem = `Olá, ${nome}! Bem-vindo(a) à aula!`;
    console.log(mensagem);
}

let nomeUsuario = prompt("Qual é o seu nome?");
saudacao(nomeUsuario);
