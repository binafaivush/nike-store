import {apiRequest} from "../js/api";

const xmlData = `
<product>
    <id>123</id>
    <name>Nike Air Max</name>
    <description>Running shoes with excellent cushioning</description>
    <price>399.99</price>
    <category>Running</category>
    <brand>Nike</brand>
    <stock>45</stock>
    <imageUrl>https://example.com/images/nike-air-max.jpg</imageUrl>
</product>
`;

//הוספת מוצר
apiRequest('POST', '/products', xmlData,
    function(response) {
        console.log('Product created:', response);
    },
    function(status, statusText) {
        console.error('POST error:', status, statusText);
    }
);


//[id] קבלת מוצר לפי מזהה
apiRequest('GET', '/products/123', null,
    function(response) {
        console.log('Product fetched:', response);
    },
    function(status, statusText) {
        console.error('GET error:', status, statusText);
    }
);


//[id] עדכון מוצר לפי מזהה
apiRequest('PUT', '/products/123', xmlData,
    function(response) {
        console.log('Product updated:', response);
    },
    function(status, statusText) {
        console.error('PUT error:', status, statusText);
    }
);

//[id] מחיקת מוצר לפי מזהה

apiRequest('DELETE', '/products/123', null,
    function(response) {
        console.log('Product deleted:', response);
    },
    function(status, statusText) {
        console.error('DELETE error:', status, statusText);
    }
);
