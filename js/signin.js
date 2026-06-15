document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // מניעת שליחה רגילה של הטופס
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // יצירת מחרוזת XML עם פרטי ההתחברות
    const xmlData = `
      <login>
        <username>${username}</username>
        <password>${password}</password>
      </login>
    `;
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/api/login', true);
    xhr.setRequestHeader('Content-Type', 'application/xml');
  
    xhr.onload = function() {
      const messageDiv = document.getElementById('message');
      if (xhr.status === 200) {
        // הצלחה - ניתן להפנות לדף אחר או להציג הודעה
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'התחברת בהצלחה!';
        window.location.href = '/index.html';
      } else {
        // כשלון - הצגת הודעת שגיאה
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'שם משתמש או סיסמה שגויים.';
      }
    };
  
    xhr.onerror = function() {
      const messageDiv = document.getElementById('message');
      messageDiv.style.color = 'red';
      messageDiv.textContent = 'שגיאה בחיבור לשרת.';
    };
  
    xhr.send(xmlData);
  });
  