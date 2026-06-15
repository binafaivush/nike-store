const BASE_URL = 'http://localhost:5000/api'; // שנה בפרודקשן

// פונקציה כללית לקריאות AJAX ב-XML
export function apiRequest(method, endpoint, data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, BASE_URL + endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/xml'); // שימי לב לשינוי כאן

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = xhr.responseText || null; // אין צורך ב-JSON.parse
            if (onSuccess) onSuccess(response);
        } else {
            if (onError) onError(xhr.status, xhr.statusText);
        }
    };

    xhr.onerror = function() {
        if (onError) onError(xhr.status, xhr.statusText);
    };

    if (data) {
        xhr.send(data); // שולחים את ה-XML ישירות, לא JSON.stringify
    } else {
        xhr.send();
    }
}
