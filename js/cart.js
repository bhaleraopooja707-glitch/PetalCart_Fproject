// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display cart items
function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.textContent = "₹0";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const card = document.createElement("div");
    card.classList.add("cart-card");
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="item-details">
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <div class="quantity-controls">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    `;
    cartContainer.appendChild(card);
  });

  totalElement.textContent = `₹${total}`;
}
// Checkout button functionality
const checkoutBtn = document.querySelector(".checkout");

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty! 🌸");
    return;
  }

  // Example action: show total and redirect (you can customize)
  alert(`Your total is ₹${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}.\nProceeding to checkout... 🌸`);
  
  // Optional: redirect to a real checkout page
  // window.location.href = "checkout.html";
});


// Change quantity of an item
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity < 1) cart = cart.filter(i => i.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Clear cart
function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  displayCart();
}

// Initial display
displayCart();
