// Get cart from localStorage
let cartCheckout = JSON.parse(localStorage.getItem("cart")) || [];
const orderItemsDiv = document.getElementById("order-items");
const orderTotalEl = document.getElementById("order-total");

// Display order summary
