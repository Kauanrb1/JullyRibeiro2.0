function addToCart(event) {
  const product = event.target.parentNode;
  const productName = product.querySelector('.produtoNome').innerText;
  const productImage = product.querySelector('.card-img-top').src; 
  const productPrice = product.querySelector('.p:nth-of-type(2)').innerText;

  // Cria um objeto para refencar o produto
  const productData ={
    name: productName,
    image: productImage,
    price: productPrice
  };

  //Obtém o carrinho atual do localStorage ou cria um novo carrinho vazio
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Adiciona o produto ao carrinho
  cart.push(productData);

  // Salva o carrinho atualizado no localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  };

  const buyButton = document.querySelectorAll('.btnComprar');

  buyButton.forEach(button => {
    button.addEventListener('click', addToCart);
  });