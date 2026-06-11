function login(email,password) {

    if (email === "a@gmail.com" && password === "1234") {
        return "login successfull";
    } else {
        return "invalid login";
    }
    
}

//total price calculate
function tp(price,qty) {
    return price * qty;
}

//discount calculate

function dp(price, dis) {
    return price - (price * dis) / 100;

}

//how can i added new product
let products = [
    { name: "laptop", price: 78000 },
    { name: "tab", price: 7800 },
    { name: "mobile", price: 58000 },
    
];

//all product show
function getallproducts() {
    return products;
}
//add new product
function addpro(newpro) {
    products.push(newpro);
    return products;
}
//add multiple product

function addnewpro(newproducts) {
    products.push(...newproducts);
    return products;
}

module.exports = { login, tp,dp ,getallproducts,addpro,addnewpro}