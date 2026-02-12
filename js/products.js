// Array of unique flower products
const products = [
  { id: 1, name: "Red Roses", category: "Roses", price: 500, img: "images/rose.jpg" },
  { id: 2, name: "White Roses", category: "Roses", price: 450, img: "images/whiterose.jpg" },
  { id: 3, name: "Pink Roses", category: "Roses", price: 480, img: "images/pinkrose.jpg" },
  { id: 4, name: "Sunflower Bouquet", category: "Sunflowers", price: 350, img: "images/sunflower.jpg" },
  { id: 5, name: "Yellow Sunflowers", category: "Sunflowers", price: 300, img: "images/yellow-sunflower.jpg" },
  { id: 6, name: "Lily Love", category: "Lilies", price: 400, img: "images/lily.jpg" },
  { id: 7, name: "White Lily", category: "Lilies", price: 420, img: "images/whitelily.jpg" },
  { id: 8, name: "Mixed Flowers", category: "Mixed", price: 600, img: "images/mixed.jpg" },
  { id: 9, name: "Orchid Magic", category: "Orchids", price: 700, img: "images/orchid.jpg" },
  { id: 10, name: "Lavender Bouquet", category: "Lavender", price: 550, img: "images/lavender.jpg" },
  { id: 11, name: "Tulip Surprise", category: "Tulips", price: 480, img: "images/tulip.jpg" },
  { id: 12, name: "Red Tulips", category: "Tulips", price: 500, img: "images/red-tulip.jpg" },
  { id: 13, name: "Pink Orchids", category: "Orchids", price: 720, img: "images/pink-orchid.jpg" },
  { id: 14, name: "Romantic Mix", category: "Mixed", price: 650, img: "images/romantic-mix.jpg" },
  { id: 15, name: "Exotic Lilies", category: "Lilies", price: 450, img: "images/exotic-lily.jpg" },
  { id: 16, name: "Orange Roses", category: "Roses", price: 520, img: "images/orange-rose.jpg" },
  { id: 17, name: "Blue Lavender", category: "Lavender", price: 600, img: "images/blue-lavender.jpg" },
  { id: 18, name: "Sunshine Bouquet", category: "Sunflowers", price: 380, img: "images/sunshine-bouquet.jpg" },
  { id: 19, name: "Orchid Elegance", category: "Orchids", price: 750, img: "images/orchid-elegance.jpg" },
  { id: 20, name: "Tulip Charm", category: "Tulips", price: 510, img: "images/tulip-charm.jpg" }
];

// Get HTML elements
const productContainer = document.getElementById("flower-list");
const categoryCards = document.querySelectorAll(".category-card");

// Function to display products dynamically
function displayProducts(productsToShow) {
  productContainer.innerHTML = ""; // clear previous products
  productsToShow.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productCard);
  });
}

// Show all products initially
displayProducts(products);

// Add click event to category cards
categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    categoryCards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");

    const category = card.dataset.category || card.innerText;
    if (category === "All") displayProducts(products);
    else displayProducts(products.filter(p => p.category === category));
  });
});

// Add to Cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity++;
  else cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart! 🌸`);
}
