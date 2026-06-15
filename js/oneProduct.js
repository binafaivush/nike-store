
// document.addEventListener('DOMContentLoaded', () => {
//     const params = new URLSearchParams(window.location.search);
//     const productId = params.get('id');
//   console.log(productId);
  
//     if (!productId) {
//       document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
//       return;
//     }
  
//     fetch('/data/products.xml')
//       .then(response => response.text())
//       .then(data => {
//         const parser = new DOMParser();
//         const xml = parser.parseFromString(data, 'application/xml');
//         const products = xml.getElementsByTagName('product');
  
//         let found = false;
  
//         Array.from(products).forEach(product => {
//           const id = product.getElementsByTagName('id')[0].textContent;
  
//           if (id === productId) {
//             const name = product.getElementsByTagName('name')[0].textContent;
//             const description = product.getElementsByTagName('description')[0].textContent;
//             const price = product.getElementsByTagName('price')[0].textContent;
//             const image = product.getElementsByTagName('image')[0].textContent;
  
//             const detailsSection = document.getElementById('product-details');
//             detailsSection.innerHTML = `
//               <h1>${name}</h1>
//               <img src="${image}" alt="${name}" />
//               <p>${description}</p>
//               <span class="price">₪${price}</span>
//               <button class="add-to-cart">
//                 <img src="/assets/icons/cart-black.png" alt="Add to Cart" />
//               </button>
//             `;
  
//             found = true;
//           }
//         });
  
//         if (!found) {
//           document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
//         }
//       })
//       .catch(error => {
//         console.error('Error loading product:', error);
//         document.getElementById('product-details').innerHTML = '<p>Error loading product details.</p>';
//       });
//   });

//  מכאן הקוד המשולב לאחר עריכת מוצר ומחיקת מוצר

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
  
    if (!productId) {
      document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
      return;
    }
  
    fetch('/data/products.xml')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const products = xml.getElementsByTagName('product');
  
        let found = false;
  
        Array.from(products).forEach(product => {
          const id = product.getElementsByTagName('id')[0].textContent;
  
          if (id === productId) {
            const name = product.getElementsByTagName('name')[0].textContent;
            const description = product.getElementsByTagName('description')[0].textContent;
            const price = product.getElementsByTagName('price')[0].textContent;
            const image = product.getElementsByTagName('image')[0].textContent;
  
            const detailsSection = document.getElementById('product-details');
            detailsSection.innerHTML = `
              <h1>${name}</h1>
              <img src="${image}" alt="${name}" />
              <p>${description}</p>
              <span class="price">₪${price}</span>
              <div class="product-actions">
                <button id="addToCartBtn">
                  <img src="/assets/icons/cart-black.png" alt="Add to Cart" />
                   add to cart
                </button>
                <button id="editProductBtn">Edit product </button>
                <button id="deleteProductBtn"> Delete product</button>
              </div>
            `;
  
            // הוספת מאזינים לאירועים
            document.getElementById('addToCartBtn')?.addEventListener('click', () => {
              // הוסף את המוצר לסל (למשל, באמצעות localStorage)
              alert('המוצר נוסף לסל!');
            });
  
            document.getElementById('editProductBtn')?.addEventListener('click', () => {
              // נווט לדף עריכת המוצר
              window.location.href = `/views/editProduct.html?id=${productId}`;
            });
  
            document.getElementById('deleteProductBtn')?.addEventListener('click', () => {
              // שלח בקשת מחיקה לשרת
              if (confirm('האם אתה בטוח שברצונך למחוק את המוצר?')) {
                fetch(`/api/products/${productId}`, {
                  method: 'DELETE',
                })
                  .then(response => {
                    if (response.ok) {
                      alert('המוצר נמחק בהצלחה.');
                      window.location.href = '/views/products.html';
                    } else {
                      alert('מחיקת המוצר נכשלה.');
                    }
                  })
                  .catch(error => {
                    console.error('שגיאה במחיקת המוצר:', error);
                  });
              }
            });
  
            found = true;
          }
        });
  
        if (!found) {
          document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
        }
      })
      .catch(error => {
        console.error('Error loading product:', error);
        document.getElementById('product-details').innerHTML = '<p>Error loading product details.</p>';
      });
  });
  