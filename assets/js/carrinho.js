document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    let cartTotal = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function() {
        const product = button.parentElement;
        const productId = product.getAttribute("data-id");
        const productName = product.getAttribute("data-name");
        const productPrice = parseFloat(product.getAttribute("data-price"));
  
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${productName} - R$${productPrice.toFixed(2)}`;
        cartItemsElement.appendChild(cartItem);
  
        cartTotal += productPrice;
        cartTotalElement.textContent = cartTotal.toFixed(2);
      });
    });
  });
  