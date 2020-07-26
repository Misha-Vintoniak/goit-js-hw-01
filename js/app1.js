console.log("app1");

let price = 1000; 
const name = "«Генератор защитного поля»"
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; 

console.log(firstMessage);

 price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; 

 console.log(secondMessage);price = 2000;// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'