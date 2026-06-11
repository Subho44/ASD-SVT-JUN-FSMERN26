const var1 = require("./var1");
const loginsystem = require("./loginsystem");

console.log(var1);
console.log(loginsystem.login("a@gmail.com", "1234"));
console.log(loginsystem.tp(5000, 3));
console.log(loginsystem.dp(50000, 10));

//display all
console.log("all products");
console.log(loginsystem.getallproducts());

//added one new product
console.log("after adding one product");
console.log(loginsystem.addpro(
    {
        name: "headphone",
        price:67000,
    }
));
//add multiple products
console.log("after adding multiple product");
console.log(loginsystem.addnewpro(
    [
        { name: "iphone", price: 89000 },
         { name: "mouse", price: 8900 }
        
    ]
));