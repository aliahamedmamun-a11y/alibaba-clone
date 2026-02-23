async function loadProducts() {
  const res = await fetch('http://localhost:5000/api/products');
  const products = await res.json();
  const container = document.getElementById('productList');

  container.innerHTML = '';

  products.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="deleteProduct('${product._id}')">Delete</button>
      </div>
    `;
  });
}

async function deleteProduct(id) {
  await fetch(`http://localhost:5000/api/products/${id}`, {
    method: 'DELETE'
  });
  loadProducts();
}

loadProducts();