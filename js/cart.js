let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("cart-total");

function displayCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty 🌸</p>";
    totalElement.textContent = "₹0";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const card = document.createElement("div");
    card.className = "cart-card";

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="item-details">
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
      </div>
    `;

    cartContainer.appendChild(card);
  });

  totalElement.textContent = `₹${total}`;
}

document.querySelector(".checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  window.location.href = "checkout.html";
});

function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  displayCart();
}

displayCart();
