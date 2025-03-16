//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo(){
    var amigo = document.getElementById("amigo").value;
    listaAmigos.push(amigo);
    document.getElementById("amigo").value = "Digite um nome";
}
function sortearAmigo(){
    var amigoSorteado = " "
    amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    alert(["amigo sorteado: " + amigoSorteado]);
}