var lista = [
{nome: "Homem-aranha", ano: 2000, categoria:"aventura"},
{nome: "Ferro", ano: 2000, categoria:"acao"},
{nome: "Hulk", ano: 2000, categoria:"ficcao"},
];


document.getElementById("button").onclick = function(){
   document.getElementById("nomes").innerHTML = lista[0].ano;
}