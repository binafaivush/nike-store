import {apiRequest} from "../js/api";

const xmlData = `
<order>
    <userid>214444878</userid>
    <date>Nike Air Max</date>
    <products>
    <product> 
        <productid>123</productid>
        <name>sport</name>
        <price>399</price>

    </product>
    <product> 
        <productid>123</productid>
        <name>sport</name>
        <price>399</price>

    </product>
    
    </products>
</order>
`;

//הוספת מוצר
apiRequest('POST', '/orders', xmlData,
    function(response) {
        console.log('Order created:', response);
    },
    function(status, statusText) {
        console.error('POST error:', status, statusText);
    }
);


//[id] קבלת מוצר לפי מזהה
apiRequest('GET', '/orders/123', null,
    function(response) {
        console.log('Order fetched:', response);
    },
    function(status, statusText) {
        console.error('GET error:', status, statusText);
    }
);


//[id] עדכון מוצר לפי מזהה
apiRequest('PUT', '/orders/123', xmlData,
    function(response) {
        console.log('Order updated:', response);
    },
    function(status, statusText) {
        console.error('PUT error:', status, statusText);
    }
);

//[id] מחיקת מוצר לפי מזהה

apiRequest('DELETE', '/orders/123', null,
    function(response) {
        console.log('Order deleted:', response);
    },
    function(status, statusText) {
        console.error('DELETE error:', status, statusText);
    }
);
