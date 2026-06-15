document.addEventListener('DOMContentLoaded', () => {
    fetch('/data/products.xml')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const products = xml.getElementsByTagName('product');
        const productList = document.getElementById('product-list');
  
        Array.from(products).forEach(product => {
          const id = product.getElementsByTagName('id')[0].textContent;
          const name = product.getElementsByTagName('name')[0].textContent;
          const description = product.getElementsByTagName('description')[0].textContent;
          const price = product.getElementsByTagName('price')[0].textContent;
          const image = product.getElementsByTagName('image')[0].textContent;
  
          const card = document.createElement('div');
          card.className = 'product-card';
  
          card.innerHTML = `
            <a href="/views/oneProduct.html?id=${id}">
            <img src="${image}" alt="${name}" />
            </a>
            <h2>${name}</h2>
            <p>${description}</p>
            <span class="price">₪${price}</span>
            <button class="add-to-cart">
            <h2>+</h2>
            </button>
          `;
//                 <img src="/assets/icons/cart-black.png" alt="Add to Cart" />

          productList.appendChild(card);
        });
      })
      .catch(error => console.error('Error loading products:', error));
  });
  