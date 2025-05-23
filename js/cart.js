function addToCart(event) {
  const productCard = event.target.closest('.product-card');

  // Verifique se o .product-card foi encontrado
  if (!productCard) {
    console.error('Não foi possível encontrar o cartão do produto.');
    return;
  }

  const productNameElem = productCard.querySelector('.produtoNome');
  const productImageElem = productCard.querySelector('.card-img-top');
  const productPriceElem = productCard.querySelector('.produtoPreco');

  // Verifique se todos os elementos foram encontrados
  if (!productNameElem || !productImageElem || !productPriceElem) {
    console.error('Erro ao encontrar nome, imagem ou preço do produto.');
    return;
  }

  const productData = {
    name: productNameElem.innerText.trim(),
    image: productImageElem.src,
    price: productPriceElem.innerText.trim()
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productData);
  localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelectorAll('.btnComprar').forEach(button => {
  button.addEventListener('click', addToCart);
});
