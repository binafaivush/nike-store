import {apiRequest} from "../js/api";

const xmlData = `
<user>
    <id>214444878</id>
    <username>bina</username>
    <email>Running shoes with excellent cushioning</email>
    <adress>399.99</adress>
   </user>
`;

//הוספת מוצר
apiRequest('POST', '/users', xmlData,
    function(response) {
        console.log('User created:', response);
    },
    function(status, statusText) {
        console.error('POST error:', status, statusText);
    }
);


//[id] קבלת מוצר לפי מזהה
apiRequest('GET', '/users/214444878', null,
    function(response) {
        console.log('User fetched:', response);
    },
    function(status, statusText) {
        console.error('GET error:', status, statusText);
    }
);


//[id] עדכון מוצר לפי מזהה
apiRequest('PUT', '/users/123', xmlData,
    function(response) {
        console.log('User updated:', response);
    },
    function(status, statusText) {
        console.error('PUT error:', status, statusText);
    }
);

//[id] מחיקת מוצר לפי מזהה

apiRequest('DELETE', '/users/123', null,
    function(response) {
        console.log('User deleted:', response);
    },
    function(status, statusText) {
        console.error('DELETE error:', status, statusText);
    }
);
