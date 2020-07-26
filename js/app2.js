console.log("app2");

const invoice = 100; 
const stock = 100;

// Write code under this line
if (invoice <= stock){
message = 'Заказ оформлен, с вами свяжется менеджер';
} else if (invoice >= stock){
message = 'На складе недостаточно товаров!';
};

console.log(message);