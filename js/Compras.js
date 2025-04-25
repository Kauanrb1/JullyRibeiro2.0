function comprarProduto() {
    alert("Produto comprado!");
}

function verMais() {
    alert("Exibindo mais informações do produto.");
}

let quantidadeCarrinho = 0;

function adicionarAoCarrinho() {
alert("Produto adicionado ao carrinho!");
  quantidadeCarrinho++;
  document.getElementById("contador-carrinho").textContent = quantidadeCarrinho;
}

