const express = require("express");
const app = express();
app.use(express.json());

//dummy data old value
let products = [
    { id: 1, name: "laptop", price: 78900 },
    { id: 2, name: "tab", price: 7890 },
    { id: 3, name: "mobile", price: 78500 },
    
];

//create server
app.get('/', (req, res) => {
    res.send("api is working");
});

app.get('/about', (req, res) => {
    res.send("this is about");
});
//fetch all data
app.get('/products', (req, res) => {
    res.json(products);
});
//fetch only singel data
app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(x => x.id === id);

    res.json(product);
});

//fetch only name
app.get('/search', (req, res) => {

    const { name } = req.query;

    const product = products.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));

    res.json(product);
});

//insert data
app.post("/products", (req, res) => {
    const { name, price } = req.body;

    //new value
    const newproduct = {
        id: Date.now(),
        name,
        price
    };

    products = [...products, newproduct];
    res.json(newproduct);

});
const port = 5600;

app.listen(port, () => {
    console.log("server is running port 5600");
});

