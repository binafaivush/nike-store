// function loadHeader() {
//     fetch('../components/Header.html')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok: ' + response.statusText);
//             }
//             return response.text();
//         })
//         .then(html => {
//             document.getElementById('header').innerHTML = html;
//         })
//         .catch(error => {
//             console.error('Failed to load header:', error);
//         });
// }
function loadHeader() {
    fetch('/components/Header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            const headerElement = document.getElementById('header');
            headerElement.innerHTML = html;

            // הפעלת הסקריפטים שבתוך ה־HTML הטעון
            const scripts = headerElement.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                newScript.type = 'module'; // הוסף שורה זו

                if (oldScript.src) {
                    newScript.src = oldScript.src;
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                document.body.appendChild(newScript);
            });
        })
        .catch(error => {
            console.error('Failed to load header:', error)
    // :contentReference[oaicite:13]{index=13}
   });
}

// לקרוא לפונקציה כשהדף נטען
window.onload = function() {
    loadHeader();
};

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active'); 
    });
}
  });
  